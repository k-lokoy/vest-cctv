import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda'
import fetch from 'node-fetch'

export default async (
  event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  try {
    const lat   = event.queryStringParameters?.lat
    const lon   = event.queryStringParameters?.lon
    const units = event.queryStringParameters?.units

    const uri  = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units || 'metric'}&APPID=${process.env.OPEN_WEATHER_API_KEY}`
    const data = await fetch(uri).then(res => res.json())

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }

  } catch (err) {
    console.error(err)
    return {statusCode: 500}
  }
}