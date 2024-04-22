import { PrismaClient } from "@prisma/client";
//import { PrismaService } from "../prisma.service";
import { DatabaseService } from "./database.service";
import { Accepted, BadRequestError, Created, Ok } from "src/shared/funciones";
//import { Prisma, PrismaClient } from '@prisma/client'


export class GenericRepository<K extends Exclude<keyof PrismaClient, symbol | `$${string}`>> {
  public model!: K

  constructor(private readonly prisma: DatabaseService) {
    //this.model= PrismaClient<K>
  }

  async aggregate(...args: Parameters<PrismaClient[K]['aggregate']>) {
    try {
      const add = await (this.prisma[this.model].aggregate as any)(...args);
      return Created(add);
    } catch (error) {
      return BadRequestError(error)
    }
  }

  /**
   * Permite retornar el conteo de registros de una entidad
   * @param args 
   * @returns listado de registros, que cumplen las condiciones
   */
  async count(...args: Parameters<PrismaClient[K]['count']>) {
    try {
      const count = await (this.prisma[this.model].count as any)(...args);
      return Accepted(count);
    } catch (error) {
      return BadRequestError(error)
    }
  }

  /**
   * Permite agregar un registro a la entidad especificada
   * @param args 
   * @returns Retorna una instancia del registro agregado
   */
  async create(...args: Parameters<PrismaClient[K]['create']>) {
    try {
      const add = await (this.prisma[this.model].create as any)(...args);
      return Created(add);
    } catch (error) {
      return BadRequestError(error)
    }
  }

  /**
   * Permite agregar mas de un registro de forma masiva
   * @param args 
   * @returns Retorna una instancia de los datos agregados
   */
  async createMany(...args: Parameters<PrismaClient[K]['createMany']>) {
    try {
      const add = await (this.prisma[this.model].createMany as any)(...args);
      return Created(add);
    } catch (error) {
      return BadRequestError(error)
    }
  }

  /**
   * Permite eliminar un registro de la entidad siempre que cumpla las  condiciones pasadas como criterios
   * @param args 
   * @returns instancia del registro eliminado
   */
  async delete(...args: Parameters<PrismaClient[K]['delete']>) {
    try {
      const del = await (this.prisma[this.model].delete as any)(...args);
      return Accepted(del);
    } catch (error) {
      return BadRequestError(error)
    }
  }

  /**
   * Retorna el primer registro de una busqueda
   * @param args argumentos de busqueda
   * @returns Primer registro que coincida con la busqueda
   */
  async findFirst(...args: Parameters<PrismaClient[K]['findFirst']>) {
    try {
      const fnd = await  (this.prisma[this.model].findFirst as any)(...args);
      return Ok(fnd);
    } catch (error) {
      return BadRequestError(error)
    }
  }

  /**
   * Retorna el primer registro que coincida con el argumento de busqueda o retorna una excepcion
   * @param args argumento de busqueda
   * @returns Registro encontrado o una excepcion
   */
  async findFirstOrThrow(...args: Parameters<PrismaClient[K]['findFirstOrThrow']>) {
    try {
      const fnd = await (this.prisma[this.model].findFirstOrThrow as any)(...args);
      return Ok(fnd);
    } catch (error) {
      return BadRequestError(error)
    }
  }

  /**
   * Retorna todos los registros que coincidan con los argumentos de busqueda
   * @param args argumentos de busqueda
   * @returns Listado de registros que coinciden cn la busqueda
   */
  async findMany(...args: Parameters<PrismaClient[K]['findMany']>) {
    try {
      const rr = await (this.prisma[this.model].findMany as any)(...args);
      return Ok(rr);
    } catch (error) {
      return BadRequestError(error)
    }

  }

  /**
   * Retorna un unico registro en una busqueda
   * @param args 
   * @returns 
   */
  async findUnique(...args: Parameters<PrismaClient[K]['findUnique']>) {
    try {
      const xx = await (this.prisma[this.model].findUnique as any)(...args);
      return Ok(xx);
    } catch (error) {
      return BadRequestError(error)
    }

  }

  /***
   * Retorna un unico registro de de una busqueda especificada
   */
  async findUniqueOrThrow(...args: Parameters<PrismaClient[K]['findUniqueOrThrow']>) {
    try {
      const fnd = await  (this.prisma[this.model].findUniqueOrThrow as any)(...args);
      return Ok(fnd);
    } catch (error) {
      return BadRequestError(error)
    }
  }

  /**
   * Permite actualizar un registro especifico
   * @param args 
   * @returns 
   */
  async update(...args: Parameters<PrismaClient[K]['update']>) {
    try {
      const upd = await (this.prisma[this.model].update as any)(...args);
      return Accepted(upd);
    } catch (error) {
      return BadRequestError(error)
    }
  }

  /**
   * Permite actualizar multiples registros de una entidad
   * @param args 
   * @returns 
   */
  async updateMany(...args: Parameters<PrismaClient[K]['updateMany']>) {
    try {
      const upd = await  (this.prisma[this.model].updateMany as any)(...args);
      return Accepted(upd);
    } catch (error) {
      return BadRequestError(error)
    }
  }

  /**
   * Permite agregar uno o varios registros
   * @param args 
   * @returns 
   */
  async upsert(...args: Parameters<PrismaClient[K]['upsert']>) {
    try {
      const ins = await  (this.prisma[this.model].upsert as any)(...args);
      return Created(ins);
    } catch (error) {
      return BadRequestError(error)
    }
  }
}