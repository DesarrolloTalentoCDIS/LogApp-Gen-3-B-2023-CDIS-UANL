import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formularioLog : FormGroup = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(8)]],
    pass: ['', [Validators.required, Validators.minLength(7)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService) { }

  login(){
    if(this.formularioLog.valid){
      const{id,pass} = this.formularioLog.value;
      console.log(id);
      console.log(pass);

      this.authService.login(id, pass)
      .subscribe(res => {
        if(res === true){
          this.router.navigateByUrl('/dashboard');
          this.toastr.success(id, 'ingreso correcto');
        }
        else {
          console.log(res);
          this.toastr.error(res, 'Error', {
            timeOut: 4000,
            progressAnimation: 'increasing'

          });

        }
      })

    } else{
      this.toastr.error('Verifique sus datos', 'Error');
    }
  }


}
