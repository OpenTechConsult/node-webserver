process.on('unhandledRejection', (error) => {
   console.error('unhandledRejection');
   console.error(error);
});

function withPromise() {
    return Promise.reject('Whoops, an Error occurred');
}

withPromise().then(() => {
    console.log('Promise resolved');
});