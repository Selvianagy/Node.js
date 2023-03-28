const fs = require("fs");
var http = require('http')
//-------------------isexist function----------------------
function isexist() {
  if (!fs.existsSync("./info.json")) {
    console.log("Database is not exists :(( , will create now! ");
    fs.writeFileSync("./info.json", JSON.stringify([]));
  }
}
//-------------------readFile function----------------------
function readFile() {
    const todostring = fs.readFileSync("./info.json", "utf-8");
    const todolist = JSON.parse(todostring);
    return todolist;
}
//-------------------write function------------------------
function writeInFile(data){
  fs.writeFileSync("./info.json",JSON.stringify(data,null,2))
}
//-------------------add function--------------------------
function add(data) {
    isexist();
    const todolist = readFile();
    let flag = 0;
    todolist.map((elm) => {
      if (data.email == elm.email ) {
        flag = 1;
      }
    });
    if (!flag) {
      todolist.push(data);
      writeInFile(todolist);
      return false;
    } else {
      return true
    }
    
}
// -----------------check function-----------------------
function check(data) {
    isexist();
    const todolist = readFile();
    let flag = 0;
    let msg='';
    var element;
    todolist.map((elm) => {
      if (data.email == elm.email && data.pass==elm.pass) {
        flag = 1;
        element=elm;
      }
      else if(data.email != elm.email && data.pass==elm.pass){
        msg="you entered wrong email"
      }
      else if(data.email == elm.email && data.pass!=elm.pass){
        msg="you entered wrong password"
      }
    });
    if (!flag&&msg=='') {
      return false;
    }else if(!flag&&msg!=''){
      return msg
    }
     else {
      return JSON.stringify(element)
    }

  }

//-----------------requestbody----------------------

//------------------module export---------------------------
module.exports = {
    add,
    check,
    
};