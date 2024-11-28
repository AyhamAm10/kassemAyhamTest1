import WorkingCart from "./WorkingCart";
import SliderLayout from "../layout/SliderLayout";

const WorkingHour: React.FC<{data: any[]}> = ({ data }) => {
  
  const today = new Date().toLocaleDateString("en-US", { weekday: 'long' }).toLowerCase();

  return (
    <section className="px-4 sm:px-6 md:px-10">
      <h1 className="text-dark font-semibold mb-2 text-xl sm:text-2xl md:text-3xl lg:text-[2rem]">
        Working Hour
      </h1>
      <SliderLayout style="flex mt-9 md:w-[90rem] sm:w-[80rem] w-[70rem] justify-between mx-auto">
        {data?.map((time) => (
          <WorkingCart
            key={time.id}
            dayName={time.day}
            start={time.start_time}
            end={time.end_time}
            active={time.day.toLowerCase() === today && time.status === "active"}
            dayOff={time.status !== "active"}
          />
        ))}
      </SliderLayout>
    </section>
  );
};

export default WorkingHour;
