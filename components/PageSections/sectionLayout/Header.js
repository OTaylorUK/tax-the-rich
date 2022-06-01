import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Header = ({ additionalClass = '', children }) => {
	const boxVariant = {
		visible: { opacity: 1 },
		hidden: { opacity: 0},
	}
	const control = useAnimation()
	const [ref, inView] = useInView({  delay: 200 })


	const boxVariants = {

	}

	return (
		<>
	

		<div  
			// transition={{ delay: 1 }}
			// initial={{ opacity: 0 }}
			// whileInView={{ opacity: 1 }}
			// viewport={{ once: true }}

			// variants={boxVariants}

		 	// ref={ref}
			 
			//  variants={boxVariant}
			//  initial="hidden"
			//  animate={control}
			className={`${additionalClass}  bg-custom-highlight justify-center flex px-6 py-8 w-full text-custom-accent`}
		>
				{children}
		</div>
		</>
	);
}
 
export default Header;