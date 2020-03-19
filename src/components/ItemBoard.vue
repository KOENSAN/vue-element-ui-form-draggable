<template>
    <div class="item-board-wrapper">
      <div class="operate-content">
        <span class="run"><i class="el-icon-video-play"></i>运行</span>
        <span class="empty"><i class="el-icon-delete"></i>清空</span>
        <span class="json"><i class="el-icon-top"></i>JSON</span>
      </div>
      <div class="item-content">
        <ul>
          <li v-for="(item, index) in keyWordsConfig" :key="index">
            <i :class='item.tagIcon'></i>
            <span>{{item.label}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import { keyWordsConfig } from './config'
export default {
  name: 'ItemBoard',
  data() {
    return {
      keyWordsConfig: keyWordsConfig
    }
  }
}
</script>

<style lang="scss">
.item-board-wrapper{
  position: relative;
  width: 100%;
  overflow: hidden;
  .operate-content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #f1e8e8;
    span{
      padding: 10px;
      i{
        margin-right: 3px;
      }
      &:hover{
        cursor:pointer;
      }
    }
    .run{
      color: antiquewhite;
    }
    .empty{
      color: red;
    }
    .json{
      color: antiquewhite;
    }
  }
  .item-content{
    position: relative;
    height: calc(100vh - 113px);
    overflow: hidden;
    ul{
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap:wrap;
      overflow: auto;
      padding: 10px;
      li{
        margin: 2% 1% 0 1%;
        font-size: 13px;
        width: 48%;
        height: 35px;
        line-height: 35px;
        text-align: left;
        background: #F4F6FC;
        i{
          font-size: 20px;
          margin-right: 3px;
        }
        &:hover{
          cursor: move;
        }
      }
    }
  }
}
</style>
