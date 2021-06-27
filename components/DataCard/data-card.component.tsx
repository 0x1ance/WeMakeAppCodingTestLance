import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        height: '100%',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
})

interface ScreapedEntryInterface {
    title: string
    points: number
    author: string
    time: string
    numOfComments: number
    url: string
}

interface DataCardProps {
    entry: ScreapedEntryInterface
}

export default function DataCard({ entry }: DataCardProps) {
    const classes = useStyles()

    // console.log('url: ', entry.url)

    return (
        <div className="h-100">
            <Box boxShadow={3} bgcolor="background.paper" height="100%">
                <Card className="h-100 d-flex flex-column justify-content-between">
                    <CardContent className="flex-grow-1 d-flex flex-column justify-content-between">
                        <div>
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                                gutterBottom
                            >
                                {entry.time}
                            </Typography>
                            <div className="h2 card-title">{entry.title}</div>
                        </div>
                        <div className="mt-3">
                            <Typography className="" color="textSecondary">
                                author: {entry.author}
                            </Typography>
                            <div className="d-flex justify-content-between h6">
                                <div>comments: {entry.numOfComments}</div>
                                <div>points: {entry.points}</div>
                            </div>
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            onClick={() => window.open(entry.url, '_blank')}
                        >
                            View Detail
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}
