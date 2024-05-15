import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { TipoubicacionService } from './tipoubicacion.service';


@Controller('tipoubicacion')
export class TipoubicacionController {
  private tipoubicacionService: TipoubicacionService;

  constructor( ) {
    this.tipoubicacionService = new TipoubicacionService(new DatabaseService());
  }

  @Post()
  create(@Body() createTipoubicacionDto: Prisma.tipoubicacionCreateInput) {
    return this.tipoubicacionService.create({
      data: createTipoubicacionDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.tipoubicacionService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.tipoubicacionService.findMany({
      where: {
        tipoubicacionid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateTipoubicacionDto: Prisma.tipoubicacionUpdateInput) {
    return this.tipoubicacionService.update({
      where: { 
        tipoubicacionid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateTipoubicacionDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoubicacionService.delete({
      where: {
        tipoubicacionid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
