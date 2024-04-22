import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SucursalService } from './sucursal.service';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';


@Controller('sucursal')
export class SucursalController {
  private sucursalService: SucursalService;

  constructor( ) {
    this.sucursalService = new SucursalService(new DatabaseService());
  }

  @Post()
  create(@Body() createSucursalDto: Prisma.sucursalCreateInput) {
    return this.sucursalService.create({
      data: createSucursalDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.sucursalService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.sucursalService.findUniqueOrThrow({
      where: {
        sucursalid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateSucursalDto: Prisma.sucursalUpdateInput) {
    return this.sucursalService.update({
      where: { 
        sucursalid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateSucursalDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sucursalService.delete({
      where: {
        sucursalid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
