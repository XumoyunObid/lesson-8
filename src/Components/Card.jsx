const Card = () => {
    return (
        <div className="flex flex-col gap-[15px] p-3 rounded-[12px] bg-white shadow-lg">
            <img src="/Puppy/puppy-1.jpg" alt="" />
            <small className="text-[16px] font-[500]">MO231 - Pomeranian White</small>
            <div className="flex gap-2 ">
                <span className="text-[12px] text-[#667479]">Gene: male</span>
                <span className="text-[12px] text-[#667479]">Age: 2 months</span>
            </div>
            <small className="text-[16px] font-[500]">6.900.000 VND</small>
        </div>
    );
};

export default Card;
