const path=require('path')
 const fs=require('fs')
 
 fs.writeFile('index.html','<h1>Hello World</h1>',(err)=>{
     if (err) throw err;
     console.log(err)
 })
 
 const http=require('http')
 const port=process.env.PORT || 3000
 const server = http.createServer((req,res)=>{
     res.setHeader('Content-type','text/html')
     fs.readFile('./index.html',(err,data)=>{
         if (err){
             res.end()
         } else {
             res.end(data)
         }
     })
 })
 
 server.listen(3000,'localhost',()=>{
     console.log("Hi from Server")
 })