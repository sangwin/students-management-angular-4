/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return '+91-'+value;
  }

}

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */