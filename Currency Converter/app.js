const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('form button');

const fromCurr = document.querySelector('.from select');
const toCurr = document.querySelector('.to select');
const msg = document.querySelector('.msg');


window.addEventListener('load',()=>{
    updateExchange();
});


for(let select of dropdowns){
    for(currCode in countryList){

        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name === "From" && currCode === "USD"){
            newOption.selected = 'selected';
        }
        if(select.name === "To" && currCode === "INR"){
            newOption.selected = 'selected';
        }
        select.append(newOption);
    }
    select.addEventListener('change', (event)=>{
        updateFlag(event.target);
    });
}

const updateExchange =  async () =>{
    let amount = document.querySelector('.amount input');
    let amtVal = amount.value;
    if(amtVal === '' || amtVal < 1){
        amtVal = 1;
        amount.value = '1';
    }


    const url = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

    let response = await fetch(url);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    
    let finalAmt = amtVal*rate;

    msg.innerText = `${amount} ${fromCurr.value} = ${finalAmt} ${toCurr}`;
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}


btn.addEventListener('click' , (event)=>{
    event.preventDefault();
    updateExchange();
});

window.addEventListener('load',()=>{
    updateExchange();
});




