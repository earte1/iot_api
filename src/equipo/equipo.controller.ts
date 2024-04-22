//import { Equipo } from './entities/equipo.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthguardGuard } from 'src/guars/authguard/authguard.guard';
import {Prisma } from '@prisma/client';
import { EquipoService } from './equipo.service';

@Controller('equipo')
@UseGuards(AuthguardGuard)
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Post()
  create(@Body() createEquipoDto: Prisma.equipoCreateInput) {
    return this.equipoService.create(createEquipoDto);
  }

  @Get()
  findAll() {
    return this.equipoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipoDto: Prisma.equipoUpdateInput) {
    return this.equipoService.update(id, updateEquipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipoService.remove(id);
  }
}
