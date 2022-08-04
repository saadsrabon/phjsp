
// https://drive.google.com/file/d/1KFqqs_Nm1T7s3kBA66rDbykpghDxLa47/view?usp=sharing


// 1) Write a function called foo() which prints “foo” and a function called bar() which prints
// “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call
// the foo() to see the output.

// *****Solution*****

// function bar(){
//     console.log("bar")
// }

// function foo(){
//     console.log('foo');
//     bar();

// }


// foo();

// 2) Write a function called make_avg() which will take an three integers and return the
// average of those values.

// *****Solution****
// function make_avg(number1 ,number2 ,number3){
//     total = number1 +number2 + number3 ;
//     average = total /3;
//     return average;
// }

// console.log(make_avg(4,5,7));

// 3) Challenging: Write a function called make_avg() which will take an array of integers and
// the size of that array and return the average of those values.

// *****Solution*****

const numbers = [10,20,30,40];
const length =numbers.length;

function make_avg(array , arrayLength){
    var total =0;
    for(i=0; i<arrayLength; i++){
     
        total += array[i];
    
 
    
    }
    avg =total/arrayLength;
    console.log(avg)
}

make_avg(numbers , length);

// 4) Write a function called odd_even() which takes an integer value and tells whether this
// value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter


function odd_even(number){
    if(number%2==0){
        return "This Is a Odd Number"
    }
    else{
        return "Its an Even Number"
    }
}

var result = odd_even(5);
console.log(result);



// 5) You are in a hurry to go to your school on time. But when you are crossing the road, the
// traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
// danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
// coloured traffic signal, you should cross the road. So write a JS code, where there is a
// variable called signal. Its value can be green, yellow or red & we will get different activities as
// output depending on the variable. So, hurry up.


// —--------------

// Extra প্রাকটিস চ্যালেঞ্জ (৪ টি প্রব্লেম): 

// —--------------

// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 



// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।



// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 



// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে।

// অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।  







// —----------

// Extra

// —--------------

// ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :



// const pizza = {

//  toppings: ['cheese', 'sauce', 'pepperoni'],

//  crust: 'deep dish',

//  serves: 2

// }

// এবং pepperoni প্রিন্ট করবা।