import { TimeServiceService } from 'src/app/services/time-service.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isoDate'
})
export class IsoDatePipe implements PipeTransform {

  constructor(
    private timeService:TimeServiceService
  ){

  }

  transform(value: unknown, ...args: unknown[]): unknown {
    return this.timeService.toFormat(value)
    return 'text'
  }

}
