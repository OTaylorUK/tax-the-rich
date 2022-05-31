import Button from "./Default";

const Buttons = ({buttons = null, value = null}) => {

	let buttonArr = buttons;

	if(buttonArr === null){
		buttonArr = value?.buttons;
	}
	return (
		<div className={` flex flex-row justify-center items-center relative flex-wrap gap-6`}>
			{buttonArr?.map((button, index) => {
				return (
					<Button key={`btn-${index}`} content={button}  />
				)
			})} 
				
		</div>
	)

}
 
export default Buttons;