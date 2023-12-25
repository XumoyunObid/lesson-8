import Product from "./Product"

const Products = () => {
  return (
    <div className="container mx-auto mt-[250px] py-[50px] h-[100vh]">
            <div className="flex justify-between">
                <div>
                    <small>Hard to choose right products for your pets?</small>
                    <h3 className="text-primary text-[24px] font-[700]">Our Products</h3>
                </div>
                <button className="border-solid border-2 border-primary py-2  px-6 rounded-full text-primary">View More</button>
            </div>
            <div className="grid grid-cols-4 gap-[20px] mt-5 ">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </div>
  )
}

export default Products
