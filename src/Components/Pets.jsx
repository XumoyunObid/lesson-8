import Card from "./Card";

const Pets = () => {
    return (
        <div className="container mx-auto py-5 h-[100vh]">
            <div className="flex justify-between">
                <div>
                    <small>What's new?</small>
                    <h3 className="text-primary text-[24px] font-[700]">Take A Look At Some Of Our Pets</h3>
                </div>
                <button className="border-solid border-2 border-primary py-2  px-6 rounded-full text-primary">View More</button>
            </div>
            <div className="grid grid-cols-4 gap-[20px] mt-5 ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default Pets;
