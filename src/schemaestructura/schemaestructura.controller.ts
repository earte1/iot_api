import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';
import { SchemaestructuraService } from './schemaestructura.service';


@Controller('tipoequipo_schemas_estructura')
export class SchemaestructuraController {
  private schemaestructuraService: SchemaestructuraService;

  constructor( ) {
    this.schemaestructuraService = new SchemaestructuraService(new DatabaseService());
  }

  @Post()
  create(@Body() createSchemaestructuraDto: Prisma.tipoequipo_schemas_estructuraCreateInput) {
    return this.schemaestructuraService.create({
      data: createSchemaestructuraDto
  });
  }

  @Get()
  findAll() {
    //console.log(process.env.EMPRESA_ID)
    return this.schemaestructuraService.findMany();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //console.log(id, process.env.EMPRESA_ID)
    return this.schemaestructuraService.findUniqueOrThrow({
      where: {
        tiposchemaid: id,
      }
    });
  }

  @Patch(':id')
  update(@Param('id') id: string, 
    @Body() updateSchemaestructuraDto: Prisma.tipoequipo_schemas_estructuraUpdateInput) {
    return this.schemaestructuraService.update({
      where: { 
        tiposchemaid: id,  
      }, 
      data: updateSchemaestructuraDto 
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schemaestructuraService.delete({
      where: {
        tiposchemaid: id,
      }
    });
  }
}
