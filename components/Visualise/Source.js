import Link from "next/link";
import  {findAndReplaceHolder} from '../../utils/globalFunc';

const Source = ({ object }) => {
	
	if (object === null) {
		return (<div>Loading...</div>)
	}

	const { singularName, priceUSD, sources, text } = { ...object }
	
	const displayPrice = priceUSD.toLocaleString("en-US");

	var replaceDetails = { 
		"price": `$${displayPrice}`,
		"name": `${singularName}`,
	};

	let updDesc = findAndReplaceHolder({ replaceVals: replaceDetails, str: text })
	
	return (
		<div className="  flex flex-row flex-wrap justify-center items-center text-center text-sm">
			{/* mt-60 works */}
			<blockquote className="font-gaegu text-custom-secondary mb-2 uppercase">
				<p>
					<span className="px-2">*{updDesc}</span>
				{sources?.map((source, i)=>{
					if(source !== null){
						return(
							<span key={`source-${i }`}>
								<Link href={source}>
									<a className={`hover:underline hover:text-custom-accent`}  target='_blank'>[{i + 1}]</a>
								</Link>
							</span>
						)
					}
				})}
				</p>
				
			</blockquote>

			{/* <figcaption className="font-gaegu uppercase text-custom-secondary ">
				<cite className="flex flex-row flex-wrap gap-2">
				{sources?.map((source, i)=>{
					if(source !== null){
						return(
							<Link  key={`source-${i}`}  href={source}>
								<a className={`hover:underline hover:text-custom-accent`}  target='_blank'>{source}</a>
							</Link>
						)
					}
				})}
				</cite>
			</figcaption> */}
		</div>
	);
}
export default Source;