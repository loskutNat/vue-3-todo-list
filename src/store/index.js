import { createStore } from 'vuex';

const store = createStore({
	state: {
		cards: [],
	},
	mutations: {
		addCard(state, newCard) {
			state.cards.push(newCard)
		},
	},
	actions: {
		addCard(context, newCard) {
			context.commit('addCard', newCard);
		},
	},
	getters: {
		todoListCount(state) {
			return state.cards.length;
		},
	},
});

export default store;
