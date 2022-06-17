import Button from "./Default";


import { motion } from "framer-motion";


const cardVariants = {
	offscreen:  { opacity: 0 },
	onscreen: {
		opacity: 1,
		transition: {
		staggerChildren: 0.5,
		duration: 1,
		delay:2
		}
	}
  };

const listItem = {
	offscreen: { opacity: 0 },
	onscreen: { opacity: 1 }
};


const Buttons = ({buttons = null, value = null, context = null}) => {

	let buttonArr = buttons;

	if(buttonArr === null){
		buttonArr = value?.buttons;
	}

	return (

		<motion.div
        className={` flex flex-row justify-center items-center relative flex-wrap gap-6`}
        initial="offscreen"
        whileInView="onscreen"
		variants={cardVariants}
        viewport={{ once: true, amount: 0.8 }}
      >
			{buttonArr?.map((button, index) => {

				let finalContext = JSON.parse(JSON.stringify(context));

				return (
					<motion.div key={`btn-${index}`} variants={listItem}>
						<Button content={button} context={finalContext}  />
					</motion.div>
				)
			})} 
				
		</motion.div>
	)

}
 
export default Buttons;