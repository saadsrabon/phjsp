// তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে//
// If else solution
var walletBalance = 5000;
var macPrice =80000;
var gaminLaptopPrice =60000;
var lenevoPrice =40000;
var  oldLaptop=20000;

if(walletBalance>macPrice){
    console.log("I will Buy a Mac");
}
else if(walletBalance>gaminLaptopPrice){
    console.log("I will buy Gaming Laptop");
}
else if(walletBalance>lenevoPrice){
    console.log("I will buy Lenevo Yoga");
}
else if(walletBalance>oldLaptop){
    console.log("I will Buy old laptop");
}
else{
    console.log("I will use my phone")
}

// // switch Solution

switch(walletBalance){
    case walletBalance>macPrice :
        console.log("I will Buy a Mac");
        break;
    case walletBalance>gaminLaptopPrice :
        console.log("I will Buy a Gaming");
        break;
    case walletBalance>lenevoPrice :
        console.log("I will Buy a Lenevo");
        break;
    case walletBalance>oldLaptop :
        console.log("I will Buy a Old Laptop");
        break;

        default :
        console.log("i will use my little phone")
}

// আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
var loopcount =1;
while(loopcount<40){
    console.log("আজকে আমারা মন ভালো নেই" +loopcount);
    loopcount++
}

// ২৯. একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
for(let i=58 ; i<99 ; i++){
    console.log(i);
}

// ৩০.একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
for(i=412; i<=456; i=i+2){
    
    console.log(i);
 
}

// ৩১. একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও
for(i=581; i<=623; i=i+2){
    
    console.log(i);
 
}

// তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

var skillsets = ["Html" ,"css" ,"js", "php","mysql","wordpress", "bootstrap", "Tailwind"]

for(i=0 ; i <skillsets.length; i++){
    console.log(skillsets[i])
}


// ৩৪. তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও

var usedMobile = ["Nokia" ,"Djuice Shake" , "Grameenphone" , "Nokia Xpress Music" ,"W-98" ,"Symphonyv-71" ,"maximus", "Xiaomi" , "Samsung" ,"realme"];

var count=0;
while(count<usedMobile.length){
    console.log(usedMobile[count]);
    count++
}

// ৩৫. একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও

for(i=0; i<=86; i++){
    if(i==44){
        break
    }else{
        console.log(i);
    }
}

// ৩৬. তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

var bookPrices =[100,300,80,50,70,195,180,230,125,250,280];

for(i=0 ; i<bookPrices.length; i++){
    if(bookPrices[i]>200){
        continue;
    }else{
        console.log(bookPrices[i]);
    }
}