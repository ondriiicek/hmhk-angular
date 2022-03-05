import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(content: string, maxLength: number): string {
    let text = content.split(" ");
    text = text.splice( 0, maxLength );
    const truncateText = text.join(" ") + "...";
    console.log(truncateText);
    
    return truncateText;
  }

}
