var string = "aaaabcccaaa";

var stringInArray = string.split("");

var encodedString = "";

var counterChar = 0;

for (let index = 0; index < stringInArray.length; index++) {
    if (stringInArray[index+1] && stringInArray[index+1] == stringInArray[index]) {
        counterChar++;
    } else {
        if (counterChar != 0) {
            encodedString = encodedString.concat(counterChar+1, stringInArray[index])
            counterChar = 0   
        } else {
            encodedString =  encodedString.concat(stringInArray[index])
        }
    }
}

console.log(encodedString);