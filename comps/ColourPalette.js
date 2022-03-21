
const ColourPalette = ({ palette }) => {
	
	const {value } = palette
	let paletteAll = '';
	if (value) {
		for (const [key] of Object.entries(value)) {
			const niceName = value[key].name.toLowerCase();
			const ret = `--${niceName}:${value[key].hex};`;
			paletteAll =  paletteAll.concat(ret); ;
		}
	}

	return (
		<style jsx global>{`
		:root {
			${paletteAll}
		}
	  `}</style>
	);
}
 
export default ColourPalette;