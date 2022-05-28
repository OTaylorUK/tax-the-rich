
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

	console.log({componentContext});
	

	// const variableSelection = useMemo(
	// 	() => ({
	// 		amounts: moneyAmounts,
	// 		displayType: displayType,
	// 	 }),
	// 	[moneyAmounts] //no dependencies so the value doesn't change
	//   );




	const router = useRouter()

	const questionRef = useRef();
	const resultsRef = useRef()
	const ref = useRef();

	const [replaceYou, setReplaceYou] = useState(null)
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

	const [ url, setUrl ] = useState(null);


	const scrollToResults = () => {
		if (resultsRef?.current) {
			resultsRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })  
		}
	}
	
	const dataLists = {
		pricedItems: pricedItems,
		moneyAmounts: moneyAmounts,
	}


	const variableSelection = useMemo(
		() => ({
			isUpdating: isUpdating,
			item: selectedItem,
			amount: selectedAmount,
		 }),
		[isUpdating, selectedItem, selectedAmount] //no dependencies so the value doesn't change
	);

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


	const findReplace = {
		'moneyAmount' : selectedAmount?.displayValue,
		'self': replaceYou ? ' ' : 'you'
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

		let { 
			buyingData, 
			pricedItems,
			richList
		} = {...componentContext}


		const {moneyAmounts} = {...buyingData}


		console.log({moneyAmounts});
		const filterRouterQueries = (query) => {

			const amounts = []
			const selectedPerson = null

			Object.keys(query)
				.reduce((obj, key) => {
					let person,uid;
					if(key.toLowerCase().includes('person')){
						uid = key.split('person')?.[1]

						person = {
							name: router.query[key],
							uid: uid
						};
						selectedPerson = person

					}
			}, {});

			// sort array by asc size
			amounts.sort((a,b) => (a.actualValue > b.actualValue) ? 1 : ((b.actualValue > a.actualValue) ? -1 : 0))

			console.log({amounts});
			return {amounts,selectedPerson}
		}
		// const formatMoneyAmount = (richList, selectedPerson) => {
		// 	let formatedRichList = richList?.map((curPerson, i) => {
			
		// 		let isSelected = false;
		// 		// used to preselect the select option based on the url params
		// 		if (curPerson?.uid === selectedPerson.name) {
		// 			isSelected = true;
		// 		}
		
		// 		const newObj = {
		// 			_id: curPerson.uid,
		// 			actualValue: curPerson.wealth.actualValue,
		// 			displayValue: curPerson.personName,
		// 			shortValue: curPerson.wealth.shortValue,
		// 			isSelected: isSelected,
		// 			isIndividual: true
		// 		}

		// 		if (isSelected) {
		// 			moneyAmountSelected = newObj
		// 		}

		// 		return newObj
		// 	})
		// }

		const formatRichList = (richList, selectedPerson) => {

			let moneyAmountSelected;
			// format richlist to match the moneyAmounts format
			let formatedRichList = richList?.map((curPerson, i) => {
			
				let isSelected = false;
				// used to preselect the select option based on the url params
				if (curPerson?.uid === selectedPerson.name) {
					isSelected = true;
				}
		
				const newObj = {
					_id: curPerson.uid,
					actualValue: curPerson.wealth.actualValue,
					displayValue: curPerson.personName,
					shortValue: curPerson.wealth.shortValue,
					isSelected: isSelected,
					isIndividual: true
				}

				if (isSelected) {
					moneyAmountSelected = newObj
				}

				return newObj
			})

			return {formatedRichList, moneyAmountSelected};
		
		}

		const setInitialVals = (moneyAmountsArr,pricedItems, selectedAmount, selectedItem,replaceYou) => {
			console.log({moneyAmountsArr,pricedItems, selectedAmount, selectedItem,replaceYou});
			const results = calcUnitsPerAmount(selectedItem, selectedAmount)
			
			setMoneyAmounts(moneyAmountsArr)
			setPricedItems(pricedItems)

			setSelectedAmount(selectedAmount)
			setSelectedItem(selectedItem)

			setVisualSettings(results)
			setReplaceYou(replaceYou)

		}

		const getData = async () => {
			let replaceYou = false;
			// original default values to use
			let moneyAmountsArr = JSON.parse(JSON.stringify(moneyAmounts));


			const {amounts, selectedPerson} = filterRouterQueries(router.query)

			let selectedAmount = moneyAmountsArr[0];
			const selectedItem = pricedItems[0];
			// use rich list
			if(selectedPerson !== null){
				const {formatedRichList, moneyAmountSelected} = formatRichList(richList, selectedPerson)
				moneyAmountsArr = formatedRichList;
				selectedAmount = moneyAmountSelected
				replaceYou = true;
			}

			setInitialVals(moneyAmountsArr,pricedItems, selectedAmount, selectedItem, replaceYou)
		}

		getData()
	},[router.query, componentContext ])
	

	

	/**
	 * on user selection change
	 * get priced items and rich list
	 * 
	 */
	useEffect(() => {

		console.log('user input changed something');
		console.log('----');

		console.log({variableSelection});
		const{item, amount, isUpdating} = variableSelection

		if(isUpdating){
			const results = calcUnitsPerAmount(item, amount)
			console.log({results});
			setVisualSettings(results)
			console.log({item, amount});


			if (typeof window !== 'undefined') {
				const href = window.location.href;
		
				var url = `${href}?person1=1&item1=${item?._id}`
				console.log({url});
				// setUrl(url)

			}

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




	return (
		<>
			{/* question - user input here */}
			<div  className="container    flex flex-col justify-center items-center ">
				<Header >
					<Default  blocks={question} />
				</Header>
				<Body >
					<Dynamic blocks={header} context={dynamicContext} />
				</Body>
			</div>

			{/* answer */}
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
										<SocialShare key={`btn-${i}`} context={'test'} content={button} shareUrl={url} social={social} bgColour={'bg-custom-primary'}/>
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