import { useDispatch } from "react-redux";
import { UserProfile } from "../../../type/reduxType";
import { setFormData } from "../../../redux/slice/createProjectSlice";

type props = {
  setIsOpen: any;
  handleSubmit: (e: any) => Promise<void>;
  data: UserProfile | null;
};

const SubscriptionPopup: React.FC<props> = ({
  setIsOpen,
  handleSubmit,
  data,
}) => {

    const dispatch = useDispatch()
    const handleSelectSubscriptionId = (id:string)=>{
        dispatch(setFormData({subscription_id: id}))
    }
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 max-w-full p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          My Subscriptions
        </h2>
        <div className="space-y-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {data?.subscriptions.map((item: any, index) => (
            <div
              key={index}
              className="p-4 border rounded-md hover:shadow-md transition flex flex-col"
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subscription"
                  className="form-radio text-red-600"
                  onChange={() => handleSelectSubscriptionId(item.id)}
                />
                <span className="font-medium text-gray-800">{item.name}</span>
              </label>
              <ul className="text-sm text-gray-600 mt-2 pl-6">
                {item.features.map((feature: string, index: number) => (
                  <li key={index}>- {feature}</li>
                ))}
              </ul>
              <p>
                <strong>Remaining Ads:</strong>{" "}
                {item.variants[0]?.remain_ad_count ?? 0}
              </p>
              <p>
                <strong>Price:</strong> ${item.total_price}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white  bg-red transition duration-200 px-4 py-2 rounded-md"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className=" text-white bg-green px-4 py-2 rounded-md hover:bg-red-700 transition"
          >
            Select A Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPopup;
