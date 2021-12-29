import * as React from 'react';
import { Steps } from "./Steps";

export function Ingredients({ ingredients }) {
  return (
    <div>
      {ingredients.map((ele) => <Steps content={ele} />)}
    </div>
  );
}
