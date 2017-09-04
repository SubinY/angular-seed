import { Type } from '@angular/core';

export interface TabConfig {
    key?: string;
    title?: string;
    removable?: boolean;
    active?: boolean;
    data?: any;
    component?: Type<any>;
}
