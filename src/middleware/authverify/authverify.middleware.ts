import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  
  async use(req: Request, res: Response, next: NextFunction) {
    dotenv.config();
    const api_host = process.env.HOST_API;
    try {
      const apiKey = req.headers['as-securite']; // Obtén el valor del encabezado 'as-securite'
      console.log(apiKey, `${api_host}/api/v2/ApiKey/keyvalidate`, process.env.EMPRESA_ID)
      if (!apiKey) {
        throw new HttpException('El encabezado necesario no se encontró', HttpStatus.UNAUTHORIZED);
      }

      // Realiza una solicitud a la API externa para validar el encabezado
      const response = await axios.post(
        `${api_host}/api/v2/ApiKey/keyvalidate`, 
        {keyValue: apiKey, EmpresaId: process.env.EMPRESA_ID});
      if (response.status !== 200) {
        throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED);
      }

      // Si todo está bien, permite que la solicitud continúe
      next();
    } catch (error) {
      next(error);
    }
  }
}
