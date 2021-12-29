import * as React from 'react';
import { Steps } from "./Steps";

export function Receipedisplay({ receipe }) {
  return (
    <div>
      {receipe.map((ele) => <Steps content={ele} />)}
    </div>
  );
}
