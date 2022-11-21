import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda'
import fetch from 'node-fetch'

interface Author {
  data: {
    id: string
    username: string
  }
}

interface Tweet {
  id: string
  text: string
  created_at: string
}

interface Tweets {
  data: Tweet[]
}

const isAuthor = (a: any): a is Author => (a.data)
const isTweets = (a: any): a is Tweets => (a.data)

export default async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  try {
    const init = {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`
      }
    }

    const handle = event.queryStringParameters?.handle
    const author =
      await fetch(`https://api.twitter.com/2/users/by/username/${handle}`, init)
      .then(res => res.json())
    
    if (!isAuthor(author)) return {statusCode:404}

    const tweets =
      await fetch(`https://api.twitter.com/2/users/${author.data.id}/tweets?tweet.fields=created_at&exclude=retweets,replies`, init)
        .then(res => res.json())

    if (!isTweets(tweets)) return {statusCode: 500}

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true
      },
      body: JSON.stringify(tweets.data.map(tweet => ({
        id: tweet.id,
        text: tweet.text,
        time: (new Date(tweet.created_at)).valueOf(),
        type: 12,
        url: `https://twitter.com/${author.data.username}/status/${tweet.id}`,
        author: author.data
      })))
    }
  
  } catch (err) {
    console.error(err)
    return {statusCode: 500}
  }
}