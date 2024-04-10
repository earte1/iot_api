/*import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import axios from 'axios';
import * as dotenv from 'dotenv';

@Injectable()
export class AuthguardGuard implements CanActivate {

  canActivate(context: ExecutionContext)
    : Promise<boolean | Promise<boolean> | Observable<boolean>> {
    dotenv.config();
    const api_host = process.env.HOST_API;

    const req = context.switchToHttp().getRequest() as Request;
    const response = context.switchToHttp().getResponse() as Response;
    try {
      const apiKey = req.headers['as-securite']; // Obtén el valor del encabezado 'as-securite'
      console.log(apiKey, `${api_host}/api/v2/ApiKey/keyvalidate`, process.env.EMPRESA_ID)
      if (!apiKey) {
        throw new HttpException('El encabezado necesario no se encontró', HttpStatus.UNAUTHORIZED);
      }

      // Realiza una solicitud a la API externa para validar el encabezado
      axios.post(
        `${api_host}/api/v2/ApiKey/keyvalidate`,
        { keyValue: apiKey, EmpresaId: process.env.EMPRESA_ID })
        .then((respuest: any) => {
          if (respuest.status !== 200) {
            return false;
          }
          return true;
        });
      ;
    } catch (error) {
      throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED);
    }

    //return true;
  }
}
*/
import { 
  CanActivate, 
  ExecutionContext, 
  HttpException, 
  HttpStatus, 
  Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

@Injectable()
export class AuthguardGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    dotenv.config();
    const api_host = process.env.HOST_API;

    const req = context.switchToHttp().getRequest() as Request;
    //const response = context.switchToHttp().getResponse() as Response;
    try {
      const apiKey = req.headers['as-securite']; // Obtén el valor del encabezado 'as-securite'
      //console.log(apiKey, `${api_host}/api/v2/ApiKey/keyvalidate`, process.env.EMPRESA_ID)
      if (!apiKey) {
        throw new HttpException('El encabezado necesario no se encontró', HttpStatus.UNAUTHORIZED);
      }

      // Realiza una solicitud a la API externa para validar el encabezado
      const response = await axios.post(
        `${api_host}/api/v2/ApiKey/keyvalidate`,
        { keyValue: apiKey, EmpresaId: process.env.EMPRESA_ID });
        console.log(response.data)
      return response.status === 200;
    } catch (error) {
      throw new HttpException('No autorizado', HttpStatus.UNAUTHORIZED);
    }
  }
}

