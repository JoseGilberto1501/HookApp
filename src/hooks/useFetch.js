import React, { useEffect, useState } from 'react';

export const useFetch = ( url ) => {
  
    const [state, setstate] = useState({
        data: null,
        isLoading: true,
        hasError:false,
        error: null,
    });
    

    useEffect(() => {
      
        getFecht();

    }, [ url ]);

    const setLoadingState = () => {
        setstate({
            data:null,
            isLoading:true,
            hasError: false,
            error: null,
        });
    }

    const getFecht = async() => {

        setLoadingState();
        
       const resp= await fetch(url);

       await new Promise( resolve => setTimeout(resolve,1500));

        if( !resp.ok){
            setstate({
                data:null,
                isLoading:false,
                hasError: true,
                error: resp.statusText,
            });
            return;
        }



       const data = await resp.json();

      setstate({
                data:data,
                isLoading:false,
                hasError: false,
                error: null,
      });

       //Manejo de cache

    };
    

    return {
        data : state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    }
}
