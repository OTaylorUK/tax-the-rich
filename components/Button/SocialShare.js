import Link from "next/link";
// import Svg from 'react-inlinesvg';
import { PortableButton } from "../PortableContent";

import { useEffect, useState } from "react";

import  {findAndReplaceHolder} from '../../utils/globalFunc';
import { useRouter } from 'next/router'

const SocialShare = ({content, context, shareUrl = null, social, bgColour, additionalClass}) => {


	const [scaled, setScaled] = useState(false);


	

	// opens the social buttons
	if(context === undefined){
		const buttonFunction = () => {
			setScaled(!scaled)
		}
		context = {
			buttonFunction
		}
	}

	
	Array.prototype.swap = function (x,y) {
		var b = this[x];
		this[x] = this[y];
		this[y] = b;
		return this;
	}



	return (
		<div className={`${additionalClass} flex flex-row justify-center items-center relative`}>
			<PortableButton content={content} context={context} />

			<div className={` p-6 z-40 flex flex-col items-start absolute -left-1 bottom-full gap-y-3 mb-4 ${scaled ? 'scale-100' : 'scale-0'}  ${bgColour !== undefined ? bgColour : ''} `}>
				{social?.map((channel, index) => {
					let btn = JSON.parse(JSON.stringify(channel?.button));
					// flip the order of blank span to go after the icon
					btn?.portableButton.swap(0, 1)
					btn?.portableButton?.[1]?.children?.[0]?.text = channel.name;

					const link = channel?.button?.link;
					if(shareUrl !== null){
						channel?.button?.link = `${shareUrl}`
					}
					// console.log({link});
					// console.log(btn?.link);

					// let newText = findAndReplaceHolder({ replaceVals: findReplace, str: ogText })


						
					return (
						<PortableButton key={`btn-${index}`} content={btn} />
					)
				})}
			</div>
				
		</div>
	)

}
 
export default SocialShare;