export const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const addComma = (num: string) =>{
   if(!num) return;
   const numArr = num.split('');
   const newArr = [];
   for(let i = numArr.length - 1; i > 0; i--){
    newArr.unshift(numArr[i])
    if(i < numArr.length - 3 && (numArr.length - i) % 3 == 0){
     newArr.unshift(',')
    }
   }
   newArr.unshift(numArr[0]);
   return newArr.join('');
  };