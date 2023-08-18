const Mock = require('mockjs')

// get请求
// eslint-disable-next-line no-unused-vars
module.exports = Mock.mock('/user', 'get', (options) => {
    const ret = Mock.mock({
        'user': { username: '@cname' }
    })
    return {
        status: 200,
        data: ret
    }
})

// get请求：模拟分页数据
module.exports = Mock.mock('/list', 'get', (options) => {
    // 接受参数：是JSON格式，需要转换成对象
    const page = JSON.parse(options.body).page
    const ret = Mock.mock({
        'list|20': [{ 'id|+1': 1, name: '@cname', age: '@integer(20, 50)', }]
    })

    if (page > 3) {
        return {
            status: 200,
            data: []
        }
    }
    return {
        status: 200,
        data: ret
    }
})

// post请求，模拟注册
module.exports = Mock.mock('/add', 'post', (options) => ({
        status: 200,
        data: JSON.parse(options.body).data
    }))
