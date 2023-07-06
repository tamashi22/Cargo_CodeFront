import { privateApi } from "@/utils/axios.config";
export const createCarrierApi = async (data) => {
  const response = await privateApi.post("users/carrier/", data);
  return response.data;
};

export const createShipperApi = async (data) => {
  const response = await privateApi.post("users/shipper/", data);
  return response.data;
};

export const createCompanyApi = async (data) => {
  const response = await privateApi.post("companies/create-company/", data);
  return response.data;
};

export const createOperatorApi = async (data) => {
  const response = await privateApi.post("users/operator/", data);
  return response.data;
};

export const loginApi = async (data) => {
  const response = await privateApi.post("auth/login/", data);
  if (response.data.access_token) {
    localStorage.setItem(
      "access_token",
      JSON.stringify(response.data.access_token)
    );
  }
  return response.data;
};
