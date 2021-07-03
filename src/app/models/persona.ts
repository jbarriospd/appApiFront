import { Cuenta } from "./cuenta";

export class Persona {
    tipoId: string;
    identificacion: number;
    nombres: string;
    apellidos: string;
    celular: number;
    correo: string;
    contrasena: string;
    cuenta: Cuenta;
}
