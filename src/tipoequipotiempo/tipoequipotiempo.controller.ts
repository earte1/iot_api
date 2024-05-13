import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { TipoequipotiempoService } from './tipoequipotiempo.service';


@Controller('tipoequipotiempo')
export class TipoequipotiempoController {
  private tipoequipotiempoService: TipoequipotiempoService;

  constructor( ) {
    this.tipoequipotiempoService = new TipoequipotiempoService(new DatabaseService());
  }

  @Post()
  create(@Body() createTipoequipotiempoDto: Prisma.tipoequipotiempoCreateInput) {
    return this.tipoequipotiempoService.create({
      data: createTipoequipotiempoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.tipoequipotiempoService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.tipoequipotiempoService.findUniqueOrThrow({
      where: {
        tipoequipotiempoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateTipoequipotiempoDto: Prisma.tipoequipotiempoUpdateInput) {
    return this.tipoequipotiempoService.update({
      where: { 
        tipoequipotiempoid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateTipoequipotiempoDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoequipotiempoService.delete({
      where: {
        tipoequipotiempoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
