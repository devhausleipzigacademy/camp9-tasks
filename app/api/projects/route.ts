import { PrismaClient, Project } from "@prisma/client";
import { NextResponse } from "next/server";

interface IRequest extends Request {
  json(): Promise<Project>;
}

const prisma = new PrismaClient();

export async function GET() {
  const projects = await prisma.project.findMany();
  console.log(projects);
  return NextResponse.json(projects);
}

export async function POST(request: IRequest) {
  const { name, description } = await request.json();

  const newProject = await prisma.project.create({
    data: {
      name,
      description,
    },
  });

  return NextResponse.json(
    {
      project: newProject,
    },
    {
      status: 201,
    }
  );
}
