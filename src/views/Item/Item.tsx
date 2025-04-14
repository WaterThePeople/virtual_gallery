import { useState, useEffect } from "react";
import style from "./Item.module.sass";
import figures from "constants/Figures";
import { useParams } from "react-router-dom";
import ThreeDScene from "components/ThreeDScene/ThreeDScene";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState<any>(null);

  useEffect(() => {
    const selectedItem = figures.find((figure) => figure.id?.toString() === id);
    setItem(selectedItem || null);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.text_container}>
        <div className={style.title}>{item?.name}</div>
        <div className={style.description}>{item?.description}</div>
      </div>
      <div className={style.figure}>
        <ThreeDScene />
      </div>
    </div>
  );
}

export default Item;
