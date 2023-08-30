function ransomNote(string1, string2) {
    var string1Array = string1.split('');
    var string2Array = string2.split('');

    string1Array
    string2Array

    var string1Object = {};
    var string2Object = {};

    string1Array.forEach(element => {
        inputToRansomObject(string1Object, element)
    });

    string2Array.forEach(element => {
        inputToRansomObject(string2Object, element)
    });

    var result = false;

    for (const key in string2Object) {
        if (string1Object[key] && string2Object[key] >= string1Object[key]) {
            result = true
        } else {
            result = false
            break;
        }
    }

    return result
}

function inputToRansomObject(ransomObject, char) {
    if (!ransomObject.hasOwnProperty(char)) {
        ransomObject[char] = 1;
    } else {
        ransomObject[char] += 1;
    }
}

console.log(ransomNote("abc", "abc"));
console.log(ransomNote("abbc", "abc"));
console.log(ransomNote("abc", "aabbcc"));

console.log(ransomNote("abc", "ddddd"));