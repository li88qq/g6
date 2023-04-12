<template>
    <teleport to="body">
        <div style="position: absolute; top: 0px; left: 0px; width: 100%;">
            <div v-show="visibleRef">
                <div class="ant-dropdown ant-dropdown-placement-bottomLeft" :style="styleRt">
                    <div class="ant-dropdown-content">
                        <div class="context-wrapper">
                            <div class="context-item" @click="selectAc('node')">
                                <div class="context-icon">
                                    <IdcardOutlined/>
                                </div>
                                <span>节点</span>
                            </div>
                            <div class="context-item" @click="selectAc('route')">
                                <div class="context-icon">
                                    <ClusterOutlined/>
                                </div>
                                <span>路由</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue'
import {IdcardOutlined, ClusterOutlined} from '@ant-design/icons-vue'

const emit = defineEmits(['add'])

const styleRt = reactive({
    left: '0px',
    top: '0px',
})

//点击的边引用
let edgeInstance = null;

const visibleRef = ref(false)
//监听body点击
const bindRef = ref(false);

const show = (node) => {
    const {clientX, clientY,item} = node
    styleRt.left = (clientX + 20) + 'px';
    styleRt.top = clientY + 'px';
    visibleRef.value = true;
    edgeInstance = item;
    bindBodyClick();
}

const close = () => {
    visibleRef.value = false;
}

const selectAc = (type) => {
    emit('add', edgeInstance,type)
    close();
}

//绑定一次body的点击事件,然后关闭菜单
const bindBodyClick = () => {
    const body = document.getElementsByTagName('body')[0];
    body.addEventListener('click', unbindBodyClick, false);
}

//解除body点击监听,并关闭菜单
const unbindBodyClick = () => {
    if(!bindRef.value){
        bindRef.value = true;
    }else{
        bindRef.value = false;
        const body = document.getElementsByTagName('body')[0];
        body.removeEventListener('click', unbindBodyClick);

        if(visibleRef.value){
            visibleRef.value = false;
        }
    }
}

defineExpose({
    show,
    close,
})

</script>

<style scoped lang="less">
.context-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #8800ff;
  padding: 8px;
}

.context-item {
  flex: 1;
  width: 64px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    background-color: #eee;
  }

  .context-icon {
    height: 48px;
    width: 48px;
    border-radius: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #80f;
    background-color: greenyellow;
  }

  .anticon {
    font-size: 32px;
  }
}
</style>