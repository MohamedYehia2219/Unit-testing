const arr=[1,2,3,4,5]
const fn=()=>{
    return arr.reduce((cum,e)=>{
        cum+=e;
        return cum
    },0)
}

console.log(fn());  //15