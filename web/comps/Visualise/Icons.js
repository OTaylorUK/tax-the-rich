import { useEffect, useState } from 'react';

const Icons = ({ data }) => {


	const outputBoxes = (numToLoop) => {
		let num = 10000;
		let boxBase = 1000;
		let boxes = [];


		let i = 0;

		console.time()
		while (i < numToLoop?.raw) {
		
			boxes.push(
				<div key={i} className="m-1">
					<div className="hide-partial"></div>
					{data.results.unitIcon}
				</div>
			)
			i++
		}

		console.timeEnd()
		return boxes;

	}
	const [test, updateTest] = useState(<div>Loading...</div>);

	useEffect(() => {

		if (data.ready) {
			updateTest(outputBoxes(data.results.numOfUnits))
		}
		
	}, [data]);

	return (
		<div className="container flex flex-row flex-wrap justify-center items-center" data-total-num={data?.results?.numOfUnits?.raw}>
			{test}
		</div>
	);
}
 
export default Icons;