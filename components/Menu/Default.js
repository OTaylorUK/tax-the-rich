import { PortableButton } from "../PortableContent";

const Menu = ({ content, className, context }) => {

	return (
		<ul className={`${className} z-2 h-[70vh] gap-2 md:gap-0 md:h-auto justify-center md:justify-end flex flex-col w-full items-center  md:flex md:relative md:flex-row md:flex-[3]  bg-custom-primary shadow-md md:shadow-none md:bg-transparent`}>
			{content.map((button, index) => {

				return (
					<li key={`btn-${index}`}>
						<PortableButton  content={button} context={context}/>
					</li>
				)
			})}
		</ul>
	);
}
 
export default Menu;