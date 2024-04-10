import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import {Prisma } from '@prisma/client';

@Controller('ubicacion')
export class UbicacionController {
  constructor(private readonly ubicacionService: UbicacionService) {}

  @Post()
  create(@Body() createUbicacionDto: Prisma.ubicacionCreateInput) {
    return this.ubicacionService.create(createUbicacionDto);
  }

  @Get()
  findAll() {
    return this.ubicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ubicacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUbicacionDto: Prisma.ubicacionUpdateInput) {
    return this.ubicacionService.update(+id, updateUbicacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ubicacionService.remove(+id);
  }
}
