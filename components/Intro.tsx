
const Intro = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full text-black bg-white dark:bg-[#08080C] dark:text-white p-4 md:p-6">
      <div className="flex justify-center items-center ">
        <div>
          <h1 className="text-[#1EE1B3] text-3xl md:text-4xl font-bold">Introducing</h1>
          <div className="relative flex ">
            <div className="flex w-24 md:w-[11%] h-1 ">
              <div className="bg-[#1EE1B3] w-7/10"/>
              <div className="bg-[#515151] w-3/10"/>
            </div>
          </div>
          <p className="mt-4 text-sm md:text-base">
            The newly designed BEGIN will completely alter the reality of fashion, individually and commercially as we know it. A major attribute of this mirror is to provide the user with the resources of complex fashion and style that many find difficult to obtain. Its main focus will be the user’s stylistic preferences and will then provide the user with an outfit which meets their own style while simultaneously using expert knowledge to ensure an outfit of pride.
          </p>
          <p className="mt-4 text-sm md:text-base">
            Because self-presentation is such a prominent element of judgement, all kinds of people are vehemently dressing in all kinds of ways to fit certain descriptions, norms, and anything that will allow their confidence to break through the cracks of self-doubt.
          </p>
          <button className="mt-6 px-4 py-2 text-white bg-black dark:bg-white dark:text-black font-bold rounded-md hover:bg-[#1EE1B3] transition duration-700 text-sm md:text-base">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center  mb-4 md:mb-0">
        <img src="/intro.svg" alt="intro" className="w-[400px] md:w-[500px] md:h-[369px]" />
      </div>
    </section>
  )
}

export default Intro
