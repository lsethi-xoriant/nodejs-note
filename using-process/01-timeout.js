/**
 * Created by tsq on 14-8-26.
 */
var timeout = setTimeout(function A(){ // the call to setTimeout returns a timeout handler, which is an internal object that
                                       // cannot be used for anything except canceling the execution using clearTimeout
    console.log('time out');

}, 2000);

setTimeout(function B(){
    clearTimeout(timeout)   // function A never fires because when function B runs, it unschedules function A
})