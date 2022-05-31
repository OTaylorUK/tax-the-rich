import { Button } from "../Button";
import { PortableButton } from "../PortableContent";

const Menu = ({ content, className, context }) => {

	return (
		<ul className={`${className} z-2 h-[50vh] gap-2 sm:gap-8 lg:gap-12 md:h-auto justify-center md:justify-end flex flex-col w-full items-center  md:flex md:relative md:flex-row md:flex-[3]  bg-custom-primary shadow-md md:shadow-none md:bg-transparent`}>
			{content.map((button, index) => {

				return (
					<li key={`btn-${index}`}>
						<Button  content={button} context={context} />

						{/* <PortableButton  content={button} context={context}/> */}
					</li>
				)
			})}
		</ul>
	);
}
 
export default Menu;