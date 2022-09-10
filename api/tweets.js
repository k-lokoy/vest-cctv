import express from 'express'
import fetch from 'node-fetch'

const router = new express.Router()

router.get('/', async function(req, res) {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`
      }
    }

    const author = await fetch(`https://api.twitter.com/2/users/by/username/${req.query.handle}`, options).then(res => res.json())
    if (author.errors) return res.sendStatus(404)

    const data = await fetch(`https://api.twitter.com/2/users/${author.data.id}/tweets?tweet.fields=created_at&exclude=retweets,replies`, options).then(res => res.json())

    res.send(data.data.map(tweet => ({
      id: tweet.id,
      text: tweet.text,
      time: (new Date(tweet.created_at)).valueOf(),
      type: 12,
      url: `https://twitter.com/${author.data.username}/status/${tweet.id}`,
      author: author.data
    })))

  } catch(err) {
    console.error(err)
    res.sendStatus(500)
  }
})
 export default router