const promise1 = new Promise((res, rej) => {
    setTimeout(() => res("Promise 1 resolved"), 2000);
})

const promise2 = new Promise((res, rej) => {
    setTimeout(() => res("Promise 2 Resolved"), 1000);
})

const promise3 = new Promise((res, rej) => {
    setTimeout(()=> rej("Promise 3 rejected"), 3000);
})

Promise.allSettled([promise1, promise2, promise3])
    .then((result) => console.log(result)
    )
    .catch((error) => console.log(error)
    )

//    [
//        { status: 'fulfilled', value: 'Promise 1 resolved' },
//        { status: 'fulfilled', value: 'Promise 2 Resolved' },
//        { status: 'rejected', reason: 'Promise 3 rejected' }
//    ]