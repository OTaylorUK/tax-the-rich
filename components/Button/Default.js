import { PortableButton } from "../PortableContent";
import SocialShare from "./SocialShare";
const Button = (props) => {
	
	const {content = null, value = null, context = null} = props


	let finalContext = context;

	let btn = content;

	if(btn === null){
		btn = value
	}


	const action = btn?.buttonAction ? btn?.buttonAction : 'link'


	// let updateVal = false;
	
	// if(context){
	// 	Object.keys(context).map((val, i)=>{
	// 		if(action === val){
	// 			finalContext = context[val];
	// 		}

	// 	})
	
	// }

	if(action == 'share-page'){
		return (<SocialShare  content={btn} context={finalContext}/>)
	}else{
		return (<PortableButton  content={btn} context={finalContext}/>)
	}


}
 
export default Button;