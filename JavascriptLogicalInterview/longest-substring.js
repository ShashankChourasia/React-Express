const s = "abcabcbb"

function longestS(str){
  const window= new Set();
  let max=0;
  let left=0;
  for(let right=0; right<str.length; right++){
    while(window.has(str[right])){
      window.delete(str[left]);
      left++
    }
    window.add(str[right]);
    max= Math.max(max, right-left +1)
  }
  return max
}

console.log(longestS(s));
