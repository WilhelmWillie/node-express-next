import React, { Component } from 'react'

import Header from '../components/Header'

import Head from 'next/head'

class Link extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Link ID: {this.props.url.query.id}</title>
        </Head>

        <Header />
        <h2>Link ID: {this.props.url.query.id}</h2>
      </div>
    );
  }
}

export default Link
