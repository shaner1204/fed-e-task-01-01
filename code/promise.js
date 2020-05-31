setTimeout(() => console.log('A'), 0)

setTimeout(() => console.log('B'), 1000)

Promise.resolve()
.then(() => {
    setTimeout(() => console.log('C'), 0)

    setTimeout(() => console.log('D'), 1000)
    console.log('E')
    Promise.resolve()
        .then(() => console.log('F'))
})
.then(() => console.log('G'))

setTimeout(() => console.log('H'), 0)

setTimeout(() => console.log('I'), 1000)
console.log(123123)

// A H E C D F G B I