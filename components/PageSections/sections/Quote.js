

import Default from "../../PortableText/Default";

const Quote = (props) => {

	const { author, quoteText, citation } = props;


	return (
		<figure className="w-full flex flex-col justify-center items-center bg-custom-primary py-20 mt-7 text-center">
			<div className="container md:w-3/5">
				<blockquote className="text-custom-secondary font-bold text-5xl uppercase mb-8 " cite={citation}>{quoteText}</blockquote>
				<figcaption className="text-custom-secondary font-bold text-2xl uppercase opacity-70">{author}</figcaption>
			</div>
		</figure>
	)

}
 
export default Quote;