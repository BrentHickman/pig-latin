//Business Logic



function collectVowel(pigLatinInput){
  let firstLetter = pigLatinInput.charAt(0);
  let vowelFlag = false;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i <= vowels.length; i++){
    if (firstLetter === vowels[i]){
      vowelFlag = true;
      break;
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