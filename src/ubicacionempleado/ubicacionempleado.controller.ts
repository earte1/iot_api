import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { UbicacionempleadoService } from './ubicacionempleado.service';


@Controller('ubicacionempleado')
export class UbicacionempleadoController {
  private ubicacionempleadoService: UbicacionempleadoService;

  constructor( ) {
    this.ubicacionempleadoService = new UbicacionempleadoService(new DatabaseService());
  }

  @Post()
  create(@Body() createUbicacionempleadoDto: Prisma.ubicacionempleadoCreateInput) {
    return this.ubicacionempleadoService.create({
      data: createUbicacionempleadoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.ubicacionempleadoService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.ubicacionempleadoService.findUniqueOrThrow({
      where: {
        ubicacionempleado: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateUbicacionempleadoId: Prisma.ubicacionempleadoUpdateInput) {
    return this.ubicacionempleadoService.update({
      where: { 
        ubicacionempleado: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateUbicacionempleadoId 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ubicacionempleadoService.delete({
      where: {
        ubicacionempleado: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}