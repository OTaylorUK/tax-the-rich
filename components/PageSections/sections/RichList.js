import useSWR from 'swr'
import { useEffect, useState, useRef } from 'react'
import RichPerson from '../../RichPerson';

const RichList = ({buttons, componentContext}) => {


	// const [richList, updateRichList] = useState(null)

	// useEffect(() => {
	// 	const { data, error } = useSWR(api)

	// 	// if (error) return <div>failed to load</div>
	// 	// if (!data) return <div>loading...</div>
	// 	if (data) {
	// 		updateRichList(data)
	// 	}


	// }, []);
  

	return (
		<div className="container  flex flex-col justify-center items-center ">

			<div className=" sm:max-w-2/3 w-10/12 flex flex-col justify-center items-center   bg-custom-faded p-20">
				
				<div className=" sm:max-w-2/3 w-full    grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-center items-stretch  ">
					{componentContext.map((indv, i) => {

						
						return (
							<RichPerson key={`eattherich-${i}`} indv={indv} buttons={buttons} num={i}/>
							
						)
					})}
				</div>

			</div>
				
		</div>
	)

}
 
export default RichList;