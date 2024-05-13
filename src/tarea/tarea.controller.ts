import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { AuthguardGuard } from 'src/guars/authguard/authguard.guard';


@Controller('tarea')
// @UseGuards(AuthguardGuard)
export class TareaController {
  constructor(private readonly tareaService: TareaService) {
    this.tareaService = new TareaService(new DatabaseService());
  }

  @Post()
  create(@Body() createTareaDto: Prisma.tareaCreateInput) {
    return this.tareaService.create({
      data: createTareaDto
  });
  }

  @Get()
  findAll() {
    return this.tareaService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.tareaService.findUniqueOrThrow({
      where: {
        taskid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateTareaDto: Prisma.tareaUpdateInput) {
    return this.tareaService.update({
      where: { 
        taskid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateTareaDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareaService.delete({
      where: {
        taskid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
