/* __placeholder__ */
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { DateFormatService } from "../service/DateFormatService";
export default defineComponent({
    name: 'TodoHeader',
    components: {
        RouterLink
    },
    data() {
        return {
            dateFormatService: new DateFormatService(),
            date: new Date(),
            intervalId: 0
        };
    },
    mounted() {
        this.intervalId = setInterval(() => {
            this.date = new Date();
        }, 1000);
    },
    beforeUnmount() {
        clearInterval(this.intervalId);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("branding") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.dateFormatService.formatToCustom(__VLS_ctx.date, 'YYYY-MM-DD HH:mm:ss'));
    // @ts-ignore
    [dateFormatService, date,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("nav-routes") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), }));
    const __VLS_2 = __VLS_1({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/"), }));
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    // @ts-ignore
    const __VLS_6 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/about"), }));
    const __VLS_8 = __VLS_7({ to: ("/about"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ to: ("/about"), }));
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['container'];
        __VLS_styleScopedClasses['branding'];
        __VLS_styleScopedClasses['nav-routes'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        RouterLink
    };
    const __VLS_name = 'TodoHeader';
    let __VLS_internalComponent;
}
