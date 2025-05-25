import style from "./Figure.module.sass";
import { useNavigate } from "react-router-dom";

function Figure({ item }: { item: any }) {
  const navigate = useNavigate();

  return (
    <div
      className={style.container}
      onClick={() => navigate(`/figures/${item?.id}`)}
    >
      <img
        src={
          item?.image
            ? item?.image
            : process.env.PUBLIC_URL + "/images/placeholder.png"
        }
        alt="Placeholder"
        className={style.image}
      />
      <div className={style.column_container}>
        <div className={style.title}>{item?.name}</div>
        <div className={style.text}>
          Author: <div className={style.text_important}>{item?.author}</div>
        </div>
        <div className={style.text}>
          Created in <div className={style.text_important}>{item?.date}</div>
        </div>
        <div className={style.description}>{item?.description}</div>
      </div>
    </div>
  );
}

export default Figure;
