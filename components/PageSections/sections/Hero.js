
import {Default} from "../../PortableContent";
import { useRouter } from 'next/router'

const Hero = (props) => {

	const router = useRouter();

	let conditionalClass;

	if (router.pathname === '/') {
		conditionalClass = 'h-screen min-h-screen'
	} else {
		conditionalClass = 'min-h-[80vh] mt-20'
		
	}
	const { Header } = props;

	return (
		<div className={`${conditionalClass}  flex flex-col justify-center items-center`}>
			<div className="container w-9/12 text-center flex flex-col justify-center items-center">
				<Default blocks={Header}  overrides={{ textAlign: 'text-center' }}  />
			</div>
		</div>
	)

}
 
export default Hero;