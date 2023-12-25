import KnowledgeCard from "./KnowledgeCard"

const Knowledge = () => {
  return (
    <div className="container mx-auto py-[50px] h-[100vh]">
            <div className="flex justify-between">
                <div>
                    <small>You alreadey know?</small>
                    <h3 className="text-primary text-[24px] font-[700]">Useful pet knowledge</h3>
                </div>
                <button className="border-solid border-2 border-primary py-2  px-6 rounded-full text-primary">View More</button>
            </div>
            <div className="grid grid-cols-3 gap-[20px] mt-5 ">
                <KnowledgeCard/>
                <KnowledgeCard/>
                <KnowledgeCard/>
            </div>
        </div>
  )
}

export default Knowledge
