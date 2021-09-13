import React from "react"
import { NextPage } from "next"
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage: NextPage = () => {
  console.log("Index")
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage
