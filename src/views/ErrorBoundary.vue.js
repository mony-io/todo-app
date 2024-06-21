/* __placeholder__ */
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    name: 'ErrorBoundary',
    data() {
        return {
            error: null,
            isRouteError: false,
        };
    },
    created() {
        const route = useRoute();
        if (route.name === 'not-found') {
            this.isRouteError = true;
        }
    },
    errorCaptured(err) {
        this.error = err;
        return false;
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("error") }, });
    if (__VLS_ctx.isRouteError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        // @ts-ignore
        [isRouteError,];
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    }
    if (__VLS_ctx.error && !__VLS_ctx.isRouteError) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.error.message);
        // @ts-ignore
        [isRouteError, error, error,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['error'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'ErrorBoundary';
    let __VLS_internalComponent;
}
