import { useRouter } from 'next/router'
import client from '../client'
import { getFooter, getSEO, getNav, getPalette, getRoutes, getCurrentPage, getPageContent } from '../utils/globalGroq';
import { formatGlobalSettings } from '../utils/globalFunc';

import PageSections from '../components/PageSections'



export async function getStaticProps(context) {
  
	const slug = '/';

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
	

	try {
	  return {
		props: {
			globalData,
			pageData,
		}
	  }
	}catch(err){
	  return {
		err
	  }
	}
	
}


const Home = (props) => {
	const { globalData, pageData } = props;
	const pageContent = pageData?.find(({ name }) => name === 'pageContent')



	// // page builder array - loop through to create the page from the component types
	const sectionContent = pageContent.value?.[0]

	return (
		<PageSections content={sectionContent}/>
	);
}
  


export default Home
