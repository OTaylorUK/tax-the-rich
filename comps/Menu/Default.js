import {Button} from "../Button";

const Menu = ({ content, className }) => {
	return (
		<div className={className}>
			{content.map((button, index) => (
				<Button key={`btn-${index}`}content={button} />
			))}
		</div>
	);
}
 
export default Menu;