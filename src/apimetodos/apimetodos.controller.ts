import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { ApimetodosService } from './apimetodos.service';


@Controller('api_metodos')
export class ApimetodosController {
  private apimetodosService: ApimetodosService;

  constructor( ) {
    this.apimetodosService = new ApimetodosService(new DatabaseService());
  }

  @Post()
  create(@Body() createApimetodosDto: Prisma.api_metodosCreateInput) {
    return this.apimetodosService.create({
      data: createApimetodosDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.apimetodosService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.apimetodosService.findUniqueOrThrow({
      where: {
        metodoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateApimetodosDto: Prisma.api_metodosUpdateInput) {
    return this.apimetodosService.update({
      where: { 
        metodoid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateApimetodosDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apimetodosService.delete({
      where: {
        metodoid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
