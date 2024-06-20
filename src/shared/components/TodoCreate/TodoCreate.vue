<template src="./todoCreate.html"></template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoButton from "../TodoButton.vue";

export default defineComponent({
    name: 'TodoCreate',
    components: {
        TodoButton
    },

    emits: ['create-todo'],

    data() {
        return {
            todoState: {
                todo: "",
                invalid: null as boolean | null,
                errMsg: ""
            }
        };
    },

    methods: {
        createTodo() {
            this.todoState.invalid = null;
            if (this.todoState.todo !== "") {
                this.$emit('create-todo', this.todoState.todo);
                this.todoState.todo = "";
                return;
            }
            this.todoState.invalid = true;
            this.todoState.errMsg = "can not be empty";
        }
    }
});
</script>

<style lang="scss" scoped>
@import "./todoCreate.scss";
</style>
