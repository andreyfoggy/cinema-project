import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datePipe'})
export class DatePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }
    const date = value.split('.');
    return date[0] + ' ' + months[Number(date[1]) - 1];
  }
}

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
