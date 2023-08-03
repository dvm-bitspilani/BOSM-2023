import React  from 'react';
import Layout from '../Components/Layout';
import Form from "../Components/Form"

const registration = () => {
  return (
    <Layout
        navbar={false}
        fixedbg={false}
        content={<Form />}
    />
  );
};

export default registration;