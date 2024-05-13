import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { NumeroDocumentoService } from './numerodocumento.service';


@Controller('numerodocumento')
export class NumeroDocumentoController {
  private numeroDocumentoService: NumeroDocumentoService;

  constructor( ) {
    this.numeroDocumentoService = new NumeroDocumentoService(new DatabaseService());
  }

  @Post()
  create(@Body() createNumeroDocumentoDto: Prisma.numerodocumentoCreateInput) {
    return this.numeroDocumentoService.create({
      data: createNumeroDocumentoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.numeroDocumentoService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.numeroDocumentoService.findUniqueOrThrow({
      where: {
        id: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateNumeroDocumentoDto: Prisma.numerodocumentoUpdateInput) {
    return this.numeroDocumentoService.update({
      where: { 
        id: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateNumeroDocumentoDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numeroDocumentoService.delete({
      where: {
        id: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}