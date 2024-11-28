import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfile } from '../../../redux/slice/userProfileSlice';
import { UserProfile } from '../../../type/reduxType';
import { useTranslation } from 'react-i18next';

type WorkDay = {
  isActive: boolean;
  start: string;
  end: string;
};

type WorkDays = {
  [key: string]: WorkDay;
};

const WorkHoursForm: React.FC = () => {
  const [days, setDays] = useState<WorkDays>({
    monday: { isActive: false, start: '', end: '' },
    tuesday: { isActive: false, start: '', end: '' },
    wednesday: { isActive: false, start: '', end: '' },
    thursday: { isActive: false, start: '', end: '' },
    friday: { isActive: false, start: '', end: '' },
    saturday: { isActive: false, start: '', end: '' },
    sunday: { isActive: false, start: '', end: '' },
  });

  const dispatch = useDispatch();
  const userData: UserProfile = useSelector((state: any) => state.userProfileSlice);
  const { t } = useTranslation();

  // Effect to initialize the form state with data from redux
  useEffect(() => {
    if (userData.working_hours && userData.working_hours.length > 0) {
      const updatedDays: WorkDays = { ...days };
      userData.working_hours.forEach((workHour) => {
        updatedDays[workHour.day] = {
          isActive: workHour.status === 'active',
          start: workHour.start_time || '',
          end: workHour.end_time || '',
        };
      });
      setDays(updatedDays);
    }
  }, [userData.working_hours]); // Re-run the effect when the working_hours data changes

  // Handle changes to start or end time for a given day
  const handleChange = (
    day: keyof WorkDays,
    field: 'start' | 'end',
    value: string
  ): void => {
    setDays((prevState) => {
      const updatedDays = {
        ...prevState,
        [day]: {
          ...prevState[day],
          [field]: value,
        },
      };

      // Dispatch action to update the store with the new working hours
      const workingHours = Object.keys(updatedDays).map((dayKey) => ({
        id: `${dayKey}-${Math.random().toString(36).substring(2, 9)}`, // Generate unique ID for each entry
        day: dayKey as 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday',
        start_time: updatedDays[dayKey as keyof WorkDays].start,
        end_time: updatedDays[dayKey as keyof WorkDays].end,
        status: updatedDays[dayKey as keyof WorkDays].isActive ? 'active' : 'inactive',
      }));

      dispatch(setUserProfile({ ...userData, working_hours: workingHours }));
      console.log({ ...userData, working_hours: workingHours });

      return updatedDays;
    });
  };

  // Handle checkbox toggle for each day
  const handleCheckboxChange = (day: keyof WorkDays): void => {
    setDays((prevState) => {
      const updatedDays = {
        ...prevState,
        [day]: {
          ...prevState[day],
          isActive: !prevState[day].isActive,
        },
      };

      // Dispatch action to update the store with the new working hours after the checkbox toggle
      const workingHours = Object.keys(updatedDays).map((dayKey) => ({
        id: `${dayKey}-${Math.random().toString(36).substring(2, 9)}`, // Generate unique ID for each entry
        day: dayKey as 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday',
        start_time: updatedDays[dayKey as keyof WorkDays].start,
        end_time: updatedDays[dayKey as keyof WorkDays].end,
        status: updatedDays[dayKey as keyof WorkDays].isActive ? 'active' : 'inactive',
      }));

      dispatch(setUserProfile({ ...userData, working_hours: workingHours }));
      console.log({ ...userData, working_hours: workingHours });

      return updatedDays;
    });
  };

  return (
    <form className="p-6 mx-auto py-5 ">
      <h2 className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold "> {t("selectTime")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Object.keys(days).map((day) => (
          <div key={day} className="flex items-center flex-col gap-3 justify-between p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-4">
              <label htmlFor={day} className="text-lg text-dark capitalize">
                {day}
              </label>
              <input
                type="checkbox"
                id={`${day}-checkbox`}
                checked={days[day as keyof WorkDays].isActive}
                onChange={() => handleCheckboxChange(day as keyof WorkDays)}
                className="h-5 w-5 text-dark opacity-80"
              />
            </div>

            {days[day as keyof WorkDays].isActive && (
              <div className="flex space-x-4">
                <input
                  type="time"
                  value={days[day as keyof WorkDays].start}
                  onChange={(e) =>
                    handleChange(day as keyof WorkDays, 'start', e.target.value)
                  }
                  disabled={!days[day as keyof WorkDays].isActive}
                  className="p-2 rounded-md"
                />
                <span>-</span>
                <input
                  type="time"
                  value={days[day as keyof WorkDays].end}
                  onChange={(e) =>
                    handleChange(day as keyof WorkDays, 'end', e.target.value)
                  }
                  disabled={!days[day as keyof WorkDays].isActive}
                  className="p-2 rounded-md"
                />
              </div>
            )}
          </div>
        ))}
      </div>

    </form>
  );
};

export default WorkHoursForm;
