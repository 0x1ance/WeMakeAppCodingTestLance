import React, { useState, useEffect } from 'react'
import queryGraphql from '../utils/query-graphql'
import Loader from 'react-loader-spinner'

// Components
import Head from 'next/head'
import DataCard from '../components/DataCard/data-card.component'
import Grid from '@material-ui/core/Grid'

interface ScreapedEntry {
    title: string
    points: number
    author: string
    time: string
    numOfComments: number
    url: string
}

export default function Home({ data }) {
    const [displayData, setDisplayData] = useState([])

    useEffect(() => {
        setDisplayData(data.sort((a, b) => b.numOfComments - a.numOfComments))
    }, [data])
    return (
        <div>
            <Head>
                <title>Lance's Work</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div
                className="home-banner text-center bg-image rounded"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521247205284-f4f3c95fdb5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=80')",
                    height: '65vh',
                }}
            >
                <div className="mask rounded d-flex align-items-center">
                    <div className="container-lg py-5">
                        <div className="text-white d-flex flex-column justify-content-start align-items-start">
                            <h4 className="h3 font-weight-bold mb-5">
                                WeMakeApp Coding Test - Lance Tsang
                            </h4>
                            <div className="h4 font-weight-bold">
                                Requirements:
                            </div>
                            <p className="h5 font-weight-light text-wrap">
                                <small>
                                    1. Build a function to source the content
                                    with Puppeteer
                                </small>
                            </p>
                            <p className="h5 font-weight-light text-wrap">
                                <small>
                                    2. Use GraphQL to serve the extracted
                                    content
                                </small>
                            </p>
                            <p className="h5 font-weight-light text-wrap">
                                <small>
                                    3. Serve the sorted data to the UI layer by
                                    the comment counts descendingly
                                </small>
                            </p>
                            <p className="h5 font-weight-light text-wrap">
                                <small>
                                    4. Display the data as a grid view with
                                    Material UI's card
                                </small>
                            </p>
                            <p className="h5 font-weight-light text-wrap">
                                <small>
                                    5. Support Responsive Design , allowing more
                                    items to be displayed with wider screen
                                    width
                                </small>
                            </p>
                            <p className="h5 font-weight-light text-wrap">
                                <small>
                                    6. Each item card should contain the
                                    following meta: title , points , author ,
                                    time , number of comments , and the link to
                                    external site
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-lg d-flex py-4">
                <Grid container spacing={3} alignItems="stretch">
                    {displayData ? (
                        displayData.map(
                            (
                                el: ScreapedEntry,
                                idx: React.Key | null | undefined
                            ) => (
                                <Grid item xs={12} sm={6} lg={4} key={idx}>
                                    <DataCard entry={el} />
                                </Grid>
                            )
                        )
                    ) : (
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            timeout={3000} //3 secs
                        />
                    )}
                </Grid>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const { data } = await queryGraphql(`
    query {
      data {
        title
        points
        author
        time
        numOfComments
        url
      }
    }
  `)
    return { props: { data } }
}
