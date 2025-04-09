const promise1 = new Promise((res, rej) => {
    setTimeout(() => res("Promise 1 resolved"), 2000);
})

const promise2 = new Promise((res, rej) => {
    setTimeout(() => res("Promise 2 Resolved"), 1000);
})

const promise3 = new Promise((res, rej) => {
    setTimeout(()=> rej("Promise 3 rejected"), 3000);
})

Promise.all([promise1, promise2, promise3])
    .then((result) => console.log(result)
    )
    .catch((error) => console.log(error)
    )

// if any promise rejected then first rejected 
// if all resolved, then give all the result in an array : [ 'Promise 1 resolved', 'Promise 2 Resolved', 'Promise 3 Resolved' ]