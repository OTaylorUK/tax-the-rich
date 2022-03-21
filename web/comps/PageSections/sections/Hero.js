import { PortableButton } from "../../PortableContent";

import Default from "../../PortableText/Default";
import { useRouter } from 'next/router'

const Hero = (props) => {

	const router = useRouter();

	let conditionalClass;

	if (router.pathname === '/') {
		conditionalClass = 'h-screen min-h-screen'
	} else {
		conditionalClass = 'min-h-[60vh]'
		
	}
	const { Header, buttons } = props;

	return (
		<div className={`${conditionalClass} mt-20 flex flex-col justify-center items-center`}>
			<div className="container text-center flex flex-col justify-center items-center">
				<Default blocks={Header} />
				{buttons?.map((button, index) => (
					<PortableButton key={`btn-${index}`} content={button} />
				))}
			</div>
		</div>
	)

}
 
export default Hero;