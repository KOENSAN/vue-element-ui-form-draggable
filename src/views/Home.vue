<template>
  <div class="main">
    <header-board></header-board>
    <div class="container-wrapper">
      <div class="container-board-container">
        <container-board></container-board>
      </div>
      <div class="item-board-container">
        <item-board></item-board>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBoard from '../components/HeaderBoard'
import ContainerBoard from '../components/ContainerBoard'
import ItemBoard from '../components/ItemBoard'
export default {
  name: 'Home',
  components: {
    HeaderBoard,
    ContainerBoard,
    ItemBoard
  }
}
</script>
<style lang="scss">
.main {
  .container-wrapper {
    height: calc(100vh - 72px);
    background: #ffffff;
    position: relative;
    .container-board-container{
      position: absolute;
      top: 0;
      right: 261px;
      left: 0;
      bottom: 0;
      height: 100%;
    }
    .item-board-container{
      position: absolute;
      top: 0;
      right: 0;
      width: 260px;
      border-left: 1px solid #f1e8e8;
      height: 100%;
    }
  }
}
</style>
