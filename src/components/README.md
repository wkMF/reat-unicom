# DynamicForm使用说明

## 参数说明
1.cloumn（object）: 用于配置所需要呈现的form表单内容type
    1)type(string): 需要渲染的表单类型（input、chexkBoxGroup、radio、select、date、textArea）
    2)formItem(object): 需要设置的<Form.Item/>的属性
    3）event: 需要单独触发表单元素的事件以及需要设置的属性
    4）options(array):用于渲染的下拉列表数据
2.formConfig(object): 用于配置<Form>的属性
3.fieldsValue(object): 用于回显数据或者赋默认值
4.ref：用于父子组件通信，暴露方法有submit(提交表单)
5.spanValue: 一行显示几个表单元素，默认3个(24/8)

### 说明： 组件可以包含一个slot,将以children的形式展现