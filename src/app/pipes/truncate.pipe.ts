import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number = 25): string {
    if (!value) return '';  // Handle null or undefined values
    return value.length > limit ? value.substr(0, limit) + '...' : value;
  }

}
