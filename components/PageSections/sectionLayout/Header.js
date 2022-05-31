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

	useEffect(() => {

		if (inView) {
		  control.start("visible");
		} 
		// remove below if you want annimation to only happen once
		// else {
		// 	control.start("hidden");
		//   }
	  }, [control, inView]);


	return (
		<>
		<motion.div  
		 	ref={ref}
			 variants={boxVariant}
			 initial="hidden"
			 animate={control}
			className={`${additionalClass}  bg-custom-highlight justify-center flex px-6 py-8 w-full text-custom-accent`}
		>
				{children}
		</motion.div>
		</>
	);
}
 
export default Header;