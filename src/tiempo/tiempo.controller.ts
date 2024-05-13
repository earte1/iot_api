import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { TiempoService } from './tiempo.service';


@Controller('tiempo')
export class TiempoController {
  private tiempoService: TiempoService;

  constructor( ) {
    this.tiempoService = new TiempoService(new DatabaseService());
  }

  @Post()
  create(@Body() createTiempoDto: Prisma.tiempoCreateInput) {
    return this.tiempoService.create({
      data: createTiempoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.tiempoService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.tiempoService.findUniqueOrThrow({
      where: {
        tiempoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() tiempoSucursalDto: Prisma.tiempoUpdateInput) {
    return this.tiempoService.update({
      where: { 
        tiempoid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: tiempoSucursalDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tiempoService.delete({
      where: {
        tiempoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
