import { PortableButton } from "../PortableContent";

import { useEffect, useState } from "react";

const StackedMenu = ({content}) => {

	const { text, social } = content;


	const siteURL = process.env.SITE_URL


	// const [siteURL, updateSiteURL] = useState();
	// const query = `*[_type in ["siteSEO"]]
	// {url}`

	// useEffect(() => {
	// 	const getData = async () => {
	// 		const resp = await client.fetch(query);
	// 		updateSiteURL(resp);
	// 	}
	// 	getData();
	// }, []);

	const btnClass = `font-gaegu uppercase `

	// const url = Profile();

	return (
		<div className=" flex flex-col justify-center items-center">
			<span className={btnClass}>{text}</span>
			<div className="flex flex-row items-center ">
				{social.map((channel, index) => {
				
					// switch (channel?.name.toLowerCase()) {
					// 	case 'whatsapp':
					// 		console.log(channel);
					// 		break;
					
					// 	default:
					// 		break;
					// }

				return (
					<PortableButton key={`btn-${index}`} content={channel?.button} />
				)
			})}
			</div>
				
		</div>
	)
	
}
 
export default StackedMenu;