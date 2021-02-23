//EXCEPTION HANDLING


//throw new Error('error message')
/*
try {
  console.log('Start try block')
  fdsfdsfds;
} catch (err){
  console.log('Erroroooo!', err)
}
*/





//BUFFER
/*
const buf = Buffer.alloc(4)

buf.write('Hey')

console.log(buf.toString())
console.log(buf[0])
console.log(buf[1])
console.log(buf[2])
*/

//STREAMS

/*
const http= require('http')
const fs=require("fs")

const server= http.createServer(function(req, res){
  const stream = fs.createReadStream('test.json')
  stream.pipe(res)

  })

server.listen(3000, ()=>{console.log('Application Started on PORT 3000')})
*/



//EVENT MODULE

/*
const events = require('events')

let ev = new events.EventEmitter();

var c1 = (code, msg)=> console.log(`Got ${code} and ${msg}`)
ev.once('eventOnce', c1 )

//ev.off('eventOnce', c1)

ev.emit("eventOnce", 200, 'ok')
*/


//PATH MODULE
/*
const path = require("path");

file = path.isAbsolute("D:/ReactProject/GAMMA/BackEnd/test.json")
let dir = "/"
file = path.join('D:', '/ReactProject/GAMMA/BackEnd', dir, 'test.json')

file = path.parse('D:/ReactProject/GAMMA/BackEnd/test.json')

file = path.resolve('D:/ReactProject/GAMMA/BackEnd/test.json')



console.log(file)

*/
//ROUTING

/*

const http=require('http');

const routes={
  '/': function index(request, response){
    response.writeHead(200)
    response.end("Node Routing")
  },
  '/aboutus': function aboutus(request, response){
    response.writeHead(200)
    response.end("This is About Page")
  }

}


http.createServer(function(req, res){

if(req.url in routes){
  return routes[req.url](req, res)
}

}).listen(process.env.PORT || 8000)

*/

//WRITE & UPDATING FILES
/*
const fs=require("fs")

const content = "Node Application";

fs.unlink("test.txt", err =>{
  if (err){
    console.log(err)
    return
  }
  console.log("File Removed")
})
*/
/*
fs.writeFile("test.txt", content,{flag:'w+'}, err =>{
  if (err) {
    console.log(err)
    return
  }
  console.log('Successfully Done')
})
*/


/*
const content =[{
  type: 'Node Application'
}]

fs.writeFileSync('test.json', JSON.stringify(content))
*/


//FILES (1:56.26)

/*
const fs=require("fs");

fs.readFile("test.txt", 'utf8', (err, data)=>{
    if (err) throw err;
    console.log(data)
})

const data = fs.readFileSync("test.txt",{encoding:'utf-8', flag:'r' })

console.log(data)

//status of file
fs.stat("test.txt", (err, stats)=>{
  if(err){
    console.error(error)
  }

  console.log(stats.isFile())
  console.log(stats.isDirectory())
  console.log(stats.isSymbolicLink())
  console.log(stats.size)
})
*/

//HTTP POST REQUEST
/*
const axios=require('axios')

const data = JSON.stringify({
  name: 'John',
  job: 'Busy'
})

axios.post(`https://regres.in/api/users`, data)

  .then(res=>{
  console.log(`Status Code: ${res.status}`)
  console.log(`Body: ${JSON.stringify(res.data)}`)
    })
  .catch(err => {
    console.log(err)
  })
*/


//MAKE HTTP REQUEST
/*
const http = require('http')

http.get('http://api.open-notify.org/astros.json',resp =>{
  let data = ''
  resp.on('data', chunk => {
    data += chunk
  })
  resp.on('end', ()=> {
    let jsondata = JSON.parse(data)
    console.log(jsondata)
  })
})
*/

//CREATE SERVER


const http = require('http')

const hostname = 'localhost';
const port = 3000;

http.createServer((req, res)=>{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("Welcome to HTTP Server!!!");
  res.end();
}).listen(port, hostname, ()=>{
  console.log(`Server running at http://${hostname}:${port}`)
})
