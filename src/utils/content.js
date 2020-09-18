import { fetchLocalData } from "./localData";


export default async function getContent() {
  const data = await fetchLocalData();
  return data
}
