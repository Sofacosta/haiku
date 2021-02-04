// Object Constructor Function
// let line1 = "bad ass string"

export class Haiku {
  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  //   checkVowels() {
  //     let letterArray = [];
  //     const line1LettersArray = this.line1.split("");
  //     // const line2Letters = this.line2.split("");
  //     // const line3Letters = this.line3.split("");
  //     for(let i = 0; i < line1LettersArray.length; i++){
  //       if(line1LettersArray[0][i].includes('a') || line1LettersArray[i].includes('e') || line1LettersArray[i].includes('i') || line1LettersArray[i].includes('o') || line1LettersArray[i].includes('u')){
  //         letterArray.push(line1LettersArray[i]);
  //       } else {
  //         letterArray.push("Else section");
  //       }
  //     }
  //     return letterArray.toString();
  //   }
  // }

  checkVowels() {
    let lineArray = [];
    let letterArray = [];
    let consonantArray = [];
    lineArray.push(this.line1);
    lineArray.push(this.line2);
    lineArray.push(this.line3);
    for(let i = 0; i < lineArray[0].length; i++){
      if(lineArray[0][i].includes('a') || lineArray[0][i].includes('e') || lineArray[0][i].includes('i') || lineArray[0][i].includes('o') || lineArray[0][i].includes('u')){
        letterArray.push(lineArray[0][i]);
      } else {
        consonantArray.push(lineArray[2][i]);
      }
    }
      for(let i = 0; i < lineArray[1].length; i++){
        if(lineArray[1][i].includes('a') || lineArray[1][i].includes('e') || lineArray[1][i].includes('i') || lineArray[1][i].includes('o') || lineArray[1][i].includes('u')){
          letterArray.push(lineArray[1][i]);
        } else {
          consonantArray.push(lineArray[2][i]);
        }
    }
    for(let i = 0; i < lineArray[2].length; i++){
      if(lineArray[2][i].includes('a') || lineArray[2][i].includes('e') || lineArray[2][i].includes('i') || lineArray[2][i].includes('o') || lineArray[2][i].includes('u')) {
        letterArray.push(lineArray[2][i]);
      } else {
        consonantArray.push(lineArray[2][i]);
      }
    }
    console.log(letterArray.toString());
    console.log(consonantArray.toString());
    return letterArray.toString();
  }
}
let newHaiku = new Haiku("Random words", "really freakin suck", "oh my gosh");
newHaiku.checkVowels();


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


 // if(lineArray[2][i].includes('a') === false || lineArray[2][i].includes('e') === false || lineArray[2][i].includes('i') === false || lineArray[2][i].includes('o') === false|| lineArray[2][i].includes('u') === false) {
      //   letterArray.push('x');
      // }