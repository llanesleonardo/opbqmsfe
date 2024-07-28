import React, { createContext, useState, useEffect,useCallback } from 'react';
import axios from "axios"

const UserContext = createContext();


const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user,setUser] = useState([]);
    

    const getUser = useCallback(async() =>{
      try {
        const response = await axios.get('http://localhost:3001/api/v1/user');

        if (response.status !== 200) {
          console.log('ERROR'); 
          return;
        }
        console.log(response.data);
        setUser(response.data[0]);

      } catch (error) {
        console.log(error);
      }
  },[]);

    useEffect(()=>{
      getUser();
    },[setUser]);


return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };