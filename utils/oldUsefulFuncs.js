

		// const getImage = async () =>{

		// 	const imgUrl = `https://res.cloudinary.com/virtual-jungle/image/upload/taxtherich/v1651164784/${questionRef?.current?.uriFriendly}.png`

		// 	// if the image does not exist then ok to add to server - helps to avoid unnecessarily bandwidth usage
		// 	axios.get(imgUrl)
		// 	.then(function (res) {
		// 		console.log('image already exists');

		// 		setUrl(imgUrl)
		// 	})
		// 	.catch(function (error) {
				
		// 		// ok to add
		// 		toPng(resultsRef.current, { cacheBust: true, filter: filter })
		// 		.then((dataUrl) => {
				
		// 			const data = new FormData()

		// 			data.append("file", dataUrl)
		// 			data.append("upload_preset", "lfqya19b")
		// 			data.append("cloud_name","virtual-jungle")
		// 			data.append("public_id", questionRef?.current?.fileName);


		// 			axios.post("https://api.cloudinary.com/v1_1/virtual-jungle/image/upload", data)
		// 			.then(function (response) {

		// 				console.log('successfully added image to the cloud');
		// 				if(response?.data?.url){
		// 					setUrl(response.data.url)
		// 				}
		// 			})
		// 			.catch(function (error) {
		// 				console.error('failed to add image to the cloud', error);
		// 			});
			
		// 		})
		// 		.catch((err) => {
		// 			console.error(err)
		// 		})
		// 	});

				
		// }


		//  getImage()