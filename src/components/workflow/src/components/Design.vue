<template>
    <div id="main" class="canvas-container"></div>
</template>

<script setup lang="ts">
import {useG6} from "@/components/workflow/src/hooks/useG6";
import {onMounted} from "vue";

const emit = defineEmits(['nodeClick', 'edgeClick'])
const {initView,addNode} = useG6('main', emit)

onMounted(() => {
    initView();
})

defineExpose({
    addNode,
})
</script>

<style scoped>

</style>