import { InjectionToken } from '@angular/core';

export interface SharedData {
  [name: string]: any;
}

export const SHARED_DATA_PROVIDER = new InjectionToken<SharedData>('SHARED_DATA_PROVIDER');