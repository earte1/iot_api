import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { NovedadregistroService } from './novedadregistro.service';


@Controller('novedadregistro')
export class NovedadregistroController {
  private novedadregistroService: NovedadregistroService;

  constructor( ) {
    this.novedadregistroService = new NovedadregistroService(new DatabaseService());
  }

  @Post()
  create(@Body() createNovedadregistroDto: Prisma.novedadregistroCreateInput) {
    return this.novedadregistroService.create({
      data: createNovedadregistroDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.novedadregistroService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.novedadregistroService.findUniqueOrThrow({
      where: {
        novedadregistroid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateNovedadregistroDto: Prisma.novedadregistroUpdateInput) {
    return this.novedadregistroService.update({
      where: { 
        novedadregistroid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateNovedadregistroDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novedadregistroService.delete({
      where: {
        novedadregistroid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
