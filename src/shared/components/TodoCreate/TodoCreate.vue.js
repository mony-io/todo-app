/* __placeholder__ */
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
                invalid: null,
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
        TodoButton
    };
    const __VLS_name = 'TodoCreate';
    let __VLS_internalComponent;
}
