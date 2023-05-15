/** парсинг json в javascript объект **/
const jsonString = `{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`
const data = JSON.parse(jsonString)
//console.log(data)
const obj = data.list
const result = [
    {name:obj[0].name, age: Number(obj[0].age), prof: obj[0].prof,},
    {name:obj[1].name, age: Number(obj[1].age), prof: obj[1].prof,},
]
console.log(result)