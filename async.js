function gototrip(){
    return new Promise((res, rej) =>{
        setTimeout(() => {
            res('planning to trip');
        }, 700)
    })
}
 function checkroute(){
    return new Promise((res, rej) =>{
        setTimeout(() => {
            rej('due to weather roads blocked- trip cancled');
    }, 100);
 })
}
 function booking(){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            res('Book tickets');
        }, 200);
    })
 }
 function visiting(){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            res('seeing famous places');
        }, 300);
    })
 }
 function returning(){
    return new Promise((res, rej) =>{
        setTimeout(() =>{
            res('return to home');
        }, 400);
    })
 }
 
async function init() {
   try{
 const msg = await gototrip();
 console.log(msg)
 const msg1 = await checkroute();
 console.log(msg1)
 const msg2 = await booking();
 console.log(msg2)
 const msg3 = await visiting();
 console.log(msg3)
 const msg4 = await returning();
 console.log(msg4)
    }catch(err){
        console.log(err)
    }
}
init();
