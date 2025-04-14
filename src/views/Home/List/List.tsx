import style from "./List.module.sass";
import ListItem from "./ListItem/ListItem";

function List({ array }: { array: any[] }) {
  return (
    <div className={style.container}>
      {array.map((item, index) => (
        <ListItem item={item} key={index} />
      ))}
    </div>
  );
}

export default List;
