<template>
  <q-input
      ref="newCardInput"
      v-model="newCard"
      label="Add new card"
      lazy-rules="ondemand"
      :rules="[ val => val && val.length > 0 || 'Please type something']"
      @keypress.enter="addNewCard"
  >
    <template v-slot:append>
      <q-btn round dense flat icon="post_add" @click="addNewCard"></q-btn>
    </template>
  </q-input>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'AddCard',
  setup() {
    const store = useStore();
    const newCard = ref('');
    const newCardInput = ref(null);

    function addNewCard() {
      const success = newCardInput.value.validate();
      if (success) {
        store.dispatch('addCard', newCard.value);
        newCard.value = '';
      }
    }

    return { newCardInput, newCard, addNewCard };
  },
};
</script>
