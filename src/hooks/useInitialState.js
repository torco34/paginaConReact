// donde van las funcion y la logica de o
import { useState, useEffect } from "react";

const useInitialState = (API) => {
	// DE esta forma se puede utilizar la API donde sea necesario
	// esta es mi proyecto personal fuera del curso

	const [videos, setVideos] = useState([]);

	useEffect(() => {
		fetch("API")
			.then((response) => response.json())
			.then((data) => setVideos(data));
	}, []);
	return videos;
	console.log(videos);
};

export default useInitialState;
