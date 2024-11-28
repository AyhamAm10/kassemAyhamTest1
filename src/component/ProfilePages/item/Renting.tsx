import { useQuery } from "@tanstack/react-query";
import {
  axiosClaint,
  endPoints,
  LongStaleTime,
} from "../../../api/API__information_conect";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../redux/slice/createProjectSlice";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const Renting = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation("Renting_unit")
  const getRenting = async () => {
    const res = await axiosClaint.get(endPoints.get.renting);
    return res.data;
  };

  const { data } = useQuery({
    queryKey: ["get renting"],
    queryFn: getRenting,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  const handleSelectRenting = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFormData({ renting_unit_id: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-3 sm:w-auto w-full">
      <label
        className="text-dark opacity-80 text-sm sm:text-[1rem] font-medium"
        htmlFor="Renting unit"
      >
        {t("Renting_unit")}
      </label>
      <select
        name="renting_unit_id"
        onChange={(e) => handleSelectRenting(e)}
        className="p-3 text-dark opacity-40 rounded-sm  sm:w-full bg-white lg:w-[30rem]"
        id=""
      >
        <option value="">select renting</option>
        {data?.data.map((item: any) => (
          <option key={item.id} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Renting;
