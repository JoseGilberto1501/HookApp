import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'BlackHank',
        email: 'joseg93151@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) =>{

        const { name, value } = target;

        setformState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect( () => {
        //console.log('useEffect called')
    }, []);
    
    useEffect( () => {
        //console.log('formState Change')
    }, [ formState ]);

    useEffect( () => {
       // console.log('email Change')
    }, [ email ]);

    /*useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])*/
    
  return (
    <>
        <h1>Formulario Simple</h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="UserName"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        
        <input
            type="email"
            className="form-control mt-2"
            placeholder="joseg93151@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />

        {
           ( username === 'BlackHank2') && <Message/>
        }

       
    </>
  )
}


