import AddressCart from "../../component/ProfilePages/address/AddressCart";
import { useEffect, useState } from "react";
import { LatLngLiteral } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "../../component/ProfilePages/address/MapAddress";
import { useDispatch, useSelector } from "react-redux";
import { updateFieldAddress } from "../../redux/slice/addressSlice";
import {
  axiosClaint,
  endPoints,
  LongStaleTime,
} from "../../api/API__information_conect";

import Loader from "../../component/layout/Loader";
import { QueryKey, useQuery } from "@tanstack/react-query";
import DefaultAddressToggle from "../../component/ProfilePages/address/DefaultAddressToggle";
import { isNotUpdatedAddress } from "../../redux/slice/updatedAddressSlice";

const AddressPage = () => {
  const [display, setDisplay] = useState<boolean>(false);
  const [position, setPosition] = useState<LatLngLiteral | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Yjg5ODkwZi1lOWJjLTRlMzQtOTAxYS1kZjM1MjMzNTAxMmYiLCJqdGkiOiIyOGRmZWIwZGMyZjMwOTFiZTczMDJjNjNlMzdlMWY5YjRkMDVkZmZjNTcxZDYyOGUzMzgxOGRlYTkzYTMzNGI1YjQ4M2EzZTdjODVmNjk5MyIsImlhdCI6MTczMDc1OTEyOC45MTcxNzE5NTUxMDg2NDI1NzgxMjUsIm5iZiI6MTczMDc1OTEyOC45MTcxNzI5MDg3ODI5NTg5ODQzNzUsImV4cCI6MTc2MjI5NTEyOC45MTM2MjE5MDI0NjU4MjAzMTI1LCJzdWIiOiIwODkyMDM2OC1mMjY4LTRlYWItODg3Ny0wOGJiZDExOGZiOGMiLCJzY29wZXMiOltdfQ.C7b2-NztRqNHFe5hncHW9y4MBwaY4CxxmvgqpwOqCmGbBmuwzwZ7pNpIJY2CT-LqDyHMy5UBDYXnItmUBjkXVMnhoLTj5jBpovdr5_4S10VDTluk2ZUiksjthJVSLJfvgcEyBbm6S7VrpxK1mOFKvpSGzjFnmE1sKSTsvNPvIi4SklsjCBweMX29kPAezvgzK-gJifCzVbZfpO4Er_Y9LhbOvmCLaYOUtZAIoDXqnXtILIpTg5X3EIhy-olnTOniEV4N1hkYa62nEnzz8hG2hXreEuPh9XvRP777m2tRIcSkKVLWGrESsJmnRpeRpH_IV1vXArwEu70Ae7NDIBOpFKplTS5cMKck3NrdByBNr8AbXVtSKUEUv1X7w_nXnaY7HjygaKhx2-styAlZfuyixOrtjZBOoKQkSI4a1Q77f1BnrkKH2_pA1nAj8aCtafS7TZ99Jh09g7LmZAt7X62QDh9M-Jp6ctHQQAyVkKDAFaCdZEK6pOQL2PuSA-HFrtVZu2VJXLo8MSbbDlPTC3aZFHJsaIXYpWcF8k8Wpp1M7MCO6CkJ0cYTe85-XZqw37aqDAralRaeaR2c5FSOfomJC6jv_AqeK9Cksh3DkolnEqfAKZPrbLhuRZJyPCG-Mvgk2WuqQWGDjiibsRaZydZTPsUzyRIuiymOCJvRuoQ58fc"
  const chacgeTogle = () => {
    setDisplay((priv) => !priv);
  };

  const dataToPosted = useSelector((state: any) => state.addAddressSlice);
  const dispatch = useDispatch();
  const updateStore = useSelector((state:any )=> state.updatedAddress)

  useEffect(()=>{
    console.log(updateStore)
  },[updateStore])

  const handleSelectPosation = (value: string) => {
    dispatch(updateFieldAddress({ field: "label", value }));
  };

  const handleSelectCity = (value: string) => {
    dispatch(updateFieldAddress({ field: "city", value }));
  };

  useEffect(() => {
    if (position) {
      dispatch(
        updateFieldAddress({
          field: "latitude",
          value: position?.lat.toString(),
        })
      );
      dispatch(
        updateFieldAddress({
          field: "longitude",
          value: position?.lng.toString(),
        })
      );
    }
  }, [position]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
     await axiosClaint.post(
        updateStore?.isUpdate? 
        endPoints.post.UpdateAddress : endPoints.post.addAdrress,
        dataToPosted
      );
      chacgeTogle()
      refetch()
      dispatch(isNotUpdatedAddress())
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getAddress = async () => {
    const res = axiosClaint.get(endPoints.get.getAddrres);
    return res;
  };

  const { data, isLoading , refetch } = useQuery<unknown, Error, {data:any} | null, QueryKey>({
    queryKey: ["get address api  "],
    queryFn: getAddress,
    staleTime: LongStaleTime,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });


  return (
    <section className="relative   sm:px-16 xl:px-0">
      <div className="flex items-start justify-between sm:col-span-2">
        <div className="text-dark text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold">
          <h1>Addresses</h1>
          <p className="text-[#B0B0B0] text-xs md:text-sm leading-4 font-normal my-4 sm:my-7">
            View and Manage your addresses
          </p>
        </div>
        <button
          onClick={chacgeTogle}
          className="rounded-md hidden sm:block text-white px-4 py-4 bg-gradient-to-r from-red to-yalwe font-bold text-sm"
        >
          Add New Address
        </button>
      </div>
      {data && (
        <div className="flex items-center flex-wrap gap-5">
          {data.data.data.map((item:any)=>(
          <AddressCart hasBtn={true} data={item} refetch={refetch} setDisplay={setDisplay} />
          ))}
        </div>
      )}

      {
        isLoading &&
        <div className="flex-center">
          <Loader />
        </div>
      }

      {display && (
        <div className="  w-full inset-0 h-full z-[9000]  fixed md:bg-[#D9D9D9CC]  ">
          {loading ? (
            <div className="flex-center">
              <Loader />
            </div>
          ) : (
            <div className="max-h-svh overflow-y-auto custom-scroll-2 mr-1 md:max-w-[40rem] xl:max-w-[54rem] my-auto rounded-md md:mx-auto m p-6 sm:p-12 flex flex-col gap-4 sm:gap-6 bg-white">
              <div>
                <MapContainer
                  center={[24.4539, 54.3773]}
                  zoom={13}
                  className="leaflet-container"
                  style={{minHeight: '219px',borderRadius:"24px"  }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <LocationMarker setPosition={setPosition} />
                </MapContainer>
              </div>
              <form
                className="w-full flex flex-col gap-4 sm:gap-6"
                onSubmit={handleSubmit}
              >
                <select
                  onChange={(e) => handleSelectPosation(e.target.value)}
                  className="bg-[#F2F1F1] text-[#333]/40 w-full p-3 rounded-md   font-semibold text-lg sm:text-xl outline-none"
                >
                  <option value="home">Home</option>
                  <option value="home">work</option>
                  <option value="other">other</option>
                </select>
                <input
                  placeholder="Street"
                  type="text"
                  className="bg-[#F2F1F1] w-full p-3 rounded-md outline-none"
                  onChange={(e) =>
                    dispatch(
                      updateFieldAddress({
                        field: "street",
                        value: e.target.value,
                      })
                    )
                  }
                />
                <select
                  onChange={(e) => handleSelectCity(e.target.value)}
                  className="bg-[#F2F1F1] text-[#333]/40 w-full p-3 rounded-md font-semibold text-lg sm:text-xl outline-none"
                >
                  <option value="">select city</option>
                  <option value="Dubai">Dubai</option>
                </select>
                <DefaultAddressToggle />
                <div className="w-full md:w-3/4 grid md:grid-cols-7 mx-auto  gap-2 ">
                  
                  <button
                    className="bg-[#959695] col-span-3 w-full  px-10 py-2  rounded-md text-white "
                    onClick={chacgeTogle}
                  >
                    Cancel
                  </button>
                  <i></i>
                  <button
                    type="submit"
                    className="bg-[#959695] col-span-3 w-full   bg-gradient-to-r from-red to-yalwe px-10 py-2 rounded-md text-white "
                  >
                    save
                  </button>
                  
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default AddressPage;
