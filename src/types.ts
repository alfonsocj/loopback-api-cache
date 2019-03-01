import {Request} from '@loopback/rest';

export interface CacheCheckFn {
  (request: Request): Promise<Cache | undefined>;
}

export interface CacheSetFn {
  (request: Request, result: any): Promise<void>;
}

export interface CacheStrategy {
  check(key: string): Promise<Cache | undefined>;
  set(path: string, result: any): Promise<void>;
}

export interface Cache {
  id: string;
  data: any;
  ttl: number;
}

