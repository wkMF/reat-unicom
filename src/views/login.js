// eslint-disable-next-line no-unused-vars
import { Table, Button, Form, Row, Col } from 'antd'
import React from 'react'
import '../mock/login'
import axios from '../utils/http'
import { InfoCircleOutlined } from '@ant-design/icons'
import DynamicForm from '../components/DynamicForm'

const Login = () => (
  <>
    <div>
      <p>用户登录页</p>
    </div>
  </>
)

class LoginBak extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{
        name: '李一',
        age: '26',
      }],
      fieldsValue: { name: '李依依', age: 23, sex: '2' },
      columns: [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: Math.random().toString(32).substring(0, 16),
        render: (_, record) => (
          <>
            {/* eslint-disable-next-line react/prop-types,jsx-a11y/no-static-element-interactions */}
            <a onClick={() => this.props.history.push(`/detail/${record.id}`)}> {record.age} --- <InfoCircleOutlined/></a>
          </>
        ),
      }],
    }
    this.dynamicFormRef = null
  }

  componentDidMount() {
    // console.log(this.props, 'props');
    // setInterval(() => {
    //     this.setState(({ fieldsValue }) => {
    //         return {
    //             fieldsValue: {
    //                 ...fieldsValue,
    //                 age: fieldsValue.age + 1
    //             }
    //         }
    //     }, (state) => {
    //         console.log(this.state)
    //     })
    // }, 2000)

  }

  // eslint-disable-next-line react/sort-comp
  fetchData = () => {
    axios.get('/list', {
      data: {
        page: 1,
      },
    }).then(({ data: { data: { list } } }) => {

      this.setState({ data: list })
    })
  }
  sendCallback = () => {
    this.dynamicFormRef.submit()
  }
  setDynamicFormRef = (ref) => {
    this.dynamicFormRef = ref
  }

  render() {
    const cloumn = [{
      type: 'text',
      placeholder: '请输入姓名',
      formItem: {
        label: '姓名',
        rules: [{
          required: true,
          message: '请输入!',
        }], disabled: false, name: 'name',
        initialValue: '',
      },
    }, {
      type: 'text',
      formItem: {
        label: '年龄', rules: [{
          required: true,
          message: '请输入!',
        }], disabled: false, name: 'age',
        initialValue: '',
      },
      placeholder: '请输入年龄',
    }, {
      type: 'select',
      options: [{ key: '男', value: '1' }, { key: '女', value: '2' }],
      formItem: {
        label: '性别',
        name: 'sex',
      },
    }, {
      type: 'radio',
      options: [{ key: '男', value: '1' }, { key: '女', value: '2' }],
      formItem: {
        label: '性别选择',
        name: 'sexRadio',
      },
    }]
    return (
      <div style={{ marginTop: '10px' }}>
        {/* <Button onClick={this.fetchData}> 发送请求 </Button> */}
        <DynamicForm
          ref={this.setDynamicFormRef}
          cloumn={cloumn}
          formConfig={{ labelWrap: true }}
          fieldsValue={this.state.fieldsValue}
         />
        <Row>
          <Col span={8} offset={16} style={{ textAlign: 'center', marginTop: '-24px' }}>
            <Button onClick={() => this.sendCallback()}>搜索</Button>
          </Col>
        </Row>
        {/* <Table
                    columns={this.state.columns}
                    dataSource={this.state.data}
                    pagination={false}
                    size={'small'}
                ></Table> */}
      </div>
    )
  }
}


export {
  Login, LoginBak,
}
