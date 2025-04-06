import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  // Тут повинен бути власний хук для збереження і отримання даних з localStorage
  // Даний хук повинен отримувати key, defaultValue і повертати дані з localStorage,
  // якщо дані були збережені.
  // Якщо в localStorage не були збережені дані з ключем key, то хук повинен повертати defaultValue.

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const valueFromStorage = localStorage.getItem(key);
      return valueFromStorage ? JSON.parse(valueFromStorage) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage', error);
      return defaultValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error writing to localStorage', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};
