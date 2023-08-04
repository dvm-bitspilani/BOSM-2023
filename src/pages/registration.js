import React from 'react';
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
export const Head = () =>
  <>
    <title>BOSM '23 | Registration</title>
    <link rel="icon" type="image/x-icon" href="../images/icon.png" />
  </>;