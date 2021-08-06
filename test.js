let numbers = [71,90,11,45,65,22,85,34,99,1];

for (let number in numbers) {
   if (numbers.hasOwnProperty.call(numbers, number)) {
      const element = numbers[number];
      console.log(element);
      if(element > 50){
         console.log("questo numero é maggiore di 50");
      }   
   }
}
