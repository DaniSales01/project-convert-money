const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');
const currencyAboveSelect = document.querySelector('.currency-above-select');

const convertValues = async () => {
  const inputCurrencyValue = document.querySelector('.input-currency').value;
  const currencyValueToConvert = document.querySelector('.currency-value-to-convert'); //Valor em Real
  const currencyValueConverted = document.querySelector('.currency-value'); // Outras Moedas

  const data = await fetch ('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,BRL-USD').then(response => response.json())
    
  const dolarToday = data.USDBRL.high
  const euroToday = data.EURBRL.high
  const bitcoinToday = data.BTCBRL.high
  const libraToday = data.GBPBRL.high
  const realToday = data.BRLUSD.high
  


  if (currencyAboveSelect.value == 'real') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(inputCurrencyValue); 
  }

  if (currencyAboveSelect.value == 'dolar') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(inputCurrencyValue); 
    }

  if (currencyAboveSelect.value == 'euro') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR'   
  }).format(inputCurrencyValue);
}
  if (currencyAboveSelect.value == 'bitcoin') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BTC'  
  }).format(inputCurrencyValue);
}

  if (currencyAboveSelect.value == 'libra') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat ('en-UK', {
      style: 'currency',
      currency: 'GBP'  
  }).format(inputCurrencyValue)
}

// --------------------------------------------------------------------------------------//


//VALOR CONVERTIDO//
  if (currencySelect.value == 'dolar') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputCurrencyValue / dolarToday)
}
   
  if (currencySelect.value == 'euro') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(inputCurrencyValue / euroToday)
}

   if (currencySelect.value == 'libra') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat ('en-UK', {
        style: 'currency',
        currency: 'GBP'
   }).format(inputCurrencyValue / libraToday)
}
   if (currencySelect.value == 'bitcoin') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BTC'
    }).format(inputCurrencyValue / bitcoinToday)
}

if (currencySelect.value == 'real') {
    currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue / realToday)
}

// --------------------------------------------------------------------------------------//

if (currencyAboveSelect.value == 'dolar' && currencySelect.value == 'euro') {
   currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
   }).format(inputCurrencyValue),
  
   currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
   }).format(inputCurrencyValue * (dolarToday / euroToday))
   
}

if (currencyAboveSelect.value == 'euro' && currencySelect.value == 'dolar') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
   style: 'currency',
   currency: 'EUR'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD'
  }).format(inputCurrencyValue * (euroToday / dolarToday))
  
}

if (currencyAboveSelect.value == 'libra' && currencySelect.value == 'dolar') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
   style: 'currency',
   currency: 'GBP'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD'
  }).format(inputCurrencyValue * (libraToday / dolarToday))
  
}

if (currencyAboveSelect.value == 'dolar' && currencySelect.value == 'bitcoin') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'BTC'
  }).format(inputCurrencyValue * (dolarToday / bitcoinToday))
  
}

if (currencyAboveSelect.value == 'bitcoin' && currencySelect.value == 'dolar') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'BTC'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD'
  }).format(inputCurrencyValue * (bitcoinToday / dolarToday))
  
}

if (currencyAboveSelect.value == 'dolar' && currencySelect.value == 'real') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'USD'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
   style: 'currency',
   currency: 'BRL'
  }).format(inputCurrencyValue * dolarToday) 
  
}

if (currencyAboveSelect.value == 'euro' && currencySelect.value == 'libra') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
   style: 'currency',
   currency: 'EUR'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
   style: 'currency',
   currency: 'GBP'
  }).format(inputCurrencyValue * (euroToday / libraToday)) 
  
}

if (currencyAboveSelect.value == 'libra' && currencySelect.value == 'euro') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
   style: 'currency',
   currency: 'GBP'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
   style: 'currency',
   currency: 'EUR'
  }).format(inputCurrencyValue * (libraToday / euroToday)) 
  
}

if (currencyAboveSelect.value == 'euro' && currencySelect.value == 'bitcoin') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
   style: 'currency',
   currency: 'EUR'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'BTC'
  }).format(inputCurrencyValue * (euroToday / bitcoinToday)) 
  
}

if (currencyAboveSelect.value == 'bitcoin' && currencySelect.value == 'euro') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'BTC'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
   style: 'currency',
   currency: 'EUR'
  }).format(inputCurrencyValue * (bitcoinToday / euroToday)) 
  
}

if (currencyAboveSelect.value == 'euro' && currencySelect.value == 'real') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
   style: 'currency',
   currency: 'EUR'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
   style: 'currency',
   currency: 'BRL'
  }).format(inputCurrencyValue * euroToday) 
  
}

if (currencyAboveSelect.value == 'libra' && currencySelect.value == 'bitcoin') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
   style: 'currency',
   currency: 'GBP'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'BTC'
  }).format(inputCurrencyValue  (libraToday / bitcoinToday)) 
  
}

if (currencyAboveSelect.value == 'bitcoin' && currencySelect.value == 'libra') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
   style: 'currency',
   currency: 'BTC'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
   style: 'currency',
   currency: 'GBP'
  }).format(inputCurrencyValue * (bitcoinToday / libraToday)) 
  
}

if (currencyAboveSelect.value == 'libra' && currencySelect.value == 'real') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
   style: 'currency',
   currency: 'GBP'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
   style: 'currency',
   currency: 'BRL'
  }).format(inputCurrencyValue * libraToday) 
  
}

if (currencyAboveSelect.value == 'bitcoin' && currencySelect.value == 'real') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
   style: 'currency',
   currency: 'BTC'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
   style: 'currency',
   currency: 'BRL'
  }).format(inputCurrencyValue * bitcoinToday) 
  
}

if (currencyAboveSelect.value == 'real' && currencySelect.value == 'real') {
  currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-UK', {
   style: 'currency',
   currency: 'BRL'
  }).format(inputCurrencyValue),
 
  currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
   style: 'currency',
   currency: 'BRL'
  }).format(inputCurrencyValue)
  
  }

  if (currencyAboveSelect.value == 'dolar' && currencySelect.value == 'libra') {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(inputCurrencyValue),

  currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP'
    }).format(inputCurrencyValue * (dolarToday / libraToday))

}

}


function changeCurrency(){

  const convertContentText = document.querySelector('.currency-above-name')
  const convertContentImg = document.querySelector('.currency-above-img')
    
    

    if(currencyAboveSelect.value == 'real') {
        convertContentText.innerHTML = "Real Brasileiro"
        convertContentImg.src = './assets/real.png'
    }

    if(currencyAboveSelect.value == 'dolar') {
        convertContentText.innerHTML = "Dólar americano"
        convertContentImg.src = './assets/dolar.png'
    }

    if(currencyAboveSelect.value == 'euro') {
      convertContentText.innerHTML = 'Euro'
      convertContentImg.src = './assets/euro.png'

    }
    
    if(currencyAboveSelect.value == 'bitcoin') {
        convertContentText.innerHTML = 'Bitcoin'
        convertContentImg.src = './assets/bitcoin.png'

    }

    if(currencyAboveSelect.value == 'libra') {
        convertContentText.innerHTML = 'Libra'
        convertContentImg.src = './assets/libra.png'
    }

  const currencyName = document.getElementById('currency-name')
  const currencyImage = document.querySelector('.currency-img')

  if(currencySelect.value == 'real') {
    currencyName.innerHTML = 'Real Brasileiro'
    currencyImage.src = './assets/real.png'
  }

    if(currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImage.src = './assets/dolar.png'
    }

    if(currencySelect.value == 'euro') {
      currencyName.innerHTML = 'Euro'
      currencyImage.src = './assets/euro.png'
    }

    if(currencySelect.value == 'bitcoin') {
      currencyName.innerHTML = 'Bitcoin'
      currencyImage.src = './assets/bitcoin.png'
    }

    if(currencySelect.value == 'libra') {
      currencyName.innerHTML = 'Libra'
      currencyImage.src = './assets/libra.png'
    }

    convertValues()

  }

    
currencyAboveSelect.addEventListener('change', changeCurrency)
currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)
