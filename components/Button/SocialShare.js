import { PortableButton } from "../PortableContent";

import { useEffect, useRef, useState } from "react";

import  {findAndReplaceHolder, formatSocialChannelQuery} from '../../utils/globalFunc';
import Button from "./Default";
import { useRouter } from "next/router";
const SocialShare = ({content, context = null}) => {


	const [scaled, setScaled] = useState(false);
	const [pageTitle, setPageTitle] = useState(null);
	const [pageURL, setPageURL] = useState(null);
	

	const {shareLinks} = {...content}

	// const test = useRef(null);
	const router = useRouter();


	console.log({context});
	// opens the social buttons
	if(!context){
		const buttonFunction = () => {
			setScaled(!scaled)
		}
		context = {
			buttonFunction
		}
	}


	useEffect(()=>{
		setScaled(false)
		setPageTitle(document.title);
		setPageURL(document.URL);

	},[router])

	
	Array.prototype.swap = function (x,y) {
		var b = this[x];
		this[x] = this[y];
		this[y] = b;
		return this;
	}

	return (
		<div className={` flex flex-row justify-center items-center relative`}>
			<PortableButton content={content} context={context} />

			<div className={`min-w-full w-max p-8  z-40 bg-custom-primary flex flex-col items-center absolute -left-1 bottom-full gap-y-6 mb-4 ${scaled ? 'scale-100' : 'scale-0'}  `}>
				{shareLinks?.map((channel, index) => {
					let btn = JSON.parse(JSON.stringify(channel));
					// flip the order of blank span to go after the icon
					btn?.button?.portableButton.swap(0, 1)
					btn?.button?.portableButton?.[1]?.children?.[0]?.text = channel.name;

					const  btnQuery = formatSocialChannelQuery(pageTitle, pageURL, channel.name)
					btn?.button?.query = btnQuery

					return (
						<Button key={`btn-${index}`} content={btn?.button}  />
					)
				})} 
			</div>
				
		</div>
	)

}
 
export default SocialShare;