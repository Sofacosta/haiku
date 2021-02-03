// Object Constructor Function
let line1 = "bad ass string"

export class Haiku {
  constructor(line1){
    this.line1 = line1;
    // this.line2 = line2;
    // this.line3 = line3;
  }

    checkVowels() {
      let letterArray = [];
      const line1LettersArray = this.line1.split("");
      // const line2Letters = this.line2.split("");
      // const line3Letters = this.line3.split("");
      for(let i = 0; i < line1LettersArray.length; i++){
        if(line1LettersArray[i].includes('a') || line1LettersArray[i].includes('e') || line1LettersArray[i].includes('i') || line1LettersArray[i].includes('o') || line1LettersArray[i].includes('u')){
          letterArray.push(line1LettersArray[i]);
        } else {
          letterArray.push("Else section");
        }
      }
      return letterArray.toString();
    }
  }
  
let newHaiku = new Haiku("bad ass statement");
newHaiku.checkVowels();
  

// function checkingArray(){
//   let newArray = [];
//   numberArray.forEach(function(number){
//     if(newArray.length != number){
//       newArray = [];
//     }
//     if(number.includes('3')){
//       const checkedNumber = "Won't you be my neighbor?";
//       newArray.push(checkedNumber);
//     } else if(number.includes('2')){
//       const checkedNumber = "Boop!";
//       newArray.push(checkedNumber);
//     } else if(number.includes('1')){
//       const checkedNumber = "Beep!";
//       newArray.push(checkedNumber); 
//     } else {
//       newArray.push(number);
//     }
//   });
//   return newArray.join(' ')
// };



// $(document).ready(function(event) {
//   $("form#puzzle").submit(function(event) {
//     event.preventDefault();
//     $("#output").show();
//     let userInput = $("input#submission").val();
//     let userString = userInput.split("");
//     console.log(userString);
//     const vowels = ["a", "e", "i", "o", "u"];
//     for(let i=0; i < userString.length; i += 1)
//      if (vowels.includes(userString[i])) {
//         userString[i] = "-";
//      }
//      let answer = userString.join(" ");   
//      $("p").text(answer);
//   });
//  }); 


// let emptyArray = [];
// const vowels = ["a", "e", "i", "o", "u"];
// const line1LettersArray = this.line1.split("");
// // const line2Letters = this.line2.split("");
// // const line3Letters = this.line3.split("");
// for(let i = 0; i < line1LettersArray.length; i++){
//   if(line1LettersArray[i].includes('a','i','e','o','u')){
//     emptyArray.push(line1LettersArray[i]);
//   } else {
//     emptyArray.push("Else section");
//   }
// }
// console.log(emptyArray);
// return emptyArray;
// }