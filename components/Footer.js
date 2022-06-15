import {Menu, Stacked} from "./Menu";
import { ThemeToggle } from "./themeToggle";
import {Button} from './Button'
import {PortableText} from '@portabletext/react'
// import { useAppContext } from '../context/theme'; 


const myPortableTextComponents = {
	marks: {
		internalLink: ({value, children}) => {
			// log
			const url = value.slug.current ? value.slug.current : '/'
			return (
			<a href={url} target="_self" 
			>
				{children}
			</a>
			)
		},	
		link: ({children, value}) => {
			const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
			return (
			<a href={value.href} target="_blank" rel={rel}>
				{children}
			</a>
			)
		},
	},
  }

  
  
const Footer = ({ content = null, scroll }) => {

	if (!content || content === null || !content.hasOwnProperty('value') ) return null

	const data = content.value[0]

	const {middle, credit} = data;

	return (
		<footer className={`site-footer w-full z-50`}>

			<div className="mb-20 flex flex-col gap-4 justify-center items-center w-full p-20 text-custom-text">
			<PortableText
				value={credit.text}
				components={myPortableTextComponents}
			/>
			</div>

			<div className={` fixed bottom-0 w-full px-10 py-5  flex flex-row items-center bg-custom-primary z-50 h-20  `}>

				<div className={`container max-w-screen-xl m-auto   flex flex-row items-center   h-full justify-center md:justify-between`}>
					<Button  content={{...middle?.button,additionalClass: 'hidden md:flex' }}  />
					<ThemeToggle />
				</div>

			</div>
	
		</footer>
	);
}
 
export default Footer ;