//Business Logic


function collectVowel(pigLatinInput){
  let vowelFlag = false;
  const textArray = pigLatinInput.split(" ");
  let vowelArray = [];

  const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i <= textArray.length-1; i++){
    if (vowels.includes(textArray[i].substring(0,1))){
      let vowelArray = textArray[i] + "way";
      console.log(vowelArray);
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