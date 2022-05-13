// import { useEffect, useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState, useRef } from 'react'

const Layout = ({ children, settings=[] }) => {

	const siteNav = settings.find(({ name }) => name === 'siteNavigation')
	const siteFooter = settings.find(({ name }) => name === 'siteFooter')

	if (typeof siteNav === undefined) return null;

	const previousY = useRef(0);
	const [scrollDirection, setScrollDirection] = useState('noScroll');
	const elementRef = useRef();

	const handleNavigation = () => {

		const divElement = elementRef.current;
		const firstChild = divElement?.children?.[0]?.children?.[0];
		const threshold = firstChild?.offsetHeight + firstChild?.offsetTop

		if(window.scrollY === 0){
			setScrollDirection('noScroll')
		}else{
			if(window.scrollY <= threshold){
				setScrollDirection('onHero')
			}else{
			if (previousY.current < window.scrollY ) {
				setScrollDirection('down')
			} else {
				setScrollDirection('up')
			}
			}
		}
		previousY.current = window.scrollY
		
	};




	useEffect(() => {
		window.addEventListener("scroll", handleNavigation);
		return () => window.removeEventListener("scroll", handleNavigation);
	}, []);

	return (
		<div className="page-container flex flex-col items-center" >
			
			<Navbar content={siteNav} scroll={scrollDirection} />

			<div className='container page-content flex flex-col ' ref={elementRef}>
				{children}
			</div>

			<Footer content={siteFooter} scroll={scrollDirection} />
		</div>
	);
}
 
export default Layout;