import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() name: string = '';
  @Input() class: string = '';
  @Input() disabled: boolean = false;

  ngOnInit() {

  }
}
