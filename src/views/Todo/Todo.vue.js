/* __placeholder__ */
import { defineComponent } from 'vue';
import { uid } from 'uid';
import TodoCreate from '../../shared/components/TodoCreate/TodoCreate.vue';
import TodoItem from '../../shared/components/TodoItem/TodoItem.vue';
export default defineComponent({
    name: 'Todo',
    components: {
        TodoCreate,
        TodoItem,
    },
    data() {
        return {
            todoList: [],
        };
    },
    computed: {
        todosCompleted() {
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
        createTodo(todo) {
            this.todoList.push({
                id: uid(),
                todo,
                isCompleted: false,
                isEditing: false
            });
        },
        toggleTodoComplete(todoPos) {
            this.todoList[todoPos].isCompleted = !this.todoList[todoPos].isCompleted;
        },
    },
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        TodoCreate,
        TodoItem,
    };
    const __VLS_name = 'Todo';
    let __VLS_internalComponent;
}
