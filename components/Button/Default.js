import Link from "next/link";
// import Svg from 'react-inlinesvg';
import { PortableButton } from "../PortableContent";
const Button = ({content, context}) => {

	if (content.portableButton) {
		return (<PortableButton blocks={content.portableButton} content={content} context={context}/>)
	}

}
 
export default Button;