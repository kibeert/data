import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"

const Card = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white " >
        <div className="max-w-[1240px] mx-auto  grid md:grid-cols-3 gap-8 ">
            <div className="w-full shadow-xl flex  flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  ">
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={single} alt="single" />
                <h2 className="text-2xl font-bold text-center py-8 " >Single User</h2>
                <p className="text-center text-4xl  font-bold " >$129</p>
                <div className="text-center font-medium" >
                    <p className="py-2 border-b mx-8 mt-8" >500 GB storage</p>
                    <p className="py-2 border-b mx-8" >1 Granted user</p>
                    <p className="py-2 border-b mx-8" >Send upto 2 GB</p>
                </div>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mt-4 my-6 mx-auto px-6 py-3 text-black" >Start Trial</button>
            </div>
            <div className="w-full shadow-xl bg-gray-200 flex  flex-col p-4 my-8 md:m-0 rounded-lg hover:scale-105 duration-300  ">
                <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={double} alt="double" />
                <h2 className="text-2xl font-bold text-center py-8 " >Partnership</h2>
                <p className="text-center text-4xl  font-bold " >$199</p>
                <div className="text-center font-medium" >
                    <p className="py-2 border-b mx-8 mt-8" >1 TB storage</p>
                    <p className="py-2 border-b mx-8" >3 users allowed</p>
                    <p className="py-2 border-b mx-8" >Send upto 10 GB</p>
                </div>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mt-4 my-6 mx-auto px-6 py-3 text-black" >Start Trial</button>
            </div>
            <div className="w-full shadow-xl  flex  flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  ">
                <img className="w-20 mx-auto mt-[-3rem] bg-white" src={triple} alt="triple" />
                <h2 className="text-2xl font-bold text-center py-8 " >Group Account</h2>
                <p className="text-center text-4xl  font-bold " >$299</p>
                <div className="text-center font-medium" >
                    <p className="py-2 border-b mx-8 mt-8" >5 TB storage</p>
                    <p className="py-2 border-b mx-8" >10 users allowed</p>
                    <p className="py-2 border-b mx-8" >Send upto 20 GB</p>
                </div>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mt-4 my-6 mx-auto px-6 py-3 text-black" >Start Trial</button>
            </div>
        </div>
            
    </div>
  )
}

export default Card
