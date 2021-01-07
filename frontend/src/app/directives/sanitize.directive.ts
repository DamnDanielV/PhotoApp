import { Directive, HostBinding, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: '[appSanitize]'
})
export class SanitizeDirective {

  @Input() appSanitize: string;

  constructor(private sanitizer: DomSanitizer) { }

  @HostBinding('innerHtml')
  get innerHtml(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.appSanitize);
  }
}
