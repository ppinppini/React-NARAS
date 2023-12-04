import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSearchResults } from "../api";
import style from "./Search.module.css";
import Searchbar from "../components/Serchbar";

import CountryList from "../components/CountryList";

export default function Search() {
  //쿼리 스트링 이란? --> URL의 뒤에 입력 데이터를 함께 제공하는 가장 단순한 데이터 전달 방법
  const [searchPharams, setSearchPharams] = useSearchParams();
  const q = searchPharams.get("q");

  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setCountries(data);
  };

  useEffect(() => {
    setInitData();
  }, [q]);

  return (
    <div className={style.container}>
      <Searchbar q={q}></Searchbar>
      <div>
        <b>{q}</b> 검색결과
      </div>
      <CountryList countries={countries}></CountryList>
    </div>
  );
}
