import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interfaces/form-crearUsuario.interface';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {
  public httpOptions:any = {};
  private server = "http://127.0.0.1:5000/";

  constructor(
    private http: HttpClient,
  ) {
    this.httpOptions = { headers: new HttpHeaders({ 'Content-Type':  'application/json'/*, "Authorization": "Bearer "+this.token*/}) };
  }

  public registerUserService =  (FormData:RegisterForm) => {
    const json = {
      idTipoDocumento: FormData.tipoDocumento,
      NumeroDocumento: FormData.documento,
      Nombre1: FormData.primerNombre,
      Nombre2: FormData.segundoNombre,
      Apellido1: FormData.primerApellido,
      Apellido2: FormData.segundoApellido,
      Email: FormData.email,
      Telefono: FormData.telefono,
      Contrasenia: FormData.contrasenia,
      FechaRegistro: (new Date).toISOString()
    }
    console.log(json);
    
    return this.http.post(/*'http://localhost:3000/clientes'*/'http://localhost/LegalisappApi2019/public/servicioPost/', json, this.httpOptions).pipe(
      map(resp => resp)
    )
  }

  public servicioGet =  () => {
    return this.http.get('http://localhost/LegalisappApi2019/public/servicioGet/'+"PRUEBA", this.httpOptions).pipe(
      map( resp => resp )
    )
  }
}
