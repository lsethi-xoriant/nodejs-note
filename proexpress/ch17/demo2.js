/**
 *  try/catch fails at asynchronous errors. A good rule of thumb is to use try/catch only for synchronous js/nodejs code
 */

try {
    setTimeout(function () {
        throw new Error('Fail!');
    }, Math.round(Math.random() * 100));
} catch (e) {
    console.log('Custom Error:', e.message);
}