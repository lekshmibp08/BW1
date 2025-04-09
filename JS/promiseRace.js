const promise1 = new Promise((res, rej) => {
    setTimeout(() => res("Promise 1 resolved"), 2000);
})

const promise2 = new Promise((res, rej) => {
    setTimeout(() => res("Promise 2 Resolved"), 1000);
})

const promise3 = new Promise((res, rej) => {
    setTimeout(()=> rej("Promise 3 rejected"), 3000);
})

Promise.race([promise1, promise2, promise3])
    .then((result) => console.log('First resolved promise:', result)
    )
    .catch((error) => console.log('Promise rejected:', error)
    );

// out put will be first resolved or rejected promise