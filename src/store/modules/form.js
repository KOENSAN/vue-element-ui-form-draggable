const state = {
  formList: [{
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
    keywords: [
      {
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
      },
      {
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
      }
    ]
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
    keywords: [
      {
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
      },
      {
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
      }
    ]
  }],
  asd: 'asd'
}

const mutations = {

}

const actions = {

}

export default {
  namespace: false,
  state
}
