const step1 = (cb) => {
    setTimeout(() => {
        console.log('Step1 completed');
        cb();
    },1000)
}
const step2 = (cb) => {
    setTimeout(() => {
        console.log('Step2 completed');
        cb();
    },2000)
}
const step3 = (cb) => {
    setTimeout(() => {
        console.log('Step3 completed');
        cb();
    },3000)
}
const step4 = (cb) => {
    setTimeout(() => {
        console.log('Step4 completed');
        cb();
    },4000)
}


step1(function() {
    step2(function() {
        step3(function() {
            step4(function() {
                console.log('Completed all');                
            })
        })
    })
})




const add = (a, b, cb) => {
  setTimeout(() => {
    let result = a + b;
    console.log(`Result of ${a} + ${b} is ${result}`)
    cb(result);
  }, 1000);
}
const multiply = (a, b, cb) => {
  setTimeout(() => {
    let result = a * b;
    console.log(`Result of ${a} x ${b} is ${result}`)
    cb(result);
  }, 1000);
}
const subtract = (a, b, cb) => {
  setTimeout(() => {
    let result = a - b;
    console.log(`Result of ${a} - ${b} is ${result}`)
    cb(result);
  }, 1000);
}

add(5, 10, (sum) => {
  multiply(sum, 6, (pdt) => {
    subtract(pdt, 10, (diff) => {
      console.log(`Final Result = ${diff}`);
    })
  })
})