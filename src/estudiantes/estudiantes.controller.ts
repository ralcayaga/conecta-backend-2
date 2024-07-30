import { Controller, Post, Get, Delete, Param, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from 'src/models/estudiante';

@Controller() // localhost:3000/estudiantes
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  // a. Registrar un nuevo estudiante
  @Post('estudiantes') // localhost:3000/estudiantes
  registrarEstudiante(@Body() estudiante: Estudiante, @Res() response: Response) {
    const estudianteLocal = this.estudiantesService.crearEstudiante(estudiante);
    if (estudianteLocal) {
      console.log(estudianteLocal);
      response.status(201).send(estudianteLocal);
    } else {
      response.status(400).send({ error: 'ya existe un estudiante con este correo' });
    }
  }

  // b. Obtener un estudiante según su id
  @Get('estudiantes/:id') // localhost:3000/estudiantes/:id
  obtenerEstudiantePorId(@Param('id') id: number, @Res() response: Response) {
    const estudiante = this.estudiantesService.obtenerEstudiante(id);
    if (estudiante) {
      response.status(200).send(estudiante);
    } else {
      response.status(404).send({ error: 'Estudiante no existe' });
    }
  }

  //c. Obtener todos los estudiantes
  @Get('estudiantes') // localhost:3000/estudiantes
  obtenerEstudiantes(@Res() response: Response) {
    const estudiantes = this.estudiantesService.obtenerTodosLosEstudiantes();
    response.status(200).send(estudiantes);
  }

  //d.- Eliminar un estudiante según su id
  @Delete('estudiantes/:id') // localhost:3000/estudiantes/:id
  eliminarEstudiantes(@Param('id') id: number, @Res() response: Response) {
    const eliminado = this.estudiantesService.eliminarEstudiante(id);
    if (eliminado) {
      response.status(200).send({ mensaje: 'Estudiante eliminado exitosamente' });
    } else {
      response.status(404).send({ error: 'Estudiante no existe' });
    }
  }
}
