/* eslint-disable prettier/prettier */
export class CreateKeyDto {
    rateLimit: number;
    expiration: number;
  }
  
  export class UpdateKeyDto {
    rateLimit?: number;
    expiration?: number;
  }
  