import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { SchemaequipoService } from './schemaequipo.service';


@Controller('schema_equipo')
export class SchemaequipoController {
  private schemaequipoService: SchemaequipoService;

  constructor( ) {
    this.schemaequipoService = new SchemaequipoService(new DatabaseService());
  }

  @Post()
  create(@Body() createSchemaequipoDto: Prisma.schema_equipoCreateInput) {
    return this.schemaequipoService.create({
      data: createSchemaequipoDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.schemaequipoService.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.schemaequipoService.findUniqueOrThrow({
      where: {
        equipo_schemaid: id,
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateSchemaequipoDto: Prisma.schema_equipoUpdateInput) {
    return this.schemaequipoService.update({
      where: { 
        equipo_schemaid: id, 
      }, 
      data: updateSchemaequipoDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schemaequipoService.delete({
      where: {
        equipo_schemaid: id,
      }
    });
  }
}
