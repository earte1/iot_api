import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { RolportipoubicacionService } from './rolportipoubicacion.service';


@Controller('rolportipoubicacion')
export class RolportipoubicacionController {
  private rolportipoubicacionService: RolportipoubicacionService;

  constructor( ) {
    this.rolportipoubicacionService = new RolportipoubicacionService(new DatabaseService());
  }

  @Post()
  create(@Body() createRolportipoubicacionDto: Prisma.rolportipoubicacionCreateInput) {
    return this.rolportipoubicacionService.create({
      data: createRolportipoubicacionDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.rolportipoubicacionService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.rolportipoubicacionService.findUniqueOrThrow({
      where: {
        roltipoubicacionid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateRolportipoubicacionDto: Prisma.rolportipoubicacionUpdateInput) {
    return this.rolportipoubicacionService.update({
      where: { 
        roltipoubicacionid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateRolportipoubicacionDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolportipoubicacionService.delete({
      where: {
        roltipoubicacionid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
