import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { PuestoService } from './puesto.service';


@Controller('puesto')
export class PuestoController {
  private puestoService: PuestoService;

  constructor( ) {
    this.puestoService = new PuestoService(new DatabaseService());
  }

  @Post()
  create(@Body() createPuestoDto: Prisma.puestoCreateInput) {
    return this.puestoService.create({
      data: createPuestoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.puestoService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.puestoService.findUniqueOrThrow({
      where: {
        puestoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updatePuestoDto: Prisma.puestoUpdateInput) {
    return this.puestoService.update({
      where: { 
        puestoid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updatePuestoDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.puestoService.delete({
      where: {
        puestoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
