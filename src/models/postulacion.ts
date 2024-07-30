import { Estudiante } from "./estudiante";

export class Postulacion {
    constructor(
      public id: number,
      public fechaPostulacion: string,
      public estudiante: Estudiante,
      public estado: string
    ) {}
  }