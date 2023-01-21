import { useQuery } from "react-query";

import getAdvice from "../utilities/getAdviceAPI";
import AdviceData from "./AdviceData";
import Button from "./Button";
import Divider from "./Divider";
import FallBack from "./FallBack";
import Footer from "./Footer";

const AdviceBox = () => {
  const { data, refetch, isError, isLoading, error } = useQuery("advice", () =>
    getAdvice()
  );

  // On the left side, the parameters are -
  // - "data" where fetched data will be stored
  // - "refetch" will work when retriving data by clicking,
  // - "isError" checks if there is an error,
  // - "isLoading" is basically the data is loading,
  // - "error" is the error

  // On the right side, The first parameter in useQuery is for caching, second parameter is a fetch function.

  console.log(data);

  let errorMessage: string = "Oops! Something Wrong!!!";

  if (isError) {
    return <FallBack errorMsg={errorMessage} />;
    // return <h1 className="text-white">{error.message}</h1>
  }

  if (isLoading) {
    return <FallBack />;
  }

  return (
    <div className="advice-box">
      {data && (
        <>
          <AdviceData dataID={data.id} dataAdvice={data.advice} />
          <Divider />
          <Button />
          <Footer />
        </>
      )}
    </div>
  );
};

export default AdviceBox;
