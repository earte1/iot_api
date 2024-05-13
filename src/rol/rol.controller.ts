import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { RolService } from './rol.service';


@Controller('rol')
export class RolController {
  private rolService: RolService;

  constructor( ) {
    this.rolService = new RolService(new DatabaseService());
  }

  @Post()
  create(@Body() createRolDto: Prisma.rolCreateInput) {
    return this.rolService.create({
      data: createRolDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.rolService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.rolService.findUniqueOrThrow({
      where: {
        rolid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateRolDto: Prisma.rolUpdateInput) {
    return this.rolService.update({
      where: { 
        rolid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateRolDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolService.delete({
      where: {
        rolid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
