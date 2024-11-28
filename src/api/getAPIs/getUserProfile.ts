import { UserProfile } from "../../type/reduxType";
import { axiosClaint, endPoints } from "../API__information_conect";

export const fetchProfile: () => Promise<UserProfile> = async () => {
    const res = await axiosClaint.get(endPoints.get.getUserProfile);
    if (res) {
      return res.data.data;
    }
  };