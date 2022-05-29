import client from '../client'
import  {getFooter,getSEO, getNav, getPalette, getRoutes, getPageContent} from '../utils/globalGroq';
import  {allKeyed, formatGlobalSettings, formatNumberToLocal, getGroqQuery, getRichList, getSheet, getSheets} from '../utils/globalFunc';

import PageSections from '../components/PageSections'
// import { useEffect, useState } from 'react';

import axios from "axios"

// const fetcher = (url) => fetch(url).then((res) => res.json());



export const getStaticPaths = async () => {
	
	const results = await Promise.all([
		client.fetch(getRoutes),
	])

	// removes all null values from arr - avoid sending empty data
	const cleanData = results.filter(n => n);
	const finalData = await Promise.all(formatGlobalSettings(cleanData));
	

	let routes = finalData.find(({ name }) => name === 'page');
	
	routes.value = routes.value.filter(function( route ) {
		return route.slug !== undefined && route.slug.current !== '404';
	});
	
	const paths = await Promise.all(routes.value.map(route => {
		if (route.slug !== undefined ) {
			return {
				params: {slug: route.slug.current.toString()}
			}
		}
	}));
	 

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps(context) {
	const slug = context.params.slug

	const results = await Promise.all([
		client.fetch(getPalette),
		client.fetch(getSEO),
		client.fetch(getNav),
		client.fetch(getFooter),
		client.fetch(getRoutes),
		client.fetch(getPageContent(slug)),
	])
  
	// removes all null values from arr - avoid sending empty data
	const cleanData = results.filter(n => n);
	const finalData = await Promise.all(formatGlobalSettings(cleanData));
	const globalData = finalData.filter(n => n.name !== 'pageContent');
	const pageData = finalData.filter(n => n.name === 'pageContent');
	
	// const repoInfo = await fetcher(API);


	
	

	

	let pageProps = {
		globalData,
		pageData,
		slug,
		variable : {}
	}

	let pageQuery, data, test;

	// add page specific data 

	const curDate = new Date().toLocaleString({  dateStyle: 'full',
	timeStyle: 'full'})

	let richList;

	if (slug === 'the-fat-cats' || slug === 'visualise-a-billion' || slug === 'what-it-buys') {
		// const API = "https://forbes400.herokuapp.com/api/forbes400/real-time?limit=12";
		// const response = await axios.get(API);
		// richList = await response.data

		const {curRichList} = await allKeyed({
			curRichList: getRichList(),
		});

		const formatWealthAmount = (number) => {
			const toFixed = Number(number).toFixed(2)
			const netWorthfinal =  Number(toFixed) * 1000000
			const wealth = formatNumberToLocal(netWorthfinal)
			return wealth
		}


		const formattedRichList = curRichList.map((indv, i)=> {
			const curWealth = formatWealthAmount(indv?.finalWorth)
			const prevWealth = formatWealthAmount(indv?.estWorthPrev)
			const change = curWealth.actualValue - prevWealth.actualValue;
			
			const changeInWealth = formatNumberToLocal(change)

			let positiveChange = null;

			if(change > 0){
				positiveChange = true
			}else if(change < 0){
				positiveChange = false
			}
			// if (Math.sign(changeInWealth?.actualValue) === -1) {
			// 	positiveChange = false
			// }

			let url = indv?.person.squareImage;
			let split = url.split('https:')
		
			// catch error for some image snot having this already
			if (split.length === 1) {
				url = `https:${url}`
			}

			let bio = '';

			if(indv.bios.length > 0){
				bio = indv?.bios?.[0]
			}

			let newPerson = {
				all: indv,
				uid: indv.uri,
				bio: bio ? bio : '',
				personName: indv.person.name,
				wealthSource: indv.source,
				wealth: curWealth,
				prevWealth: prevWealth,
				imgUrl: url,
				rank: indv.rank,
				changeInWealth: changeInWealth,
				positiveChange: positiveChange,
				isSelected: false
			}

			return newPerson;
		})

		richList = formattedRichList
	}




	switch (slug) {
		case 'the-fat-cats':
			
			pageProps.variable.richList = {
				richList,
				dateGenerated: curDate
			}
		break;
		case 'visualise-a-billion':

			pageQuery = `
			{
				'moneyAmounts': *[_type in ["moneyAmounts"] && actualValue <= 1000000000 ] | order(actualValue asc){
					actualValue,
					displayValue,
					shortValue
				},
			}`

			const {visualiseData} = await allKeyed({
				visualiseData: getGroqQuery(pageQuery),
			});

			pageProps.variable.blockVisual = {
				visualiseData,
				dateGenerated: curDate
			}

			break;
		
		case 'what-it-buys':

			pageQuery = `
			{
				'moneyAmounts': *[_type in ["moneyAmounts"]]  | order(actualValue asc),
			}`

			const {buyingData, pricedItems} = await allKeyed({
				buyingData: getGroqQuery(pageQuery),
				pricedItems: getSheets()
			});

			pageProps.variable.visualiser = {
				buyingData,
				richList,
				pricedItems,
				dateGenerated: curDate
			}

			break;
		
		default:
			break;
	}


	 
	try {
	  return {
		props: pageProps,
		revalidate: 60, // In seconds
	  }
	}catch(err){
	  return {
		err
	  }
	}
	
}


const Details = (props) => {
	const { globalData, pageData, variable } = props;
	const pageContent = pageData?.find(({ name }) => name === 'pageContent')


	console.log({props});
	// // page builder array - loop through to create the page from the component types
	const pageSections = pageContent.value?.[0]
	return (
		<>
			<PageSections content={pageSections} variableData={variable}/>
		</>
	);
}
 
export default Details;