import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-signature-dialog',
  templateUrl: './signature-dialog.component.html',
  styleUrls: ['./signature-dialog.component.scss']
})
export class SignatureDialogComponent implements OnInit {
  constructor(private elementRef: ElementRef) {
    console.log(this.elementRef.nativeElement);
  }

  ngOnInit() {
    const canvas: HTMLCanvasElement[] = this.elementRef.nativeElement.querySelectorAll('.signature-pad-canvas');
    canvas[0].width = 1200;
    console.log(this.elementRef.nativeElement.style); // .querySelector('.signature-pad-canvas').width = '800px';
  }
}
