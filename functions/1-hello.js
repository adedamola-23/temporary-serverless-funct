// domain/.netlify/functions/1-hello
// const person = {name: 'john', age:'20', url:'https://www.facebook.com'}
exports.handler = async (event,context) =>{
 return{
   statusCode: 200,
   body: 'Our First Netlify Functions Example',
 }
}