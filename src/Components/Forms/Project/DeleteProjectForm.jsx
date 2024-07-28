import React,{useState} from 'react'
import RoundedButton from '../../Buttons/RoundedButton'
import { useNavigate } from 'react-router-dom';

export default function DeleteProjectForm({ title, element, deleteElement, pathModule, pathName, pathId, action, loading}) {
  
  const [deleteConfirm,setDeleteConfirm] = useState('');
  const navigate = useNavigate();
  const widthField = "w-3/4 pl-2";
  const widthFieldName = "w-1/4";
  const colorText = "text-slate-500";    
  
  
  const handleDeleteConfirm = (e) =>{
    console.log(e.target.value);
    setDeleteConfirm(e.target.value);
  };

  const handleClick = async (link,action) =>{
    if (action === 'delete') {  
      if (deleteConfirm.toUpperCase() === 'DELETE') { 
        const response = await deleteElement(pathId,pathName);
      }else{
        console.log('Tu typing no es la palabra DELETE');
        return;
      }
    }
      navigate(`${link}`);
  }

  return (
    <div className="bg-white rounded border-1 w-[90%] mx-auto py-5 px-5">
    <div className="flex flex-row flex-nowrap  justify-center items-start">
      <div className="w-[90%]">
        <div className="flex flex-row flex-nowrap justify-start items-center">
          <p className={`${widthField}`}> {JSON.stringify(element.projectData?.pname)}</p>
        </div>
        <div>
          <p className="pt-5 pb-1">Type DELETE to confirm.</p>
          <input
            id="deleteButton"
            name="deleteButton"
            type="text"
            placeholder=""
            value={deleteConfirm}
            onChange={handleDeleteConfirm}
            className="rounded bg-slate-200 py-2 px-2 w-[97%]"
            required
          />
          <div className="flex flex-row gap-5 justify-start items-center mt-5">
            <RoundedButton
              buttonColor="bg-red-700"
              buttonTextColor="text-white"
              linkContent={`Delete ${pathName}`}
              link={`/app/${pathModule}/`}
              action={`delete`}
              pathId={pathId}
              handleClick={handleClick}
            />
          <RoundedButton
              buttonColor="bg-white"
              buttonTextColor="text-sky-500"
              linkContent={`Cancel`}
              link={`/app/${pathModule}/${pathName}/${pathId}`}
              action={`navigate`}
              pathId={pathId}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
