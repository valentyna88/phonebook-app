import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <Bars
      height="30"
      width="30"
      color="#2183ab"
      ariaLabel="bars-loading"
      wrapperClass={css.loader}
      visible={true}
    />
  );
};

export default Loader;
