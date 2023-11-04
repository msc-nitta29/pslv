// Step 1: Read Event
// Event - {"id" : 123, "dept" : "IT"}
// Step 2: Get details from API and Validate
// API - https://api.abc.com/{id} - Response - {"id" : 123, "name": "john", "dept" : "IT"}
// Step 3: Store in DB with status messa
let request = require("request")
let conn = require('../conn')
let handler=async (event)=>{
    let empdetails = event.body
    let url =`https://api.abc.com/${empdetails.id}`
    let fulldata = await request({
        url:url,
        method:'get',
        data:empdetails
    })
    await conn.query("Insert into emp details (fulldata)");
    return 
}