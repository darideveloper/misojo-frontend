import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from "@angular/router";
import { finalize } from 'rxjs/operators';
import { MisojoApiService } from 'src/app/services/misojo-api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public submitted = false;

  constructor(
    private router: Router,
    private misojoApi: MisojoApiService) { }

  ngOnInit(): void { }

  loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    }
  );

  submit() {
    if(this.loginForm.invalid){
      this.submitted = true;
      return;
    }

    this.submitted = false;

    this.misojoApi.login(this.loginForm.value)
      .pipe(finalize(() => {
        //this.spinnerService.hide()
      }))
      .subscribe(
        () => {
          Swal.fire({
            title: "Great",
            icon: "success",
            text: "Succesful login",
            color: "#020202",
            background: "#fffbf5",
            confirmButtonColor: "#ffac6c",
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: "Ok",
            confirmButtonAriaLabel: "Ok",
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "Cancel",
            iconColor: "#ffac6cc2"
          });
          this.redirectToLogin()
        },
        (errorDefinition:any) => this.handleError(errorDefinition)
      );
  }

  redirectToLogin(){
    this.router.navigate(["/login"]);
  }

  handleError(error: any) {
    Swal.fire({
      title: "Error",
      icon: "error",
      text: error.message,
      color: "#020202",
      background: "#fffbf5",
      confirmButtonColor: "#ffac6c",
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: "Ok",
      confirmButtonAriaLabel: "Ok",
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "Cancel",
      iconColor: "#ffac6cc2"
    });
  }


}
