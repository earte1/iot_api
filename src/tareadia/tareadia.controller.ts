import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { TareadiaService } from './tareadia.service';


@Controller('tarea_dia')
export class TareadiaController {
  private tareadiaService: TareadiaService;

  constructor( ) {
    this.tareadiaService = new TareadiaService(new DatabaseService());
  }

  @Post()
  create(@Body() createTareadiaDto: Prisma.tarea_diaCreateInput) {
    return this.tareadiaService.create({
      data: createTareadiaDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.tareadiaService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.tareadiaService.findUniqueOrThrow({
      where: {
        detalleid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateTareadiaDto: Prisma.tarea_diaUpdateInput) {
    return this.tareadiaService.update({
      where: { 
        detalleid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateTareadiaDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareadiaService.delete({
      where: {
        detalleid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}