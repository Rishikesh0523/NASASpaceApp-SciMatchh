import news1 from "./assets/SCIMATCH/icons-svg/news1.svg"
import news2 from "./assets/SCIMATCH/icons-svg/news2.svg"
import news3 from "./assets/SCIMATCH/icons-svg/news3.svg"
import news4 from "./assets/SCIMATCH/icons-svg/news4.svg"
import news5 from "./assets/SCIMATCH/icons-svg/news5.svg"
import news6 from "./assets/SCIMATCH/icons-svg/news6.svg"

const News = () => {
    return (
        <div className="bg-backgroundColor h-screen">
            <h1 className="text-[3rem] font-bold text-center p-6">Trending News</h1>
            <div className="flex">
                <div className="w-2/12"></div>
                <div className="w-8/12 flex bg-white rounded-3xl p-24 justify-between mx-12">
                    <div>
                        <img className="w-full rounded-3xl mb-12" src={news1} alt="" />
                        <img className="w-full rounded-3xl" src={news2} alt="" />
                    </div>
                    <div>
                        <img className="w-full rounded-3xl mb-12" src={news3} alt="" />
                        <img className="w-full rounded-3xl" src={news4} alt="" />
                    </div>
                    <div>
                        <img className="w-full rounded-3xl mb-12" src={news5} alt="" />
                        <img className="w-full rounded-3xl" src={news6} alt="" />
                    </div>
                </div>
                <div className="w-2/12 bg-white rounded-3xl p-12">
                    <br />
                    <h1 className="text-3xl font-bold text-center">Read about new Science Updates</h1>
                    <br />
                    <p className="text-center">Explore the frontiers of Science with Our News Hub. Get In-Depth Coverage of the Latest Scientific Breakthroughs, Discoveries, and Developments Shaping Our World Today.</p>
                </div>
            </div>
        </div>
    )
}

export default News