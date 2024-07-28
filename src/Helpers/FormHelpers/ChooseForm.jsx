import CreateProjectForm from "../../Components/Forms/Project/CreateProjectForm";
import EditProjectForm from "../../Components/Forms/Project/EditProjectForm";
import DeleteProjectForm from "../../Components/Forms/Project/DeleteProjectForm";

export const ChooseForm = (
  element = {},
  getElement = () => {},
  pathModule,
  pathName,
  pathId,
  action,
  loading
) => {
  const ModuleForms = {
    projects: {
      create: (
        <CreateProjectForm
          title={[pathName]}
          element={{}}
          getElement={getElement}
          pathModule={pathModule}
          pathName={pathName}
          pathId={pathId}
          action={action}
          loading={loading}
        />
      ),
      edit: (
        <EditProjectForm
          title={[pathName]}
          element={element}
          getElement={getElement}
          pathModule={pathModule}
          pathName={pathName}
          pathId={pathId}
          action={action}
          loading={loading}
        />
      ),
      delete: (
       <DeleteProjectForm
          title={[pathName]}
          element={element}
          getElement={getElement}
          pathModule={pathModule}
          pathName={pathName}
          pathId={pathId}
          action={action}
          loading={loading}
        />
      ),
    },
  };

  switch (action) {
    case "create":
      return ModuleForms[pathModule].create;
    case "edit":
      return ModuleForms[pathModule].edit;
    case "delete":
      return ModuleForms[pathModule].delete;
    default:
      break;
  }
};
