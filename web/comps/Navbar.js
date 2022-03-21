import Link from "next/link";
import { PortableButton } from "./PortableContent";

import Svg from 'react-inlinesvg';
import {Menu} from "./Menu";


const Navbar = ({ content = null, scroll }) => {
	if (!content || content === null || !content.hasOwnProperty('value') ) return null
	
	const data = content.value[0]

	const { button, logo, menu } = data;
	

	let navPos = 'top-[0]'


	// if (scroll === 'up') {
	// 	navPos = '-top-20'
	// }
	
	return (
		<nav className={`site-nav fixed w-full px-10 py-5  flex flex-row items-center bg-custom-secondary z-50 h-20 ${navPos} transition-[top] duration-300`}>
			<div className="logo flex-none items-center  ">
				{/* <Button content={logo} /> */}
				<PortableButton content={logo}/>
			</div>

			<div className="justify-between flex flex-row flex-auto items-center">
				<Menu className="flex flex-1 justify-center" content={menu} />
				<div className="flex flex-none">
					<PortableButton content={button}/>
				</div>
			</div>
		
		</nav>
	);
}
 
export default Navbar ;