import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { EmpleadoService } from './empleado.service';


@Controller('empleado')
export class EmpleadoController {
  private empleadoService: EmpleadoService;

  constructor( ) {
    this.empleadoService = new EmpleadoService(new DatabaseService());
  }

  @Post()
  create(@Body() createEmpleadoDto: Prisma.empleadoCreateInput) {
    return this.empleadoService.create({
      data: createEmpleadoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.empleadoService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.empleadoService.findUniqueOrThrow({
      where: {
        empleadoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateEmpleadoDto: Prisma.empleadoUpdateInput) {
    return this.empleadoService.update({
      where: { 
        empleadoid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateEmpleadoDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadoService.delete({
      where: {
        empleadoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
