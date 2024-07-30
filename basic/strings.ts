
export default function main(){

    let s = "Hello World"

    //get the length of the string
    console.log(`length of the string is ${s.length}`);

    // access the value by index/key
    //TODO: s.[index]
    console.log(`first value of the ${s} is "${s[0]}"`);

    // return the specified character of the string 
    //TODO: charAt(number)
    console.log(`"6" character of ${s} is "${s.charAt(6)}"`);

    // return the index of specified character of the string 
    //TODO: indexOf(character)
    console.log(`"w" is the index of ${s.indexOf("W")}`);

    // return the range of characters of the string
    //TODO: substring(startNumber, endNumber)
    console.log(`0 to 3 range in the "${s}" is: "${s.substring(0, 3)}" with substring() method`);
    // or with TODO: slice(startNumber, endNumber)
    console.log(`0 to 4 range in the "${s}" is: "${s.slice(0, 4)}" with slice() method`);


    // return the string with trimmed spaces
    //TODO: trim()
    const s1 = "   Hello World   ";
    console.log(`before trim: "${s1}" and after trimmed: "${s1.trim()}"`);

    // return the string with replaced value
    //TODO: replace(oldValue, newValue)
    const s2 = "Hello World";
    console.log(`before replace: "${s2}" and after replaced: "${s2.replace("World", "Universe")}"`);

    // find the character in the string
    //TODO: includes(character)
    const s3 = "Hello World";
    console.log(`"World" is found "${s3.includes("World")}" in the "${s3}"`);

    //split the string 
    //TODO: split(separator)
    const s4 = "Hello World";
    //split by space
    console.log(`split by space: ${s4.split(" ")}`);
    //split by character
    console.log(`split by character: ${s4.split("")}`);
    
    
    


    
    
    







}