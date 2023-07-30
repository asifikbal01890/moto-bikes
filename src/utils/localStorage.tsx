import Cookies from 'js-cookie';

export function setLocalStorageItem(key: string, value: string): void {
  Cookies.set(key, value, { expires: 365 }); // You can adjust the expiration date as needed
}

export function getLocalStorageItem(key: string): string | undefined {
  return Cookies.get(key);
}