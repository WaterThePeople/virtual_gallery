import style from "./FiguresList.module.sass";
import figures from "constants/Figures";
import Figure from "./Figure/Figure";

function FiguresList() {
  return (
    <div className={style.container}>
      <div className={style.text_container}>
        <div className={style.title}>Porcelain Figures</div>
        <div className={style.subtitle}>
          The list of Porcelain Figures on our site
        </div>
      </div>
      <div className={style.list}>
        {figures.map((item, index) => (
          <Figure item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default FiguresList;
