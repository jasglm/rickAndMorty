import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./actions";
const initalState = { myFavorites: [], allCharacters: [] };

export default function rootReducer(state = initalState, action) {
	switch (action.type) {
		case ADD_FAV:
			return {
				...state,
				myFavorites: [...state.myFavorites, action.payload],
				allCharacters: [...state.allCharacters, action.payload],
			};

		case REMOVE_FAV:
			return {
				...state,
				myFavorites: state.myFavorites.filter(
					(character) => character.id !== Number(action.payload)
				),
				allCharacters: state.allCharacters.filter(
					(character) => character.id !== Number(action.payload)
				),
			};

		case FILTER:
			if (action.payload === "ALL") {
				return {
					...state,
					myFavorites: state.allCharacters,
				};
			}
			const filteredCharacters = state.allCharacters.filter(
				(character) => character.gender === action.payload
			);
			return {
				...state,
				myFavorites: filteredCharacters,
			};

		case ORDER:
			const sortedCharacters = [...state.allCharacters];
			sortedCharacters.sort((a, b) => {
				if (action.payload === "A") {
					return a.id - b.id;
				} else if (action.payload === "D") {
					return b.id - a.id;
				}
				return 0;
			});
			return {
				...state,
				myFavorites: sortedCharacters,
			};

		default:
			return {
				...state,
			};
	}
}
