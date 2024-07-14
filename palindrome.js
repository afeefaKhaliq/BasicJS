const isPalindrome = (string) => {
    const newString = string.toLowerCase().replace(/[^a-z0-9]/g,'');  //change into lowerCase and remove nonalphabetic characters
    const reservedString = newString.split('').reverse().join('');   //split character by character, reverse it and join it
    return newString == reservedString
};

console.log(isPalindrome("Afeefa"));
console.log(isPalindrome("hello"));