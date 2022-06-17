import * as SectionComponents from './sections'

import  {capitalizeString} from '../../utils/globalFunc';

const resolveSections = (section) => {
	const Section = SectionComponents[capitalizeString(section._type)]
  

	
	if (Section) {
	  return Section
	}
  
	console.error('Cant find section', section)
	return null
}
  

const PageSections = (props) => {

	const { content, variableData } = props;
	const { content: sections } = content;
	

	const numSections = sections?.length;

	// add margin if more than 1 section to account for fixed bottom nav
	const additionalClass = numSections !== 1 ? 'mb-20' : ''

	return (
		<div className={`page-sections overflow-hidden items-center gap-y-8 md:gap-y-20 flex flex-col ${additionalClass}`}  >

			{sections?.map((section, i) => {
				const SectionComponent = resolveSections(section, variableData)

				if (!SectionComponent) {
					return <div key={section._type}>Missing section {section._type}</div>
				}

				let componentContext = null; 

				if (variableData?.[section._type]) {
					componentContext = variableData?.[section._type]
				}

				return <SectionComponent {...section} key={section._key} index={i} componentContext={componentContext} />
			})}
		</div>
	)
}
 
export default PageSections;