

import Default from "../../PortableText/Default";

const Quote = (props) => {

	const { author, quoteText, citation } = props;


	return (
		<blockquote cite={citation} className="container flex flex-col justify-center items-center  mb-20">
			<div className=" w-full bg-custom-faded  rounded-lg text-custom-accent flex justify-center">
				<div className="w-full lg:w-10/12 flex flex-col gap-10 justify-center items-center text-center p-20">
					<q className="flex flex-col md:flex-row items-center gap-8  font-bold text-2xl md:text-5xl md:leading-tight   leading-tight" >{quoteText}</q>
					<figcaption className=" font-bold text-2xl  opacity-80">{author}</figcaption>
				</div>

			</div>
		</blockquote>
	)

}
 
export default Quote;