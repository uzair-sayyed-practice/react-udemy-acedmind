import Button from "./UI/Button";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  console.log(projects, "from projectsidebar");
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 m:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your Projects
      </h2>
      <div>
        <Button
          className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'
          onClick={onStartAddProject}
        >
          + Add Project
        </Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-300";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.enteredTitle}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
