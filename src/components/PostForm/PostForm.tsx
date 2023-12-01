import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

interface PostFormProps {
  data?: { title?: string; description?: string };
  submit: (post: { title: string; description: string }) => void;
}

const PostForm: React.FC<PostFormProps> = ({ data, submit }) => {
  const [formData, setFormData] = useState({ title: '', description: '' });

  useEffect(() => {
    if (data) {
      setFormData({
        title: data.title || '',
        description: data.description || '',
      });
    }
  }, [data]);

  const valueChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    submit({ ...formData });
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={formData.title}
          onChange={valueChanged}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          placeholder="Text"
          style={{ height: '300px' }}
          value={formData.description}
          onChange={valueChanged}
        />
      </FormGroup>
      <Button>{data ? 'Update Post' : 'Add Post'}</Button>
    </Form>
  );
};

export default PostForm;