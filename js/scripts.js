$(document).ready(function(event){
  $("#formOne").submit(function(event){
    event.preventDefault();

    var userInput = $("input#sentenceInput").val();
    userInput = userInput.split(" ");
    var vowel = ["a","e", "i", "o", "u"];
    var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "qu", "r", "s", "t", "v", "x", "y", "z"];
    var fixedList = [];
    for (var i = 0; i < userInput.length; i ++) {
      var tempWord = userInput[i].split("");
      if (consonants.includes(tempWord[0])) {
        tempWord.push("ay ");
        tempWord = tempWord.join('');
        fixedList.push(tempWord);
      } else if (vowel.includes(tempWord[0])) {
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
