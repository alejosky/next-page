/**
 * One page:
 * - Banner
 * - (Flippable) image
 * - Links
 * - Contact data
 */

import Head from 'next/head'
import Layout from '../components/layout.js'

export default () => (
    <div className="main">
        <Head>  
            <title>Under construction!</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link href="../static/css/style.css" rel="stylesheet" />
            <link rel="icon" type="image/x-icon" href="../static/images/Construction_icon.png" />
        </Head>
        <Layout />
    </div>
)
