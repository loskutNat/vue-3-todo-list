<template>
  <q-item>
    <q-item-section>
      <q-input
          ref="cardInput"
          v-if="isCardEdit"
          v-model="editCardLabel"
          dense
          @keypress.enter="editCard"
          lazy-rules="ondemand"
          :rules="[ val => val && val.length > 0 || 'Please type something']"
      >
        <template v-slot:append>
          <q-btn round dense flat icon="done" @click="editCard"></q-btn>
        </template>
      </q-input>
      <q-item-label v-else>
        {{ label }}
      </q-item-label>
    </q-item-section>
    <q-item-section side top>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
            class="gt-xs"
            size="12px"
            flat
            dense
            round
            :icon="isCardEdit ? 'cancel' : 'edit'"
            @click="toggleEditCard"
        ></q-btn>
        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="deleteCard"></q-btn>
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  name: 'Card',
  props: {
    label: String,
    cardIndex: Number,
  },
  setup(props) {
    const store = useStore();
    const editCardLabel = ref(props.label);
    const isCardEdit = ref(false);
    const cardInput = ref(null);

    function deleteCard() {
      store.dispatch('deleteCard', props.cardIndex);
    }

    function toggleEditCard() {
      isCardEdit.value = !isCardEdit.value;
    }

    function editCard() {
      const success = cardInput.value.validate();
      if (success) {
        store.dispatch('editCard', {
          index: props.cardIndex,
          newValue: editCardLabel.value,
        });
        isCardEdit.value = false;
      }
    }

    return {
      editCardLabel, isCardEdit, cardInput, deleteCard, editCard, toggleEditCard,
    };
  },
};
</script>
