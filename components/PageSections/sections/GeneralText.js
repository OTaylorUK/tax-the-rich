

import {Default} from "../../PortableContent";

import { Header, Body, Container } from '../sectionLayout';

const Quote = (props) => {

	const { textContent, headerContent } = props;


	return (
		<Container>
			<Header >
				<Default blocks={headerContent} />
			</Header>
			<Body >
				<Default blocks={textContent} />
			</Body>
		</Container>
	)

}
 
export default Quote;