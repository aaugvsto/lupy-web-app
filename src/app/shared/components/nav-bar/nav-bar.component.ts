import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {

  public userName: string | undefined;
  public userClinic: string | undefined;

  constructor(private router: Router, private toastr: ToastrService) {    
    let localStorageJSON = localStorage.getItem('user_credentials')

    if (localStorageJSON) {
      let userCredentialsJson = JSON.parse(localStorageJSON)
      this.userName = userCredentialsJson.userName
      this.userClinic = userCredentialsJson.clinic
    } else {
      this.router.navigate([''])
    }
  }

  doLogout() {
    localStorage.removeItem('user_credentials')
    this.router.navigate([''])
    this.toastr.success('Logout realizado com sucesso!', undefined, {
      progressBar: true
    })
  }
}
