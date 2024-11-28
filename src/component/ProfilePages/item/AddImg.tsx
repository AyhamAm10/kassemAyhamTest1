import { useEffect, useState } from "react";
import CustomFileUploader from "../../costumeComponent/CustomFileUploader";
import { useDispatch } from "react-redux";
import { setFormData } from "../../../redux/slice/createProjectSlice";

const AddImg:React.FC<{setImages : any}> = ({setImages}) => {
  const [mainImg, setMainImg] = useState<File[]>([]);
  const dispatch = useDispatch();

  const handleFilesSelect = (files: File[]) => {
    setMainImg((prevFiles) => [...prevFiles, ...files]);
  };

  useEffect(() => {
    dispatch(setFormData({ images: mainImg }));
    setImages(mainImg)
  }, [mainImg]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5 md:grid-rows-1">
      {/* Main Image Upload Section */}
      <div className="py-3 sm:py-5 md:py-7 flex flex-col sm:flex-row items-center gap-5 md:gap-10">
        <CustomFileUploader onFilesSelect={handleFilesSelect} multi={false} />
        <div className="">
          {mainImg.length > 0 && (
            <img
              key={`main-img-0`}
              src={URL.createObjectURL(mainImg[0])} 
              alt={`Main uploaded file 1`}
              className="w-[15.5rem] h-[14.5rem] sm:h-[10rem] sm:w-[12rem] lg:h-[13.2rem] lg:w-[14.5rem] xl:h-[14.5rem] xl:w-[15.5rem] object-cover rounded-md mb-2"
            />
          )}
        </div>
      </div>

      {/* Slider Image Upload Section */}
      <div className="lg:col-span-2 py-3 sm:py-5 md:py-7 flex flex-col sm:flex-row items-center gap-5 md:gap-10">
        <CustomFileUploader onFilesSelect={handleFilesSelect} multi={true} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
          {mainImg.map((file, index) => (
            <img
              key={`slider-img-${index}`}
              src={URL.createObjectURL(file)}
              alt={`Slider uploaded file ${index + 1}`}
              className="w-[8rem] h-[8rem] object-cover rounded-md mb-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddImg;
