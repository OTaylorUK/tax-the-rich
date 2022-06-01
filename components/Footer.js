import {Menu, Stacked} from "./Menu";
import { ThemeToggle } from "./themeToggle";
import {Button} from './Button'

// import { useAppContext } from '../context/theme'; 


const Footer = ({ content = null, scroll }) => {

	if (!content || content === null || !content.hasOwnProperty('value') ) return null

	const data = content.value[0]

	const {middle } = data;


	return (
		<footer className={`site-footer fixed bottom-0 w-full px-10 py-5  flex flex-row items-center bg-custom-primary z-50 h-20  `}>

			<div className={`container max-w-screen-xl m-auto   flex flex-row items-center   h-full justify-center md:justify-between`}>
				<Button  content={{...middle?.button,additionalClass: 'hidden md:flex' }}  />
				<ThemeToggle />
			</div>
	
		</footer>
	);
}
 
export default Footer ;