
//main function
export default function main(){

    //TODO: covert string to number --------------------------
    console.log(" convert string to number");
    
    const age = "22"
    console.log(`age is ${typeof age}`);
    const intAge = parseInt(age)
    console.log(`intAge is ${typeof intAge}`);
    //or
    const intAge2 = Number(age)
    console.log(`intAge2 id ${typeof intAge2}`);
    // or
    const intAge3 = +age
    console.log(`intAge3 is ${typeof intAge3}`);

    //TODO: convert int to string ---------------------------------------------
    console.log(" ");
    console.log("convert number to string");
    
    const price = 10
    console.log(`price is ${typeof price}`);
    const stringPrice = String(price)
    console.log(`stringPrice is ${typeof stringPrice}`);


    //TODO: convert int to float
    console.log(" ");
    console.log("convert number or string to float");
    const discountInString = "20.5"
    console.log(`discountInString: ${discountInString} is ${discountInString}`);
    const discountInFloat = parseFloat(discountInString)
    console.log(`discountInFloat: ${discountInFloat} is ${typeof discountInFloat}`);
    
    
}



