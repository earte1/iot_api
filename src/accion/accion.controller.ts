import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { AccionService } from './accion.service';


@Controller('accion')
export class AccionController {
  private accionService: AccionService;

  constructor( ) {
    this.accionService = new AccionService(new DatabaseService());
  }

  @Post()
  create(@Body() createAccionDto: Prisma.accionCreateInput) {
    return this.accionService.create({
      data: createAccionDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.accionService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.accionService.findUniqueOrThrow({
      where: {
        accionid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateAccionDto: Prisma.accionUpdateInput) {
    return this.accionService.update({
      where: { 
        accionid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateAccionDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accionService.delete({
      where: {
        accionid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}