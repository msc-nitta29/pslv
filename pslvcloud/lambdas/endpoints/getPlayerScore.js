import Responses from '../common/API_Responses.js';
const tableName = process.env.DYNAMODB_CUSTOMER_TABLE;
const Dynamo = require('../common/Dynamo.js')
export async function getPlayerData(event) {
  console.log("event", event);
  if (!event.pathParameters || !event.pathParameters.ID) {
    return Responses._400({ message: 'missing the ID in path' })
  }
  let ID = event.pathParameters.ID;
    const user = await Dynamo.get(ID,tableName).catch(err=>{
        console.log('error in Dynamo Get',err);
        return null;
    })
    if(!user){
        return Responses._400({message: 'Failed to get user with ID'});
    }
    return Responses._200({user});
}