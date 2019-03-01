import { MethodDecoratorFactory, Constructor, MetadataInspector } from "@loopback/core";
import { CACHE_METADATA_KEY } from '../keys';

export interface CacheMetadata {
  ttl: number;
  options?: Object;
}

export function cache(ttl: number = 60000, options?: Object) {
  return MethodDecoratorFactory.createDecorator<CacheMetadata>(
    CACHE_METADATA_KEY,
    {
      ttl,
      options: options || {}
    }
  )
}

export function getCacheMetadata(
  controllerClass: Constructor<{}>,
  methodName: string,
): CacheMetadata | undefined {
  return MetadataInspector.getMethodMetadata<CacheMetadata>(
    CACHE_METADATA_KEY,
    controllerClass.prototype,
    methodName
  )
}
