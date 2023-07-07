import { privateApi } from "@/utils/axios.config";
export const getUserApi = async (id) => {
  const response = await privateApi.get(`users/${id}`);
  return response.data;
};
export const createOrderApi = async (data) => {
  const response = await privateApi.post("orders/create-order", data);
  if (response.data.id) {
    localStorage.setItem("orerId", response.data.id);
  }

  return response.data;
};
export const createPaymentApi = async (data) => {
  const response = await privateApi.post(
    "stripe/create-checkout-session",
    data
  );

  return response.data;
};
export const changePaymentStatusApi = async (id) => {
  const response = await privateApi.get(`orders/pay-order/${id}`);
  return response.data;
};
