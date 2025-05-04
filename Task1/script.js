let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        // if(e.target.innerHTML == '='){
        //     string = eval(string);
        //     document.querySelector('input').value = string;
        // }

        if(e.target.innerHTML == '='){
            try{
                let processedString = string.replace(/(\d+)%/g, (match, p1, offset, str) => {
                    const nextChar = str[offset + match.length];
                    // Add multiplication if followed by a digit or opening parenthesis
                    if (nextChar && (/\d|\(/).test(nextChar)) {
                        return `${p1}*0.01*`;
                    } else {
                        return `${p1}*0.01`;
                    }
                })

                let result = eval(processedString).toString();

                // if (result.replace('.','').length <= 9){
                //     string = result;
                //     document.querySelector('input').value = string;
                // }else{
                //     document.querySelector('input').value = "Max 9 digits allowed";
                // }
                // Limit to 9 total digits (including decimals), formatted smartly
                if (!isNaN(result)) {
                    let numResult = parseFloat(result);
                    let display = "";
        
                    if (numResult.toString().includes("e")) {
                        display = numResult.toExponential(6);
                    } else {
                        let [intPart, decimalPart] = numResult.toString().split('.');
                        intPart = Number(intPart).toLocaleString('en-US');
                        display = decimalPart ? `${intPart}.${decimalPart}` : intPart;
                    }        

                    string = display;
                    document.querySelector('input').value = string;
                }
            } catch (error) {
                document.querySelector('input').value = "Error";
            }
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            // if(string.length > 0){
                string = string.slice(0, -1);
            // }
            document.querySelector('input').value = string;
        }

        // else if(e.target.innerHTML == 'DEL'){
        //     string = string.substring(0, string.length-1);
        //     document.querySelector('input').value = string;    
        // }
        else if (e.target.innerHTML == '()'){
            const openParens = (string.match(/\(/g) || []).length;
            const closeParens = (string.match(/\)/g) || []).length;
            const lastChar = string.slice(-1);

            if(
                openParens === closeParens ||
                lastChar === '(' ||
                lastChar === '' ||
                ['+','-','*','/'].includes(lastChar)
            ){
                string += '(';
            }else if (openParens > closeParens){
                string += ')';
            }else{
                string += '(';
            }

            document.querySelector('input').value = string;
        }
        
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }

        document.querySelector('input').scrollLeft = document.querySelector('input').scrollWidth;
    })
})