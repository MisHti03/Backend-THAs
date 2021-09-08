const fs = require("fs");

const program = require("commander");


program.command("mkdir <dirname>").action((dirname) => {
    fs.mkdir(dirname, (err) => {
      console.log(err);
    });
  });
 

  program.command("mkfile <path> <ID> <subject>").action((path,ID,subject) => {
    fs.writeFile(path,JSON.stringify({ID:ID,subject:subject}), (err) => {
      console.log(err);
    });
  }); 
      
program.command("rename <oldpath> <newpath>").action((oldpath, newpath) => {
    fs.rename(oldpath, newpath, (err) => {
      console.log(err);
    });
  });
  
  program.command("appendfile <path> <content>").action((path,content)=>{
    fs.appendFile(path,content,(err)=>{
        console.log(err);
    });
});
program.command("readfile <path>").action((path) => {
  const filecontent = fs.readFileSync(path);
  console.log(JSON.parse(filecontent));
});

program.command("removefile <path>").action((path) => {
  fs.unlink(path, (err) => {
    console.log(err);
  });
});
program.command("removedir <path>").action((path) => {
  fs.rmdir(path, (err) => {
    console.log(err);
  });
});

program.command('update <path> <ID> <subject>').action((path,ID,subject)=>{
  let test= JSON.parse(fs.readFileSync(path));
  test.ID=ID;
  test.subject=subject;
  fs.writeFileSync(path,JSON.stringify(test));
});
  

program.parse(process.argv)