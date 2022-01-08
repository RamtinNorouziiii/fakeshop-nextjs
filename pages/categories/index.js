export const getStaticProps =  async()=>{
    const res = await fetch("https://fakestoreapi.com/products/categories")
    const data = await res.json()
    return{
        props : {cats : data}
    }
}
const Categories = ({cats}) => {
    console.log(cats)
    return ( <>
    Categories
    </> );
}
 
export default Categories;