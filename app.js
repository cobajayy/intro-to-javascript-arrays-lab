// console.log("this is connected to the index.html arrays lab")

const foods = []

    console.log("Exercise 1 Result:", foods)

foods.unshift("pizza", "cheeseburger")

    console.log("Exercise 2 Result:", foods)

foods.unshift("taco")

    console.log("Exercise 3 Result:", foods)

let favFood = foods[1]

    console.log("Exercise 4 Result:", favFood)

foods.splice(2, 0, "tofu")

    console.log("Exercise 5 Result:", foods)

foods[1] = ("sushi")
foods.splice(2,0, "cupcake")

    console.log("Exercise 6 Result:", foods)

let yummy = foods.slice(1,3)

    console.log("Exercise 7 Result:", yummy)

let soyIdx = foods.indexOf("tofu")

    console.log("Exercise 8 Result:", soyIdx)

let allFoods = foods.join(" -> ")

    console.log("Exercise 9 Result:", allFoods)

let hasSoup = foods.includes("soup")

    console.log("Exercise 10 Result:", hasSoup)

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
const odds = [];

for (let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 !== 0) {
        odds.push(nums[i])
    }
}

    console.log("Exercise 11 Result:", odds)

// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
let fizz = [];
let buzz = [];
let fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
    if((nums[i] % 3 === 0)) {
        fizz.push(nums[i])
    } if((nums[i] % 5 === 0)) {
        buzz.push(nums[i])
    } if((nums[i] % 3 === 0 && nums[i] % 5 === 0))
        fizzbuzz.push(nums[i])
};


    console.log('Exercise 12 Results:');
    console.log('  fizz:', fizz);
    console.log('  buzz:', buzz);
    console.log('  fizzbuzz:', fizzbuzz);

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

let numList = numArrays[numArrays.length -1]


    console.log('Exercise 13 result:', numList);

let num = numArrays[2][1]

    console.log("Exercise 14 Result:", num)

// // Resource for solution
// // https://www.google.com/search?q=javascript+two+dimensional+array+sum+of+elements+forEach%28%29&sca_esv=e8c27eb6026439f5&sxsrf=ADLYWIIG1kvbbTJhq9E-atRW_adQhJ3a3Q%3A1736118294618&ei=FhB7Z_u3JYvy0PEPovOFeQ&ved=0ahUKEwj7mvTR2N-KAxULOTQIHaJ5IQ8Q4dUDCBA&uact=5&oq=javascript+two+dimensional+array+sum+of+elements+forEach%28%29&gs_lp=Egxnd3Mtd2l6LXNlcnAiOmphdmFzY3JpcHQgdHdvIGRpbWVuc2lvbmFsIGFycmF5IHN1bSBvZiBlbGVtZW50cyBmb3JFYWNoKClIAFAAWABwAHgBkAEAmAEAoAEAqgEAuAEDyAEA-AEBmAIAoAIAmAMAkgcAoAcA&sclient=gws-wiz-serp

let total = 0 ;

numArrays.forEach(row => {

    row.forEach(number => {
        total += number
    });
});

    console.log("Exercise 15 Result:", total)

// // Totals 668 not 534 not sure where the extra 134 is coming from?
// // let total = 0

// // for(let i = 0; i < numArrays.length; i++) {
// //     numArrays.forEach((sum) => {
// //        total = total + sum[0];
// //     });
// // };

// // console.log("Exercise 15 Result:", total)

// console.log(numsToSum)
