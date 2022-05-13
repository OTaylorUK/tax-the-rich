const Results = ({ numOfUnits, displayName,numOfUnitsPlural }) => {
	

	
	return (
		<div className=" container flex flex-col flex-wrap justify-center items-center gap-4">
			<h2 className="text-3xl md:text-5xl lg:text-6xl  text-custom-secondary">{numOfUnits} </h2>
			<h3 className="text-xl md:text-3xl text-custom-secondary ">{!numOfUnitsPlural && 'of a '}{displayName}*</h3>
		</div>
	);
}
export default Results;