import React, { useCallback } from 'react';
import { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  
    const [counter, setcounter] = useState(10);

    const incrementFather = useCallback(
      () => {
        setcounter((value) => value +1);
      },
      [],
    );
    

    /*const incrementFather = () => {
        setcounter(counter +1);
    }*/

  
    return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr/>

        <ShowIncrement increment={incrementFather} />
    </>
  )
}
