import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "TINDER_USER";

async function storeUser(user) {
    const parsedUser = JSON.stringify(user)
  const [data, error] = await wrapper(AsyncStorage.setItem, key, parsedUser);
  if (error) throw new Error(error);
}

async function getUser() {
  const [data, error] = await wrapper(AsyncStorage.getItem,key);
  if (error) throw new Error(error);
//   console.log(Object.keys(JSON.parse(data).user))
  return JSON.parse(data);
}

async function removeUser(){
    const [data, error] = await wrapper(AsyncStorage.removeItem, key);
    if (error) throw new Error(error);
    
}

async function wrapper(fnc, ...args) {
  try {
    const data = await fnc(...args);
    return [data, null];
  } catch (error) {
    console.log("🚀 ~ file: localStorage.js:14 ~ wrapper ~ error:", error);
    return [null, error];
  }
}

export default {storeUser,getUser,removeUser};
