import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import DomPurify from 'dompurify';

@Pipe({
  name: 'sanitizing'
})
export class SanitizingPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

 public transform(value: any, type: string): any {
     const sanitizedContent = DomPurify.sanitize(value);
     return this.sanitizer.bypassSecurityTrustResourceUrl(sanitizedContent);

  }
}
