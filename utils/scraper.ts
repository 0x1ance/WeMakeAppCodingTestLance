import puppeteer from 'puppeteer'

const scrapedData = (async function scrape() {
    let targetUrl = 'https://news.ycombinator.com/news'

    let browser = await puppeteer.launch({ headless: true })
    let page = await browser.newPage()

    await page.goto(targetUrl, { waitUntil: 'networkidle2' })

    const scraped = await page.evaluate(() => {
        let result = []

        let ids = Array.from(
            document.querySelectorAll('.itemlist > tbody > .athing'),
            (element) => element.id
        )

        // get title , points , author , time , number of comments , and the link to external site
        for (let id of ids) {
            const title =
                document.getElementById(id)?.children[2].children[0].innerHTML
            const pointsString =
                document.getElementById(id)?.nextElementSibling?.children[1]
                    ?.children[0]?.innerHTML
            const author =
                document.getElementById(id)?.nextElementSibling?.children[1]
                    ?.children[1]?.innerHTML
            const time =
                document.getElementById(id)?.nextElementSibling?.children[1]
                    ?.children[2]?.textContent
            const commentString =
                document.getElementById(id)?.nextElementSibling?.children[1]
                    ?.children[5]?.textContent

            let points: number = 0
            if (pointsString) {
                points = parseInt(pointsString.split(' ')[0])
            }

            let numOfComments: number = 0
            if (commentString) {
                numOfComments =
                    commentString === 'discuss'
                        ? 0
                        : parseInt(commentString?.split(' ')[0])
            }

            const url = document
                .getElementById(id)
                ?.children[2].children[0].getAttribute('href')

            let entry = {
                id,
                title,
                points,
                author,
                time,
                numOfComments,
                url,
            }

            result.push(entry)
        }

        return result
    })

    await browser.close()

    return scraped
})()

export default scrapedData