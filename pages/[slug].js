import client from '../client'
import  {getFooter,getSEO, getNav, getPalette, getRoutes, getPageContent} from '../utils/globalGroq';
import  {formatGlobalSettings} from '../utils/globalFunc';

import PageSections from '../comps/PageSections'
// import { useEffect, useState } from 'react';


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
	let pageData = finalData.filter(n => n.name === 'pageContent');
	

	//  pageData = JSON.stringify(pageData);
	try {
	  return {
		props: {
			globalData,
			pageData,
			slug
		}
	  }
	}catch(err){
	  return {
		err
	  }
	}
	
}



const Details = (props) => {
	const { globalData, pageData } = props;
	const pageContent = pageData?.find(({ name }) => name === 'pageContent')

	// // page builder array - loop through to create the page from the component types
	const pageSections = pageContent.value?.[0]
	// const [testdata, setTestdata] = useState('');
	// useEffect(() => {
	// 	// You need to restrict it at some point
	// 	// This is just dummy code and should be replaced by actual
	// 	if (!testdata) {
	// 		getToken();
	// 	}
	//   }, []);

	//  const getToken = async () => {
	
	// 	const results = await Promise.all([
	// 		client.fetch(getRoutes),

	// 	])
	
	// 	// removes all null values from arr - avoid sending empty data
	// 	const cleanData =  results.filter(n => n);
	// 	const finalData = await Promise.all(formatGlobalSettings(cleanData));
		
	// 	let routes = finalData.find(({ name }) => name === 'page');
		
	// 	routes.value = routes.value.filter(function( route ) {
	// 		return route.slug !== undefined && route.slug.current !== '404';
	// 	});
		
	// 	const paths = await Promise.all(routes.value.map(route => {
	// 		if (route.slug !== undefined ) {
	// 			return {
	// 				params: {slug: route.slug.current.toString()}
	// 			}
	// 		}
	// 	}));
		 
	// 	setTestdata(routes);
	
		
	// }
	
	// console.log('LOOK:', testdata);

	return (
		<PageSections content={pageSections}/>
	);
}
 
export default Details;