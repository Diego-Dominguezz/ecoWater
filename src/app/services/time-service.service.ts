import { Injectable } from '@angular/core';
import { DateInput, DateTime, Duration, Interval } from 'luxon';


@Injectable({
  providedIn: 'root'
})
export class TimeServiceService {

  private luxon = DateTime.now().setZone('America/Denver');
  private luxonDuration = Duration;
  private luxonInterval = Interval;
  constructor() {
  }
  duration(finalUnix: EpochTimeStamp, initialUnix?: EpochTimeStamp) {
    let initialDate;
    if (initialUnix) initialDate = DateTime.fromMillis(initialUnix, { zone: 'America/Denver' });
    const finalDate = DateTime.fromMillis(finalUnix);
    return this.luxonInterval.fromDateTimes(this.luxon, finalDate).toDuration().toMillis();
  }
  durationFromMills(mills: number) {
    return this.luxonDuration.fromMillis(mills);
  }
  getUnixMills() {
    return this.luxon.toMillis();
  }
  getMilsFromIso(iso: string) {
    return DateTime.fromISO(iso).toMillis()
  }
  getPlusSeconds(seconds?: number) {
    return this.luxon.plus({ seconds: seconds });
  }
  toISO(){
    return this.luxon.toISO();
  }
  toFormat(isoDate:any){
    return DateTime.fromISO(isoDate).toFormat('dd-LLL-yyyy hh:mm:ss');
  }
}
