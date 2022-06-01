

import { useEffect, useState } from "react";
import { formatNumberToLocal } from "../../../utils/globalFunc";
import {Default} from "../../PortableContent";

import { Header, Body, Container } from '../sectionLayout';

const Quote = (props) => {

	const { textContent, headerContent, findReplace, componentContext } = props;

	const [findReplaceVals, setFindReplaceVals] = useState(null);

	useEffect(()=> {
		if(findReplace){
			const richestPerson = componentContext?.richList?.[0]

			const perDay = formatNumberToLocal(richestPerson.wealth.actualValue / 365)
	
			console.log({richestPerson});
			setFindReplaceVals({
				'richestPerson' : richestPerson.personName,
				'richestPersonWealth' : richestPerson.wealth.displayValue,
				'wealthPerDay' : perDay.displayValue,
			})
		}
	
	},[findReplace,componentContext])

	
	return (
		<Container>
			<Header >
				<Default blocks={headerContent} />
			</Header>
			<Body >
				<Default blocks={textContent} findReplace={findReplaceVals} />
			</Body>
		</Container>
	)

}
 
export default Quote;