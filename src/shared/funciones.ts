

export function Ok(value: any) {
    return {
        codigo: 200,
        message: 'Satisfactorio',
        data: value
    }
}

export function Created(value?: any) {
    return {
        codigo: 201,
        message: 'Se ha creado el recurso',
        data: value
    }
}

export function Accepted(value?: any) {
    return {
        codigo: 202,
        message: 'El cambio fue aceptado',
        data: value
    }
}

export function NotFoundError() {
    return {
        codigo: 404,
        message: 'El  recurso solicitado no existe',
        data: null
    }
}

export function BadRequestError(message: string) {
    return {
        codigo: 400,
        message: `Ha sucedido un error: ${message}`,
        data: null
    }
}

export function UnAuthError() {
    return {
        codigo: 401,
        message: 'Usted no tiene una sesion activa o su token esta expirado o es invalido',
        data: null
    }
}

export function ForbiddenError() {
    return {
        codigo: 403,
        message: 'Usted no esta autorizado para ver u operar este contenido',
        data: null
    }
}

export function TimeOutError() {
    return {
        codigo: 408,
        message: 'Ha excedido el tiempo de espera en la peticion',
        data: null
    }
}