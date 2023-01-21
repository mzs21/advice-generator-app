import axios from "axios";

const URL = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  const res: AxiosResponse<any, any> = await axios.get(URL);
  return res.data.slip;
};

export default getAdvice;
