import {Menu, Stacked} from "./Menu";

const Footer = ({ content = null, scroll }) => {

	if (!content || content === null || !content.hasOwnProperty('value') ) return null

	const data = content.value[0]

	const { lhs, middle, rhs } = data;


	let footerPos = 'bottom-[0]'



	return (
		<footer className={`fixed w-full px-10 h-20 flex items-center justify-between bg-custom-secondary z-50 ${footerPos} transition-[bottom] duration-300`}>
			<Menu content={lhs} />
			<Stacked content={middle} />
			<Menu content={rhs} />
		</footer>
	);
}
 
export default Footer ;