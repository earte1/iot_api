import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { TiponotificacionService } from './tiponotificacion.service';


@Controller('tiponotificacion')
export class TiponotificacionController {
  private tiponotificacionService: TiponotificacionService;

  constructor( ) {
    this.tiponotificacionService = new TiponotificacionService(new DatabaseService());
  }

  @Post()
  create(@Body() createTiponotificacionDto: Prisma.tiponotificacionCreateInput) {
    return this.tiponotificacionService.create({
      data: createTiponotificacionDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.tiponotificacionService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.tiponotificacionService.findUniqueOrThrow({
      where: {
        tiponotificacionid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateTiponotificacionDto: Prisma.tiponotificacionUpdateInput) {
    return this.tiponotificacionService.update({
      where: { 
        tiponotificacionid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateTiponotificacionDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiponotificacionService.delete({
      where: {
        tiponotificacionid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}