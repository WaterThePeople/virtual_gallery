import style from "./List.module.sass";
import ListItem from "./ListItem/ListItem";

function List({ array }: { array: any[] }) {
  return (
    <div className={style.container}>
      {array.map((item, index) => (
        <div className={style.container_item} key={index}>
          <ListItem item={item} />
        </div>
      ))}
    </div>
  );
}

export default List;
