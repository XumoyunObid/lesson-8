const Product = () => {
    return (
        <div className="flex flex-col gap-[15px] p-3 rounded-[12px] bg-white shadow-lg">
            <img src="/Products/product-1.jpg" alt="" />
            <small className="text-[16px] font-[500]">Reflex Plus Adult Cat Food Salmon</small>
            <div className="flex gap-2 ">
                <span className="text-[12px] text-[#667479]">Product: Dof food</span>
                <span className="text-[12px] text-[#667479]">Size: 385 gramms</span>
            </div>
            <small className="text-[16px] font-[500]">140.000 VND</small>
        </div>
    );
};

export default Product;
