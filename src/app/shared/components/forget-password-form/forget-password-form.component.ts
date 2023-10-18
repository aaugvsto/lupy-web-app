import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-forget-password-form',
  templateUrl: './forget-password-form.component.html'
})
export class ForgetPasswordFormComponent {
  @Output() eventEmailSent = new EventEmitter<void>();

  public forgetPasswordForm: FormGroup;
  public isLoading: boolean = false

  constructor(private fb: FormBuilder, private toastr: ToastrService)
  {
    this.forgetPasswordForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  }

  onSubmitForgetPassForm() {
    
    if (this.forgetPasswordForm.valid) {
      let email = this.forgetPasswordForm.value.email

      //TODO: Construir método parar verificar se e-mail informado existe ou não na base de dados
      let emailExists = true;
      if (emailExists) 
        this.sendMail(email)
    }

  }

  //TODO: Construir infraestrutura para realizar envio de e-mail
  private sendMail(email: string): void {
    this.isLoading = true

    setTimeout(() => {
      this.eventEmailSent.emit()
      this.toastr.success('E-mail de recuperação de senha enviado com sucesso!', '', {
        progressBar: true,
      })
      this.isLoading = false
    }, 5000)
    
  }

}
