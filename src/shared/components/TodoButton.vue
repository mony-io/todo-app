<template>
    <button>
        <slot>Create</slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TodoButton',
});
</script>

<style lang="scss" scoped>
button {
    padding: 8px 12px;
    border: none;
}
</style>