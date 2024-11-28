import logo from "../assets/FAQ/Icon.svg"
import Question from "../component/FAQ/Question"
const FAQs:React.FC = () => {
  return (
    <section className="py-4 sm:py-8 px-3">
        <div className="max-w-[60rem] mx-auto ">
            <div className="flex flex-col items-center gap-3">
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-[2rem] text-[#1F2732] font-medium text-center">FAQ Simple</h1>
            <img src={logo} alt="FAQ`s icon" />
            </div>
            <div className="my-3 sm:my-5 md:my-10">
              <Question />
            </div>
        </div>
    </section>
  )
}

export default FAQs