import PatternDividerDesktop from "../../assets/images/pattern-divider-desktop.svg";
import PatternDividerMobile from "../../assets/images/pattern-divider-mobile.svg";

const Divider = () => {
  return (
    <>
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
    </>
  );
};

export default Divider;
