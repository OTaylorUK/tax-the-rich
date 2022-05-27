const Results = ({ number, text,isPlural = true }) => {
	

	
	return (
		<div className=" container flex flex-col flex-wrap justify-center items-center gap-4">
			<h2 className="text-3xl md:text-5xl lg:text-6xl  text-custom-secondary">{number} </h2>
			<h3 className="text-xl md:text-3xl text-custom-secondary ">{!isPlural && 'of a '}{text}*</h3>
		</div>
	);
}
export default Results;