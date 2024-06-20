<template>
  <TodoHeader />
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import TodoHeader from './shared/components/TodoHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    TodoHeader,
  },
});
</script>

<style lang="scss">
@import './assets/style/global.scss';
</style>
