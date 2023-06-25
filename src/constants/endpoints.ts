export const baseURL = "https://gateway.marvel.com:443/v1/public/";
export const hash = "0532300424042fe6b5e27b89a1f9d64a";
export const apiKey = "50abaa0671c478cdda8bee88f7b14dc9";

export const searchCharacterID = (value: string) =>
  `/characters/${value}?ts=1&apikey=${apiKey}&hash=${hash}`;

export const searchCharacter = (condition: boolean, value: string) =>
  condition
    ? `/characters?nameStartsWith=${value}&ts=1&apikey=${apiKey}&hash=${hash}`
    : `/characters?ts=1&apikey=${apiKey}&hash=${hash}`;
