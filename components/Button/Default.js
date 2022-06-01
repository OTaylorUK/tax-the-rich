import { PortableButton } from "../PortableContent";
import SocialShare from "./SocialShare";
const Button = (props) => {
	
	const {content = null, value = null, context} = props


	let btn = content;

	if(btn === null){
		btn = value
	console.log({btn});

	}


	const action = btn?.buttonAction ? btn?.buttonAction : 'link'


	if(action == 'share-page'){
		return (<SocialShare  content={btn} context={context}/>)
	}else{
		return (<PortableButton  content={btn} context={context}/>)
	}


}
 
export default Button;