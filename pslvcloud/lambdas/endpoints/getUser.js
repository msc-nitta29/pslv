import Responses from '../common/API_Responses.js';
export async function getUserData(event) {
  console.log("event", event);
  if (!event.pathParameters || !event.pathParameters.ID) {
    return Responses._400({ message: 'missing the ID in path' })
  }
  let ID = event.pathParameters.ID;
  if (data[ID]) {
    return Responses._200(data[ID])
  }
  return Responses._400({ message: 'ID not found in data' })
}
const data = {
  1: { name: 'one' },
  2: { name: 'two' }
}