<template>
  <input type="text" v-model="newCard" @keypress.enter="updateList">
  <ul>
    <li v-for="(card, index) in cards" :key="index">{{ card }}</li>
  </ul>
  <p>{{ todoListCount }}</p>
</template>

<script>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';

export default {
  setup() {
    const store = useStore();
    const newCard = ref('');
    const cards = computed(() => store.state.cards);
    const todoListCount = computed(() => store.getters.todoListCount)
    function updateList() {
      store.dispatch('addCard', newCard.value);
      newCard.value = '';
    }

    return { newCard, cards, todoListCount, updateList };
  },
};
</script>
