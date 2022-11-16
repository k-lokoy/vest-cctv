import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda'
import fetch from 'node-fetch'

interface BingIncidents {
  resourceSets: {
    resources: {
      incidentId: string
      title: string
      description: string
      start: string
      type: string
    }[]
  }[]
}

const isBingIncidents = (a: any): a is BingIncidents => (a.resourceSets)

export const lambdaHandler = async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  try {
    const mapArea = event.queryStringParameters?.mapArea
    const data =
      await fetch(`http://dev.virtualearth.net/REST/v1/Traffic/Incidents/${mapArea}/true/?key=${process.env.BING_MAPS_API_KEY}`)
       .then(res => res.json())
    
    if (!isBingIncidents(data)) return {statusCode: 500}

    return {
      statusCode: 200,
      body: JSON.stringify(data.resourceSets[0].resources.map((resource) => ({
        id: resource.incidentId,
        title: resource.title,
        text: resource.description,
        time: parseInt(resource.start.match(/(\d+)/)?.[0] || ''),
        type: resource.type,  
      })))
    }
  
  } catch(err) {
    console.error(err)
    return {statusCode: 500}
  }
}