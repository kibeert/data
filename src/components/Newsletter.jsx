

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4" >
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 ">
            <h1 className="md:text-4xl sm:text-2xl text-xl font-bold py-2" >Want Tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter to stay up to date. </p>
        </div>
        <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-2" >
                <input className="p-3 w-full rounded-md font-medium" type="email" placeholder="Enter email"  />
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mt-4 my-6 mx-auto px-6 py-3 text-black" >Notify Me</button>
            </div>
            <p>We care about the protection of your data, Read our <span className="text-[#00df9a] " >Privacy Policy?</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
