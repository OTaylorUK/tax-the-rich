import Link from 'next/link'
import client from '../client'
import  {getFooter,getSEO, getNav, getPalette, getRoutes, getPageContent} from '../utils/globalGroq';

import  {formatGlobalSettings} from '../utils/globalFunc';
import PageSections from '../components/PageSections'


export async function getStaticProps(context) {

	const results = await Promise.all([
		client.fetch(getPalette),
		client.fetch(getSEO),
		client.fetch(getNav),
		client.fetch(getFooter),
		client.fetch(getRoutes),
		client.fetch(getPageContent()),
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



const NotFound = (props) => {
	const { globalData, pageData, variable } = props;
	const pageContent = pageData?.find(({ name }) => name === 'pageContent')

	const pageSections = pageContent.value?.[0]
	return (
		<>
			<PageSections content={pageSections} variableData={variable}/>
		</>
	);
}

// const NotFound = (props) => {

// 	console.log({props});
// 	const router = useRouter();

// 	// useEffect(() => {
// 	// 	setTimeout(() => {
// 	// 		router.push('/');
// 	// 	}, 3000);
// 	// }, [])
	
// 	return (
// 		<div className="not-found">
// 			<h1>Oooops...</h1>
// 			<h2>That page cannot be found.</h2>
// 			<p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
// 		</div>
// 	);
// }
 
export default NotFound;