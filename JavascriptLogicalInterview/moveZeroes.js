const nums= [0, 1, 0, 3, 12]

function moveZeroes(nums){
  let slow= 0;
  for(let i=0; i<nums.length; i++){
    if(nums[i] !== 0){
      [nums[i], nums[slow]] = [nums[slow], nums[i]]
      slow++;
    }
  }
  return nums
}

console.log(moveZeroes(nums))
