import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    id: '12345678',
    name: 'Test user 1',
    avatar: 'ZA',
    email: 'abc@gmail.com'
  }
})

export const getAppInfo = atom({
  key: "appInfo",
  default: {
    name: 'Recoil',
    version: '1.0.0'
  }
})