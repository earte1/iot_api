import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UbicacionService } from './ubicacion.service';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';


@Controller('ubicacion')
export class UbicacionController {
  private ubicacionService: UbicacionService;

  constructor( ) {
    this.ubicacionService = new UbicacionService(new DatabaseService());
  }

  @Post()
  create(@Body() createUbicacionDto: Prisma.ubicacionCreateInput) {
    return this.ubicacionService.create({
      data: createUbicacionDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.ubicacionService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.ubicacionService.findUniqueOrThrow({
      where: {
        ubicacionid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get('/por_empresa:id')
  getUbicacion(@Param('id') id: string) {
    return this.ubicacionService.findMany({
      where: {
        empresaid: id,
        //empresaid: process.env.EMPRESA_ID
      }
    })
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateUbicacionDto: Prisma.ubicacionUpdateInput) {
    return this.ubicacionService.update({
      where: { 
        ubicacionid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateUbicacionDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ubicacionService.delete({
      where: {
        ubicacionid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
