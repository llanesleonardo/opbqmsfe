import React, { useContext, useEffect, useCallback } from "react";
import RoundedButton from "../Buttons/RoundedButton";
import { ChooseContext } from "../../Helpers/ContextHelpers/ChooseContext";
import PulseLoader from "react-spinners/PulseLoader";


export default function Table({ title, handleClick }) {

  const { list, element, getList, getElement, deleteElement, loadingElement } =
    useContext(ChooseContext(title[1]));

  const setValues = useCallback(async () => {
    await getList(title[0]);
  }, [getList]);

  useEffect(() => {
    setValues();
  }, [title[0]]);

  return (
    <div className="mx-5 w-[95%] overflow-x-auto pb-[300px] bg-white rounded">
      {loadingElement  ? (
                        <div className='my-10'>
                        <PulseLoader
                         color={"#fff"}
                         loading={loadingElement}
                         size={20}
                         aria-label="Loading Spinner"
                         data-testid="loader"
                       />
                       </div>
      ) : (
        <table className="w-[100%] bg-white">
          <thead>
            <tr>
              {list?.columns?.map((column) => (
                <th
                  key={column?.accessor}
                  className="py-2 px-4 border-b-2 border-gray-300 text-left leading-tight text-sm"
                >
                  {column?.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list?.projects?.map((element) => {
              return (
                <tr key={`row-${element?.id}`}>
                  {list?.columns?.map((column,index) => {
                    /* const statusColor =
          element[column.accesor] === "status1"
          ? "bg-slate-200 py-1 px-2 rounded"
          : "bg-green-200 py-1 px-2 rounded";*/
                    return (
                      <React.Fragment key={`cell-${element.id}-${index}`}>
                        {index !== list?.columns?.length - 1 ? (
                          <td
                          className="py-2 px-4 border-b border-gray-200 text-sm"
                        >
                          {element[column?.accessor]}
                        </td>
                        ) : (
                          <td className="py-2 px-4 border-b border-gray-200">
                            <div className="flex flex-row gap-5 flex-nowrap">
                              <RoundedButton
                                buttonColor="bg-sky-700"
                                buttonTextColor="text-white"
                                linkContent={`View`}
                                link={`/app/${title[1]}/${title[0]}/${element?.id}`}
                                action={`navigate`}
                                pathId={element?.id}
                                handleClick={handleClick}
                              />
                              <RoundedButton
                                buttonColor="bg-sky-700"
                                buttonTextColor="text-white"
                                linkContent={`Edit`}
                                link={`/app/${title[1]}/${title[0]}/${element?.id}/edit`}
                                action={`navigate`}
                                pathId={element?.id}
                                handleClick={handleClick}
                              />
                              <RoundedButton
                                buttonColor="bg-red-700"
                                buttonTextColor="text-white"
                                linkContent={`Delete`}
                                link={`/app/${title[1]}/${title[0]}/${element?.id}/delete`}
                                action={`navigate`}
                                pathId={element?.id}
                                handleClick={handleClick}
                              />
                            </div>
                          </td>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
