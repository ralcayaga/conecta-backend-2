import { Injectable } from '@nestjs/common';
import { Estudiante } from 'src/models/estudiante';

@Injectable()
export class EstudiantesService {
  private estudiantes: Estudiante[] = [];

  constructor() {
    this.estudiantes.push(
      new Estudiante(     1,  'Rodrigo',  'Alcayaga',   42,  'Ing informatico', 'rod@gmail.com', ),
    );
  }

  crearEstudiante(nuevoEstudiante: Estudiante): Estudiante {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].email == nuevoEstudiante.email) {
        return null;
      }
    }
    nuevoEstudiante.id = this.estudiantes.length + 1;
    this.estudiantes.push(nuevoEstudiante);
    return nuevoEstudiante; //Se envia la referencia....
  }

  obtenerEstudiante(id: number): Estudiante {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id == id) {
        return this.estudiantes[i];
      }
    }
    return null;
  }

  obtenerTodosLosEstudiantes(): Estudiante[] {
    return this.estudiantes;
  }

  eliminarEstudiante(id: number): boolean {
    for (let i = 0; i < this.estudiantes.length; i++) {
      if (this.estudiantes[i].id === id) {
        this.estudiantes.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
