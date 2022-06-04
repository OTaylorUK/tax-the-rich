import Button from "./Default";

const Buttons = ({buttons = null, value = null, context = null}) => {

	let buttonArr = buttons;

	if(buttonArr === null){
		buttonArr = value?.buttons;
	}

	return (
		<div className={` flex flex-row justify-center items-center relative flex-wrap gap-6`}>
			{buttonArr?.map((button, index) => {

				let finalContext = JSON.parse(JSON.stringify(context));

				console.log({finalContext});
				return (
					<Button key={`btn-${index}`} content={button} context={finalContext}  />
				)
			})} 
				
		</div>
	)

}
 
export default Buttons;