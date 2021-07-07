let quit = false;
const list = [];

while(!quit){
    let response = prompt("What would you like to do? (add, delete, list, quit)");
    console.log('===================');
    if(response === null){
        break;
    }
    else if(response === "list"){
        for(let x = 0; x < list.length; x++){
            console.log(`${x}. ${list[x]}`);
        }
    }
    else if(response === "add"){
        let value = prompt("Enter value to Add to do list:");
        if(value === null) { break; }
        list.push(value);
        console.log(`Added ${value} to the list!`);
    }
    else if(response === "delete"){
        let index = parseInt(prompt("Enter index of item you would like to Delete:"));
        if(index === null) 
        { 
            break; 
        }
        else if(Number.isNaN(index)){
            console.log(`User input is not a valid index!`);
        }
        else{
            if(index < list.length && index >= 0){
                let deleted = list.splice(index, 1);
                console.log(`Removed ${deleted} from the list!`);
            }
            else{
                console.log("index is out of array range!");
            }
        }
    }
    else if(response === "quit"){
        alert("======= closing program ======");
        quit = true;
    }
    else{
        console.log(`${response} is an unknown command!`);
    }
}