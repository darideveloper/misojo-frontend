import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {

  public submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  signUpForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      passwordConfirm: new FormControl('', Validators.required),
    },
    this.passwordMatchValidator
  );

  private passwordMatchValidator(
    formGroup: AbstractControl
  ): ValidationErrors | null {
    const passwordConfirm = formGroup.get('passwordConfirm');

    if (formGroup.get('password')?.value === passwordConfirm?.value) {
      passwordConfirm?.setErrors(null);
      return null;
    }

    passwordConfirm?.setErrors({ mustMatch: true });
    return { invalid: true };
  }

  submit() {
    if(this.signUpForm.invalid){
      this.submitted = true;
      return;
    }

    this.submitted = false;
  }

}
