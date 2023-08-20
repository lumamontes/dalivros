type StorageData =
  | null;

export function writeStorage(key: string, data: StorageData) {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {}
}

export function readStorage(key: string) {
  try {
    const data = window.localStorage.getItem(key);
    return JSON.parse(data);
  } catch (e) {}
}
