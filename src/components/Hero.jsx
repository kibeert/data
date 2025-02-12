import { ReactTyped} from "react-typed"

const Hero = () => {
  return (
    <div className="text-white" >
      <div className="max-w-[1240px] mt-[100px] mb-[100px]  w-full h-full mx-auto text-center flex flex-col p-5  ">
        <p className="text-[#00df9a] font-bold p-2" >GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-5xl sm:text-5xl text-3xl font-bold md:py-6 " >Grow with data.</h1>
        <div className="flex justify-center items-center py-4 ">
            <p className="md:text-4xl sm:text-2xl text-3xl font-bold" >Fast, Flexible financing for  </p>
            <ReactTyped  className="md:text-4xl sm:text-sm text-xl font-bold md:pl-4 pl-2" strings={["BTC", "BTB", "SAAS"]} typeSpeed={40} backSpeed={50} loop ></ReactTyped>
        </div>
        <p className="md:text-2xl text-xl font-bold  text-gray-500 " >Monitor your data analytics to increase revenue for BTB, BTC, & SAAS platforms</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black" >Get Started</button>
      </div>
    </div>
  )
}

export default Hero
