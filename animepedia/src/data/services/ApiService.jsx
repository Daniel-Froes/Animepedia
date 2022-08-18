import axios from "axios";

const BASE_URL = "http://localhost:3001/";


export const ApiService = async (path, config) => {
  const headers = config.token
    ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.token}`,
      }
    : { "Content-Type": "application/json" };
  const conf = {
    validateStatus: (status) => status <= 511,
    method: config.method,
    data: config.body,
    headers,
  };

  const response = await axios(`${BASE_URL}${path}`, conf);
  return { status: response.status, body: response.data };
  
  
};

