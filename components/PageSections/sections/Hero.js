
import {Default} from "../../PortableContent";
import { useRouter } from 'next/router'
import { motion, useAnimation } from "framer-motion";

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

			<div  

			// initial={{ opacity: 0 }}
			// whileInView={{ opacity: 1 }}
			// viewport={{ once: true }}

			// ref={ref}
			
			//  variants={boxVariant}
			//  initial="hidden"
			//  animate={control}
			className="container w-10/12 text-center flex flex-col justify-center items-center"
			>
				<Default blocks={Header}  overrides={{ textAlign: 'text-center' }}  />
			</div>
		</div>
	)

}
 
export default Hero;