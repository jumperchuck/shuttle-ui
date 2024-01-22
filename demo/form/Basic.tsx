import React, { useRef } from 'react';
import { Button, Form, Text, Input } from '@shuttle-ui/components';

export const Title = 'Basic';

const useCount = () => {
  const countRef = useRef(-1);
  return countRef.current++;
};

const Child = () => {
  const count = useCount();
  return <Text>count: {count}</Text>;
};

export const Example = () => {
  const form = Form.useForm();
  const count = useCount();

  return (
    <Form form={form} initialValues={{ username: 'ck' }}>
      <Form.Item name="username" rules={[{ required: true }]}>
        {({ field }) => {
          return (
            <>
              <Form.Label>Username</Form.Label>
              <Input value={field.getValue()} onChangeText={field.setValue} />
              <Form.ErrorMessage />
              <Child />
            </>
          );
        }}
      </Form.Item>

      <Form.Item name={['info', 0, 'name']} rules={[{ required: true }]}>
        {({ field }) => {
          return (
            <>
              <Form.Label>Username</Form.Label>
              <Input value={field.getValue()} onChangeText={field.setValue} />
              <Form.ErrorMessage />
              <Child />
            </>
          );
        }}
      </Form.Item>

      <Form.Item name="password" shouldUpdate>
        {({ form }) => (
          <>
            <Form.Label>Password</Form.Label>
            <Input />
            <Text>{JSON.stringify(form.getFieldsValue(), null, 2)}</Text>
            <Form.ErrorMessage />
            <Child />
          </>
        )}
      </Form.Item>

      <Button
        onPress={() => {
          form.validateFields().then(console.log);
        }}
      >
        验证
      </Button>

      <Button
        onPress={() => {
          form.resetFieldsValue();
        }}
      >
        RESET
      </Button>

      <Text>count: {count}</Text>
    </Form>
  );
};
