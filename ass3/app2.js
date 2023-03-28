var http = require('http')
var fs = require('fs')
const { parse } = require('querystring');
const mainfile = require("./function");
var body="";

http.createServer(function(req, res){
	req.on("data", (chunk) => {
        body=""
        body += chunk.toString();
    });
    req.on('end', function () {
            if(req.url==='/')
            {
                res.writeHead(200, {'content-type': "text/html"})
                var html = fs.readFileSync('homePage.html')
                res.write(html)
            }
            else if(req.url==='/signup' && req.method==='GET' ){
                res.writeHead(200, {'content-type': "text/html"})
                 var html = fs.readFileSync('Register.html')
                res.write(html)
            }
            else if(req.url==='/Registered' && req.method==='GET'){
                res.writeHead(200, {'content-type': "text/html"})
                 var html = fs.readFileSync('login.html')
                res.write(html)
            }
            else if(req.url==='/Registered' && req.method==='POST' ){
                    var jsonObj = parse(body);
                   var data= mainfile.add(jsonObj)
                   console.log(data)
                   if(!data){
                         res.writeHead(200, {'content-type': "text/html"})
                         var html = fs.readFileSync('login.html')
                        res.write(html)
                   }else{
                    res.write("email already exist")
                   }
                
            }
            else if(req.url==='/login' && req.method==='POST'){
        
                    var Obj = parse(body);
                    console.log(Obj)
                    var result= mainfile.check(Obj);
                    
                if(result==false){
                    res.writeHead(404)
                    res.write("you entered email doesn’t exist please signup")
                }else if(result=="you entered wrong email"||result=="you entered wrong password"){
                    res.writeHead(404)
                    res.write(result)
                }
                else{
                    var jsonm = JSON.parse(result);
                  //  console.log(jsonm)
                    res.writeHead(200, {'content-type': "text/html"})
                    var html = fs.readFileSync(__dirname+'/profile.html','utf8');
                    html = html.replace('{name}', jsonm.name)

                    res.end(html)
                }
    
            }else
            {
                    res.writeHead(404)
                    res.write('error page not found!')
            }
		    res.end()

    });
}).listen(20096)
