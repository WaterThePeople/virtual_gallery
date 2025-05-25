import style from "./Home.module.sass";
import List from "./List/List";
import figures from "constants/Figures";

const figuresArray = figures.slice(0, 4);

function Home() {
  return (
    <div className={style.container}>
      <div className={style.text_container}>
        <div className={style.title}>Virtual Porcelain Gallery</div>
        <div className={style.subtitle}>
          Welcome to the virtual porcelain gallery - explore unique works of
          <br></br>
          art, view them in 3D, and learn about their history.
        </div>
      </div>
      <div className={style.figures}>
        <List array={figuresArray} />
      </div>
    </div>
  );
}

export default Home;
