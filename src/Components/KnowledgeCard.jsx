const KnowledgeCard = () => {
    return (
        <div>
            <div className="flex flex-col gap-[15px] p-3 rounded-[12px] bg-white shadow-lg">
                <img src="/knowledge/knowledge-1.jpg" alt="" />
                <span className="text-[12px] text-white bg-[#00A7E7] rounded-full flex px-1  w-[90px]">Pet Knowledge</span>
                <small className="text-[16px] font-[500]">
                    What is a Pomeranian? How to Identify Pomeranian Dogs
                </small>

                <span className="text-[12px] text-[#667479]">
                The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.
                </span>
            </div>
        </div>
    );
};

export default KnowledgeCard;
