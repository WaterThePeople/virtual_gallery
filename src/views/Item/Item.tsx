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
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.text_container}>
        <div className={style.text_column}>
          <div className={style.title}>{item?.name}</div>
          <div className={style.text}>
            Author: <div className={style.text_important}>{item?.author}</div>
          </div>
          <div className={style.text}>
            Created in <div className={style.text_important}>{item?.date}</div>
          </div>
        </div>
        <div className={style.description}>{item?.description}</div>
      </div>
      <div className={style.figure}>
        <ThreeDScene
          modelName={item?.name ? item?.name : "empty"}
          model={item?.model ? item?.model : ""}
          download={item?.download ? item?.download : ""}
          scale={item?.scale ? item?.scale : 10}
        />
      </div>
    </div>
  );
}

export default Item;
