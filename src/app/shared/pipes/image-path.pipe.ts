import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath',
  standalone: true
})
export class ImagePathPipe implements PipeTransform {

  private basePath: string = 'images';

  transform(value: string): string {
    if (!value) return '';
    
    return `${this.basePath}/${value}`;
  }

}
