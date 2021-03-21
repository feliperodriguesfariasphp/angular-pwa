import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuarios } from '../usuarios.models';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'login',
  templateUrl: './login.html'
})
export class UsuariosLoginComponent implements OnInit {

  usuario = {} as Usuarios;
  msg:String;


  constructor(private service: UsuariosService, private router: Router) { }

  ngOnInit(): void {}
  
  
  async login() {

    try {

      const result = await this.service.login(this.usuario);
      console.log('Sucesso login: ' + result);
      this.router.navigate(['']);
    } catch (error) {

      
      console.log(error);

    }
      
  }

}
