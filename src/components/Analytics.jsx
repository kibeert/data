import laptop from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4'">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 p-5">
        <img className="w-[500px] mx-auto my-4 " src={laptop} alt="/" />
        <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold " >DATA ANALYTICS DASHBOARD</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 " >Manage Data Analytics Centrally</h1>
            <p className="" >Get real-time insights into your business performance with our data analytics dashboard. Track key Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse optio libero incidunt. Doloremque natus voluptates quam odit et, ipsa, magni aliquid nobis ratione corrupti, numquam vitae. Corporis itaque adipisci quas. </p>
            <button className=" bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 " >Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
