// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে 50 এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

// let number = [42, 44, 90, 85, 11, 81, 100, 12, 98];
// const output = [];

// function moreNumber(num){
//     for(let i = 0; i < num.length; i++){
//         const element = num[i];
//         if(element > 50){
//             output.push(element);
//         }
//     }
//     return output;
// }

// const rejal = moreNumber(number);
// console.log(rejal);


let number = [42, 44, 90, 85, 11, 81, 100, 12, 98];
const output = [];

for(let i = 0; i < number.length; i++){
    const elemant = number[i];
    if(elemant > 50){
        output.push(elemant);
    }
}

console.log(output);