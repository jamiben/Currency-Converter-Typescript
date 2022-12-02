const USD = 1.04;
const IDR = 0.000064;
const DZ = 0.0072;
const rouble = 0.016;
const EUR = 1.04;

const select1 = (document.querySelector("#choice1") as HTMLSelectElement);
const select2 = (document.querySelector("#choice2") as HTMLSelectElement);
const symbol1 = (document.querySelector("#symbol1") as HTMLElement );
const symbol2 = (document.querySelector("#symbol2") as HTMLElement);
const input1 = (document.querySelector("#input1") as HTMLInputElement);
let input2 = (document.querySelector("#input2") as HTMLInputElement);
const submit = (document.querySelector("#submit") as HTMLButtonElement);
let affichage = (document.querySelector("#Presult") as HTMLElement).innerText;

const startValue = (document.querySelector("#startValue") as HTMLOptionElement);
const compar = (document.querySelector("#compar") as HTMLOptionElement);

let i = 0;
let tabOptions = [
    {name: "USD", rate:1.04, symbol:"$"},
    {name:"IDR", rate:0.000064, symbol:"RP"},
    {name:"DNZ", rate:0.0072, symbol:"DA"},
    {name:"RB", rate:0.016, symbol:"₽"},
    {name:"EUR", rate:1.04, symbol:"€"},
];

let valeurSelect; 
let tauxEnCours;


for( i=0; i <= tabOptions.length -1; i++ ){
    select1.options[i] = new Option(tabOptions[i].name);
    select2.options[i] = new Option(tabOptions[i].name);
};

submit.onclick = function submit() {
    event?.preventDefault(); 
    
        const input1 = (document.querySelector("#input1") as HTMLInputElement).value;
        let symbol1 = (document.querySelector("#symbol1") as HTMLSpanElement).innerHTML;
        // const target1 = event?.target as HTMLSelectElement;
        let result: number | string;
        const valueInp: number = parseFloat(input1);
        let rating1 = select1.value;
        let rating2 = select2.value;
        // console.log(rating1);
        // console.log(valueInp);
        // console.log(tabOptions[1].rate);

        switch(rating1){
                
            case "USD": 
                result = valueInp! * tabOptions[0].rate; 
                symbol1 = tabOptions[0].symbol;
                // alert("dollards");
                // console.log(tabOptions[0].rate);
                break; 
            case "IDR": 
                result = valueInp * tabOptions[1].rate;
                console.log(result);
                symbol1 = tabOptions[1].symbol;
                // alert("roupies");
                break;
            case "DNZ":
                result = valueInp * tabOptions[2].rate;
                // console.log(tabOptions[2].rate);
                // alert("dinard algerien");
                break;
            case "RB":
                result = valueInp * tabOptions[3].rate;
                // console.log(tabOptions[3].rate);
                // alert("roubles");
                break;
            case "EUR":
                result = valueInp * tabOptions[4].rate;
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

        if (rating1 === rating2){
            result = 'is not possible to converte with same rating, please select an other manny';
        }

            // console.log(target1.value);
            // console.log(result);       
            // console.log(target1.value);
            // console.log(result);          
            input2.value =  `${result!}`;
}
        

