import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { EmpresaconfiguracionService } from './empresaconfiguracion.service';


@Controller('empresaconfiguracion')
export class EmpresaconfiguracionController {
  private empresaconfiguracionService: EmpresaconfiguracionService;

  constructor( ) {
    this.empresaconfiguracionService = new EmpresaconfiguracionService(new DatabaseService());
  }

  @Post()
  create(@Body() createEmpresaconfiguracionDto: Prisma.empresaconfiguracionCreateInput) {
    return this.empresaconfiguracionService.create({
      data: createEmpresaconfiguracionDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.empresaconfiguracionService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.empresaconfiguracionService.findUniqueOrThrow({
      where: {
        empresaconfid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateEmpresaconfiguracionDto: Prisma.empresaconfiguracionUpdateInput) {
    return this.empresaconfiguracionService.update({
      where: { 
        empresaconfid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateEmpresaconfiguracionDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaconfiguracionService.delete({
      where: {
        empresaconfid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}