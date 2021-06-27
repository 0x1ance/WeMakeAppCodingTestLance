This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Demo
Please reach the following link to preview the project: 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure:

This project is build on Typescript, React, Next.js, while data served by Graphql Micro Server scraped on https://news.ycombinator.com/news through Puppeteer.

The scraped data is in following format:
{
    title: string
    points: number
    author: string
    time: string
    numOfComments: number
    url: string
}

All the scraped data is being displayed on React using Material UI.

## Known Issues & Improvement Expected

1. Currently the scraper will scrape the data from target website everytime the GraphQL service is launched, leading to long launch time. Scraping is expected to be done in advance and data should be stored in the database in the later stage, hence to avoid repetitive workload of server.

2. Since now the scraper is only scrapping one page of target website, its hard to implement infinite scrolling while sorting the scraped data by numOfComments. After storging the data into database, this will be a direction of further improvement.
