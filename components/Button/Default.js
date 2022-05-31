import { PortableButton } from "../PortableContent";
import SocialShare from "./SocialShare";
const Button = ({content, context}) => {
	
	let action = content?.buttonAction ? content?.buttonAction : 'link'

	switch (action) {
		case 'share-page':
			return (<SocialShare  content={content} context={context}/>)
			break;
	
		default:
			return (<PortableButton  content={content} context={context}/>)
			break;
	}
	// if (content.portableButton) {
	// 	return (<PortableButton  content={content} context={context}/>)
	// }

}
 
export default Button;