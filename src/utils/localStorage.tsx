export function setLocalStorageData(key:any, data:any) {
  try {
    const dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
  } catch (error) {
    console.error('Error setting data in local storage:', error);
  }
}

export function getLocalStorageData(key:any) {
  try {
    const dataString = localStorage.getItem(key);
    if (dataString) {
      return JSON.parse(dataString);
    }
  } catch (error) {
    console.error('Error getting data from local storage:', error);
  }
  return null;
}