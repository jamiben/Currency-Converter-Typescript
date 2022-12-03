const USD = 1.04;
const IDR = 0.000064;
const DZ = 0.0072;
const rouble = 0.016;
const EUR = 1.04;

const select1 = (document.querySelector("#choice1") as HTMLSelectElement);
const select2 = (document.querySelector("#choice2") as HTMLSelectElement);
const flag1 = (document.querySelector("#symbol1") as HTMLSpanElement);
const flag2 = (document.querySelector("#symbol2") as HTMLSpanElement);
const symbol2 = (document.querySelector("#symbol2") as HTMLElement);
let input2 = (document.querySelector("#input2") as HTMLInputElement);
const submit = (document.querySelector("#submit") as HTMLButtonElement);
const startValue = (document.querySelector("#startValue") as HTMLOptionElement);
const compar = (document.querySelector("#compar") as HTMLOptionElement);

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
    // console.log(select1Value);

    switch(select1Value){
        case 0: 
            flagA = tabOptions[0].symbol;
            console.log(flagA);
            break;
        case 1: 
            flagA = tabOptions[1].symbol;
            console.log(flagA);
            break;
        case 2: 
            flagA = tabOptions[2].symbol;
            console.log(flagA);
            break;
        case 3: 
            flagA = tabOptions[3].symbol;
            console.log(flagA);
            break;
        case 4: 
            flagA = tabOptions[4].symbol;
            console.log(flagA);
            break;
    }   
    flag1.innerHTML = `${flagA}`;
});
select2.addEventListener("change", () => {
    let select2Value = select2.selectedIndex; 
    // console.log(select2Value);

    switch(select2Value){
        case 0:
            flagB = tabOptions[0].symbol;
            console.log(flagB);
            break;
        case 1:
            flagB = tabOptions[1].symbol;
            console.log(flagB);
            break;
        case 2:
            flagB = tabOptions[2].symbol;
            console.log(flagB);
            break;
        case 3:
            flagB = tabOptions[3].symbol;
            console.log(flagB);
            break;
        case 4:
            flagB = tabOptions[4].symbol;
            console.log(flagB);
            break;
    }
    flag2.textContent = `${flagB}`;
});

for( i=0; i <= tabOptions.length -1; i++ ){
    select1.options[i] = new Option(tabOptions[i].name);
    select2.options[i] = new Option(tabOptions[i].name);
};

submit.onclick = function submit() {
    event?.preventDefault(); 

        // let flag: string = tabOptions[0].symbol;
        let error = (document.querySelector("#error")as HTMLSpanElement);
        const input1 = (document.querySelector("#input1") as HTMLInputElement).value;
        let result: number;
        const valueInp: number = parseFloat(input1);
        let rating1 = select1.value;
        let rating2 = select2.value;
        // console.log(rating1);
        // console.log(valueInp);
        // console.log(tabOptions[1].rate);

        switch(rating1){
                
            case "USD": 
                result = valueInp! * tabOptions[0].rate; 
                // alert("dollards");
                // console.log(tabOptions[0].symbol);
                // flag = tabOptions[0].symbol;
                break; 
            case "IDR": 
                result = valueInp * tabOptions[1].rate;
                console.log(result);
                // flag = tabOptions[1].symbol;
                // alert("roupies");
                break;
            case "DNZ":
                result = valueInp * tabOptions[2].rate;
                // flag = tabOptions[2].symbol;
                // console.log(tabOptions[2].rate);
                // alert("dinard algerien");
                break;
            case "RB":
                result = valueInp * tabOptions[3].rate;
                // flag = tabOptions[3].symbol;
                // console.log(tabOptions[3].rate);
                // alert("roubles");
                break;
            case "EUR":
                result = valueInp * tabOptions[4].rate;
                // flag = tabOptions[4].symbol;
                // console.log(tabOptions[4].rate);
                // alert("euro");
                break;
        }  
        
        switch(rating2){
                
            case "USD": 
                result = valueInp! / tabOptions[0].rate; 
                // alert("dollards");
                break; 
            case "IDR": 
                result = valueInp / tabOptions[1].rate;
                // alert("roupies");
                break;
            case "DNZ":
                result = valueInp / tabOptions[2].rate;
                // alert("dinard algerien");
                break;
            case "RB":
                result = valueInp / tabOptions[3].rate;
                // alert("roubles");
                break;
            case "EUR":
                result = valueInp / tabOptions[4].rate;

                // alert("euro");
                break;         
        };

        error.innerHTML = "";

        if (rating1 === rating2){
            error!.innerHTML = 'is not possible to converte with same rating, please select an other money';
        }

        if(typeof input1.valueOf() == "string"){
            error!.innerHTML = "give number";
        }
            // console.log(target1.value);
            // console.log(result);       
            // console.log(target1.value);
            // console.log(result);          
            input2.value =  `${result!}`;
            // flag1.innerHTML = `${flag}`;
}
        

