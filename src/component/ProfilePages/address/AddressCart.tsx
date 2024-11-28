import MapComponent from "../../productDetails/MapContainer";
import "leaflet/dist/leaflet.css";
import { axiosClaint, endPoints } from "../../../api/API__information_conect";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { isUpdatedAddress, updateAddressAction } from "../../../redux/slice/updatedAddressSlice";
import { addAddressData } from "../../../redux/slice/addressSlice";
import { useTranslation } from "react-i18next";

type props = {
  data: any;
  refetch?: (options?: RefetchOptions) => Promise<
    QueryObserverResult<
      {
        data: any;
      } | null,
      Error
    >
  >;
  hasBtn?:boolean;
  setDisplay?:Dispatch<SetStateAction<boolean>>
};
const AddressCart: React.FC<props> = ({ data, refetch , hasBtn , setDisplay}) => {
  const dispatch = useDispatch()
  const {t} = useTranslation("Renting_unit")

  const handleDeleteAddress = async () => {
    try {
      await axiosClaint.post(
        endPoints.post.deletedAddress,
        { address_id: data.id }
      );
      
    } catch (error) {
      console.log(error);
    } finally{
      if (refetch) refetch();
    }
  };
  return (
    <div className="w-[21rem] sm:w-[18rem] min-h-[21rem] py-6 px-3 rounded-md shadow-lg flex flex-col gap-6 ">
      <div className="w-full text-[1rem] text-red font-semibold flex items-center justify-between">
        <h3 className="text-dark">{data.label}</h3>{" "}
        <h3>{data.is_default ? "default" : ""}</h3>
      </div>
      <p className="text-sm font-normal text-[#B0B0B0] pr-4">
        {`${data.city} : ${data.street}`}
      </p>
      <div className=" h-[7rem] overflow-hidden">
        <MapComponent latitude={data.latitude} longitude={data.longitude} />
      </div>
      {
        hasBtn &&
      <div className="w-full flex justify-between">
        <button
         className="text-white bg-[#959695] w-[7rem] text-center py-2 rounded-md"
         onClick={()=>{
          dispatch(isUpdatedAddress())
          dispatch(updateAddressAction(data))
          dispatch(addAddressData(data))
          if(setDisplay)
          setDisplay(true)
          
        }}
         >
          {t("Edit")}
        </button>
        <button
          onClick={handleDeleteAddress}
          className="text-white bg-[#E9233A] w-[7rem] text-center py-2 rounded-md"
        >
          {t("Delete")}
        </button>
      </div>
      }
    </div>
  );
};

export default AddressCart;
