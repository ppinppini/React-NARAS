import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Searchbar.module.css";

export default function Searchbar() {
  const [search, setSearch] = useState();
  const nav = useNavigate();
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onClickSearch = () => {
    if (search !=="" || "" ) {
      nav(`/search?q=${search}`);
    }
  };

  const onKeyDown =(e)=>{
    if(e.keyCode == 13){
        
            onClickSearch();
        
    }

  }

  return (
    <div className={style.container}>
      <input
        value={search || ""}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요..."
        onKeyDown={onKeyDown}
      ></input>
      <button onClick={onClickSearch}>검색</button>
    </div>
  );
}
