-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "compartido";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "configuracion";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "custom";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "seguridad";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "transaccion";

-- CreateTable
CREATE TABLE "compartido"."accion" (
    "accionid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150),
    "tipoaccion" VARCHAR(128),

    CONSTRAINT "accion_pkey" PRIMARY KEY ("accionid")
);

-- CreateTable
CREATE TABLE "compartido"."api" (
    "apiid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "endpoint" VARCHAR(2048) NOT NULL,
    "requiere_headhttp" BOOLEAN DEFAULT false,
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "api_pkey" PRIMARY KEY ("apiid")
);

-- CreateTable
CREATE TABLE "compartido"."evento" (
    "eventoid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "equipoid" VARCHAR(128) NOT NULL,
    "fecha" DATE NOT NULL,
    "es_coneccion" BOOLEAN NOT NULL,
    "detalle_mensaje" VARCHAR(4000),

    CONSTRAINT "evento_pkey" PRIMARY KEY ("eventoid")
);

-- CreateTable
CREATE TABLE "compartido"."api_headers" (
    "headerid" VARCHAR(128) NOT NULL,
    "apiid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "valor" VARCHAR(4000),
    "valor_fijo" BOOLEAN NOT NULL DEFAULT true,
    "orden" INTEGER DEFAULT 0,

    CONSTRAINT "api_headers_pkey" PRIMARY KEY ("headerid")
);

-- CreateTable
CREATE TABLE "compartido"."api_metodos" (
    "metodoid" VARCHAR(128) NOT NULL,
    "apiid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "metodo_http" VARCHAR(50) NOT NULL,
    "requiere_content_type" BOOLEAN NOT NULL DEFAULT false,
    "content_type" VARCHAR(512),
    "tiene_parametros" BOOLEAN DEFAULT false,
    "cantidad_parametros" INTEGER NOT NULL DEFAULT 0,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "api_metodos_pkey" PRIMARY KEY ("metodoid")
);

-- CreateTable
CREATE TABLE "compartido"."equipo_entrada_salida" (
    "entrada_salidaid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "tipoequipoid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "numero_pin" VARCHAR(14),
    "es_entrada" BOOLEAN,
    "es_digital" BOOLEAN,

    CONSTRAINT "equipo_entrada_salida_pkey" PRIMARY KEY ("entrada_salidaid")
);

-- CreateTable
CREATE TABLE "compartido"."schema_equipo" (
    "equipo_schemaid" VARCHAR(128) NOT NULL,
    "tipoequipoid" VARCHAR(128) NOT NULL,
    "nombre_campo" VARCHAR(50) NOT NULL,
    "permite_nulo" BOOLEAN NOT NULL DEFAULT true,
    "tipo_dato" VARCHAR(50),
    "orden" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "schema_equipo_pkey" PRIMARY KEY ("equipo_schemaid")
);

-- CreateTable
CREATE TABLE "compartido"."tarea" (
    "taskid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "ubicacionid" VARCHAR(128) NOT NULL,
    "periodicidad" VARCHAR(1) DEFAULT 'D',
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "tarea_pkey" PRIMARY KEY ("taskid")
);

-- CreateTable
CREATE TABLE "compartido"."tarea_dia" (
    "detalleid" VARCHAR(128) NOT NULL,
    "tareaid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "numero_dia" SMALLINT NOT NULL DEFAULT 1,
    "hora" TIME(6) NOT NULL,
    "comandoid" VARCHAR(128),
    "comando" TEXT,
    "tipoequipoid" VARCHAR(128),
    "activo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "tarea_dia_pkey" PRIMARY KEY ("detalleid")
);

-- CreateTable
CREATE TABLE "compartido"."tarea_ubicacion" (
    "tarea_ubicacionid" VARCHAR(128) NOT NULL,
    "tareaid" VARCHAR(128) NOT NULL,
    "ubicacionid" VARCHAR(128) NOT NULL,
    "activo" BOOLEAN DEFAULT true,

    CONSTRAINT "tarea_ubicacion_pkey" PRIMARY KEY ("tarea_ubicacionid")
);

-- CreateTable
CREATE TABLE "compartido"."tipo_acciones" (
    "tipoaccionid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(100),
    "aplica_equipo" BOOLEAN NOT NULL DEFAULT false,
    "codigo_sql" BOOLEAN DEFAULT true,
    "codigo_js" BOOLEAN DEFAULT false,

    CONSTRAINT "tipo_acciones_pkey" PRIMARY KEY ("tipoaccionid")
);

-- CreateTable
CREATE TABLE "compartido"."tipoequipo" (
    "tipoequipoid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "descripcion" VARCHAR(500),
    "puede_registrar_multi_datos" BOOLEAN NOT NULL,
    "activo" BOOLEAN NOT NULL,
    "tiponotificacionid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "puede_recibir_comandos" BOOLEAN DEFAULT false,
    "maneja_calendario" BOOLEAN DEFAULT false,
    "calendario_individual" BOOLEAN DEFAULT false,
    "minutos_max_para_olvidar" INTEGER DEFAULT 0,
    "maneja_esquema_pines" BOOLEAN DEFAULT false,
    "numeros_entradas_digitales" INTEGER DEFAULT 0,
    "numero_entregas_analogas" INTEGER DEFAULT 1,
    "numero_salidas" INTEGER DEFAULT 1,
    "tiposchemaid" VARCHAR(128) NOT NULL,
    "permite_campos" BOOLEAN DEFAULT false,
    "envio_constante_dotos" BOOLEAN DEFAULT false,
    "numero_segundos_entre_enviodatos" INTEGER DEFAULT 0,
    "modelo_dispositivo" VARCHAR(250),
    "marca_dispositivo" VARCHAR(250),

    CONSTRAINT "pk_tipotiempo" PRIMARY KEY ("tipoequipoid")
);

-- CreateTable
CREATE TABLE "compartido"."tipoequipo_schemas_estructura" (
    "tiposchemaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(200) NOT NULL,
    "objeto" BOOLEAN DEFAULT false,
    "activo" BOOLEAN DEFAULT true,
    "contiene_campos" BOOLEAN DEFAULT false,

    CONSTRAINT "tipo_schemas_data_pkey" PRIMARY KEY ("tiposchemaid")
);

-- CreateTable
CREATE TABLE "configuracion"."departamento" (
    "departamentoid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "activo" BOOLEAN NOT NULL,

    CONSTRAINT "pk_departamento" PRIMARY KEY ("departamentoid")
);

-- CreateTable
CREATE TABLE "configuracion"."empresa" (
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "rtn" VARCHAR(50) NOT NULL,
    "direccion" VARCHAR(250) NOT NULL,
    "provincia" VARCHAR(50) NOT NULL,
    "ciudad" VARCHAR(150) NOT NULL,
    "telefono" VARCHAR(50),
    "email" VARCHAR(150),
    "activo" BOOLEAN NOT NULL,
    "tienesucursal" BOOLEAN NOT NULL,
    "responsable" VARCHAR(150),

    CONSTRAINT "pk_empresa" PRIMARY KEY ("empresaid")
);

-- CreateTable
CREATE TABLE "configuracion"."empresaconfiguracion" (
    "empresaconfid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "registrarlog" BOOLEAN NOT NULL,
    "registrarlog_contenido" BOOLEAN NOT NULL,
    "diasalmacenarlog" SMALLINT NOT NULL,
    "puedegenerarlinkmensaje" BOOLEAN NOT NULL,

    CONSTRAINT "pk_empresaconfiguracion" PRIMARY KEY ("empresaconfid")
);

-- CreateTable
CREATE TABLE "configuracion"."equipo" (
    "equipoid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "ubicacionid" VARCHAR(128),
    "sucursalid" VARCHAR(128) NOT NULL,
    "tipoequipoid" VARCHAR(128) NOT NULL,
    "activo" BOOLEAN NOT NULL,
    "notas" VARCHAR(500),
    "fecharegistro" TIMESTAMP(3) NOT NULL,
    "descripcionequipo" VARCHAR(4000),

    CONSTRAINT "pk_equipo" PRIMARY KEY ("equipoid")
);

-- CreateTable
CREATE TABLE "configuracion"."novedadregistro" (
    "novedadregistroid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "registroid" VARCHAR(128) NOT NULL,
    "empleadoid" VARCHAR(128) NOT NULL,
    "sucursalid" VARCHAR(128) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "horainicio" TIME(6) NOT NULL,
    "horafin" TIME(6),
    "detalleactividad" VARCHAR(4000),
    "finalizo" BOOLEAN NOT NULL,
    "trasladar" BOOLEAN NOT NULL,

    CONSTRAINT "pk_novedadregistro" PRIMARY KEY ("novedadregistroid")
);

-- CreateTable
CREATE TABLE "configuracion"."rol" (
    "rolid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "descripcion" VARCHAR(500),
    "recibenotificacion" BOOLEAN NOT NULL,
    "puedemodificar" BOOLEAN NOT NULL,
    "puedeaprobar" BOOLEAN NOT NULL,
    "esresponsableubicacion" BOOLEAN NOT NULL,

    CONSTRAINT "pk_rol" PRIMARY KEY ("rolid")
);

-- CreateTable
CREATE TABLE "configuracion"."rolportipoubicacion" (
    "roltipoubicacionid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "tipoubicacionid" VARCHAR(128) NOT NULL,
    "rolid" VARCHAR(128) NOT NULL,
    "cantidad" SMALLINT NOT NULL,

    CONSTRAINT "pk_rolportipoubicacion" PRIMARY KEY ("roltipoubicacionid")
);

-- CreateTable
CREATE TABLE "configuracion"."sucursal" (
    "sucursalid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "direccion" VARCHAR(150),
    "provincia" VARCHAR(150),
    "ciudad" VARCHAR(150),
    "telefono" VARCHAR(50),
    "activa" BOOLEAN NOT NULL,
    "manejainstanciapropia" BOOLEAN NOT NULL,

    CONSTRAINT "pk_sucursal" PRIMARY KEY ("sucursalid")
);

-- CreateTable
CREATE TABLE "configuracion"."tiponotificacion" (
    "tiponotificacionid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "descripcion" VARCHAR(500),
    "requiereapi" BOOLEAN NOT NULL,
    "apiendpoint" VARCHAR(500),
    "apikey" VARCHAR(500),
    "httpheader" VARCHAR(100),
    "requiereservercorreo" BOOLEAN NOT NULL,
    "emailserver" VARCHAR(500),
    "emailuser" VARCHAR(50),
    "emailpassword" VARCHAR(500),
    "emailssl" BOOLEAN,
    "emailport" INTEGER,

    CONSTRAINT "pk_tiponotificacion" PRIMARY KEY ("tiponotificacionid")
);

-- CreateTable
CREATE TABLE "configuracion"."tipoubicacion" (
    "tipoubicacionid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "descripcion" VARCHAR(500),
    "numerorolesasig" SMALLINT NOT NULL,

    CONSTRAINT "pk_tipoubicacion" PRIMARY KEY ("tipoubicacionid")
);

-- CreateTable
CREATE TABLE "configuracion"."ubicacion" (
    "ubicacionid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "sucursalid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "departamentoid" VARCHAR(128) NOT NULL,
    "descripcion" VARCHAR(250),
    "activo" BOOLEAN NOT NULL,
    "ubicacionpadreid" VARCHAR(128),
    "tienehijos" BOOLEAN NOT NULL,

    CONSTRAINT "pk_ubicacion" PRIMARY KEY ("ubicacionid")
);

-- CreateTable
CREATE TABLE "configuracion"."ubicacionempleado" (
    "ubicacionempleado" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "ubicacionid" VARCHAR(128) NOT NULL,
    "empleadoid" VARCHAR(128) NOT NULL,
    "rolid" VARCHAR(128) NOT NULL,
    "sucursalid" VARCHAR(128),

    CONSTRAINT "pk_ubicacionempleado" PRIMARY KEY ("ubicacionempleado")
);

-- CreateTable
CREATE TABLE "custom"."empleado" (
    "empleadoid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "sucursalid" VARCHAR(128) NOT NULL,
    "primernombre" VARCHAR(50) NOT NULL,
    "segundonombre" VARCHAR(50),
    "primerapellido" VARCHAR(50) NOT NULL,
    "segundoapellido" VARCHAR(50),
    "codigo" INTEGER NOT NULL,
    "puestoid" VARCHAR(128) NOT NULL,
    "telefono" VARCHAR(50) NOT NULL,
    "correoelectronico" VARCHAR(100),
    "tienewhatsapp" BOOLEAN,
    "fechacontratacion" TIMESTAMP(3) NOT NULL,
    "fechanacimiento" TIMESTAMP(3) NOT NULL,
    "fecharetiro" TIMESTAMP(3),
    "activo" BOOLEAN NOT NULL,

    CONSTRAINT "pk_empleado" PRIMARY KEY ("empleadoid")
);

-- CreateTable
CREATE TABLE "custom"."puesto" (
    "puestoid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "descripcion" VARCHAR(150),
    "activo" BOOLEAN NOT NULL,

    CONSTRAINT "pk_puesto" PRIMARY KEY ("puestoid")
);

-- CreateTable
CREATE TABLE "custom"."registrotiempo" (
    "registroid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "sucursalid" VARCHAR(128) NOT NULL,
    "ubicacionid" VARCHAR(128) NOT NULL,
    "numero" BIGINT NOT NULL,
    "fecharegistro" TIMESTAMP(3) NOT NULL,
    "horainicio" TIMESTAMP(3) NOT NULL,
    "horafinal" TIMESTAMP(3),
    "tiempoid" VARCHAR(128) NOT NULL,
    "estado" SMALLINT NOT NULL,
    "subcategoriaid" VARCHAR(128),
    "codigoempleado" INTEGER,
    "masivo" BOOLEAN,
    "fechaautorizado" TIMESTAMP(3),
    "codigoautorizador" INTEGER,
    "jornada" INTEGER,
    "codigosupervisor" INTEGER,
    "observacion" VARCHAR(4000),
    "razonrechazo" VARCHAR(4000),
    "registroapi" BOOLEAN DEFAULT false,

    CONSTRAINT "pk_registrotiempo" PRIMARY KEY ("registroid")
);

-- CreateTable
CREATE TABLE "custom"."tiempo" (
    "tiempoid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "codigo" VARCHAR(20) NOT NULL,
    "descripcion" VARCHAR(150),
    "notificar" BOOLEAN NOT NULL,
    "tienesubcategoria" BOOLEAN NOT NULL,
    "enextra" BOOLEAN NOT NULL,
    "tipopago" VARCHAR(50),

    CONSTRAINT "pk_tiempo" PRIMARY KEY ("tiempoid")
);

-- CreateTable
CREATE TABLE "transaccion"."numerodocumento" (
    "id" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "sucursalid" VARCHAR(128) NOT NULL,
    "numero" BIGINT NOT NULL,
    "tipodocumento" VARCHAR(2) NOT NULL,

    CONSTRAINT "pk_numerodocumento" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaccion"."tipoequipotiempo" (
    "tipoequipotiempoid" VARCHAR(128) NOT NULL,
    "empresaid" VARCHAR(128) NOT NULL,
    "tipoequipoid" VARCHAR(128) NOT NULL,
    "tiempoid" VARCHAR(128) NOT NULL,

    CONSTRAINT "pk_tipoequipotiempo" PRIMARY KEY ("tipoequipotiempoid")
);

-- CreateIndex
CREATE INDEX "fki_forenky_fk1" ON "compartido"."accion"("empresaid");

-- AddForeignKey
ALTER TABLE "compartido"."accion" ADD CONSTRAINT "forenky_fk1" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."api" ADD CONSTRAINT "forenky_fk1" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."evento" ADD CONSTRAINT "empresa_fk01" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."evento" ADD CONSTRAINT "fk_equipo_fk02" FOREIGN KEY ("equipoid") REFERENCES "configuracion"."equipo"("equipoid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."api_headers" ADD CONSTRAINT "forenki_fk01" FOREIGN KEY ("apiid") REFERENCES "compartido"."api"("apiid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "compartido"."api_metodos" ADD CONSTRAINT "forenky_fk01" FOREIGN KEY ("apiid") REFERENCES "compartido"."api"("apiid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."api_metodos" ADD CONSTRAINT "forenky_fk02" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."equipo_entrada_salida" ADD CONSTRAINT "equipo_entrada_salida_fk" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."equipo_entrada_salida" ADD CONSTRAINT "equipo_entrada_salida_fk1" FOREIGN KEY ("tipoequipoid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."schema_equipo" ADD CONSTRAINT "tipoequipo_fk01" FOREIGN KEY ("tipoequipoid") REFERENCES "compartido"."tipoequipo"("tipoequipoid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."tarea" ADD CONSTRAINT "tarea_fk" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."tarea_dia" ADD CONSTRAINT "tarea_dia_fk" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."tarea_dia" ADD CONSTRAINT "tarea_dia_fk1" FOREIGN KEY ("tareaid") REFERENCES "compartido"."tarea"("taskid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."tarea_dia" ADD CONSTRAINT "tarea_dia_fk2" FOREIGN KEY ("tipoequipoid") REFERENCES "compartido"."tipoequipo"("tipoequipoid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."tipoequipo" ADD CONSTRAINT "tipoequipo_fk" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "compartido"."tipoequipo" ADD CONSTRAINT "tipoequipo_fk1" FOREIGN KEY ("tiposchemaid") REFERENCES "compartido"."tipoequipo_schemas_estructura"("tiposchemaid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "configuracion"."departamento" ADD CONSTRAINT "fk_departamento_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."empresaconfiguracion" ADD CONSTRAINT "fk_empresaconfiguracion_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."equipo" ADD CONSTRAINT "fk_equipo_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."equipo" ADD CONSTRAINT "fk_equipo_sucursal" FOREIGN KEY ("sucursalid") REFERENCES "configuracion"."sucursal"("sucursalid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."equipo" ADD CONSTRAINT "fk_equipo_ubicacion" FOREIGN KEY ("ubicacionid") REFERENCES "configuracion"."ubicacion"("ubicacionid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."novedadregistro" ADD CONSTRAINT "fk_novedadregistro_empleado" FOREIGN KEY ("empleadoid") REFERENCES "custom"."empleado"("empleadoid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."novedadregistro" ADD CONSTRAINT "fk_novedadregistro_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."novedadregistro" ADD CONSTRAINT "fk_novedadregistro_registrotiempo" FOREIGN KEY ("registroid") REFERENCES "custom"."registrotiempo"("registroid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."novedadregistro" ADD CONSTRAINT "fk_novedadregistro_sucursal" FOREIGN KEY ("sucursalid") REFERENCES "configuracion"."sucursal"("sucursalid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."rol" ADD CONSTRAINT "fk_rol_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."rolportipoubicacion" ADD CONSTRAINT "fk_rolportipoubicacion_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."rolportipoubicacion" ADD CONSTRAINT "fk_rolportipoubicacion_rol" FOREIGN KEY ("rolid") REFERENCES "configuracion"."rol"("rolid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."rolportipoubicacion" ADD CONSTRAINT "fk_rolportipoubicacion_tipoubicacion" FOREIGN KEY ("tipoubicacionid") REFERENCES "configuracion"."tipoubicacion"("tipoubicacionid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."sucursal" ADD CONSTRAINT "fk_sucursal_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."tiponotificacion" ADD CONSTRAINT "fk_tiponotificacion_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."tipoubicacion" ADD CONSTRAINT "fk_tipoubicacion_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."ubicacion" ADD CONSTRAINT "fk_ubicacion_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."ubicacion" ADD CONSTRAINT "fk_ubicacion_sucursal" FOREIGN KEY ("sucursalid") REFERENCES "configuracion"."sucursal"("sucursalid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."ubicacionempleado" ADD CONSTRAINT "fk_ubicacionempleado_empleado" FOREIGN KEY ("empleadoid") REFERENCES "custom"."empleado"("empleadoid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."ubicacionempleado" ADD CONSTRAINT "fk_ubicacionempleado_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "configuracion"."ubicacionempleado" ADD CONSTRAINT "fk_ubicacionempleado_ubicacion" FOREIGN KEY ("ubicacionid") REFERENCES "configuracion"."ubicacion"("ubicacionid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "custom"."empleado" ADD CONSTRAINT "fk_empleado_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "custom"."empleado" ADD CONSTRAINT "fk_empleado_sucursal" FOREIGN KEY ("sucursalid") REFERENCES "configuracion"."sucursal"("sucursalid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "custom"."puesto" ADD CONSTRAINT "fk_puesto_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "custom"."registrotiempo" ADD CONSTRAINT "fk_registrotiempo_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "custom"."registrotiempo" ADD CONSTRAINT "fk_registrotiempo_sucursal" FOREIGN KEY ("sucursalid") REFERENCES "configuracion"."sucursal"("sucursalid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "custom"."registrotiempo" ADD CONSTRAINT "fk_registrotiempo_tiempo" FOREIGN KEY ("tiempoid") REFERENCES "custom"."tiempo"("tiempoid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "custom"."registrotiempo" ADD CONSTRAINT "fk_registrotiempo_ubicacion" FOREIGN KEY ("ubicacionid") REFERENCES "configuracion"."ubicacion"("ubicacionid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion"."numerodocumento" ADD CONSTRAINT "fk_numerodocumento_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion"."numerodocumento" ADD CONSTRAINT "fk_numerodocumento_sucursal" FOREIGN KEY ("sucursalid") REFERENCES "configuracion"."sucursal"("sucursalid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion"."tipoequipotiempo" ADD CONSTRAINT "fk_tipoequipotiempo_empresa" FOREIGN KEY ("empresaid") REFERENCES "configuracion"."empresa"("empresaid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion"."tipoequipotiempo" ADD CONSTRAINT "fk_tipoequipotiempo_tiempo" FOREIGN KEY ("tiempoid") REFERENCES "custom"."tiempo"("tiempoid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion"."tipoequipotiempo" ADD CONSTRAINT "fk_tipoequipotiempo_tipoequipo" FOREIGN KEY ("tipoequipoid") REFERENCES "compartido"."tipoequipo"("tipoequipoid") ON DELETE NO ACTION ON UPDATE NO ACTION;
