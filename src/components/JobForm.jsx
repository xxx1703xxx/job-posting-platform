import React from 'react';
import { Form, Input, Button } from 'antd';

const JobForm = ({ onSubmit }) => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        onSubmit(values);
        form.resetFields();
    };

    return (
        <Form form={form} onFinish={handleFinish} layout="vertical">
            <Form.Item label="Job Title" name="title" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Post Job
                </Button>
            </Form.Item>
        </Form>
    );
};

export default JobForm;
