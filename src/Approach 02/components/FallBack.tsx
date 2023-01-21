import Divider from "./Divider";

const FallBack = ({ errorMsg }: string) => {
  let error = <h1 className="error">{errorMsg}</h1>;
  let loading = <h1 className="fallback">Loading...</h1>;
  return (
    <div className="advice-box">
      {errorMsg ? error : loading}

      <Divider />
    </div>
  );
};

export default FallBack;
