function gototrip(call, call1, call2, call3){
    setTimeout(() => {
        console.log('planning to trip');
        call(call1,call2,call3);
    }, 700);
}
 function checkroute(call,call1,call2){
    setTimeout(() =>{
        console.log('checking for short route')
        call(call1,call2);
    }, 100);
 }
 function booking(call,call1){
    setTimeout(() =>{
        console.log('Book tickets')
        call(call1);
    }, 200);
 }
 function visiting(call){
    setTimeout(() =>{
        console.log('seeing famous places');
        call();
    }, 300);
 }
 function returning(){
    setTimeout(() =>{
        console.log('return to home');
    }, 400);
 }

 gototrip(checkroute,booking,visiting,returning);
 