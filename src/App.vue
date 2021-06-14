<template>
  <h1>Todo List</h1>
  <CardsList />
</template>

<script>
import CardsList from '@/components/CardsList';

export default {
  name: 'App',
  components: {
    CardsList,
  },
}
</script>
