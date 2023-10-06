import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formularioregister: FormGroup = this.fb.group({
    usname: ['', [Validators.required, Validators.minLength(6)]],
    id: ['', [Validators.required, Validators.minLength(8)]],
    pass: ['', [Validators.required, Validators.minLength(7)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  register(){
    // datos a mandar al backend
    const {usname, id, pass} = this.formularioregister.value;
    // manda datos al endpoint register
    this.authService.register(usname, id, pass)
    .subscribe(res => {
      // si la respuesta tiene éxito, manda al usuario al dashboard
      if(res === true){
        this.router.navigateByUrl('/dashboard');
        this.toastr.success(id+" "+usname, "Registro correcto");
      }
      // si la respuesta muestra algun error, muestra error en un toast
      else{
        console.log(res);
        this.toastr.error(res, 'Error', {
          timeOut: 4000,
          progressAnimation: 'increasing'
        });
      }
    });
  }

}
