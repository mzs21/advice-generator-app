import { useQuery } from "react-query";
import DiceIcon from "../../assets/images/icon-dice.svg";
import getAdvice from "../utilities/getAdviceAPI";

const Button = () => {
  const { refetch } = useQuery("advice", () => getAdvice());
  // - "refetch" will work when retriving data by clicking,

  return (
    <div className="dice" onClick={() => refetch()}>
      <img src={DiceIcon} alt="dice" />
    </div>
  );
};

export default Button;
