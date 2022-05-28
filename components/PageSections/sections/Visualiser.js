
import React, { useCallback, useMemo, useRef } from 'react';
import { toPng } from 'html-to-image';
import {Dynamic, Default} from "../../PortableContent";
import { useEffect, useState } from 'react';
import {Results, Icons, Source, Keys} from "../../Visualise";
import {SocialShare} from '../../Button'
import { PortableButton } from "../../PortableContent";
import { useRouter } from "next/router";
import {  getSheet, getRichList, allKeyed, formatNumberToLocal, calcUnitsPerAmount } from '../../../utils/globalFunc';

import { Header, Body } from '../sectionLayout';


const Visualiser = ({
	question,
	header,
	answer,
	buttons,
	social,
	componentContext
}) => {

	let { moneyAmounts : initalMoney, pricedItems : allItems } = {...componentContext?.data}

	const router = useRouter()

	const questionRef = useRef();
	const resultsRef = useRef()
	const ref = useRef();

	const [replaceYou, setReplaceYou] = useState(true)
	const [pricedItems, setPricedItems] = useState(null)
	const [moneyAmounts, setMoneyAmounts] = useState(null)
	const [selectedItem, setSelectedItem] = useState(null)
	const [selectedAmount, setSelectedAmount] = useState(null)
	const [isUpdating, setIsUpdating] = useState(false)
	const [visualSettings, setVisualSettings] = useState({
		isReady: false,
		unitIcon: null,
		numOfUnits: {
			raw: null,
			display: null,
		},
		isPlural: null,
		uPerIcon: {
			singular: null,
			plural: null,
		}
	});

	const [ url, setUrl ] = useState("");



	const scrollToResults = () => {
		if (resultsRef?.current) {
			resultsRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })  
		}
	}

	
	const dataLists = {
		pricedItems: pricedItems,
		moneyAmounts: moneyAmounts,
	}

	// const variableSelection = {
	// 	isUpdating: isUpdating,
	// 	item: selectedItem,
	// 	amount: selectedAmount,
	// }
	const variableSelection = useMemo(
		() => ({
			isUpdating: isUpdating,
			item: selectedItem,
			amount: selectedAmount,
		 }),
		[isUpdating, selectedItem, selectedAmount] //no dependencies so the value doesn't change
	  );

	const findReplace = {
		'moneyAmount' : selectedAmount?.displayValue,
		'self': replaceYou ? 'you' : ' '
	}

	const updateVariableSelection = {
		setIsUpdating,
		setSelectedItem,
		setSelectedAmount
	}


	// Use effects //
	/**
	 * on load / router change
	 */


	
	useEffect(() => {
		const {
			personName, 
			personNetWorth,
			moneyAmount,
			pricedItem
		} = { ...router.query }


		const formatRichList = (richList, personName) => {
			// format richlist to match the moneyAmounts format
			let formatedRichList = richList?.map((indv, i) => {
				const niceName = indv?.personName?.replaceAll(' ', '-');
				const toFixed = Number(indv?.finalWorth).toFixed(2)
				const netWorth =  Number(toFixed) * 1000000 // convert num to billions
				const shortWorth =  (Number(toFixed) / 1000000).toFixed(2)
		
				let isSelected = false;
		
				// used to preselect the select option based on the url params
				if (indv?.personName === personName) {
					isSelected = true;
				}
		
				const newObj = {
					_id: niceName,
					actualValue: netWorth,
					displayValue: indv?.personName,
					shortValue: `$${shortWorth}b`,
					isSelected: isSelected,
					isIndividual: true
				}

				return newObj
			})

			return formatedRichList;
		
		}

		/**
		 * sets the states for the lists and conditionally might add user selected choices if passed as a param in the url
		 */
		const getData = async () => {
			// const {richList, items} = await allKeyed({

			let finalRichList,finalPricedItems,finalAmounts,  finalSelectedItem, finalSelectedAmount;

			let moneyAmountsArr = JSON.parse(JSON.stringify(initalMoney));
			
			const {richList, items} = await allKeyed({
				richList: getRichList(),
				items: getSheet(),
			});


			if(richList?.data.length > 0){
				finalRichList = formatRichList(richList?.data, personName)
			}

			if(items?.data.length > 0){
				finalPricedItems = items?.data
			}
			
			// default set if no change - try to find more elegant way of doing this
			finalSelectedItem = finalPricedItems[0]
			finalAmounts = moneyAmountsArr
			finalSelectedAmount = moneyAmountsArr[0]

			if(personName){
				finalAmounts = finalRichList

				finalSelectedAmount = finalRichList?.filter(obj => obj?.isSelected == true)?.[0];

				setReplaceYou(false)

			} else if(moneyAmount || pricedItem){
				let selectedAmount = null, foundItem = null;

				// update only if the moneyAmount is set else it'll stay to the default selection
				if(moneyAmount){
					const niceNum = parseInt(moneyAmount)

					if(moneyAmountsArr?.filter(obj => obj?.actualValue === niceNum).length > 0){
						selectedAmount = moneyAmountsArr?.filter(obj => obj?.actualValue === niceNum)[0]
					}else{
						// if value does not exist in the array then add it to the moneyAmount arr and update the state

						selectedAmount = formatNumberToLocal(moneyAmount)
						selectedAmount['isSelected'] = true;
						moneyAmountsArr.push(selectedAmount)

						// update
						finalSelectedAmount = moneyAmountsArr
						finalAmounts = moneyAmountsArr

					}
					finalSelectedItem = selectedAmount
				}

				// update only if the pricedItem is set otherwise set it as the first in arr of pricedItems
				if(pricedItem){
					if(finalPricedItems?.filter(obj => obj?._id === data?.pricedItem).length > 0){
						foundItem = finalPricedItems?.filter(obj => obj?._id === data?.pricedItem)[0]
					}else{
						console.error(`We cannot find this item in the list`);
					}
				}

				if(foundItem !== null){
					finalSelectedItem = foundItem
				}


			} else{
				finalSelectedItem = finalPricedItems[0]
				finalSelectedAmount = 
				initalMoney[0]
			}


			setPricedItems(finalPricedItems)
			setMoneyAmounts(finalAmounts)


			// prevent overwriting the selected item if already set
			if(selectedItem === null){
				setSelectedItem(finalSelectedItem)
			}
	
			// prevent overwriting the selected amount if already set
			if(selectedAmount === null){
				setSelectedAmount(finalSelectedAmount)
			}
		
			setIsUpdating(true)

		}

		console.log('get data is called');

		getData(personName)

	},[router.query, initalMoney, selectedItem, selectedAmount])


	/**
	 * on user selection change
	 * get priced items and rich list
	 * 
	 */
	useEffect(() => {
		const{item, amount, isUpdating} = variableSelection

		if(isUpdating){
			const results = calcUnitsPerAmount(item, amount)
			console.log({results});
			setVisualSettings(results)
			setIsUpdating(false)
		}

	},[variableSelection])



	// grouped functions and vals to send to components that user interaction is controlled
	const dynamicContext = {
		dataLists,
		updateVariableSelection,
		questionRef,
		scrollToResults,
		
	}


	// download button
	const downloadButtonClick = useCallback(() => {

		if (resultsRef.current === null) {
			  return null
		}
		  
		if (questionRef.current === null) {
			  return null
		}

		// hide specific article section
		function filter(node) {
			return (node.tagName !== 'ARTICLE');
		}

		console.log('resultsRef.current::::', resultsRef.current?.offsetHeight);

  
		toPng(resultsRef.current, { cacheBust: true, filter: filter})
			.then((dataUrl) => {
			  
			  const link = document.createElement('a')
			  link.download = `${questionRef?.current?.fileName}.png`
			  link.href = dataUrl
			  
			  link.click()
		  })
		  .catch((err) => {
			console.error(err)
		  })
	}, [resultsRef])

	const buttonFunction = () => {
		downloadButtonClick()
	}
	const btnContent = {
		buttonFunction
	}

	// social share button

	//  conditional create image or get image url - add url to button context
	const shareButtonClick = useCallback(() => {
		if (resultsRef.current === null) {
		  return null
		}
		if (questionRef.current === null) {
		  return null
		}

		  
		function filter(node) {
			// console.log('\node', node);
			return (node.tagName !== 'ARTICLE');
		}



		// const getImage = async () =>{

		// 	const imgUrl = `https://res.cloudinary.com/virtual-jungle/image/upload/taxtherich/v1651164784/${questionRef?.current?.uriFriendly}.png`

		// 	// if the image does not exist then ok to add to server - helps to avoid unnecessarily bandwidth usage
		// 	axios.get(imgUrl)
		// 	.then(function (res) {
		// 		console.log('image already exists');

		// 		setUrl(imgUrl)
		// 	})
		// 	.catch(function (error) {
				
		// 		// ok to add
		// 		toPng(resultsRef.current, { cacheBust: true, filter: filter })
		// 		.then((dataUrl) => {
				
		// 			const data = new FormData()

		// 			data.append("file", dataUrl)
		// 			data.append("upload_preset", "lfqya19b")
		// 			data.append("cloud_name","virtual-jungle")
		// 			data.append("public_id", questionRef?.current?.fileName);


		// 			axios.post("https://api.cloudinary.com/v1_1/virtual-jungle/image/upload", data)
		// 			.then(function (response) {

		// 				console.log('successfully added image to the cloud');
		// 				if(response?.data?.url){
		// 					setUrl(response.data.url)
		// 				}
		// 			})
		// 			.catch(function (error) {
		// 				console.error('failed to add image to the cloud', error);
		// 			});
			
		// 		})
		// 		.catch((err) => {
		// 			console.error(err)
		// 		})
		// 	});

				
		// }


		//  getImage()


		
	}, [resultsRef])

	const buttonFunctionAlt = () => {
		// shareButtonClick()
	}
	const btnShareContext = {
		buttonFunctionAlt,
		url
	}


	const sourceData = useMemo(
		() => ({
			text: selectedItem?.text,
			replaceDetails: {
				"price": `${selectedItem?.priceUSD?.toLocaleString("en-US")}`,
				"name": `${selectedItem?.singularName}`,
			},
			sources: selectedItem?.sources
		 }),
		[selectedItem]
	  );


	return (
		<>
			<div  className="container    flex flex-col justify-center items-center ">
				<Header >
					<Default  blocks={question} />
				</Header>
				<Body >
					<Dynamic blocks={header} context={dynamicContext} />
				</Body>
			</div>

			<div ref={ref}  className="container    flex flex-col justify-center items-center ">
				<Header >
					<Default blocks={answer} findReplace={findReplace}  />
				</Header>
				<Body >
					<div className="relative w-full gap-12  flex flex-col">
						<Results number={visualSettings?.numOfUnits?.display} text={visualSettings?.displayName}  isPlural={visualSettings?.numOfUnitsPlural} />
						<Source {...sourceData} />
					</div>

					<div className="relative w-full h-full mb-60">
						<Keys keys={[visualSettings]} type={'icon'}  />
						<Icons  data={visualSettings} />
					</div>

					<div className="w-full h-full ">
						<article className="relative -top-24 wrap flex flex-row flex-wrap justify-center items-center gap-5">
							{buttons?.map((button, i) => {
								if (i === 0) {
									return (
										<SocialShare key={`btn-${i}`} context={btnShareContext} content={button} social={social} bgColour={'bg-custom-primary'}/>
									)
								} else {
									return (
										<PortableButton key={`btn-${i}`} content={button} context={btnContent}/>
									)
								}
							})}
						</article>
					</div>
				</Body>
			</div>

			
		</>
	)

}
 
export default Visualiser;