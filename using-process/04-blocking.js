/**
 * Created by tsq on 14-8-26.
 */
// in this case, the nextTick2 will never have the chance to run no matter how long you wait
// because the event loop is blocked by an infinite cycle inside the first nextTick function
process.nextTick(function(){
    var a = 0;
    while(true) {
        a++;
    }
});
process.nextTick2(function(){
    console.log('ok');
})