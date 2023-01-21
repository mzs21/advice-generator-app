import { useEffect, useState } from "react";
import DiceIcon from "../assets/images/icon-dice.svg";
import PatternDividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import PatternDividerMobile from "../assets/images/pattern-divider-mobile.svg";
import GithubLogo from "../assets/logos/GitHubLogo.png";
import LinkedInLogo from "../assets/logos/LinkedInLogo.png";
interface AdviceDataProps {
  id: number;
  advice: string;
}

const URL = "https://api.adviceslip.com/advice";

const AdviceBox = () => {
  const [advice, setAdvice] = useState<AdviceDataProps>({});

  console.log(advice);

  let fetchAdvice: () => Promise<void> = async () => {
    const res: Response = await fetch(URL);
    const data: Object = await res.json();

    setAdvice(data.slip);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="advice-box">
      {advice && (
        <>
          <p className="advice-no">Advice #{advice.id}</p>
          <q className="advice-text">{advice.advice}</q>
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
      )}
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
