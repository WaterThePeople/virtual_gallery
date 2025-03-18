import style from "./Home.module.sass";
import ThreeDScene from "components/ThreeDScene/ThreeDScene";

function Home() {
  return (
    <div className={style.container}>
        SIEMA TO JEST TEST HOME PAGE'U
        <ThreeDScene/>
    </div>
  );
}

export default Home;
