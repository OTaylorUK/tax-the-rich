import React from 'react'
import { useEffect, useState } from 'react';
import client from '../../client'


function DropDown(prop) {
  const { value } = prop
  const { listItems, context } = value

  const classList = 'flex-1 basis-full font-bold text-base sm:text-xl md:text-3xl text-custom-accent p-1  bg-transparent  text-center    ';


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
        // context?.setPricedItem(selectedObj?.[0])
        // context?.updateSetValues({name: 'pricedItem', value: selectedObj?.[0] })
        context?.updateVariableSelection?.setSelectedItem(selectedObj?.[0])

        
        break;
      
      case 'moneyAmounts':
        // context?.setMoneyAmount(selectedObj?.[0])
        // context?.updateSetValues({name: 'moneyAmount', value: selectedObj?.[0] })

        // context?.updateSetValues({name: 'findReplace', value: {
        //   'moneyAmount': selectedObj?.[0].displayValue,
			  //   'self': context?.settings?.findReplace?.self
        // } })


        context?.updateVariableSelection?.setSelectedAmount(selectedObj?.[0])


        



        break;
    }
    context?.updateVariableSelection?.setIsUpdating(true)
    context?.scrollToResults()

    
  }
  
  // console.log('options:', options);
 return (
   <select className={classList} onChange={(e) => userSelect(e)} data-amount-target={listItems} >
     {selectOptions}
  </select>
 )
  
}
export default DropDown
