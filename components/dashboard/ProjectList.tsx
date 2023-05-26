"use client";
import { Project } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { cp } from "fs";

type Props = {
  projects: Project[];
};

async function getProjectData() {
  const { data } = await axios.get("/api/projects");
  return data;
}

function ProjectList({ projects }: Props) {
  const { data } = useQuery<Project[]>({
    queryKey: ["projects"],
    queryFn: getProjectData,
    initialData: projects,
  });

  return (
    <div>
      <h2>Project List:</h2>
      {data?.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
