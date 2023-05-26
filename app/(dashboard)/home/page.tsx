import ProjectForm from "@/components/dashboard/ProjectForm";
import ProjectList from "@/components/dashboard/ProjectList";
import { PrismaClient } from "@prisma/client";
import React from "react";

const prisma = new PrismaClient();
async function getProjectData() {
  const allProjects = await prisma.project.findMany();
  return allProjects;
}

async function Home() {
  const projects = await getProjectData();

  return (
    <div>
      <h2>Project Creation:</h2>
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
}

export default Home;
