<template>
    <div class="view-wrapper">
        <div class="view-header"></div>
        <div class="view-body">
            <div class="view-main">
                <Design @edgeClick="edgeClickAc"></Design>
            </div>
            <div class="view-edit"></div>
        </div>
        <div class="view-footer"></div>
    </div>
    <AddContext ref="addContextRef" @add="addAc"></AddContext>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import AddContext from './components/AddContext.vue'
import Design from './components/Design.vue'

const addContextRef = ref()

//添加按钮点击事件
const edgeClickAc = (evt) => {
    addContextRef.value.show(evt);
}

//添加节点或路由
const addAc = (type) => {

}

</script>
<style scoped lang="less">
.view-wrapper {
  height: 100vh;
  overflow: hidden;

  .view-header {
    height: 64px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    border-bottom: 1px solid #eee;
  }

  .view-body {
    height: calc(100vh - 64px);
    display: flex;
    flex-direction: row;
    overflow: hidden;

    .view-main {
      flex: 3;
      overflow: auto;
      display: flex;
      flex-direction: column;

      .canvas-container {
        flex: 1;
      }
    }

    .view-edit {
      flex: 1;
      border-left: 1px solid #eee;
      overflow-y: auto;
    }
  }
}
</style>