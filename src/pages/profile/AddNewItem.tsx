import { useDispatch, useSelector } from "react-redux";
import AddImg from "../../component/ProfilePages/item/AddImg";
import Address from "../../component/ProfilePages/item/Address";
import RentingUnit from "../../component/ProfilePages/item/RentingUnit";
import { axiosClaint, endPoints, LongStaleTime } from "../../api/API__information_conect";
import { useEffect, useState } from "react";
import { AddNotification } from "../../utails/message";
import { useTranslation } from "react-i18next";
import { UserProfile } from "../../type/reduxType";
import { fetchProfile } from "../../api/getAPIs/getUserProfile";
import { QueryKey, useQuery } from "@tanstack/react-query";
import { setUserProfile } from "../../redux/slice/userProfileSlice";
import SubscriptionPopup from "../../component/ProfilePages/item/SubscriptionPopup";

const AddNewItem = () => {
  const [images, setImages] = useState<File[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dataToSent = useSelector((state: any) => state.productFormSlice);
  const isAgree: boolean = useSelector(
    (state: any) => state.AgreeForAddProduct
  );
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const userData: UserProfile | null = useSelector(
    (state: any) => state.userProfileSlice
  );

  const { data } = useQuery<unknown, any, UserProfile, QueryKey>({
    queryKey: ["user profile api"],
    queryFn: fetchProfile,
    staleTime: LongStaleTime,
    enabled: ()=>userData ? false : true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });

  useEffect(() => {
    if (data) dispatch(setUserProfile(data));
  }, [data]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsOpen(false)
    if (!isAgree) {
      AddNotification("error", t("please_agree"), "warning");
      return;
    }
    const formData = new FormData();
    Object.entries(dataToSent).forEach(([key, value]) => {
      if (Array.isArray(value)) return;
      const finalValue = value === null || value === undefined ? "" : value;
      formData.append(key, finalValue as any);
    });

    dataToSent.cities?.forEach((city: any, index: number) => {
      formData.append(`cities[${index}][id]`, city.id);
      formData.append(`cities[${index}][name]`, city.name);
    });

    dataToSent.images_to_update?.forEach((image: any, index: number) => {
      formData.append(`images_to_update[${index}][id]`, image.id || "");
      formData.append(`images_to_update[${index}][image]`, image.image || "");
    });

    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image);
    });

    try {
      await axiosClaint.post(endPoints.post.addProducts, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error: any) {
      console.error(error);
      AddNotification("error", error.message, "danger");
    }
  };

  return (
    <section className="sm:px-16 xl:px-0">
      <form className="px-3 sm:px-5 md:px-7" onSubmit={(e:any)=>{
        e.preventDefault();
        setIsOpen(true)
        }}>
        <AddImg setImages={setImages} />
        <RentingUnit />
        <Address />
        {isOpen && <SubscriptionPopup setIsOpen={setIsOpen} handleSubmit={handleSubmit} data={userData} />}
      </form>
    </section>
  );
};

export default AddNewItem;
