import readline from "readline"
import chalk from "chalk"

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout

})

const showMenu=()=>{
    console.log(chalk.blue("\n 1:add a task"));
    console.log(chalk.blue(" 2:view the task(s)"));
    console.log(chalk.blue(" 3:exit"));
    rl.question("what is your choice?",handleinput);

}

const enter=(task)=>{
    todos.push(task);
    console.log(chalk.red("task added"));
    showMenu();



}


const todos=[];
const handleinput=(option)=>{
    if(option==1){
        rl.question("enter the task(s) for the whole day: ",enter)
        
    }
    else if(option==2){
        console.log("\nYour Todo Tist:-");
        todos.forEach((task,index)=>{
            console.log(chalk.green(`Task for day ${index+1}: ${task}`));
        })
        showMenu();
    }
    else if (option==3) {
        console.log(chalk.rgb(103, 2, 2)("exiting the program\n"));
        rl.close();

    }
    else{console.log(chalk.yellow("invalid option ...enter the choice carefully"));
        showMenu();

    }

}


showMenu();


