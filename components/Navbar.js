import Link from "next/link";
import { PortableButton } from "./PortableContent";

import Svg from 'react-inlinesvg';
import {Menu} from "./Menu";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

const Navbar = ({ content = null, scroll }) => {
	if (!content || content === null || !content.hasOwnProperty('value')) return null
	
	const data = content.value[0]

	const { button, logo, menu } = data;
	

	let navPos = 'top-[0]'
	const [navShadow, updateNavShadow] = useState('');




	useEffect(() => {
		if (scroll !== 'noScroll') {
			updateNavShadow('shadow-md')
		}else{
			updateNavShadow('')
		}
	  }, [scroll])

;
	const [menuOpen, setMenuOpen] = useState(false)


	// made link active is the curpage url matches
	const checkIsCurPage = ({ btnURL }) => {
		
		const router = useRouter()

		const curPage = '/' + router?.query?.slug
		

		let isCurrentPage = false

		if(btnURL && curPage === btnURL) {
			isCurrentPage = true
		}
		return  isCurrentPage
	}


	const buttonAddClass = ({ btnURL }) => {
		return checkIsCurPage({btnURL})
	}

	const buttonFunction = () => {
		setMenuOpen(!menuOpen)
	}

	const btnContent = {
		buttonFunction
	}



	return (
		<nav className={`  site-nav fixed  w-full   flex flex-row items-center z-50 h-20 ${navPos} transition-[top] duration-300`}>

			<div className={`px-10 py-5 overflow-hidden bg-custom-primary container max-w-screen-xl m-auto   flex flex-row items-center   h-full ${navPos} transition-[top] duration-300 ${navShadow}`}>

				<div className="logo flex-1 flex items-start justify-start  ">
					<PortableButton content={logo}/>
				</div>

				<div className={`${ menuOpen ? 'top-full' : 'top-[-100vh]'} md:top-auto z-[-1] md:z-10 h-[100vh] md:h-auto  transition-[top] absolute md:relative left-0 w-full  flex justify-center items-start`} >
					<Menu className={``} content={menu} context={btnContent} />
					<div onClick={() => {
					setMenuOpen(!menuOpen)
				}} className={`${ menuOpen ? 'flex' : 'hidden'} md:hidden cursor-pointer  transition-[opacity] hover:opacity-0 absolute  h-full w-full z-[-1] left-0 top-0`}  ></div>
				</div>

				<button  
				onClick={() => {
					setMenuOpen(!menuOpen)
				}}
				data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 " aria-controls="mobile-menu" aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
				</button>

			</div>
		
		</nav>
	);
}
 
export default Navbar ;