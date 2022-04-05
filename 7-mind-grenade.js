const arr = [1,2,3,4,5,6,7,8,9]

const sumValue = () =>{
  console.log(`this sum is:${arr.reduce((acc,cur)=>acc+cur,0)}`);
}

sumValue()