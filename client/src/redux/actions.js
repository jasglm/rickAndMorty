import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

//! 	-->***Manejo en BACKEND con ASYNC/AWAIT && TRY/CATCH***<--
export function addFavorite(character) {
	const endpoint = "http://localhost:3001/rickandmorty/fav";
	return async (dispatch) => {
		try {
			const { data } = await axios.post(endpoint, character);
			if (!data.length) throw Error("No hay favoritos");
			return dispatch({
				type: ADD_FAV,
				payload: data,
			});
		} catch (error) {
			console.log(error.message);
		}
	};
}

//! 		-->***Manejo en BACKEND con promises***<--
// export function addFavorite(character) {
// 	const endpoint = "http://localhost:3001/rickandmorty/fav";
// 	return (dispatch) => {
// 		axios.post(endpoint, character).then(({ data }) => {
// 			return dispatch({
// 				type: ADD_FAV,
// 				payload: data,
// 			});
// 		});
// 	};

//! 		-->***Manejo en FRONTEND***<--
// return {
// 	type: ADD_FAV,
// 	payload: character,
// };
// }

//! 		-->***Manejo en BACKEND con promisses***<--
// export function removeFavorite(id) {
// 	const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
// 	return (dispatch) => {
// 		axios.delete(endpoint).then(({ data }) => {
// 			return dispatch({
// 				type: REMOVE_FAV,
// 				payload: data,
// 			});
// 		});
// 	};
// 	//! 		-->***Manejo en FRONTEND***<--
// 	// return {
// 	// 	type: REMOVE_FAV,
// 	// 	payload: id,
// 	// };
// }

//! 		-->***Manejo en BACKEND***<--
export function removeFavorite(id) {
	const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
	return async (dispatch) => {
		try {
			const { data } = await axios.delete(endpoint);
			return dispatch({
				type: REMOVE_FAV,
				payload: data,
			});
		} catch (error) {
			console.log(error.message);
		}
	};
}

export function filterCards(gender) {
	return {
		type: FILTER,
		payload: gender,
	};
}

export const showAllCards = () => {
	return {
		type: FILTER,
		payload: "All",
	};
};

export function orderCards(order) {
	return {
		type: ORDER,
		payload: order,
	};
}
