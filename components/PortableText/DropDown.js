import React from 'react'
import { useEffect, useState } from 'react';
import client from '../../client'


function DropDown(prop) {
  const { value } = prop
  const { listItems, context } = value
  // {value}
  const classList = 'm-1.5  font-bold text-5xl bg-transparent text-custom-tertiary underline text-center font-bold  uppercase ';


	const [data, updateData] = useState();

  const groqQueries = {
    'pricedItems' : `*[_type in ["pricedItems"]]{...,image{asset->{
      altText,
      url,
      }}}`,
    'moneyAmounts' : `*[_type in ["moneyAmounts"]] | order(actualValue asc)`
  }


	useEffect(() => {
		const getData = async (queryName) => {
			const resp = await client.fetch(groqQueries[queryName]);
			updateData(resp);
    }
        
    switch (listItems) {
      case 'pricedItem':
        getData('pricedItems');
        break;
      
      case 'moneyAmount':
    		getData('moneyAmounts');
        break;
    }
    
  }, []);
  

  useEffect(() => {
    if (data) {

      data.map((obj, index) => {

        if (index === 0) {
          switch (listItems) {
            case 'pricedItem':
              context?.updateObjectA(obj)
              break;
            
            case 'moneyAmount':
              context?.updateObjectB(obj)
              break;
          }
        }
        
      })
    }
    
	}, [data]);

	const options = [];

	if (data) {
    let selector;
    switch (listItems) {
      case 'pricedItem':
    	selector = 'namePlural'
      break;
      
      case 'moneyAmount':
        selector = 'displayValue'
      break;
    }

    data.map((obj, index) => {
			options.push(<option className='bg-custom-primary' key={index} id={obj?._id}>{obj?.[selector]}</option>)
		})
  }
  const userSelect = (e) => {
    const selectedTarget = e.target?.dataset?.amountTarget;
    const selectedOption = e.target?.selectedOptions?.[0];
    const selectedID = selectedOption?.id;
    // const selectedVal = selectedOption?.value;
    const selectedObj = data.filter(obj => obj?._id == selectedID);

    context?.updateDataReady(false)

    switch (selectedTarget) {
      case 'pricedItem':
        context?.updateObjectA(selectedObj?.[0])
        break;
      
      case 'moneyAmount':
        context?.updateObjectB(selectedObj?.[0])
        break;
    }
  }
  
  
 return (
  <select className={classList}  onChange={(e) => userSelect(e)} data-amount-target={listItems} >
    {options}
  </select>
 )
  
}

export default DropDown
