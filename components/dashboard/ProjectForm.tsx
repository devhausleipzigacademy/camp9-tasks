"use client";

import axios from "axios";
import { FormEvent, useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { Project } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function handleProjectPosts(
  projectData: Pick<Project, "name" | "description">
) {
  const { data } = await axios.post("/api/projects", projectData);
  return data;
}

function ProjectForm() {
  const { data, mutate } = useMutation({
    mutationFn: (project: Pick<Project, "name" | "description">) =>
      handleProjectPosts(project),
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });
  console.log(data);
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState({
    name: "",
    description: "",
  });
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await mutate(formState);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="py-10 w-full">
        <div className="flex mb-8 justify-between">
          <div className="pr-2">
            <div className="text-lg mb-4 ml-2 text-slate-400">Project Name</div>
            <Input
              required
              placeholder="Project Name"
              value={formState.name}
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(e) =>
                setFormState((s) => ({ ...s, name: e.target.value }))
              }
            />
          </div>
          <div className="pl-2">
            <div className="text-lg mb-4 ml-2 text-slate-400">
              Project Description
            </div>
            <Input
              required
              placeholder="Project Description"
              value={formState.description}
              className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
              onChange={(e) =>
                setFormState((s) => ({ ...s, description: e.target.value }))
              }
            />
          </div>
        </div>
        <div>
          <Button type="submit">Create Project</Button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;
