import style from "./ListItem.module.sass";
import { useNavigate } from "react-router-dom";

function ListItem({ item }: { item: any }) {
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
        <div className={style.description}>{item?.description}</div>
      </div>
    </div>
  );
}

export default ListItem;
