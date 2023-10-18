import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;
  public isLoading: boolean;
  public successLogin: boolean;
  
  constructor(private router: Router, private fb: FormBuilder, private loginService: LoginService, private toastr: ToastrService)
  { 
    this.loginForm = this.fb.group({
      login: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password:['', Validators.required]
    })

    this.isLoading = false;
    this.successLogin = true;
  }

  ngOnInit() {
    
    let credentials = localStorage.getItem('user_credentials')
    if (credentials != null) {
      let json = JSON.parse(credentials)
      this.Auth(json.email, json.pass)
    }
  }

  onSubmit() {

    if (this.loginForm.valid) {
      let user: string = this.loginForm.value.login;
      let password: string = this.loginForm.value.password;

      this.Auth(user, password)
    }

  }
  
  private Auth(user: string, password: string) {

    this.isLoading = true

    this.loginService.login(user, password)
      .pipe(
        catchError(err => {
          this.isLoading = false
          this.successLogin = false           
          
          this.toastr.error(
            err.status == 401
              ? "Informações de login fornecidas são inválidas"
              : "Ocorreu um erro na tentativa de comunicação com o servidor",          
          )

          return throwError(() => {
            let error: any = new Error('Internal Server Error')
            error.timestamp = Date.now()
            return error
          });
        }
      ))
      .subscribe((data: any) => {

        if (data.token) {
          this.router.navigate(['dashboard'])
          localStorage.setItem('user_credentials', JSON.stringify({
            token: data.token,
            email: user,
            pass: password,
            userName: data.name,
            idRole: data.idRole,
            clinic: data.clinic
          }))
        }
        else {
          this.successLogin = false
        }

        this.isLoading = false
      })
  }
}
