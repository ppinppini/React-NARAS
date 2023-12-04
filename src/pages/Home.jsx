import { fetchCountries } from "../api";
import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import Searchbar from "../components/Serchbar";
import style from "./Home.module.css";
//모든 국가의 정보를 불러오는 함수

//비동기 -> fetchCountries 함수를 호출한다고 해도 url 주소가 response 변수에 담기진 않는다는 것
// 브라우저 --> 서버 에게 요청을 해도 언제 답을 줄 수 있을지 몰라서 그래서 이런 api 호출 코드는 비동기로 처리
// 그래서 변수 안에 api 를 넣고 싶으면 함수  앞에 async , axiox 앞에는 awiat 넣기 ! (이건 JS 기본 문법 !)

export default function Home() {
  const [countries, setCountries] = useState([]);

  const setInitData = async () => {
    const data = await fetchCountries();
    setCountries(data);
  };
  useEffect(() => {
    setInitData();
  }, []);
  return (
    <div className={style.container}>
      <Searchbar></Searchbar>
      <CountryList countries={countries} />
    </div>
  );
}
