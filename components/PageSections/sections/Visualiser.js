
import React, { useCallback, useMemo, useRef } from 'react';
import { toPng } from 'html-to-image';
import {Dynamic, Default} from "../../PortableContent";
import { useEffect, useState } from 'react';
import {Results, Icons, Source, Keys} from "../../Visualise";
import {Buttons} from '../../Button'
import { useRouter } from "next/router";
import { formatNumberToLocal, calcUnitsPerAmount } from '../../../utils/globalFunc';

import { Header, Body, Container } from '../sectionLayout';


const Visualiser = ({
	question,
	header,
	answer,
	buttons,
	componentContext
}) => {

	const router = useRouter()

	const questionRef = useRef();
	const resultsRef = useRef()

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

	const [curQuestion, setCurQuestion] = useState(null);


	const formatQuestion = (question = null, numOfUnits = null) => {

		console.log({numOfUnits});
		if(question){
			const raw = `${question.amount} could pay for ${numOfUnits.display} ${question.item} `

			const fileName = raw.replace(/([ ]|[?])/g, "");
			const uriFriendly =  encodeURIComponent(fileName)
			const finalQuestion = {
				raw: raw,
				fileName: fileName,
				uriFriendly:  uriFriendly
			};
			setCurQuestion(finalQuestion)
		}
	}
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
				"price": `${selectedItem?.wealth?.trueVal}`,
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

			return {amounts,selectedPerson}
		}

		const formatItemList = (pricedItems) => {
			let formattedList = pricedItems?.map((item, i) => {
				const wealth = formatNumberToLocal(item.priceUSD)
				const newObj = {...item, wealth: wealth}
				return newObj
			})

			return formattedList;
		
		}
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
			const results = calcUnitsPerAmount(selectedItem, selectedAmount)
			
			setMoneyAmounts(moneyAmountsArr)
			setPricedItems(pricedItems)

			setSelectedAmount(selectedAmount)
			setSelectedItem(selectedItem)

			setVisualSettings(results)

			formatQuestion({
				'item': selectedItem.pluralName,
				'amount': selectedAmount.displayValue
			}, results.numOfUnits)

			
			setReplaceYou(replaceYou)

		}

		const getData = async () => {
			let replaceYou = false;

			const finalPricedItems = formatItemList(pricedItems)

			// original default values to use
			let moneyAmountsArr = JSON.parse(JSON.stringify(moneyAmounts));


			const {amounts, selectedPerson} = filterRouterQueries(router.query)

			let selectedAmount = moneyAmountsArr[0];
			const selectedItem = finalPricedItems[0];
			// use rich list
			if(selectedPerson !== null){
				const {formatedRichList, moneyAmountSelected} = formatRichList(richList, selectedPerson)
				moneyAmountsArr = formatedRichList;
				selectedAmount = moneyAmountSelected
				replaceYou = true;
			}


			setInitialVals(moneyAmountsArr,finalPricedItems, selectedAmount, selectedItem, replaceYou)
		}

		getData()
	},[router.query, componentContext ])
	

	
	// const [setQuestions, setQuestions] = 


	/**
	 * on user selection change
	 * get priced items and rich list
	 * 
	 */
	useEffect(() => {

		const{item, amount, isUpdating} = variableSelection

		if(isUpdating){
			const results = calcUnitsPerAmount(item, amount)
			setVisualSettings(results)
			// setCurQuestion(results)

			formatQuestion({
				'item': item.pluralName,
				'amount': amount.displayValue
			}, results.numOfUnits)
			
			console.log({results});
			if (typeof window !== 'undefined') {
				const href = window.location.href;
		
				// var url = `${href}?person1=1&item1=${item?._id}`
				// // setUrl(url)

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

	console.log({questionRef});

	// download button
	const downloadButtonClick = useCallback(() => {

		if (resultsRef.current === null) {
			  return null
		}

		// hide specific article section
		function filter(node) {
			return (node.tagName !== 'ARTICLE');
		}

		toPng(resultsRef.current, { cacheBust: true, filter: filter})
			.then((dataUrl) => {
			  
			  const link = document.createElement('a')
			  link.download = `${curQuestion?.fileName}.png`
			  link.href = dataUrl
			  
			  link.click()
		  })
		  .catch((err) => {
			console.error(err)
		  })
	}, [resultsRef, curQuestion])

	const buttonFunction = () => {
		downloadButtonClick()
	}
	const btnContext = {
		buttonFunction
	}



	return (
		<>
			{/* question - user input here */}
			<Container>
				<Header >
					<Default  blocks={question} />
				</Header>
				<Body >
					<Dynamic blocks={header} context={dynamicContext} />
				</Body>
			</Container>

			{/* answer */}
			<Container  ref={resultsRef} >
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

						<Buttons  buttons={buttons} context={{
							'download': btnContext
						}}  />
						</article>
					</div>
				</Body>
			</Container>


			
		</>
	)

}
 
export default Visualiser;