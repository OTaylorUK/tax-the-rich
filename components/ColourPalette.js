
const ColourPalette = ({ palette }) => {
	
	let paletteAll = '';
	let lightTheme = '';
	let darkTheme = '';

	const { value } = palette

	if (value) {
		for (const [key, val] of Object.entries(value)) {
			const niceName = val.name.toLowerCase();
		
			if (val?.light) {
				const lightVal = `--theme-light-${niceName}:${val.light};`;
				paletteAll = paletteAll.concat(lightVal);
			}
			if (val?.dark) {
				const darkVal = `--theme-dark-${niceName}:${val.dark};`;
				paletteAll = paletteAll.concat(darkVal);
			}
		}
	}


	return (
		<style jsx global>{`

		

		:root{
			${paletteAll}
		}

	
	
	  `}</style>
	);
}
 
export default ColourPalette;