function throttle(func,limit){
  let inThrottle;
  return function(...args){
    if(!inThrottle){
      func.apply(this,args);
      inThrottle = true;
      setTimeout(()=> (inThrottle=false),limit)
    }
  }
}

const onScroll = throttle(()=>{
  console.log("Scroll event triggered");
},2000);

window.addEventListener('scroll',onScroll);
