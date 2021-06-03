import axios from "axios";

export const tenantguid = "9c99f9ff-a2a1-46cf-8f14-109d63ba598f";

export const instance = axios.create({
  baseURL: "http://intravision-task.test01.intravision.ru/",
  params: {
    tenantguid: "9c99f9ff-a2a1-46cf-8f14-109d63ba598f",
  },
});
