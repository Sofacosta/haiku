export class Haiku {
  constructor(line1, line2, line3){
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  checkVowels() {
    const vowels = ["a", "e", "i", "o", "u"];
    const line1Letters = this.line1.split("");
    const line2Letters = this.line2.split("");
    const line3Letters = this.line3.split("");
    
    for(let i = 0; i < vowels.length - 1; i++){
      if(vowels[i] === )
    }
  }
}


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