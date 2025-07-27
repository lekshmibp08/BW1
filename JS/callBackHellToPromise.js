const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Completed step1');
            resolve();
        }, 1000)
    })
}
const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Completed step2');
            resolve();
        }, 1000)
    })
}
const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Completed step3');
            resolve();
        }, 1000)
    })
}
const step4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Completed step4');
            resolve();
        }, 1000)
    })
}
/*
step1()
    .then(() => step2())
    .then(() => step3())
    .then(() => step4())
    .then(() => {
        console.log('Completed All');        
    });
*/
async function runSteps() {
    try {
        await step1();
        await step2();
        await step3();
        await step4();
        
    } catch (error) {
        console.log(error);
    }
}
runSteps()

const add = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
        let result = a + b;
        console.log(`Result of ${a} + ${b} is ${result}`)
        res(result);        
    }, 1000);
  })
}
const multiply = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
        let result = a * b;
        console.log(`Result of ${a} * ${b} is ${result}`)
        res(result);
    },1000)
  })
}
const subtract = (a, b) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
        let result = a - b;
        console.log(`Result of ${a} - ${b} is ${result}`)
        res(result);        
    }, 1000);
  })
}

add(7, 10)
  .then((sum) => multiply(sum, 12))
  .then((pdt) => subtract(pdt, 10))
  .then((result) => console.log(`Final result = ${result}`))
  .catch((err) => console.log(err));

const calculate = async() => {
    const sum = await add(7, 10);
    const pdt = await multiply(sum, 10);
    const diff = await add(pdt, 10);
    console.log(`Final Result = ${diff}`);
}
calculate();