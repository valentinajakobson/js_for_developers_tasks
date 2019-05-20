// You have to create a javascript function that counts from 0 to 100. When reaching 100, the counter gets back to 0 and keeps counting. You will display the counter in the console of the browser with a speed of 120 ms.

// let countingUp = 1;
// let i = 0;
//
//     counter = () => {
//
//     i += (1 * countingUp);
//
//     if (i == 100 || i == 0)
//     {
//         countingUp *= -1;
//     }
//     console.log(i);
//
//    }
//
//    window.setInterval(counter, 120 );

index = 0;
// setInterval(function(){
//   if (index <=99){
//     index++;
//     console.log(index);
//   } else {
//     index = 0;
//   }
// }, 120);
// console.log(index);

const timerId = window.setInterval(() => {
  index = index >= 100 ? 0 : index + 1;
  console.log(index);
},120);
console.log(index);
