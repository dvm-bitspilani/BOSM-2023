import * as React from "react"
import Layout from "../Components/Layout";

const IndexPage = () => {
  return (
    <Layout navbar={true} content={
      <main>
        <p>BOSM 23</p>
      </main>}
    />
  )
}

export default IndexPage;

export const Head = () => <title>BOSM 2023</title>
