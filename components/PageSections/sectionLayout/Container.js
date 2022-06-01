// import { useEffect, useState } from 'react';
import { useEffect, useState, useRef } from 'react'
import { forwardRef } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Container = forwardRef((props, ref) => {

	const { additionalClass = '', children } = props


	const boxVariant = {
		visible: { opacity: 1, x: 0, transition: { delay:.7, duration: .7 }  },
		hidden:{ opacity: 0, x: "100%" },
	}
	const control = useAnimation()

	const { ref: wrapRef, inView } = useInView({
		 trackVisibility: true, 
		 delay: 100 
	});

	useEffect(() => {
		if (inView) {
		  control.start("visible");
		} 
		// else {
		// 	control.start("hidden");
		// }
	  }, [control, inView]);

	return (

		<motion.div  
			// transition={{ delay: 2 }}
			variants={boxVariant}
			initial="hidden"
			animate={control}
			ref={wrapRef} 
			className="layout-container container px-4 md:px-12 flex flex-col justify-center items-center "
			// style={{scrollMarginTop: '-600px'}}
		>
			<div 
			ref={ref} 
			className="w-full flex flex-col justify-center items-center "
			>
				{children}
			</div>

		</motion.div>
	);
})
 
export default Container;