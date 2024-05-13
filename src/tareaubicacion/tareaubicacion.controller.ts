import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { TareaubicacionService } from './tareaubicacion.service';


@Controller('tarea_ubicacion')
export class TareaubicacionController {
  private tareaubicacionService: TareaubicacionService;

  constructor( ) {
    this.tareaubicacionService = new TareaubicacionService(new DatabaseService());
  }

  @Post()
  create(@Body() createTareaubicacionDto: Prisma.tarea_ubicacionCreateInput) {
    return this.tareaubicacionService.create({
      data: createTareaubicacionDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.tareaubicacionService.findMany({
      where: {
        tarea_ubicacionid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.tareaubicacionService.findUniqueOrThrow({
      where: {
        tarea_ubicacionid: id,
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateTareaubicacionDto: Prisma.tarea_ubicacionUpdateInput) {
    return this.tareaubicacionService.update({
      where: { 
        tarea_ubicacionid: id, 
      }, 
      data: updateTareaubicacionDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareaubicacionService.delete({
      where: {
        tarea_ubicacionid: id,
      }
    });
  }
}
