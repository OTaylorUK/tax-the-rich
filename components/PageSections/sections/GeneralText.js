

import {Default} from "../../PortableContent";

import { Header, Body } from '../sectionLayout';

const Quote = (props) => {

	const { textContent, headerContent } = props;


	return (
		<div  className="container general-text-container   flex flex-col justify-center items-center ">
			<Header >
				<Default blocks={headerContent} />
			</Header>
			<Body >
				<Default blocks={textContent} />
			</Body>
		</div>
	)

}
 
export default Quote;