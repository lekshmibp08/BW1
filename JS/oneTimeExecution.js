/* Function that execute only once and from the second time it will throw an error */

function count() {
    let count = 0;
    return(function(){
        if(count > 0) {
            throw new Error("Function already executed");
        } else {
            count++;
            console.log("This is a one time executable function");
        }
    })
}

let counter = count();
counter(); // This is a one time executable function
counter(); // Error: Function already executed