// import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import Button from '../ui/Button';
import './ProductReviewForm.scss';

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const products = ['Sweater', 'Keyboard', 'Sofa', 'Freezer'];

const validationSchema = Yup.object({
  product: Yup.string().required('Please select a product').oneOf(products),
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  title: Yup.string().required(),
  review: Yup.string().required(),
  rating: Yup.number().min(1).max(10).required(),
  date: Yup.date().default(() => new Date()),
  wouldRecommend: Yup.boolean().default(false),
});

const initialValues = {
  name: '',
  email: '',
  title: '',
  review: '',
  rating: '',
  date: new Date(),
  wouldRecommend: false,
  product: '',
};

export const ProductReviewForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="Form" autoComplete="off">
        <div>
          <label className="Form__label" htmlFor="name">
            Full name
          </label>
          <div>
            <Field
              className="Form__input"
              name="name"
              type="text"
              placeholder="Full name"
            />
            <FormError className="Form__text" name="name" />
          </div>
        </div>
        <div>
          <label className="Form__label" htmlFor="email">
            Email address
          </label>
          <div>
            <Field
              className="Form__input"
              name="email"
              type="text"
              placeholder="Email address"
            />
            <FormError className="Form__text" name="email" />
          </div>
        </div>
        <div>
          <label className="Form__label" htmlFor="product">
            Product
          </label>
          <div>
            <Field className="Form__input" name="product" as="select">
              <option value="">Select a product</option>
              {products.map((product, idx) => (
                <option value={product} key={idx}>
                  {product}
                </option>
              ))}
            </Field>
            <FormError className="Form__text" name="product" />
          </div>
        </div>
        <div>
          <label className="Form__label" htmlFor="title">
            Title
          </label>
          <div>
            <Field
              className="Form__input"
              name="title"
              type="text"
              placeholder="Title"
            />
            <FormError className="Form__text" name="title" />
          </div>
        </div>
        <div>
          <label className="Form__label" htmlFor="review">
            Review
          </label>
          <div>
            <Field
              className="Form__input"
              name="review"
              as="textarea"
              placeholder="Review"
            />
            <FormError className="Form__text" name="review" />
          </div>
        </div>
        <div>
          <label className="Form__label" htmlFor="rating">
            Rating
          </label>
          <div>
            <Field
              className="Form__input"
              name="rating"
              type="number"
              placeholder="Rating"
            />
            <FormError className="Form__text" name="rating" />
          </div>
        </div>
        <div>
          <div>
            <label className="Form__label" htmlFor="wouldRecommend">
              <Field
                className="Form__checkbox"
                name="wouldRecommend"
                type="checkbox"
              />
              Would recommend
            </label>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
