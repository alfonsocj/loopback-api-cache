/* eslint-disable @typescript-eslint/no-explicit-any */
import {Request} from '@loopback/rest';

export interface CacheCheckFn {
  (request: Request): Promise<Cache | undefined>;
}

export interface CacheSetFn {
  (request: Request, result: any): Promise<void>;
}

export interface CacheStrategy {
  check(req: Request): Promise<Cache | undefined>;
  set(req: Request, result: any): Promise<void>;
}

export interface Cache {
  id: string;
  data: any;
  ttl: number;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
