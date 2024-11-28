import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/category/mynaui_search.svg";
import useDebounce from "../../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { addAttribute } from "../../redux/slice/searchApiSlice";
import { useTranslation } from "react-i18next";

const Search: React.FC = () => {
  const [inputActive, setInputActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const debouncedSearchTerm = useDebounce(inputValue, 500);
  const dispatch = useDispatch();
  const {t} = useTranslation()

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Fetch results for:", debouncedSearchTerm);
      dispatch(addAttribute({key_words: debouncedSearchTerm}))
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="relative ">
      <img
        src={searchIcon}
        alt="search icon "
        className={`${
          !inputActive
            ? "absolute top-1/2 w-3 md:w-5 translate-y-[-50%] left-3"
            : "hidden"
        }`}
      />
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => {
          setInputActive(true);
        }}
        onBlur={() => {
          setInputActive(false);
        }}
        type="text"
        className="rounded-md w-full placeholder:text-[#B4B4B4] text-sm sm:text-lg md:text-xl lg:text-2xl bg-white px-10 py-4"
        placeholder={`${inputActive ? "" : t("search")}`}
      />
    </div>
  );
};

export default Search;
