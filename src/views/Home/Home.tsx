import style from "./Home.module.sass";
import List from "./List/List";
import figures from "constants/Figures";

function Home() {
  return (
    <div className={style.container}>
      <div className={style.text_container}>
        <div className={style.title}>Porcelain Figures</div>
        <div className={style.subtitle}>
          The list of Porcelain Figures on our site
        </div>
      </div>
      <List array={figures} />
    </div>
  );
}

export default Home;
