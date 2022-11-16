import axios, { AxiosError, AxiosRequestConfig } from "axios";

const api_url = "https://type.fit/api/quotes";

export const getQuote = async (quote: string) => {
  try {
    const config: AxiosRequestConfig = {
      url: api_url,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      data: { quote },
    };
    const response = await axios.request(config);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.log("Error Response", axiosError.response?.data);
    } else {
      console.log("Error", error);
    }
    return {};
  }
};
