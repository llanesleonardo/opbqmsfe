import axios from "axios";

const elementsAPI = () => { 
const getElementEP = async (pathId,pathName,setLoadingElement) => {
  setLoadingElement(true);  
  try {

    
    const response = await axios.get(
      `http://localhost:3001/api/v1/${pathName}/${pathId}`
    );

 return response.data;
    } catch (error) {
      console.log(error);
    }finally{
      setLoadingElement(false);
    }
  };

  const getListEP = async (pathName,setLoadingElement) => {
  
    try {
      setLoadingElement(true);
      const response = await axios.get(`http://localhost:3001/api/v1/${pathName}`);

      if (response.status !== 200) {
        console.log("ERROR");
        return;
      }

      return response.data;
    } catch (error) {
      console.log(error);
    }finally{
      setLoadingElement(false);
    }
  };

  const deleteElementEP = async (pathId,pathName) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/v1/${pathName}/${pathId}`
      );

      if (response.status !== 200) {
        console.log("status error");
        return;
      }
 
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };


  const updateElementEP = async (pathId,pathName) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/${pathName}/${pathId}`
      );

      return response.data.projectData;
    } catch (error) {
      console.log(error);
    }
  };


return {getElementEP,getListEP,deleteElementEP,updateElementEP }
}

export default elementsAPI;
