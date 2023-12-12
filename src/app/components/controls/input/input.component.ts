import { Component, forwardRef, Input, OnInit } from "@angular/core";
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {
  value: any = null;

  @Input() uppercase:boolean = false;
  @Input() type = 'text';
  @Input("class") className = '';
  @Input() placeholder = '';
  @Input() name = '';
  @Input() control: any;
  @Input() submitted: boolean = false;
  @Input() appearance: 'standard' | 'fill' = 'standard';

  constructor() { }

  ngOnInit(): void {
  }

  public onChange(val: any): void {}
  public onTouched(): void {}

  change(event: any): void {
    this.value = event?.target?.value;
    this.onChange(this.value);
    this.onTouched();
  }

  get errorClass() {
    return this.hasErrorInput()
      ? `${this.appearance} is-invalid-input`
      : this.appearance;
  }

  hasErrorInput():boolean {
    return (
      (this.submitted && this.control?.invalid) ||
      (this.control &&
        this.control.invalid &&
        (this.control.dirty || this.control.touched))
    );
  }
}
