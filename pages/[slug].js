import client from '../client'
import  {getFooter,getSEO, getNav, getPalette, getRoutes, getPageContent} from '../utils/globalGroq';
import  {formatGlobalSettings} from '../utils/globalFunc';

import PageSections from '../components/PageSections'
// import { useEffect, useState } from 'react';

import axios from "axios"
import {  getSheet } from '../utils/globalFunc';

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

	let richList;

	if (slug === 'the-fat-cats' || slug === 'visualise-a-billion' || slug === 'what-it-buys') {
		const API = "https://forbes400.herokuapp.com/api/forbes400/real-time?limit=12";
		const response = await axios.get(API);
		richList = await response.data
	}


	switch (slug) {
		case 'the-fat-cats':
			pageProps.variable.richList = richList
		break;
		case 'visualise-a-billion':

			// limit to show nothing other 1b
			pageQuery = `
			{
				'moneyAmounts': *[_type in ["moneyAmounts"] && actualValue <= 1000000000 ] | order(actualValue asc){
					actualValue,
					displayValue,
					shortValue
				},
			}
			`
			data = await client.fetch(pageQuery);
			// const moneyAmounts = await resp.data
			pageProps.variable.blockVisual = {
				data
			}
			break;
		
		case 'what-it-buys':
			pageQuery = `
			{
				'moneyAmounts': *[_type in ["moneyAmounts"]] | order(actualValue asc),
			}
			`
			data = await client.fetch(pageQuery);

			// const moneyAmounts = await resp.data
			pageProps.variable.visualiser = {
				data,
				richList,
				// test
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

	// // page builder array - loop through to create the page from the component types
	const pageSections = pageContent.value?.[0]
	return (
		<>
			<PageSections content={pageSections} variableData={variable}/>
		</>
	);
}
 
export default Details;