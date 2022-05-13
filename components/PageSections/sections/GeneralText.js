

import {Default} from "../../PortableContent";

const Quote = (props) => {

	const { textContent } = props;


	return (
		<div className={` py-20 flex flex-col justify-center items-center`}>
			<div className="container md:w-3/5 text-center flex flex-col justify-center items-center">
				<Default blocks={textContent} />
			</div>
		</div>
	)

}
 
export default Quote;