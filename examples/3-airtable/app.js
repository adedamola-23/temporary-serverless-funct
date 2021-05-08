

const result = document.querySelector('.result')

const fetchProducts = async () => {
 try {
    // const {data} = await axios.get('/api/3-airtable')
     const {data} = await axios.get('https://temporary-serverless-funct.netlify.app/api/3-complete')
    const products = data.map((product)=>{
    const {id,url,name,price} = product
    return `<a href="product.html?id=${id}" class="product">
          <img src="${url}" alt="${name}"/>
          <div class="info">
          <h5> ${name}</h5>
              <h5> ${price}</h5>
          </div>
    </a>`
    }).join('')
    result.innerHTML = products
 } catch (error) {
     result.innerHTML ='<h4> a</h4>'
 }
}

fetchProducts()