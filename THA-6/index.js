const fs = require("fs/promises");

const program = require("commander");


program.command("mkdir <dirname>").action(async(dirname) => {

      await fs.mkdir(dirname);
    });

program.command("mkfile <path> <ID> <subject>").action(async(path,ID,subject) => {

      await fs.writeFile(path,JSON.stringify({ID:ID,subject:subject})); 
     });

program.command("rename <oldpath> <newpath>").action(async(oldpath, newpath) => {
          
    await fs.rename(oldpath, newpath) ;
             
    });

 program.command("readfile <path>").action(async(path) => {
        
    const filecontent =  await fs.readFile(path);
    console.log(JSON.parse(filecontent));
     });

program.command("removefile <path>").action(async(path) => {
    await fs.unlink(path)
  });
  
program.command("removedir <path>").action(async(path) => {
        
    try{
        await fs.rmdir(path) 
       }
    catch(err){
    console.log(err);
    }
    });

 program.command('update <path> <ID> <subject>').action(async(path,ID,subject)=>{
    
    let test2 = JSON.parse(await fs.readFile(path));
    test2.ID=ID;
    test2.subject=subject;
    await fs.writeFile(path,JSON.stringify(test2));
 });
program.parse(process.argv); 