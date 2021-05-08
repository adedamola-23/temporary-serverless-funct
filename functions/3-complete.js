require('dotenv').config()
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY})
  .base('appO4kMBc3Q2o9hNQ')
  .table('products')

exports.handler = async (event,context) =>{
 
  const {id} = event.queryStringParameters
  if (id) {
    try {
      const product = await airtable.retrieve(id)
      if (product.error) {
               return{
   statusCode: 404,
   body: `no product with id: ${id}`,
 }
      }
      return{
        headers: {
     'Access-Control-Allow-Origin': '*',
   },
   statusCode: 200,
   body: JSON.stringify(product),
 }
    } catch (error) {
      return {
        statusCode:500,
        body: `Server Error`
      }
    }
    
  }
 
  try {
       const {records} = await airtable.list()
       const products = records.map((product)=>{
         const {id} = product;
          const {name,image,price,desc,featured,company,stars,delivery,reviews,stock,category,colors} = product.fields
         const url = image[0].url     
         return {id,name,url,price,desc,reviews,stock,company,category,stars,featured,delivery,colors}
       });
         return{
   statusCode: 200,
   body: JSON.stringify(products),
 
 }
    } catch (error) {
        return{
   statusCode: 500,
   body: 'server'
 
 }
    }
}