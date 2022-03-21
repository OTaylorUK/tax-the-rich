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
  

const PageSections = ({content}) => {

	const { content: sections } = content;
	

	return (
		<>
			{sections?.map((section) => {
				const SectionComponent = resolveSections(section)

				if (!SectionComponent) {
					return <div key={section._type}>Missing section {section._type}</div>
				}

				return <SectionComponent {...section} key={section._key} />
			})}
		</>
	)
}
 
export default PageSections;