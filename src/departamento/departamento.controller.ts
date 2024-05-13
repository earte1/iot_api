import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { DepartamentoService } from './departamento.service';


@Controller('departamento')
export class DepartamentoController {
  private departamentoService: DepartamentoService;

  constructor( ) {
    this.departamentoService = new DepartamentoService(new DatabaseService());
  }

  @Post()
  create(@Body() createDepartamentoDto: Prisma.departamentoCreateInput) {
    return this.departamentoService.create({
      data: createDepartamentoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.departamentoService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.departamentoService.findUniqueOrThrow({
      where: {
        departamentoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateDepartamentoDto: Prisma.departamentoUpdateInput) {
    return this.departamentoService.update({
      where: { 
        departamentoid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateDepartamentoDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departamentoService.delete({
      where: {
        departamentoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}

