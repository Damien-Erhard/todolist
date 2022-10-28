var todos = [];

function addtask(task){
   todos.push(task);
}

addtask("acheter dentifrice");
addtask("acheter du savon");
addtask("appeler mamie");
addtask("Allez voir papy");

function removetask(index){
    if(index >= todos.length){
        return false;
    }else{
    todos.splice(index, 1);
}
}

function updatetask(index, newtask){
    todos[index] = newtask;
}

function readtask(index){
    console.log(todos[index]);
}

function taskToString(task, index){
    return '<div id="todo">'+ task + '<button id="suppr" type="remove" onclick="removeHandler('+index+')">'+'X'+'</button>'+'</div>';
}

function todoToString(){
    var str = "";
    for( i =0; i < todos.length; i++ ){
        str += taskToString(todos[i],i);
    }
    return str;
}

function addBtnHandler() {
    var infoTodo = document.getElementById('info').value;
    addtask(infoTodo);
    document.getElementById('valeur').innerHTML = todoToString();

    document.getElementById('info').value ="";
    
}

function removeHandler(index) {
    removetask(index);
    document.getElementById('valeur').innerHTML = (todoToString());
    
}