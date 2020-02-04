import React, { useState } from "react";
import withProjectsMutation from "../../shared/HOC/withProjectsMutation";

const ToggleProjectForm = () => {
  const [open, setOpen] = useState(false);

  const handleFormOpen = () => setOpen(true);
  const handleFormClose = () => setOpen(false);

  if (open) {
    return <ProjectFormWithMutation onClose={handleFormClose} />;
  } else {
    return (
      <div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline"
          onClick={handleFormOpen}
        >
          Add Project
        </button>
      </div>
    );
  }
};

export default ToggleProjectForm;

const ProjectForm = ({ onClose, onSubmit, loading, error }) => {
  const [project, setProject] = useState({
    name: "",
    description: ""
  });

  const handleOnChange = e => {
    const { name, value } = e.target;
    setProject(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnSubmit = async () => {
    await onSubmit(project);
    onClose();
  };

  return (
    <div className="w-full md:w-1/2 xl:w-1/2 pt-3 px-3 md:pr-2">
      <div className="bg-white border rounded shadow p-2 flex flex-col ">
        <div className="flex flex-row mb-3">
          <input
            type="text"
            placeholder="Project Name"
            name="name"
            value={project.name}
            maxLength={25}
            onChange={handleOnChange}
            className="h-6 shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>

          <input
            type="text"
            placeholder="Project Description"
            name="description"
            value={project.description}
            maxLength={50}
            onChange={handleOnChange}
            className="h-6 shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-3"
          ></input>
        </div>

        <div className="flex items-center ">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // type="submit"
            onClick={handleOnSubmit}
          >
            Sav{loading ? "ing..." : "e"}
          </button>

          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectFormWithMutation = withProjectsMutation(ProjectForm);
