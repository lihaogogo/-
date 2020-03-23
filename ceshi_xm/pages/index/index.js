import WxValidate from "../../assets/js/WxValidate.js";
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    form:{
      name:"",
      tel:"",
      age:"",
      gender: '',
    },
    radio:[
      {
        name:"男",
        value:"male",
        checked:!1
      },
      {
        name: '女',
        value: 'female',
      },
    ],
    //  component: App.components[0],
  },
  onLoad(){
    this.initValidate(); 
    console.log(this.WxValidate)
  },
  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
  },
  submitForm(e) {
    const params = e.detail.value

    console.log(params)
    // console.log("姓名："+params.name+"电话："+params.tel+"年龄："+params.age+"性别："+params.gender)
    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }
    var that = this;
    wx.request({
      url: 'url',//这里的接口请填实际接口  
      data: params,
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        console.log("姓名：" + params.name + "电话：" + params.tel + "年龄：" + params.age + "性别：" + params.gender),
        wx.showtoast({
          
          msg: '提交成功',
        })
        that.setData({
          form_info: ''
        })
      }
    })
    // this.showModal({
    //   msg: '提交成功',
    // })
  },
  initValidate(){
    // 验证字段的规则
    const rules ={
      name: {
        required: true,
        minlength: 2
      },
      tel: {
        required: true,
        tel: true,
      },
      age: {
        required: true,
        min: 18,
        max: 100,
      },
      gender: {
        required: true,
      },
    }
    // 验证字段的提示信息，若不传则调用默认的信息
    const messages ={
      name: {
        required: "请输入姓名",
        minlength: "请输入正确的名称"
      },
      tel: {
        required: '请输入手机号',
        tel: '请输入正确的手机号',
      },
      age: {
        required: '请选择年龄',
        min: '年龄不小于18',
        max: '年龄不大于100',
      },
      gender: {
        required: '请选择性别',
      },
    }
    //创建实例
    this.WxValidate = new WxValidate(rules, messages)
  },

  radioChange(e) {
    const value = e.detail.value
    const radio = this.data.radio
    const items = radio.map(n => {
      return Object.assign({}, n, {
        checked: n.value === value,
      })
    })
    console.log(items)
    this.setData({
      radio: items,
      'form.gender': value,
    })
  },

})
