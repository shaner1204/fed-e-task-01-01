promise.then(
    function onFulfilled (value) {
        console.log('onFulfilled', value)
    },
    function onRejected (error) {
        console.log('onRejected', error)
    }
)