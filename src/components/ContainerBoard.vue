<template>
    <div class="container-board-wrapper">
        <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane
            :key="item.form.render_key"
            v-for="(item, index) in form"
            :label="item.form.title"
            :name="item.form.render_key"
          >
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ContainerBoard',
  computed: {
    ...mapState({
      formList: (state) => state.form.formList
    }),
    form() {
      console.log(this.formList)
      return this.formList
    }
  },
  data() {
    return {
      editableTabsValue: '表一',
      editableTabs: [{
        form: {
          render_key: '表一',
          title: '表一一',
          size: 'medium',
          label_position: 'left',
          label_width: 100,
          disabled: false,
          remark: '',
          gutter: 20
        },
        keywords: [{
          render_key: '0',
          name: 'input',
          properties: 'column',
          show_type: 'el-input',
          label: '姓名',
          append: '',
          placeholder: '请输入姓名',
          required: true,
          remark: '',
          disabled: false,
          type: 'text',
          value: 'name', // 默认值
          style: { width: '100%' },
          vModel: 'enlent_time' // 绑定的model
        }, {
          render_key: '71',
          name: 'multiple-input',
          properties: 'column',
          show_type: 'el-input',
          label: '多行输入',
          rows: 1,
          placeholder: '请输入多行输入',
          required: true,
          remark: '',
          disabled: false,
          type: 'textarea',
          value: 'sss',
          style: { width: '100%' },
          vModel: 'enlment_tme'
        }]
      }, {
        form: {
          render_key: '表二',
          title: '表二二',
          size: 'medium',
          label_position: 'left',
          label_width: 100,
          disabled: false,
          gutter: 20
        },
        keywords: [{
          render_key: '6',
          name: 'input',
          properties: 'column',
          show_type: 'el-input',
          label: '姓名',
          append: '',
          placeholder: '请输入姓名',
          required: true,
          remark: '',
          disabled: false,
          type: 'text',
          value: 'name', // 默认值
          style: { width: '100%' },
          vModel: 'enlent_time' // 绑定的model
        }, {
          render_key: '45',
          name: 'row',
          properties: 'row',
          show_type: 'el-row',
          label: '容器',
          remark: '',
          childrens: [
            {
              render_key: '4052455',
              name: 'date',
              properties: 'column',
              show_type: 'el-date-picker',
              label: '日期内选择',
              placeholder: '请输入日期',
              required: true,
              remark: '',
              disabled: false,
              type: 'year',
              value: 'asd',
              format: 'yyyy-MM-dd',
              style: { width: '100%' },
              vModel: 'eme_time'
            }
          ]
        }]
      }],
      tabIndex: 2
    }
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        const newTabName = ++this.tabIndex + ''
        this.editableTabs.push({
          form: {
            render_key: '人口表',
            title: '人口信息学表',
            size: 'medium',
            label_position: 'left',
            label_width: 100,
            disabled: false,
            remark: '',
            gutter: 20
          },
          keywords: [{
            render_key: '0',
            name: 'input',
            properties: 'column',
            show_type: 'el-input',
            label: '姓名',
            append: '',
            placeholder: '请输入姓名',
            required: true,
            remark: '',
            disabled: false,
            type: 'text',
            value: 'name', // 默认值
            style: { width: '100%' },
            vModel: 'enlent_time' // 绑定的model
          }, {
            render_key: '71',
            name: 'multiple-input',
            properties: 'column',
            show_type: 'el-input',
            label: '多行输入',
            rows: 1,
            placeholder: '请输入多行输入',
            required: true,
            remark: '',
            disabled: false,
            type: 'textarea',
            value: 'sss',
            style: { width: '100%' },
            vModel: 'enlment_tme'
          }]
        })
        this.editableTabsValue = newTabName
      }
      if (action === 'remove') {
        const tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.form.render_key === targetName) {
              const nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.form.render_key
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter(tab => tab.form.render_key !== targetName)
      }
    }
  }
}
</script>

<style lang="scss">
.container-board-wrapper{
  padding: 20px 40px;
  height: 100%;
  box-sizing: border-box;
}
</style>
