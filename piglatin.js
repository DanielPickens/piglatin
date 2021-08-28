let finishedWord = "";
let string = "";

let a = "";
let e = "";
let i = "";
let o = "";
let u = "";
let vowelPositionArray = [];

function minimumPosition(vowelPositionArray){
  return vowelPositionArray >= 0;
}

function vowelPosition(){
  a = string.indexOf("a");
  vowelPositionArray.push(a);
  e = string.indexOf("e");
  vowelPositionArray.push(e);
  i = string.indexOf("i");
  vowelPositionArray.push(i);
  o = string.indexOf("o");
  vowelPositionArray.push(o);
  u = string.indexOf("u");
  vowelPositionArray.push(u);
  console.log(a);
  console.log(e);
  console.log(i);
  console.log(o);
  console.log(u);
  console.log(vowelPositionArray);

  const filteredPositions = vowelPositionArray.filter(minimumPosition);
  const min = Math.min.apply(null, filteredPositions);
  return min;

}


function isFirstVowel(firstCharacter){
  switch (firstCharacter){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      console.log("It starts with a vowel");
      return true;
    default:
      console.log("Doesn't start with a vowel");
  }
}

function translatePigLatin(str) {
  string = str;
  console.log(string);
  let firstCharacter = str[0];
  if(isFirstVowel(firstCharacter)){
    finishedWord = str + "ay";
    console.log(finishedWord = str + "way");
    return str + "way";
  }else{
    console.log("converting  word staring with a consonant...");
    let firstVowelLocation = vowelPosition(string);
    let firstChunk = string.substr(0, firstVowelLocation);
    console.log("The first vowel appears at index " + firstVowelLocation);
    console.log("The first bit is: " + firstChunk);
    let remainingPieces = string.substr(firstVowelLocation, string.length - firstChunk.length);
    console.log("The remaining pieces are: " + remainingPieces);
    console.log("The Pig Latin version of " + str + " is " + remainingPieces + firstChunk + "ay");
    return remainingPieces + firstChunk + "ay";
  }

}

translatePigLatin("data");
