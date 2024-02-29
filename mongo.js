/**********************MONGO***************************** */

/*Tenemos la nube la App donde se guardarán todos los cambios. De ahi también podremos crear bases de datos no SQL o no relacionales. 
Una base de datos NoSQL trabajan los datos en formas de objetos. Se utilizan cuando el volumen de datos es muy grande ya que son mucho mas rapidas que las SQL y mas flexiblesno SQL o no relacionales.
 *Aqui podemos crear Database
 *También las colecciones
 *Create
 
 SE VERÍA DE LA SIGUIENTE FORMA (siempre poniendo : y los sytrings estre comillas)
 
_id: ('65ce5ef6ad801b987e977adb')
nombre: "eduardo"
apellido: "ruiz"
direccion: "barcelona"
edad: 25
 
 */


/*-------------------------TERMINAL----------------------------------------------------*/


/*Ahora lo veremos desde la terminal MONGO
*PARA HACER SALTOS DE LÍNEA SHIFT + ENTER
*CON LA FLECHA HACIA ARRIBA NOS BUSCA LAS SENTENCIAS
En una base de datos se puede crear, modificar, eliminar, consultar...
*PARA BUSCAR EN QUE CARPETA QUEREMOS TRABAJAR INDICAREMOS use Y SALDRÁ UN DESPLEGABLE CON EL NOMBRE DE LAS CARPETAS Y YA SELECCIONAMOS

/*-------------------------CREAR DOCUMENTO----------------------------------------------------*/


/*CREAR UN NUEVO DOCUMENTO
*Para insertar un nuevo indicamos db+nombre de la carpeta+.insertOne (para 1).
*insertAll (para varios)

db.estudiantes.insertOne({nombre: "dayana", apellido:"romero"})  SIEMPRE ENTRE{} DENTRO PONEMOS CLAVE, VALOR. DESDE LA TERMINAL NO ESPECIFICAMOS EL _ID
//se podrían poner espacios, caracteres especiales... entre el VALOR ""


La respuesta de la terminal:
{
  acknowledged: true,                                     //se ha añadido correctamente
  insertedId: ObjectId('65ce6684fbef6abc92cebb63')       //nos da el id
}


/*-------CREAR COLECCION-----------*/


/*db.createCollection(estudiantes)*/


/*----------------------------AÑADIR-------------------------------------------------*/


/*AÑADIR VARIOS
db.estudiantes.insertMany([{nombre: "anacleta", apellido:"rios"}, {nombre: "pedro", apellido:"ramirez"}])     //OBJETOS SEPARADOS POR , AL SER VARIOS ACTÚA COMO JS CON []

La respuesta de la terminal:
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65ce685dfbef6abc92cebb64'),
    '1': ObjectId('65ce685dfbef6abc92cebb65')
  }
}

*/


/*----------------------------MODIFICAR-------------------------------------------------*/


/*MODIFICAR
*Utilizaremos la función update, normalemente modificaremos por rango de valores (modificar varios documentos updateMany)
db.estudiantes.updateMany( 
{nombre:"pedro"},                 //1er parametro un objeto con la condición de los documentos que queremos modificar. En este caso modificamos a la persona que el nombre sea igual a Pedro
{$set:{apellido: "garcia"}}      //2º parametro especificaremos las caracteristicas que queremos modificar siempre con $set:{} y el nuevo valor
)


La respuesta de la terminal:
{
  acknowledged: true,
  insertedId: null,         //ha insertado 0 elementos
  matchedCount: 1,         //ha encontrado 1
  modifiedCount: 1,       //ha modificado 1
  upsertedCount: 0
}

PARA AÑADIR ELEMENTOS O ALGUNA NUEVA CARACTERÍSTICA . UTILIZAREMOS EL .updateMany
Indicaremos el nuevo objeto con $set:{ciudad: "barcelona"}
*/


/*---------MODIFICAR VARIOS-------*/


/*MODIFICAR A VARIOS, PARA HACER ESO TODOS TIENEN QUE TENER ALGO EN COMÚN

db.estudiantes.updateOne(
{nombre:"anacleta"},             //condición del elemento que queremos buscar
{$set:{edad: 60}}            //propiedad que queremos añadir
)


db.estudiantes.updateOne(
{nombre:"eduardo"},
{$set:{edad: 25}}
)

La respuesta de la terminal:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

*/


/*-------------------------BUSCAR----------------------------------------------------*/


/*BUSCAR
*Con la función find()

db.estudiantes.find()                              //ASI NOS BUSCA TODOS LOS ESTUDIANTES QUE TENEMOS CREADOS PORQUE NO LE ESTAMOS ESPEDIFICANDO
{
  _id: ObjectId('65ce5dd1ad801b987e977ada'),
  nombre: 'francisco',
  apellido: 'ramirez'
}
{
  _id: ObjectId('65ce5ef6ad801b987e977adb'),
  nombre: 'eduardo',
  apellido: 'ruiz',
  direccion: 'barcelona'
}

/*PARA BUSCAR UN ELEMENTO:
*Se puede buscar un elemento y eliminar.
*buscar un elemento y modificarlo.


/*---------BUSCAR POR CONDICIÓN O OPERADORES DE COMPARACIÓN-------*/


/*EDAD IGUAL QUE:                       db.estudiantes.find({edad: 40})
/*EDAD MAYOR QUE                        db.estudiantes.find({edad: {$gt: 40}})*/
/*EDAD MENOR QUE                        db.estudiantes.find({edad: {$lt: 40}})*/ 

/*EJEMPLO:
db.estudiantes.find({edad: {$gt: 40}})
{
  _id: ObjectId('65ce5dd1ad801b987e977ada'),
  nombre: 'francisco',
  apellido: 'ramirez',
  edad: 45
}

*/


/*-------------------------ELIMINAR----------------------------------------------------*/


/*NECESITAMOS ESPEFICAR CUAL ES EL ELEMENTO QUE QUEREMOS ELIMINAR*/
/*Podemos eliminar por diferentes valores*/


/*db.estudiantes.deleteOnedb.estudiantes.deleteOne({_id: ObjectId('65ce6684fbef6abc92cebb63') })       


La respuesta de la terminal:
{
  acknowledged: true,
  deletedCount: 1
}


/*---------ELIMINAR VARIOS OBJETOS-------*/


/*Utilizaremos la función:
.deleteMany
EN ESTA FUNCION TAMBIEN ESPEDIFICAREMOS LA CONDICIÓN O LAS CONDICIONES DEL ELEMENTO O ELEMENTOS QUE QUEREMOS ELIMINAR

EJEMPLO DE ELEIMINAR A TODOS LOS NOMBRES O EDADES
db.estudiantes.deleteOnedb.estudiantes.deleteMany({name: "pedro"})
db.estudiantes.deleteOnedb.estudiantes.deleteMany({edad: {$gt: 80}})    //mayores que 80
*/