/**
 * Created by tsq on 14-10-20.
 */
/**
 * A readable stream is like a data faucet(水龙头). After you have created or obtained one-the method of
 * creating or obtaining one depends on the type of stream--you can control it. You can control the flow
 * by pausing and resuming(恢复) it, you can get notified when data is available, and you can close it and
 * get notified when the stream ends.
 *
 */

/**
 * Data is passed via the event handler function that you bind to the 'data' event. Depending on the stream
 * encoding, the data may be delivered in the raw form using a byte buffer or, if you define the stream encoding
 * by using the `stream.setEncoding()` function, be passed in as an encoded string, as in the following example:
 */

// demo
var stream1;
stream1.on('data', function(data){
    // data is a buffer
    console.log(data);
});

// demo
var stream2;
stream2.setEncoding('utf8');
stream2.on('data', function(data){
   // data is a utf8-encoded string; 指定编码后，获取的数据就直接是字符串了。
    console.log(data);
});


/**
 * A readable stream is like a faucet, and you can keep the data from coming by pausing it like this:
 * `stream.pause()`
 * After you have done this, you will not receive any further 'data' events.
 *
 * When you want to resume a paused stream, you can simply call the `stream.resume` method.This will
 * reopen the faucet and data will be emitted again--until you pause it again or the stream ends.
 */

/**
 *A stream can end.when the file ends the stream emits an 'end' event. Similarly, if you have an http
 * stream that is delivering the requested body data, when the request ends that stream will also emit
 * the 'end' event. You can listen to that event like so:
 */
var stream;
stream.on('end', function(){
    console.log('the stream has ended');
});