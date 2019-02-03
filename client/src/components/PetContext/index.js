import React from 'react';

const PetContext = React.createContext({
  location: "77063",
  animal: " ",
  handleLocationChange() {},
  handleAnimalChange() {},
  getPets() {}
});

export const Provider = PetContext.Provider;
export const Consumer = PetContext.Consumer;