/**
 * Created by tsq on 14-8-26.
 */
var interval = 1000;
setInterval(function(){
    f_asy(function(){
        console.log('asy');
    })
}, interval)

// 上面的做法无法保证一个接一个的执行



// Here you are declaring a function named schedule and invoking it immediately after it is declared.
// This schedule function schedules the do_it function to be executed in one second.After one second passed,
// this anonymous function fires, calling f_asy.When this function finishes, the anonymous callback you passed to it is invoked,
// calling the schedule function, which will again schedule the do_it function to be executed in one second, thus restarting the cycle
(function schedule() {
    setTimeout(function do_it() {
        f_asy(function(){
            console.log('asy');
            schedule();
        })
    }, interval)
})();

// setInterval does not guarantee that there won't be more than one pending call at any given time.However, you
// can circumvent(克服) this potential issue by using a recursive function and setTimeout