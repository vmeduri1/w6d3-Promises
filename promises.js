function num1() {
    return 1;
}
async function num2() {
    return 2;
}

// console.log('num1', num1());
// console.log('num2', num2());

//num2().then(result => console.log(result));

async function waiting() {
    const value = await num2();
   console.log('waiting', value);
}
waiting();

async function waitForMyPromise(){
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!');
        }, 1000)
    });

    const result = await promise;
    console.log('my promise is', result);
}
 waitForMyPromise();
