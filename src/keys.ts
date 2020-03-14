import {BindingKey, MetadataAccessor} from '@loopback/core';
import {CacheMetadata} from './decorators/cache.decorator';
import {CacheSetFn, CacheStrategy, CacheCheckFn} from './types';

export namespace CacheBindings {
  export const CACHE_STRATEGY = BindingKey.create<CacheStrategy | undefined>(
    'cache.strategy',
  );
  export const CACHE_CHECK_ACTION = BindingKey.create<CacheCheckFn | undefined>(
    'cache.check',
  );
  export const CACHE_SET_ACTION = BindingKey.create<CacheSetFn | undefined>(
    'cache.set',
  );
  export const METADATA = BindingKey.create<CacheMetadata | undefined>(
    'check.operationMetadata',
  );
}

export const CACHE_METADATA_KEY = MetadataAccessor.create<
  CacheMetadata,
  MethodDecorator
>('cache.operationsData');
