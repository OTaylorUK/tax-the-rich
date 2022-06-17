import { useEffect, useMemo, useState } from 'react'
import RichPerson from '../../RichPerson';
import { Results, Source } from '../../Visualise';
import { Header, Body, Container } from '../sectionLayout';
import { Default} from "../../PortableContent";
import { formatNumberToLocal } from '../../../utils/globalFunc';

const RichList = ({buttons, headerContent, textContent, componentContext}) => {


	const {dateGenerated, richList} = {...componentContext}

	const sourceData = useMemo(
		() => ({
			text: textContent?.[0]?.children?.[0]?.text,
			replaceDetails: {
				"timeStamp": dateGenerated,
			},
			sources: ['https://www.forbes.com/real-time-billionaires']
		 }),
		[richList]
	);

	const [combinedWealth, setCombinedWealth] = useState(null)

	useEffect(()=>{
		const allWealth = richList.reduce( ( sum, { wealth } ) => sum + wealth.actualValue , 0)
		const formattedAllWealth = formatNumberToLocal(allWealth)
		setCombinedWealth(formattedAllWealth)

	},[richList])


	if(richList === null || combinedWealth === null){
		return(
			<div>Loading...</div>
		)
	}else{
		return (
			<Container>
				<Header >
					<Default blocks={headerContent} />
				</Header>
				<Body >
					<Results number={combinedWealth.shortRaw} text={combinedWealth.scale.toUpperCase()}  />
					<Source {...sourceData} />

					<div className=" sm:max-w-2/3 w-full    grid   grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-10 lg:gap-20 justify-center items-stretch  ">
						 {richList.map((indv, i) => {
							return (
								<RichPerson key={`eattherich-${i}`} indv={indv} buttons={buttons} />
								
							)
						})}
					</div>
				</Body >

			</Container>
		)
	}

}
 
export default RichList;