import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cuenta } from 'src/app/models/cuenta';
import { Persona } from 'src/app/models/persona';
import { CuentaService } from 'src/app/services/cuenta.service';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  user: Persona;
  cuenta: Cuenta;
  constructor(private generalService: GeneralService,
              private cuentaService: CuentaService,
              private alertCtrl: AlertController) { 
    this.cuenta = new Cuenta();
  }

  ngOnInit() {
    //Recuperar el usuario del localStorage
    this.user = this.generalService.cargarStorage();
    this.cuentaService.getCuenta(this.user).subscribe(
      async response => {
        if(response.status === "success"){
          this.cuenta.idCuenta = response.cuenta.id;
          this.cuenta.saldo = response.cuenta.saldo;
          this.generalService.guardarStorage(this.user);
        }else{
          const alert = await
          this.alertCtrl.create({
            header: 'PoliCash',
            message: 'Error recuperando saldo',
            buttons: ['OK']
          });
          alert.present();
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
