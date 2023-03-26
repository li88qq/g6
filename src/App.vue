<template>
  <div class="wrapper">
    <div id="main" class="main"></div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue'
import {useG6} from './hooks'
import {cardData} from './data'
const {getGraph,register} = useG6('main')


const init = () => {
  register();
  const data ={
    nodes:[
      {id:'001',type:'card',title:'开始'},
      {id:'099',type:'card',title:'结束'},
    ],
    edges:[
      {id:'line_001',type:'button',source:'001',target:'099'}
    ]
  }

  const graph = getGraph()
  graph.data(cardData)
  graph.render()
  graph.on('node:click',(a)=>{
    console.log(a)
  })
  graph.on('edge:click',(a)=>{
    console.log(a)
  })
}

onMounted(() => {
  init()
})

</script>
<style scoped lang="less">
.wrapper {
  height: calc(100vh);
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #eee;
}

.main {
  flex: 1;
}
</style>