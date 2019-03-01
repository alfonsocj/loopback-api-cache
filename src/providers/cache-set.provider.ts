import { CacheStrategy, CacheSetFn } from '../types';
import { inject, Provider, Getter } from '@loopback/core';
import { CacheBindings } from '../keys';
import {Request} from '@loopback/rest';

export class CacheSetProvider implements Provider<CacheSetFn> {
  constructor(
    @inject.getter(CacheBindings.CACHE_STRATEGY)
    readonly getCacheStrategy: Getter<CacheStrategy>
  ) {}

  value(): CacheSetFn {
    return (request, result) => this.action(request, result);
  }

  async action(request: Request, result: any): Promise<void> {
    const cacheStrategy = await this.getCacheStrategy();

    if (!cacheStrategy) {
      return undefined;
    }

    return await cacheStrategy.set(request.path, result);
  }
}
