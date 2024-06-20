<template src="./todo.html"></template>

<script lang="ts">
import { defineComponent } from 'vue';
import { uid } from 'uid';
import TodoCreate from '../../shared/components/TodoCreate/TodoCreate.vue';
import TodoItem from '../../shared/components/TodoItem/TodoItem.vue';
import { TodoList } from '../../shared/type/todo.type';

export default defineComponent({
    name: 'Todo',
    components: {
        TodoCreate,
        TodoItem,
    },

    data() {
        return {
            todoList: [] as TodoList[],
        };
    },

    computed: {
        todosCompleted(): boolean {
            return this.todoList.length > 0 && this.todoList.every(todo => todo.isCompleted);
        }
    },

    created() {
        this.fetchTodoList();
    },

    watch: {
        todoList: {
            handler: 'setTodoListLocalStorage',
            deep: true
        }
    },

    methods: {
        setTodoListLocalStorage() {
            localStorage.setItem("todoList", JSON.stringify(this.todoList));
        },

        fetchTodoList() {
            const savedTodoList = JSON.parse(localStorage.getItem("todoList") || '[]');
            if (savedTodoList) {
                this.todoList = savedTodoList;
            }
        },

        createTodo(todo: string) {
            this.todoList.push({
                id: uid(),
                todo,
                isCompleted: false,
                isEditing: false
            });
        },

        toggleTodoComplete(todoPos: number) {
            this.todoList[todoPos].isCompleted = !this.todoList[todoPos].isCompleted;
        },
    },
});
</script>

<style lang="scss" scoped>
@import "./todo.scss";
</style>
