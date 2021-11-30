import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CrearUsuarioService } from 'src/app/services/crear-usuario.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  public formSubmitted = false;

  constructor(
    private crearUsuSer: CrearUsuarioService,
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  public registerForm = this.fb.group({
    tipoDocumento: ['', [Validators.required]],
    documento: ['', [Validators.required, Validators.minLength(5)]],
    primerNombre: ['', [Validators.required]],
    segundoNombre: ['', [Validators.required]],
    primerApellido: ['', [Validators.required]],
    segundoApellido: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required]],
    contrasenia: ['', [Validators.required]]
  })

  public registrarUsuario = () =>{
    console.log("registrar usuario");
    this.formSubmitted = true;

    console.log(this.registerForm.value);


    this.crearUsuSer.registerUserService( this.registerForm.value ).subscribe( (resp:any) =>{
      if(resp.message){
        Swal.fire('Bien hecho!', `Usuario ${resp.response}`, 'success');
        this.router.navigateByUrl('/registrar');
      }else{
        Swal.fire('Ha ocurrido un error!', `Por favor contacte al administrador. Usuario no creado`, 'error');
      }
    }, (err) =>{
      //En caso de un error
      Swal.fire('Error', err.error.msg, 'error');
    })
  }
}