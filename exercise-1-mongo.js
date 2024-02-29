/*1.- Colección, asignatura(nombre, profe, cant horas, ) 

db.createCollection("asignaturas")


respuesta APPI:
{ ok: 1 }



2.- añadir 3 documento, (html/css, js, mongodb)

db.asignaturas.insertMany([{nombre:"HTML/CSS",profesor:"Pedro",horas:40},{nombre: "JS",profesor:"Ivan",horas:20},{nombre:"MONGO",profesor:"Dayana",horas:3.5}])


respuesta APPI:
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('65cfb0478b6067cdd0f93b6c'),
    '1': ObjectId('65cfb0478b6067cdd0f93b6d'),
    '2': ObjectId('65cfb0478b6067cdd0f93b6e')
  }
}


3.- buscar las asignaturas que la dio "dayana"

db.asignaturas.find({profesor:"Dayana"})


respuesta APPI:
{
  _id: ObjectId('65cfb0478b6067cdd0f93b6e'),
  nombre: 'MONGO',
  profesor: 'Dayana',
  horas: 3.5
}


4.- buscar las asignaturas con mas de 5 horas

db.asignaturas.find({horas:{$gt:5}})


respuesta APPI:
{
  _id: ObjectId('65cfb0478b6067cdd0f93b6c'),
  nombre: 'HTML/CSS',
  profesor: 'Pedro',
  horas: 40
}
{
  _id: ObjectId('65cfb0478b6067cdd0f93b6d'),
  nombre: 'JS',
  profesor: 'Ivan',
  horas: 20
}
*/

