import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  //Skrati text v preview ak je prilis dlhy
  transform(content: string, maxLength: number): string {
    let text = content.split(" ");
    text = text.splice( 0, maxLength );
    const truncateText = text.join(" ") + "...";
    
    return truncateText;
  }

}
