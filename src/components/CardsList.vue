<template>
  <AddCard />
  <div class="q-pa-md q-gutter-md">
    <q-list v-if="cards.length" bordered separator>
      <Card v-for="(card, index) in cards" :key="index" :label="card" :card-index="index"/>
    </q-list>
    <q-banner v-else class="bg-primary text-white">
      You have no tasks.
    </q-banner>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import AddCard from '@/components/AddCard';
import Card from '@/components/Card';

export default {
  name: 'CardsList',
  components: {
    AddCard,
    Card,
  },
  setup() {
    const store = useStore();
    const cards = computed(() => store.state.cards);

    return { cards };
  },
};
</script>
