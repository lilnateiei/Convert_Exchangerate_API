const API_KEY = `https://v6.exchangerate-api.com/v6/737d6cddfb08bcf69dcb4114/pair/` 
    
   


async function ConverterCurrency(API_KEY) {

     

    const amountDOM = document.getElementById('Amount').value.trim();
    const CurrencyDOM = document.getElementById('Currency');
    const ExchangeDOM = document.getElementById('Exchange');
    const resultDOM = document.getElementById('result')

    let selectedCurrency = CurrencyDOM.value;
    let selectedExchange = ExchangeDOM.value;

    for(let i=0;i<CurrencyDOM.options.length; i++){

    }

    for(let i=0;i<ExchangeDOM.options.length; i++){

    }
    

    if(!amountDOM || isNaN(amountDOM)){
        resultDOM.innerText = "Please Enter Correct Amount"
    }
    
    const url = `https://v6.exchangerate-api.com/v6/737d6cddfb08bcf69dcb4114/pair/${selectedCurrency}/${selectedExchange}/${amountDOM}`
    


  try {
    const respone = await fetch(url);
    const data = await respone.json();

    if(data.result === "success") {
        resultDOM.innerText = `${data.conversion_result.toFixed(2)} ${data.target_code}`
    } else {
        resultDOM.innerText = `Conversation Failed Please Try again `
    }

  }  catch (error) {
    console.log('Error',error)
    resultDOM.innerText = `Error fetching data`
  }
    
     


    
  
    
   
    
   
}


