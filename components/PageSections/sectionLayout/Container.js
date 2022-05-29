// import { useEffect, useState } from 'react';
import { useEffect, useState, useRef } from 'react'

const Container = ({ additionalClass = '', children }) => {

	return (
		<div  className="container py-4  flex flex-col justify-center items-center ">
			{children}
		</div>
	);
}
 
export default Container;