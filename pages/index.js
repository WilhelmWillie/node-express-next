import React, { Component } from 'react'

import Header from '../components/Header'

import Link from 'next/link'
import Head from 'next/head'

class Landing extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Node-Express-Next Boilerplate</title>
        </Head>

        <Header />

        <p>
          This is a boilerplate for creating apps with Node.js, Express, and Next.js.
          Easy support for React SSR, file based routing, etc.
          Build a React app alongside your server API routes.
        </p>

        <p>
          Sample link to page w/ pretty url: <Link href='/link/test-id'><a>Test ID Link</a></Link>
        </p>
      </div>
    );
  }
}

export default Landing
