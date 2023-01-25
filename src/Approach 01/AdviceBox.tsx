import { SetStateAction, useEffect, useState } from "react";
import DiceIcon from "../assets/images/icon-dice.svg";
import PatternDividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import PatternDividerMobile from "../assets/images/pattern-divider-mobile.svg";
import GithubLogo from "../assets/logos/GitHubLogo.png";
import LinkedInLogo from "../assets/logos/LinkedInLogo.png";
interface AdviceDataProps {
  slip: SlipProps;
}

interface SlipProps {
  id: number;
  advice: string;
}

const URL = "https://api.adviceslip.com/advice";

const AdviceBox = () => {
  const [advice, setAdvice] = useState<AdviceDataProps>();

  console.log(advice);

  let fetchAdvice: () => Promise<void> = async () => {
    const res: Response = await fetch(URL);
    const data: SetStateAction<AdviceDataProps | undefined> = await res.json();

    setAdvice(data);
  };

  useEffect(() => {
    fetchAdvice();
  }, []); // [] means that this effect will only run once || componentDidMount()

  return (
    <div className="advice-box">
      {advice?.slip ? (
        <>
          <p className="advice-no">Advice #{advice.slip.id}</p>
          <q className="advice-text">{advice.slip.advice}</q>
          <img
            src={PatternDividerMobile}
            alt="pattern-divider-mobile"
            className="pattern-mobile"
          />
          <img
            src={PatternDividerDesktop}
            alt="desktop-divider-mobile"
            className="pattern-desktop"
          />
          <div className="dice" onClick={fetchAdvice}>
            <img src={DiceIcon} alt="dice" />
          </div>
        </>
      ) : null}
      <footer className="footer">
        <a
          href="https://github.com/mzs21/advice-app-generator"
          title="Github Repo"
        >
          <img src={GithubLogo} alt="" className="github" />
        </a>
        <a href="https://www.linkedin.com/in/mdmzs/" title="Find me here">
          <img src={LinkedInLogo} alt="" className="linkedIn" />
        </a>
      </footer>
    </div>
  );
};

export default AdviceBox;
