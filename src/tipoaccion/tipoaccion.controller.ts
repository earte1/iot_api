import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { TipoaccionService } from './tipoaccion.service';


@Controller('tipo_acciones')
export class TipoaccionController {
  private tipoaccionService: TipoaccionService;

  constructor( ) {
    this.tipoaccionService = new TipoaccionService(new DatabaseService());
  }

  @Post()
  create(@Body() createTipoaccionDto: Prisma.tipo_accionesCreateInput) {
    return this.tipoaccionService.create({
      data: createTipoaccionDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.tipoaccionService.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.tipoaccionService.findUniqueOrThrow({
      where: {
        tipoaccionid: id,
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateTipoaccionDto: Prisma.tipo_accionesUpdateInput) {
    return this.tipoaccionService.update({
      where: { 
        tipoaccionid: id, 
      }, 
      data: updateTipoaccionDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoaccionService.delete({
      where: {
        tipoaccionid: id,
      }
    });
  }
}