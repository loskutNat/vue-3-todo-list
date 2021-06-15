<template>
  <q-layout>
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Todo List
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="main-content">
      <q-page class="q-pa-md">
        <CardsList />
      </q-page>
    </q-page-container>
    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Todo list elements: {{ todoListCount }}</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CardsList from '@/components/CardsList';

export default {
  name: 'LayoutDefault',
  components: {
    CardsList,
  },
  setup() {
    const store = useStore();
    const todoListCount = computed(() => store.getters.todoListCount);
    return { todoListCount };
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
}
</style>
