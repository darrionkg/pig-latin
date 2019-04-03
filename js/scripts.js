$(document).ready(function(event){
  $("#formOne").submit(function(event){
    event.preventDefault();

    var userInput = $("input#sentenceInput").val();
    userInput = userInput.split(" ");
    var vowels = ["a","e", "i", "o", "u"];
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "qu", "r", "s", "t", "v", "x", "y", "z"];
    var fixedList = [];

    for (var i = 0; i < userInput.length; i ++) {
      var tempWord = userInput[i].split("");

      if (consonants.includes(tempWord[0])) {
        for(var j = 1; j <= vowels.length; j++)
          if(tempWord.includes(vowels[i])) {
            console.log(tempWord[j]);
          }

          // var lettersBeforeVowel = tempWord.splice(0, j);
          // var lettersAfterVowel = tempWord.splice(j, tempWord.length);
          //
          // lettersBeforeVowel = lettersBeforeVowel.join('');
          // lettersAfterVowel = lettersAfterVowel.join('');
          // var newWord = lettersAfterVowel + lettersBeforeVowel;
          // fixedList.push(newWord + "ay ");
          // letter++;

      } else if (vowels.includes(tempWord[0])) {
        tempWord.push("way ");
        tempWord = tempWord.join('');
        fixedList.push(tempWord);
      } else {
        console.log("NaN");
      }
    }

    $(".translatePigLatin").show().append(fixedList);

  });
});

//Business logic
