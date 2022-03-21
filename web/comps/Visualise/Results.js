const Results = ({ numOfUnits, object, status }) => {
	
	const display = numOfUnits?.display
	const namePlural = object?.namePlural
	

	return (
		<div className="my-10 container flex flex-col flex-wrap justify-center items-center">
			<h2 className="text-6xl">{display} </h2>
			<h3 className="text-3xl">{namePlural}*</h3>
		</div>
	);
}
export default Results;