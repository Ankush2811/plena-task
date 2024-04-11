/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import { RateLimiterMemory } from 'rate-limiter-flexible';

@Injectable()
export class RateLimiterMiddleware implements NestMiddleware {
  private rateLimiter: RateLimiterMemory;

  constructor(private readonly configService: ConfigService) {
    this.rateLimiter = new RateLimiterMemory({
      points: this.configService.get<number>('RATE_LIMIT_POINTS'),
      duration: this.configService.get<number>('RATE_LIMIT_DURATION'),
    });
  }

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      await this.rateLimiter.consume(req.ip);
      next();
    } catch (error) {
      res.status(429).send('Too Many Requests');
    }
  }
}
