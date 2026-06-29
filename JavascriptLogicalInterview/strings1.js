const text = "Hello people";

// How to calculate the length of the string above?
console.log(text.length);

// Show 2 different ways two get the fourth letter from the string above.
console.log(text.charAt(3));
console.log(text[3]);

// Pracise
const prices = [7,1,5,3,6,4];

function maxProfit(p){
    let max=0;
    
    for(let i=0; i<p.length; i++){
        for(let j=i+1; j<p.length; j++){
            if(p[j]-p[i] > max){
                max= p[j]- p[i]
            }
        }
    }
    return max;
}

console.log(maxProfit(prices))


const nums = [2,7,11,15];
const target = 9;
function twoSum(n, t){
    for(let i=0; i<n.length; i++){
        for(let j=i+1; j<n.length; j++){
            if((n[i]+n[j] === t)){
                return [i,j]
            }
        }
    }
}

console.log(twoSum(nums, target))

const str= "aabbccddef";

function nonR(arr){
    const res= {};
    for(let i=0; i<arr.length; i++){
        res[arr[i]]= (res[arr[i]]||0) +1
    }
    for(let ch in res){
        if(res[ch] ===1){
            return ch;
            break;
        }
    }
    
}
console.log(nonR(str.split("")))

const str= "javascript";

function frequency(arr){
    const res= {};
    
    for(let i=0; i<arr.length; i++){
        res[arr[i]]= (res[arr[i]]||0) +1
    }
    return res;
}
console.log(frequency(str.split("")));

const arr= [1,2,2,3,4,4,5];

function unique(a){
    let res=[];
    for(let i= 0; i<a.length; i++){
        if(!res.includes(a[i])){
            res.push(a[i])
        }
    }
    return res;
}
console.log(unique(arr))
