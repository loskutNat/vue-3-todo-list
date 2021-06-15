import { createStore } from 'vuex';

const store = createStore({
	state: {
		cards: [],
	},
	mutations: {
		addCard(state, newCard) {
			state.cards.push(newCard)
		},
		deleteCard(state, index) {
			state.cards.splice(index, 1);
		},
		editCard(state, { index, newValue }) {
			console.log(newValue, 'newValue');
			state.cards.splice(index, 1, newValue);
		},
	},
	actions: {
		addCard(context, newCard) {
			context.commit('addCard', newCard);
		},
		deleteCard(context, index) {
			context.commit('deleteCard', index);
		},
		editCard(context, { index, newValue }) {
			console.log(newValue, 'newValue action');
			context.commit('editCard', { index, newValue} );
		},
	},
	getters: {
		todoListCount(state) {
			return state.cards.length;
		},
	},
});

export default store;
