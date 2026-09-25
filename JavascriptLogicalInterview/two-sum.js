nums = [2, 7, 11, 15]
target = 9

function twoSum(nums, target){
  const complements= new Map();
  
  for(let i=0; i<nums.length; i++){
    const complement= target - nums[i]
    if(complements.has(complement)){
      return [complements.get(complement), i]
    }
    complements.set(nums[i], i)
  }
}




console.log(twoSum(nums, target))
