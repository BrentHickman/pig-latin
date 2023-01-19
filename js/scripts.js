//Business Logic


function collectVowel(pigLatinInput){
  let vowelFlag = false;
  const textArray = pigLatinInput.split(" ");
  // let firstLetter = textArray.charAt(0);
  const firstCharArray = textArray.map(function(element) {
    return element.charAt(0);
  });
  console.log(firstCharArray);

  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i <= vowels.length; i++){
    if (firstCharArray === vowels[i]){
      vowelFlag = true;
    }
    console.log("Looped!");
  }
}

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const pigLatinInput = document.getElementById("formInput");
  collectVowel(pigLatinInput.value);
}


window.addEventListener("load", function(){
  document.querySelector("form#piglatininput").addEventListener("submit", handleFormSubmission);
});