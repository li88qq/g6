<template>
    <div id="main" class="canvas-container"></div>
</template>

<script setup lang="ts">
import {useG6} from "@/components/workflow/src/hooks/useG6";
import {onMounted} from "vue";

const emit = defineEmits(['nodeClick', 'edgeClick'])
const {initView} = useG6('main', emit)

onMounted(() => {
    initView();
})
</script>

<style scoped>

</style>