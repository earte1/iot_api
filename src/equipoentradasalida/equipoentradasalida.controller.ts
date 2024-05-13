import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { EquipoentradasalidaService } from './equipoentradasalida.service';


@Controller('equipo_entrada_salida')
export class EquipoentradasalidaController {
  private equipoentradasalidaService: EquipoentradasalidaService;

  constructor( ) {
    this.equipoentradasalidaService = new EquipoentradasalidaService(new DatabaseService());
  }

  @Post()
  create(@Body() createEquipoentradasalidaDto: Prisma.equipo_entrada_salidaCreateInput) {
    return this.equipoentradasalidaService.create({
      data: createEquipoentradasalidaDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.equipoentradasalidaService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.equipoentradasalidaService.findUniqueOrThrow({
      where: {
        entrada_salidaid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateEquipoentradasalidaDto: Prisma.equipo_entrada_salidaUpdateInput) {
    return this.equipoentradasalidaService.update({
      where: { 
        entrada_salidaid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateEquipoentradasalidaDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipoentradasalidaService.delete({
      where: {
        entrada_salidaid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
