<template>
    <div class="header-board-wrapper">
      <div class="header-board-content">
        <div class="name">
          vue-element-ui-form-draggable
        </div>
        <div class="github">
          GITHUB
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderBoard'
}
</script>

<style lang="scss">
.header-board-wrapper{
  position: relative;
  background: #ffffff;
  .header-board-content{
    padding: 8px;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #f1e8e8;
    .name{
      flex: 1;
      font-size: 25px;
    }
    .github{
      /*align-self:flex-end;*/
    }
  }
}
</style>
