import { PortableButton } from "./PortableContent";
import {Menu} from "./Menu";
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from "react";
import { motion,useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { useResizeDetector } from 'react-resize-detector';

import {Button} from '../components/Button'




const variants = {
	open: { opacity: 1, x: 0 },
	closed: { opacity: 0, x: "100%" },
}



const Navbar = ({ content = null, scroll }) => {
	if (!content || content === null || !content.hasOwnProperty('value')) return null
	
	const data = content.value[0]

	const { button, logo, menu } = data;
	

	let navPos = 'top-[0]'
	const [navShadow, updateNavShadow] = useState('');
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	// const [menuOpen, setMenuOpen] = useCycle( "closed","open");

	useEffect(() => {
		if (scroll !== 'noScroll') {
			updateNavShadow('shadow-md')
		}else{
			updateNavShadow('')
		}
	  }, [scroll])



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
		setMenuIsOpen(!menuIsOpen)
	}

	const btnContent = {
		buttonFunction
	}

	// const [boxVariants, setBoxVariants] = useState({})

	const [isMobile, setIsMobile] = useState(false);

	// // Triggered on resize - just update sizes of boxes
	const onResize = useCallback(() => {
		if (window === undefined) return
		// setMenuOpen(false)

		if(window){
			setMenuIsOpen(false)
			if(window.innerWidth < 768){
				setIsMobile(true)
			}else{
				setIsMobile(false)
			}
			// const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
			// if (isMobile) {
			// 	setBoxVariants({
			// 		open: { opacity: 1, x: 0 },
			// 		closed: { opacity: 0, x: "100%" },
			// 	})
			// }

		}
	}, []);

	const { ref } = useResizeDetector({onResize});


	return (
		<nav ref={ref} className={`  site-nav fixed  w-full   flex flex-row items-center z-50 h-20 ${navPos} transition-[top] duration-300 ${navShadow}`}>

			<div className={`px-10 z-0  py-5 overflow-hidden  container max-w-screen-xl m-auto   flex flex-row items-center   h-full ${navPos} transition-[top] duration-300 `}>
				<div className={` absolute left-0 w-full h-full bg-custom-primary -z-20`}></div>

				<div className="logo flex-1 flex items-start justify-start z-2 ">
					<Button  content={logo} context={btnContent}  />
				</div>

				<motion.div
				initial={isMobile ? {opacity: 0, x: "100%" } : {}}
				animate={menuIsOpen ? "open" : "closed"}
				variants={isMobile ? variants : {}}
				className={` md:top-auto -z-30 md:z-10 h-[100vh] md:h-auto absolute md:relative  w-[70vw] md:w-full  flex justify-center items-start top-0 right-0`}
				>
					<Menu className={``} content={menu} context={btnContent} />
				</motion.div>

				<MenuToggle menuOpen={menuIsOpen} toggle={() => setMenuIsOpen(prevState => !prevState)} />

			</div>
		
		</nav>
	);
}
 
export default Navbar ;