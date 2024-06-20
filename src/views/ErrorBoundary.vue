<template>
    <div class="error">
        <h1 v-if="isRouteError">Page Not Found</h1>
        <h1 v-else>Something went wrong</h1>
        <p v-if="error && !isRouteError">{{ error.message }}</p>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'ErrorBoundary',
    data() {
        return {
            error: null as Error | null,
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
        this.error = err as Error;
        return false;
    },
});
</script>
  
<style lang="scss" scoped>
.error {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 40px 16px;
}
</style>
  