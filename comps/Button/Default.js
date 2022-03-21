import Link from "next/link";
// import Svg from 'react-inlinesvg';
import { PortableButton } from "../PortableContent";
const Button = ({content}) => {

	const { buttonStyle, isLink, text, image, link, buttonSize } = content


	let btnSize = 'default';

	if (buttonSize) {
		btnSize = buttonSize?.[0]
	}

	const btnClass = `font-gaegu uppercase btn-style-${buttonStyle?.[0].toLowerCase()} btn-size-${btnSize}`


	let linkURL, btnContent, linkTarget = '_self';
	
	
	btnContent = text;

	if (image) {
		// btnContent = <Svg className="icon" no-cors="true" src={image?.asset?.url} height="30px" width="30px" title="socialIcon" />
		
	}

	let outputLink = isLink;

	if (isLink) {
		if (typeof link === 'object' && link !== null) {
			// is internal obj link
			linkURL = `/${link.current}`
		} else {
			// is external link
			linkURL = link
			linkTarget = '_blank'
		}

		if (linkURL === undefined) {
			outputLink = false;
		}

		
	}

	if (content.portableButton) {
		return (<PortableButton blocks={content.portableButton} content={content}/>)
	}


	if (outputLink && linkURL !== null) {
		return (
			<Link  href={linkURL}>
				<a className={btnClass}  target={linkTarget}>{btnContent}</a>
			</Link>
		)
	} else {

		return (
			<button className={btnClass} >{btnContent}</button>
		)
	}
}
 
export default Button;