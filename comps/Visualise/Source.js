import Link from "next/link";

const Source = ({ source, price, description }) => {
	

	if (price === undefined && source === undefined && description === undefined) {
		return (<div>Loading...</div>)
	}


	const displayPrice = price.toLocaleString("en-US");

	var userDetails = { "price": `$${displayPrice}`};

	var placeholders = description.match(/\$(.*?)\$/g)

	placeholders.forEach(function(placeholder){
		//Placeholder - $price$
		var phText = placeholder.substring(1,placeholder.length - 1);
		//phText = price

		if(userDetails[phText]){
			description = description.replace(placeholder,userDetails[phText])
		}
	})

	return (
		<div className="my-10 container  flex flex-col flex-wrap justify-center items-center">
			
			<blockquote className="font-gaegu">
				<p>*{description}</p>
			</blockquote>

			<figcaption className="font-gaegu text-blue-600">
				<cite>
				<Link  href={source}>
					<a  target='_blank'>{source}</a>
				</Link>
				</cite>
			</figcaption>
		</div>
	);
}
export default Source;