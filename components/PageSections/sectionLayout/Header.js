// import { useEffect, useState } from 'react';
import { useEffect, useState, useRef } from 'react'

const Header = ({ additionalClass = '', children }) => {

	return (
		<div className={`${additionalClass}  bg-custom-highlight justify-center flex p-6 w-full text-custom-accent`}>
			{children}
		</div>
	);
}
 
export default Header;