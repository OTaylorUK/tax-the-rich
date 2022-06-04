import React from 'react'
import { useEffect, useState } from 'react';

function DropDown(prop) {
  const { value } = prop
  const { listItems, context } = value

  const classList = 'cursor-pointer bg-white bg-opacity-0 hover:bg-opacity-5 flex-1 basis-full font-gaegu font-bold text-base sm:text-xl md:text-3xl text-custom-accent p-1    text-center    ';


  const [data, setData] = useState(null);
  const [selectOptions, setSelectOptions] = useState(null);

  useEffect(() => {
    let selector;

    switch (listItems) {
      case 'pricedItems':
        selector = 'pluralName'
      break;
      
      case 'moneyAmounts':
        selector = 'displayValue'
      break;
    }
      

    let options = [];
    let curData = context?.dataLists?.[listItems];


    setData(curData)

    if (curData) {

      curData?.map((obj, index) => {

        // if the user is checking richlist wealth not predefined list
        if (obj?.isSelected) {

          options.push(<option selected={true} className='bg-custom-highlight' key={index} id={obj?._id}>{obj?.[selector]}</option>)
        } else {
          options.push(<option className='bg-custom-highlight' key={index} id={obj?._id}>{obj?.[selector]}</option>)
        }
      
      })
     setSelectOptions(options)
    }

    

  }, [listItems, context]);

  

  const userSelect = (e) => {
    const selectedTarget = e.target?.dataset?.amountTarget;
    const selectedOption = e.target?.selectedOptions?.[0];
    const selectedID = selectedOption?.id;
    // const selectedVal = selectedOption?.value;
    const selectedObj = data?.filter(obj => obj?._id == selectedID);


    switch (selectedTarget) {
      case 'pricedItems':
        context?.updateVariableSelection?.setSelectedItem(selectedObj?.[0])
        break;
      
      case 'moneyAmounts':
        context?.updateVariableSelection?.setSelectedAmount(selectedObj?.[0])
        break;
    }
    context?.updateVariableSelection?.setIsUpdating(true)
    context?.scrollToResults()
    
  }
  
 return (
   <select className={classList} onChange={(e) => userSelect(e)} data-amount-target={listItems} >
     {selectOptions}
  </select>
 )
  
}
export default DropDown
