<template src="./todoItem.html"></template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { TodoList } from '../../type/todo.type';

export default defineComponent({
    name: 'TodoItem',
    props: {
        todo: {
            type: Object as PropType<TodoList>,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        }
    },

    emits: ['toggle-complete'],

    methods: {
        toggleComplete() {
            this.$emit('toggle-complete', this.index);
        },
    }
});
</script>

<style lang="scss" scoped>
@import "./todoItem.scss";
</style>
