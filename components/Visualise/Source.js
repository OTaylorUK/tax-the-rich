import Link from "next/link";
import  {findAndReplaceHolder} from '../../utils/globalFunc';

const Source = ({ text, replaceDetails, sources }) => {

	let updDesc = findAndReplaceHolder({ replaceVals: replaceDetails, str: text })
	
	return (
		<div className="  flex flex-row flex-wrap justify-center items-center text-center ">
			{/* mt-60 works */}
			<blockquote className="font-gaegu text-custom-secondary mb-2 uppercase">
				<p className="font-gaegu text-sm">
					<span className="px-2 ">*{updDesc}</span>
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

		</div>
	);
}
export default Source;