import fetch from 'node-fetch'

import router from './router.js'

router.get('/api/bingreports', async function(req, res) {
  console.log(req.query)
  try {
    const data = await fetch(`http://dev.virtualearth.net/REST/v1/Traffic/Incidents/${req.query.mapArea}/true/?key=${process.env.BING_MAPS_API_KEY}`)
      .then(res => res.json())

    console.log(data)

    res.send(data.resourceSets[0].resources.map((resource) => ({
      id: resource.incidentId,
      title: resource.title,
      text: resource.description,
      time: parseInt(resource.start.match(/(\d+)/)?.[0]),
      type: resource.type,
    })))
  
  } catch(err) {
    console.error(err)
    res.sendStatus(500)
  }
})
