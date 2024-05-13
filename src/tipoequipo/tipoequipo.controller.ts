import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { TipoequipoService } from './tipoequipo.service';


@Controller('tipoequipo')
export class TipoequipoController {
  private tipoequipoService: TipoequipoService;

  constructor( ) {
    this.tipoequipoService = new TipoequipoService(new DatabaseService());
  }

  @Post()
  create(@Body() createTipoequipoDto: Prisma.tipoequipoCreateInput) {
    return this.tipoequipoService.create({
      data: createTipoequipoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.tipoequipoService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.tipoequipoService.findUniqueOrThrow({
      where: {
        tipoequipoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateTipoequipoDto: Prisma.tipoequipoUpdateInput) {
    return this.tipoequipoService.update({
      where: { 
        tipoequipoid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateTipoequipoDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoequipoService.delete({
      where: {
        tipoequipoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
