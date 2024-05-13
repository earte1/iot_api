import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { ApiheadersService } from './apiheaders.service';


@Controller('api_headers')
export class ApiheadersController {
  private apiheadersService: ApiheadersService;

  constructor( ) {
    this.apiheadersService = new ApiheadersService(new DatabaseService());
  }

  @Post()
  create(@Body() createApiheadersDto: Prisma.api_headersCreateInput) {
    return this.apiheadersService.create({
      data: createApiheadersDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.apiheadersService.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.apiheadersService.findUniqueOrThrow({
      where: {
        headerid: id,
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateApiheadersDto: Prisma.api_headersUpdateInput) {
    return this.apiheadersService.update({
      where: { 
        headerid: id, 
      }, 
      data: updateApiheadersDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiheadersService.delete({
      where: {
        headerid: id,
      }
    });
  }
}