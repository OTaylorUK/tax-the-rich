import { useEffect, useMemo, useState } from 'react'
import RichPerson from '../../RichPerson';
import { Results, Source } from '../../Visualise';
import { Header, Body } from '../sectionLayout';
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
	const [finalList, setFinalList] = useState(null)



	// let netWorth = Number(indv.finalWorth / 1000).toFixed(1);
	// const toFixed = Number(indv?.finalWorth).toFixed(2)
	// const netWorthfinal =  Number(toFixed) * 1000000


	useEffect(()=>{

		const formatWealthAmount = (number) => {
			const toFixed = Number(number).toFixed(2)
			const netWorthfinal =  Number(toFixed) * 1000000
			const wealth = formatNumberToLocal(netWorthfinal)
			return wealth
		}

		let wealthArr = []
		
		const newArr = richList.map((indv, i)=> {

			const curWealth = formatWealthAmount(indv?.finalWorth)
			const prevWealth = formatWealthAmount(indv?.estWorthPrev)
			
			const changeInWealth = formatNumberToLocal(curWealth.actualValue - prevWealth.actualValue)

			let positiveChange = true;

			if (Math.sign(changeInWealth?.actualValue) === -1) {
				positiveChange = false
			}

			let url = indv?.person.squareImage;
			let split = url.split('https:')
		
			// catch error for some image snot having this already
			if (split.length === 1) {
				url = `https:${url}`
			}

			let newPerson = {
				personName: indv.person.name,
				wealthSource: indv.source,
				wealth: curWealth,
				imgUrl: url,
				rank: indv.rank,
				changeInWealth: changeInWealth,
				positiveChange: positiveChange
			}

			wealthArr.push(curWealth.actualValue)
			return newPerson;
			// richList[i] = newPerson;
		})

		const allWealth = wealthArr.reduce((a, b) => a + b, 0);
		const formattedAllWealth = formatNumberToLocal(allWealth)
		setCombinedWealth(formattedAllWealth)
		setFinalList(newArr)

	},[richList])


	if(finalList === null || combinedWealth === null){
		return(
			<div>Loading...</div>
		)
	}else{
		return (
			<div  className="container    flex flex-col justify-center items-center ">
				<Header >
					<Default blocks={headerContent} />
				</Header>
				<Body >
					<Results number={combinedWealth.shortRaw} text={combinedWealth.scale.toUpperCase()}  />
					<Source {...sourceData} />

					<div className=" sm:max-w-2/3 w-full    grid   grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center items-stretch  ">
						 {finalList.map((indv, i) => {
							return (
								<RichPerson key={`eattherich-${i}`} indv={indv} buttons={buttons} />
								
							)
						})}
					</div>
				</Body >

			</div>
		)
	}

}
 
export default RichList;