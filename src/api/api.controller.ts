import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { ApiService } from './api.service';


@Controller('api')
export class ApiController {
  private apiService: ApiService;

  constructor( ) {
    this.apiService = new ApiService(new DatabaseService());
  }

  @Post()
  create(@Body() createApiDto: Prisma.apiCreateInput) {
    return this.apiService.create({
      data: createApiDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.apiService.findMany({
      where: {
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.apiService.findUniqueOrThrow({
      where: {
        apiid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateApiDto: Prisma.apiUpdateInput) {
    return this.apiService.update({
      where: { 
        apiid: id, 
        empresaid: process.env.EMPRESA_ID 
      }, 
      data: updateApiDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiService.delete({
      where: {
        apiid: id,
        empresaid: process.env.EMPRESA_ID
      }
    });
  }
}
