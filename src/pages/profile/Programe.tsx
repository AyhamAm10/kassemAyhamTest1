import CostumBtn from "../../component/costumeComponent/CostumBtn";

import Hero from "../../component/ProfilePages/program/Hero";
import Level from "../../component/ProfilePages/program/Level";
import ShareYourCode from "../../component/ProfilePages/program/ShareYourCode";

const Programe = () => {
  return (
    <section className="">
      <Hero />
      <div className="sm:px-16 xl:px-0">
        <div className="flex flex-wrap justify-between gap-y-6 px-4 py-6 ">
          <div className="flex items-center gap-5 justify-between">
            <div className="rounded-full flex-center p-1  border-red border-2 ">
              <span className="h-10 w-10 bg-gradient-to-r flex-center text-white text-lg from-red to-yalwe rounded-full">
                1
              </span>
            </div>
            <div className="mb-3 flex items-center gap-3 ">
              <h1 className="text-dark font-medium text-lg  sm:text-2xl md:text-3xl">
                Your Level
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M28.7534 20.8167C28.2801 24.7584 25.6984 26.3334 24.5834 27.4767C23.4668 28.6234 23.6668 28.8517 23.7418 30.5334C23.7543 30.7414 23.7241 30.9498 23.653 31.1458C23.5819 31.3417 23.4714 31.521 23.3284 31.6726C23.1853 31.8242 23.0128 31.945 22.8213 32.0274C22.6298 32.1098 22.4235 32.1521 22.2151 32.1517H17.7851C17.5768 32.1513 17.3708 32.1085 17.1795 32.0259C16.9883 31.9433 16.816 31.8226 16.6729 31.6711C16.5299 31.5197 16.4193 31.3407 16.3477 31.1451C16.2762 30.9495 16.2452 30.7413 16.2568 30.5334C16.2568 28.8834 16.4101 28.5 15.4168 27.4767C14.1501 26.21 11.1701 24.4217 11.1701 19.5034C11.1625 18.2817 11.408 17.0717 11.8913 15.9496C12.3745 14.8276 13.085 13.8178 13.9778 12.9839C14.8707 12.1501 15.9266 11.5102 17.0791 11.1047C18.2315 10.6992 19.4554 10.5368 20.6737 10.6278C21.892 10.7188 23.0783 11.0612 24.1577 11.6334C25.2371 12.2056 26.1862 12.9953 26.9453 13.9525C27.7044 14.9097 28.257 16.0139 28.5682 17.1953C28.8794 18.3767 28.9424 19.6097 28.7534 20.8167Z"
                  stroke="#E9233A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.4329 32.06V34.58C17.4329 35.2683 17.8163 35.8333 18.2879 35.8333H21.7096C22.1846 35.8333 22.5663 35.2667 22.5663 34.58V32.06M18.6996 14.4933C17.7155 14.4938 16.7719 14.885 16.0761 15.581C15.3804 16.2771 14.9896 17.2209 14.9896 18.205M32.2196 19.84H35.2763M29.1429 9.82L31.3113 7.65167M30.8096 28.3333L32.9779 30.5M19.9996 3.96167V6.43334M8.73294 7.65L10.8863 9.82M7.06628 30.5L9.21961 28.3333M7.77961 19.84H4.72461"
                  stroke="#E9233A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-5 sm:gap-8">
            <CostumBtn value="Withdraw money" />
            <button className={`rounded-md text-red  px-10 py-3 border border-red font-bold text-sm `}>History</button>
          </div>
        </div>
        <div className=" flex justify-between gap-3 flex-wrap my-4 sm:my-6 ">
          <Level title="Copy the link" id={1} bg="yalwe" desc="Share your link with your friend and earn up first" />
          <Level title="Registration" id={2} bg="red" desc="When your friends register and publish first post in the app and, you will earn additional points." />
          <Level title="Earn together" id={3} bg="yalwe" desc="Earn points together and you and your friends will get rewarded" />
        </div>
        <ShareYourCode />
       
      </div>
    </section>
  );
};

export default Programe;
