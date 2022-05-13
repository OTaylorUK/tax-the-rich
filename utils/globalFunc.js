import axios from "axios"

/**
 * 
 * @param {*} promises 
 * @returns Key value paired object from Promise.all
 */
export const allKeyed = async (promises) => {
  // Get an array of [name, value] pairs for the object's properties
  const entries = Object.entries(promises);
  // Wait for any thenables/promises in the values to settle
  const values = await Promise.all(entries.map(([_, value]) => value));
  // Build an object from those result values; this works because the
  // array from `Promise.all` is in the same order as the array of
  // values we gave it above.
  const result = Object.fromEntries(entries.map(([key], index) => {
      return [key, values[index]];
  }));
  return result;
}

export const getLog10 = (number) => {
  return Math.round(100*Math.log(number)/Math.log(10))/100;

}


export const formatNumberToLocal = (number) => {
  let formattedNumber = null
  const niceNum = parseInt(number)

  if (!isNaN(niceNum)) {
					
    const logten =  Math.floor(getLog10(niceNum))
    let long = ''
    let short = ''

    switch (logten) {
      case 3:
      case 4:
      case 5:
        long = 'thousand'
        short = 'k'
        break;
      case 6:
      case 7:
      case 8:
        long = 'million'
        short = 'm'

        break;
        
      case 9:
      case 10:
      case 11:
        long = 'billion'
        short = 'b'

        break;
      case 12:
      case 13:
      case 14:
        long = 'trillion'
        short = 't'

        break;
      case 15:
      case 16:
      case 17:
        long = 'quadrillion'
        short = 'q'

        break;
      default:
        break;
    }

    // convert actualValue number to display in USD 
    const display = (niceNum).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumSignificantDigits: 3
    });

    let numVal = display.split(',')[0];

    formattedNumber = {
      actualValue: niceNum,
      shortValue: `${numVal}${short}`,
      displayValue: `${numVal} ${long}`,
    }
  }
  return formattedNumber

}


/**
 * calculate the total number of pricedItem(units e.g. cars) that moneyAmount (money amount) can buy
 * @returns number to 2 decimal points
 */
export const calcTotalUnits = (pricedItem, moneyAmount) => {

  let valPrimary = pricedItem?.priceUSD;
  let valSecondary = moneyAmount?.actualValue;
  const numOfUnits = Number((valSecondary / valPrimary).toFixed(2))

  // update the display figure to reflect the true value 
  const formattedNumOfUnits = numOfUnits.toLocaleString("en-US");
  // updateNiceNumber(formattedNumOfUnits)
  
  return {
    raw: numOfUnits, 
    display: formattedNumOfUnits
  };
}

/**
 * updates values depending on how many total unit are to be displayed - helps to prevent slow browser warning
 * @param {*} totalUnits 
 */
export const calcUnitsPerAmount = (pricedItem, moneyAmount) => {

  const {display, raw} = calcTotalUnits(pricedItem, moneyAmount)

  let perUnit = 1;

  const logTen = getLog10(raw);

  /**
   * POTENTIAL CHANGE - IF LOADING IS TOO SLOW CAN REDUCE THE AMOUNT LOG10 IS REDUCED BY
   * SAFE  :  WITH -2 (max output 999)
   * CURRENT  :  WITH -3 (max output 9999)
   */
  const logFloor = Math.floor(logTen) - 3;

  // calc the per unit using the floored log 10 - limits the number to prevent slow browser warning 

  if (logTen > 4) {
    perUnit = Math.pow(10, logFloor) // keep the power to as '2' so not to detract from larger numbers that result in log 3+
    // perUnit = Math.pow(10, 2)		

  }


  // units per icon
  const displayPerUnit = perUnit.toLocaleString("en-US");
  

  const updatedTotalUnits =  Number((raw / perUnit).toFixed(2))

  const numOfUnitsPlural = updatedTotalUnits > 1 ? true : false

  return {
    isReady: true,
    isPlural:  Number(perUnit) > 1 ? true : false,
    numOfUnitsPlural: numOfUnitsPlural,
    displayName: numOfUnitsPlural ? pricedItem?.pluralName : pricedItem?.singularName,
    numOfUnits: {
      raw: updatedTotalUnits,
      display: display,
    },
    uPerIcon: {
      raw: perUnit,
      display: displayPerUnit,
    },
    unitIcon: pricedItem?.icon,
    name: {
      singular: pricedItem?.nameSingle,
      plural:  pricedItem?.namePlural,
    }
    
  };

}


export const formatGlobalSettings = (obj) => {
  for (let [key, result] of Object.entries(obj)) {
    if (!result) continue;
    if (!result?.[0]) continue;
    let type = result?.[0]._type;

    let returnContent = result;

    // handle same type value -- diff from routes
    if (type === 'page') {
      if (result.length === 1) {
        // if page content will only have one array item
        type = 'pageContent'

        // grab content to avoid to many nested arr objs
        // returnContent = result?.[0]?.content;
      }
    }
    let newObj = { name: type, value: returnContent }
    obj[key] = newObj;
  }

  return obj;
}

export const capitalizeString = (str) => {
  if (typeof str !== 'string' || !str) return str

  return str.charAt(0).toUpperCase() + str.slice(1)
}


export const getSheet = async () => {

  const response = await axios({
    method: "POST",
    url: "/api/sheets/get",
    withCredentials: false
  })

  // const response = {
  //   'test': 'test'
  // }

  return response;


}


export const getRichList = async () => {

  const API = "https://forbes400.herokuapp.com/api/forbes400/real-time?limit=10";
  const response = await axios.get(API);
  // richList = await response.data

  // // const response = {
  // //   'test': 'test'
  // // }

  return response;


}


			



export const findAndReplaceHolder = ({replaceVals, str }) => {

  var placeholders = str?.match(/\$(.*?)\$/g)
  if (placeholders) {
    let newString = '';

    placeholders?.map((placeholder, i) => {

      // text without placeholder characters
      var phText = placeholder.substring(1, placeholder.length - 1);

      // replacen with new value
      if (replaceVals[phText]) {
        if (newString !== '') {
          newString = newString.replace(placeholder, replaceVals[phText])
        
        } else {
          if (str) {
            newString = str?.replace(placeholder, replaceVals[phText])
          }
         
        }
      }
    })
    return newString;
  } else {
    return str;
  }

  // if (placeholders) {

   
  //   placeholders.forEach(function(placeholder){
  //     //Placeholder - $price$
  //     console.log('here');
  //     var phText = placeholder.substring(1, placeholder.length - 1);
      

  //     //phText = price

  //     if (replaceVals[phText]) {
  //       newString = str.replaceAll(placeholder,replaceVals[phText])

  //     }
  //   })
  //   return newString;

  // } else {
  //   return str;
    
  // }

}
