import { Cache, CacheStrategy, CacheCheckFn } from '../types';
import { inject, Provider, Getter } from '@loopback/core';
import { CacheBindings } from '../keys';
import {Request} from '@loopback/rest';

export class CacheCheckProvider implements Provider<CacheCheckFn> {
  constructor(
    @inject.getter(CacheBindings.CACHE_STRATEGY)
    readonly getCacheStrategy: Getter<CacheStrategy>
  ) {}

  value(): CacheCheckFn {
    return request => this.action(request);
  }

  async action(request: Request): Promise<Cache | undefined> {
    const cacheStrategy = await this.getCacheStrategy();

    if (!cacheStrategy) {
      return undefined;
    }

    return await cacheStrategy.check(request);
  }
}
