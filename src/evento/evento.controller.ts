import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventoService } from './evento.service';
import {Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AuthguardGuard } from 'src/guars/authguard/authguard.guard';

@Controller('evento')
@UseGuards(AuthguardGuard)
export class EventoController {
  private eventoService: EventoService;

  constructor( ) {
    this.eventoService = new EventoService(new DatabaseService());
  }

  @Post()
  create(@Body() createEquipoDto: Prisma.equipoCreateInput) {
    return this.eventoService.create({
      data: createEquipoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.eventoService.findMany({
      /*where: {
        empresaid: process.env.EMPRESA_ID
      }*/
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventoService.findUniqueOrThrow({
      where: {
        equipoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipoDto: Prisma.equipoUpdateInput) {
    return this.eventoService.update(
      { where: { equipoid: id }, data: updateEquipoDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventoService.delete({
      where: {
        equipoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
