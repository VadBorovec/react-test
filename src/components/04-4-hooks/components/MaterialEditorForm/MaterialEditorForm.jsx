import { Formik, Form, Field } from 'formik';
import { Button, Section } from 'styles/ui';

export const MaterialEditorForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Section>
      <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <label>
              Description
              <Field name="title" type="text" />
            </label>
            <br />
            <label>
              Link
              <Field name="link" type="text" />
            </label>
            <br />
            <Button type="submit" disabled={isSubmitting}>
              Add material
            </Button>
          </Form>
        )}
      </Formik>
    </Section>
  );
};
