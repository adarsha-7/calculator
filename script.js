const button_1_1 = document.querySelector("#button-1-1");
const button_1_2 = document.querySelector("#button-1-2");
const button_5_1 = document.querySelector("#button-5-1");
const button_5_2 = document.querySelector("#button-5-2");

const button = []
for (let i = 2; i <= 24; i++)
{
    if(i == 5)
        continue;
    button[i] = document.querySelector("#button-"+i);
}

let user_input = document.querySelector("#user-input");
let user_output = document.querySelector("#user-output");
user_input.textContent = "";
user_output.textContent = "";

button_1_1.onclick = () => {
    user_input.textContent += "(";
}

button_1_2.onclick = () => {
    user_input.textContent += ")";
}

button[2].onclick = () => {
    const exp = user_input.textContent;
    if (!(/[+\-\*/]/.test(exp)))
        user_input.textContent = "";
    for(let i = exp.length-1; i >= 0; i--) 
    { 
        if (/[+\-\*/]/.test(exp[i]))
            {
                user_input.textContent = user_input.textContent.slice(0, i+1);
                break;
            } 
    }
}

button[3].onclick = () => {
    user_input.textContent = "";
    user_output.textContent = "";
}

button[4].onclick = () => {
    user_input.textContent = user_input.textContent.slice(0, -1);
}

button_5_1.onclick = () => {
    const exp = user_input.textContent;
    if(exp[exp.length-1] == ')')
    {
        for(let i = exp.length-1; i >= 0; i--)
        {
            if(exp[i] == '(')
            {
                const reciprocal = exp.slice(i+1, exp.length-1);
                user_input.textContent = user_input.textContent.slice(0,i) + "10e(" + reciprocal + ")";
                break;
            }
        }
    }
    else
    {
        for(let i = exp.length-1; i >= 0; i--) 
        { 
            if (!(/[+\-\*/]/.test(exp[exp.length-1])) && (/[+\-\*/]/.test(exp[i])))
            {
                const reciprocal = exp.slice(i+1, exp.length);
                user_input.textContent = user_input.textContent.slice(0,i+1) + "10e(" + reciprocal + ")";
                break;
            } 
            else if(!(/[+\-\*/]/.test(exp[exp.length-1])) && i == 0)
            {
                user_input.textContent = "10e(" + exp + ")";
                break;
            }
        }
    }
}

button_5_2.onclick = () => {
    user_input.textContent += "^";
}

button[6].onclick = () => {
    const exp = user_input.textContent;
    if(exp[exp.length-1] == ')')
    {
        for(let i = exp.length-1; i >= 0; i--)
        {
            if(exp[i] == '(')
            {
                const reciprocal = exp.slice(i+1, exp.length-1);
                user_input.textContent = user_input.textContent.slice(0,i) + "(" + reciprocal + ")" + "^2" ;
                break;
            }
        }
    }
    else
    {
        for(let i = exp.length-1; i >= 0; i--) 
        { 
            if (!(/[+\-\*/]/.test(exp[exp.length-1])) && (/[+\-\*/]/.test(exp[i])))
            {
                const reciprocal = exp.slice(i+1, exp.length);
                user_input.textContent = user_input.textContent.slice(0,i+1) + reciprocal + "^2";
                break;
            } 
            else if(!(/[+\-\*/]/.test(exp[exp.length-1])) && i == 0)
            {
                user_input.textContent = exp + "^2";
                break;
            }
        }
    }
}

button[7].onclick = () => {
    const exp = user_input.textContent;
    if(exp[exp.length-1] == ')')
    {
        for(let i = exp.length-1; i >= 0; i--)
        {
            if(exp[i] == '(')
            {
                const reciprocal = exp.slice(i+1, exp.length-1);
                user_input.textContent = user_input.textContent.slice(0,i) + "sqrt(" + reciprocal + ")";
                break;
            }
        }
    }
    else
    {
        for(let i = exp.length-1; i >= 0; i--) 
        { 
            if (!(/[+\-\*/]/.test(exp[exp.length-1])) && (/[+\-\*/]/.test(exp[i])))
            {
                const reciprocal = exp.slice(i+1, exp.length);
                user_input.textContent = user_input.textContent.slice(0,i+1) + "sqrt(" + reciprocal + ")";
                break;
            } 
            else if(!(/[+\-\*/]/.test(exp[exp.length-1])) && i == 0)
            {
                user_input.textContent = "sqrt(" + exp + ")";
                break;
            }
        }
    }
}

button[8].onclick = () => {
    user_input.textContent += "/";
}

button[9].onclick = () => {
    user_input.textContent += "7";
}

button[10].onclick = () => {
    user_input.textContent += "8";
}

button[11].onclick = () => {
    user_input.textContent += "9";
}

button[12].onclick = () => {
    user_input.textContent += "*";
}

button[13].onclick = () => {
    user_input.textContent += "4";
}

button[14].onclick = () => {
    user_input.textContent += "5";
}

button[15].onclick = () => {
    user_input.textContent += "6";
}

button[16].onclick = () => {
    user_input.textContent += "-";
}

button[17].onclick = () => {
    user_input.textContent += "1";
}

button[18].onclick = () => {
    user_input.textContent += "2";
}

button[19].onclick = () => {
    user_input.textContent += "3";
}

button[20].onclick = () => {
    user_input.textContent += "+";
}

button[21].onclick = () => {
    const exp = user_input.textContent;
    if(exp[exp.length-1] == ')')
    {
        for(let i = exp.length-1; i >= 0; i--)
        {
            if(exp[i] == '(')
            {
                const reciprocal = exp.slice(i+1, exp.length-1);
                user_input.textContent = user_input.textContent.slice(0,i) + "1/(" + reciprocal + ")";
                break;
            }
        }
    }
    else
    {
        for(let i = exp.length-1; i >= 0; i--) 
        { 
            if (!(/[+\-\*/]/.test(exp[exp.length-1])) && (/[+\-\*/]/.test(exp[i])))
            {
                const reciprocal = exp.slice(i+1, exp.length);
                user_input.textContent = user_input.textContent.slice(0,i+1) + "1/(" + reciprocal + ")";
                break;
            } 
            else if (!(/[+\-\*/]/.test(exp[exp.length-1])) && i == 0)
            {
                user_input.textContent = "1/(" + exp + ")";
                break;
            } 
        }
    }
}

button[22].onclick = () => {
    user_input.textContent += "0";
}

button[23].onclick = () => {
    user_input.textContent += ".";
}

button[24].onclick = () => {
    let exp = user_input.textContent;
    //check for syntax error in expression
    if(exp.split("(").length - 1 != exp.split(")").length - 1)
        user_output.textContent = "Syntax Error! Unbalanced brackets";

    if(/^[\*\-\/\+]/.test(exp) || /[\*\-\/\+]$/.test(exp) || /[\*\/\-\+]{2,}/.test(exp))
        user_output.textContent = "Syntax Error! Misplaced operator";

    if(/\d\(/.test(exp) || /\)\d/.test(exp))
        user_output.textContent = "Syntax Error! Operator not mentioned";

    if(/\^\^+/.test(exp) || /[\/,*+\-]\^/.test(exp) || /\^[\/,*+\-]/.test(exp))
        user_output.textContent = "Syntax Error! Consecutive operators";

    //convert exp into a format processable by eval()
    exp = exp.replace(/10e\(/g, "Math.pow(10,");
    exp = exp.replace(/sqrt\(/g, "Math.sqrt(");

    let index, end, n1, n2;
    while(/\^/.test(exp))
    {
        index = exp.indexOf("^");
        end = index, start = index;
        while(!(/[\/\*\-+]/.test(exp[end+1])))
        {
            if(end == exp.length - 1)
                break;
            end++;
        }
        while(!(/[\/\*\-+]/.test(exp[start-1])))
        {
            if(start == 0)
                break;
            start--;
        }
        n1 = exp.slice(start, index);
        n2 = exp.slice(index + 1, end + 1);
        if(end == exp.length - 1)
        {
            exp = exp.slice(0, start) + "Math.pow(" + n1 + "," + n2 + ")";
        }
        else
        {
            exp = exp.slice(0, start) + "Math.pow(" + n1 + "," + n2 + ")" + exp.slice(end + 1, exp.length);
        }
    }
    //This part removes multiple parenthesis in Math.pow() function. This piece of code was copied from the answer generated by an AI code generator called ChatGPT.
    //I am writing this comment because my current level of knowledge and skillset in this language is not sufficient to completely understand this piece of code. Like seriously, wtf is this?
    exp = exp.replace(/Math\.pow\((\(+)([^)]+)(\)+)\)/g, (match, open, p1, close) => {
        return `Math.pow(${p1})`;
    });

    exp = eval(exp);
    user_output.textContent = exp;
}