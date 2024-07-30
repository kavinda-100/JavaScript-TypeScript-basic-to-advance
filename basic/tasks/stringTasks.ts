//TODO: make the first letter of the string to uppercase
let s = "hello world";

//TODO: make the first letter of the string to uppercase (simple version)
export function simpleUppercase(){
    s = s[0].toUpperCase() + s.substring(1);
    console.log(`first letter of the string is capitalized: ${s}`);
}

//TODO: make the first letter of the string to uppercase (complex version)
export function complexUppercase(){
    let newString = "";
    for(let i = 0; i < s.length; i++){
        if(i === 0){
            // Capitalize the first letter of the string and concatenate with the rest of the string
            newString = s[i].toUpperCase() + s.substring(1);
        }
    }
    console.log(`first letter of the string is capitalized: ${newString}`);
}

// Function to capitalize the first letter of each word in a string
export function complexUppercaseEachLetter() {
    let word = "hello world welcome to typescript";
    let newString = "";
    // Split the input string into an array of words
    let words: string[] = word.split(" "); // ["hello", "world"]
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of the word and concatenate with the rest of the word
        // ["hello", "world"] => "Hello" is the first iteration = i and [0] is the first letter of the word 
        // and "world" is the second iteration = i and [0] is the first letter of the word and so on.
        newString += words[i][0].toUpperCase() + words[i].substring(1) + " ";
    }
    // Print the new string with capitalized words to the console
    console.log(`first letter of the string is capitalized: ${newString}`);
}