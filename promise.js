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
            res('checking for short route');
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

 gototrip().then((msg) => {
    console.log(msg)
    checkroute().then((msg1) =>{
        console.log(msg1)
        booking().then((msg2) =>{
            console.log(msg2)
            visiting().then((msg3) =>{
                console.log(msg3)
                returning().then((msg4) =>{
                    console.log(msg4)
                })
            })
        })
    })
 })
 