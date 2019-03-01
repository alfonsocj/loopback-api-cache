import {CoreBindings} from '@loopback/core';
import {Constructor, Provider, inject} from '@loopback/context';
import { getCacheMetadata, CacheMetadata } from "../decorators";

export class CacheMetadataProvider implements Provider<CacheMetadata | undefined> {
  constructor(
    @inject(CoreBindings.CONTROLLER_CLASS, {optional: true})
    private readonly controllerClass: Constructor<{}>,
    @inject(CoreBindings.CONTROLLER_METHOD_NAME, {optional: true})
    private readonly methodName: string,
  ) {}

  value(): CacheMetadata | undefined {
    if(!this.controllerClass || !this.methodName) return;
    return getCacheMetadata(this.controllerClass, this.methodName);
  }
}
