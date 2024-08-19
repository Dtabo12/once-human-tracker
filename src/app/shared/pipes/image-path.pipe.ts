import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath',
  standalone: true
})
export class ImagePathPipe implements PipeTransform {

  private basePath: string = '../../assets/images/';

  transform(value: string): string {
    if (!value) return '';

    console.log(`${this.basePath}${value}`);
    
    return `${this.basePath}${value}`;
  }

}
