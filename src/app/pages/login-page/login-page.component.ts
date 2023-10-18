import { Component, ViewChild } from '@angular/core';
import { ForgetPasswordFormComponent } from 'src/app/shared/components/forget-password-form/forget-password-form.component';
import { LoginFormComponent } from 'src/app/shared/components/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent
{
  @ViewChild(LoginFormComponent) loginFormComponent: LoginFormComponent | undefined
  @ViewChild(ForgetPasswordFormComponent) ForgetPasswordFormComponent: ForgetPasswordFormComponent | undefined

  public emailEnviado: boolean = false;
  public showForgetPassword: boolean = false;
  public btnText: string = "Esqueci minha senha";

  handlerShowForgetPassword() {
    this.showForgetPassword = !this.showForgetPassword;
    this.btnText = this.showForgetPassword ? "Voltar para a tela de Login" : "Esqueci minha senha"
  }
}
