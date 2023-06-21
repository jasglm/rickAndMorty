import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export function addFavorite(character) {
	//! 		-->***Manejo en BACKEND***<--
	const endpoint = "http://localhost:3001/rickandmorty/fav";
	return (dispatch) => {
		axios.post(endpoint, character).then(({ data }) => {
			return dispatch({
				type: ADD_FAV,
				payload: data,
			});
		});
	};

	//! 		-->***Manejo en FRONTEND***<--
	// return {
	// 	type: ADD_FAV,
	// 	payload: character,
	// };
}

export function removeFavorite(id) {
	//! 		-->***Manejo en BACKEND***<--
	const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
	return (dispatch) => {
		axios.delete(endpoint).then(({ data }) => {
			return dispatch({
				type: REMOVE_FAV,
				payload: data,
			});
		});
	};
	//! 		-->***Manejo en FRONTEND***<--
	// return {
	// 	type: REMOVE_FAV,
	// 	payload: id,
	// };
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
