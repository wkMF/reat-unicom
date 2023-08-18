import React, { forwardRef, useImperativeHandle, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { Button, Checkbox, Form, Input, Select, Row, Col, Radio, DatePicker } from 'antd';

const { Option } = Select;
const DynamicForm = (props, ref) => {
    const [form] = Form.useForm();
    useImperativeHandle(ref, () => ({
        submit: form.submit,
    }))
    // eslint-disable-next-line react/prop-types
    const { cloumn, children, fieldsValue, spanValue, formConfig } = props
    useEffect(() => {
        form.setFieldsValue({ ...fieldsValue });
    }, [fieldsValue])
    const cloumnsMap = {
        "text": (item) => (
            <Form.Item
                {...item.formItem}
                key={item.name}
            >
                <Input disabled={item.disabled || false} placeholder={item.placeholder} {...item.event} />
            </Form.Item>
        ),
        "select": (item) => (
            <Form.Item
                {...item.formItem}
                style={{ textAlign: 'left' }}
            >
                <Select placeholder={item.placeholder}>
                    {
                        (item.options || []).map((oItem, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Option key={index} value={oItem.value} {...item.event}>{oItem.key}</Option>
                        ))
                    }
                </Select>
            </Form.Item >
        ),
        'chexkBoxGroup': (item) => (
            <Form.Item {...item.formItem}>
                <Checkbox.Group {...item.event}>
                    <Row>
                        {
                            item.options.map((oItem, oIndex) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <Col span={8} key={oIndex}>
                                    <Checkbox value={oItem.value} style={{ lineHeight: '32px' }}>
                                        {oItem.key}
                                    </Checkbox>
                                </Col>
                            ))
                        }
                    </Row>
                </Checkbox.Group>
            </Form.Item>
        ),
        'radio': (item) => (
            <Form.Item {...item.formItem}>
                <Radio.Group>
                    {
                        item.options.map((oItem, oIndex) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Radio value={oItem.value} key={oIndex}> {oItem.key} </Radio>
                        ))
                    }
                </Radio.Group>
            </Form.Item>
        ),
        'date': (item) => (
            <Form.Item {...item.formItem}>
                <DatePicker {...item.event} />
            </Form.Item>
        ),
        'textArea': (item) => (
            <Form.Item {...item.formItem}>
                <Input.TextArea {...item.event} />
            </Form.Item>
        )
    }

    return (
        <>
            <Form
                name="dynamic-form"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                {...formConfig}
                form={form}
            >
                <Row gutter={24} style={{ width: '100%' }}>
                    {
                        // eslint-disable-next-line react/prop-types,array-callback-return,consistent-return
                        cloumn.map((item, index) => {
                            if (cloumnsMap[item.type]) {
                                return (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <Col span={spanValue || 8} key={index}>
                                        {cloumnsMap[item.type](item)}
                                    </Col>
                                )
                            }
                        })
                    }
                </Row>
                {children}
            </Form>
        </>
    )
}

export default forwardRef(DynamicForm)
