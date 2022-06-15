import { Body, Container } from "../sectionLayout";

const Quote = (props) => {

	const { author, quoteText, citation } = props;

	return (

		<Container additionalClass='mb-20'>
			<Body>
				<blockquote cite={citation} className="container flex flex-col justify-center items-center  ">
				<div className=" w-full bg-custom-faded  rounded-lg text-custom-accent flex justify-center">
					<div className="w-full flex flex-col gap-10 justify-center items-center text-center">
						<q className="flex flex-col md:flex-row items-center gap-8  font-bold text-2xl md:text-5xl md:leading-tight   leading-tight" >{quoteText}</q>
						<figcaption className=" font-bold text-2xl  opacity-80">{author}</figcaption>
					</div>

				</div>
			</blockquote>
			</Body>
		</Container>

		
	)

}
 
export default Quote;