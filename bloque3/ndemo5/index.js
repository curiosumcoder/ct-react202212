import ProductService from "./ProductService.js";

const ps = new ProductService()

try {
    const data = await ps.search('queso')

    if (data) {
        //console.log(data)
        for (const p of data) {
            //console.log(JSON.stringify(p))
            console.log(`${p.productName} ${p.unitPrice}`)        
        }    
    }

} catch (error) {
    console.error(error)
}