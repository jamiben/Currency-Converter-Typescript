const USD = 1.04;
const IDR = 0.000064;
const DZ = 0.0072;
const rouble = 0.016;
const EUR = 1.04;

let select1 = (document.querySelector("#choice1") as HTMLSelectElement);
const select2 = (document.querySelector("#choice2") as HTMLSelectElement);
const flag1 = (document.querySelector("#symbol1") as HTMLSpanElement);
const flag2 = (document.querySelector("#symbol2") as HTMLSpanElement);
const input1 = (document.querySelector("#input1") as HTMLInputElement);
const input2 = (document.querySelector("#input2") as HTMLInputElement);
const submit = (document.querySelector("#submit") as HTMLButtonElement);
const swap = (document.querySelector('#swap')as HTMLElement);

let i = 0;
let tabOptions = [
    {name: "USD", rate:1.04, symbol: "🇺🇸"},
    {name:"IDR", rate:0.000064, symbol:"🇮🇩"},
    {name:"DNZ", rate:0.0072, symbol:"🇩🇿"},
    {name:"RB", rate:0.016, symbol:"🇷🇺"},
    {name:"EUR", rate:1.04, symbol:"🇪🇺"},
];


let flagA = tabOptions[0].symbol;
let flagB = tabOptions[0].symbol;
flag1.innerHTML = `${flagA}`;
flag2.innerHTML = `${flagB}`;


select1.addEventListener('change', () => {
    let select1Value = select1.selectedIndex;


    switch(select1Value ){
        case 0: 
            flagA = tabOptions[0].symbol;
            break;
        case 1: 
            flagA = tabOptions[1].symbol;
            break;
        case 2: 
            flagA = tabOptions[2].symbol;
            break;
        case 3: 
            flagA = tabOptions[3].symbol;
            break;
        case 4: 
            flagA = tabOptions[4].symbol;
            break;
    }   
    flag1.innerHTML = `${flagA}`;
});

select2.addEventListener("change", () => {
    let select2Value = select2.selectedIndex; 

    switch(select2Value){
        case 0:
            flagB = tabOptions[0].symbol;
            break;
        case 1:
            flagB = tabOptions[1].symbol;
            break;
        case 2:
            flagB = tabOptions[2].symbol;
            break;
        case 3:
            flagB = tabOptions[3].symbol;
            break;
        case 4:
            flagB = tabOptions[4].symbol;
            break;
    }
    flag2.textContent = `${flagB}`;
});

for( i=0; i <= tabOptions.length -1; i++ ){
    select1.options[i] = new Option(tabOptions[i].name);
    select2.options[i] = new Option(tabOptions[i].name);
};


submit.onclick = function Submit(event) {
    event?.preventDefault(); 

        let error = (document.querySelector("#error")as HTMLSpanElement);

        // la valeur de mon input
        let result: number;
        const valueInp = parseFloat(input1.value);
        let rating1 = select1.value;
        let rating2 = select2.value;

        // switch des valeurs de monnaie sur le premiere select option
        switch(rating1){      
            case "USD": 
                result = valueInp! * tabOptions[0].rate; 
                break; 
            case "IDR": 
                result = valueInp * tabOptions[1].rate;
                break;
            case "DNZ":
                result = valueInp * tabOptions[2].rate;
                break;
            case "RB":
                result = valueInp * tabOptions[3].rate;
                break;
            case "EUR":
                result = valueInp * tabOptions[4].rate;
                break;
        }  
        
        switch(rating2){
                
            case "USD": 
                result = valueInp! / tabOptions[0].rate; 
                break; 
            case "IDR": 
                result = valueInp / tabOptions[1].rate;
                break;
            case "DNZ":
                result = valueInp / tabOptions[2].rate;
                break;
            case "RB":
                result = valueInp / tabOptions[3].rate;
                break;
            case "EUR":
                result = valueInp / tabOptions[4].rate;
                break;         
        };

        error.innerHTML = "";
        const numberValue = (input1).valueAsNumber;  

    

        if (rating1 === rating2){
            error!.innerHTML = 'is not possible to converte with same rating, please select an other money';
        }
        else if(isNaN(numberValue)){
                error.innerHTML = "give number";
            }
        else{
            input2.value =  `${result!}`;
        }// console.log(isNaN(numberValue));
}


swap.onclick = function swatchInput(event) {
    input1.value = "";
    event?.preventDefault(); 

    let value1 = input1.value;
    let result2 = input2.value;
    let swapAction = value1;

    value1 = result2;
    result2 = swapAction;
    input1.value = value1;
    (document.querySelector("#input2")as HTMLInputElement).value = result2; 
}

        

