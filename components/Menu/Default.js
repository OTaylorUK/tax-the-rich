import { Button } from "../Button";
import { useRouter } from 'next/router'
import {  isActiveLink } from "../../utils/globalFunc";
import { AnimateSharedLayout, motion } from 'framer-motion'

const Menu = ({ content, className, context }) => {

	const router = useRouter()


	
	return (
		<AnimateSharedLayout>
			<ul className={`${className} z-2 h-full gap-6 sm:gap-8 lg:gap-12 md:h-auto justify-center md:justify-end flex flex-col w-full items-start pl-8 md:pl-0 md:items-center  md:flex md:relative md:flex-row md:flex-[3] shadow-2xl bg-custom-primary md:shadow-none md:bg-transparent`}>
				{content.map((button, index) => {
					const isActive = isActiveLink(button?.intLink, router.asPath)
					button.isActive = isActive
					return (
						<li key={`btn-${index}`}>
							<Button  content={button} context={context} />
							{isActive && (
								<motion.div
									layoutId="w-full border border-custom-accent"
									className="w-full border border-custom-accent"
									animate
								/>
							)}
						</li>
					)
				})}
			</ul>
		</AnimateSharedLayout>
	);
}
 
export default Menu;