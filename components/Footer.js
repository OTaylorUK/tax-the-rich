import {Menu, Stacked} from "./Menu";
import { ThemeToggle } from "./themeToggle";
import {SocialShare} from './Button'

// import { useAppContext } from '../context/theme'; 


const Footer = ({ content = null, scroll }) => {

	if (!content || content === null || !content.hasOwnProperty('value') ) return null

	const data = content.value[0]

	const {middle } = data;

	// const test =  useAppContext()

	// console.log({test});


	return (
		<footer className={`site-footer fixed bottom-0 w-full px-10 py-5  flex flex-row items-center bg-custom-primary z-50 h-20  `}>

			<div className={`container max-w-screen-xl m-auto   flex flex-row items-center   h-full justify-center md:justify-between`}>
				<SocialShare additionalClass={'hidden md:flex'} content={middle?.button} social={middle?.social} bgColour={'bg-custom-primary'}/>
				<ThemeToggle />
			</div>
	
		</footer>
	);
}
 
export default Footer ;