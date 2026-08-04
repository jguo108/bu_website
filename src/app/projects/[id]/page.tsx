import { ProjectDetailPage } from "@/components/pages/ProjectDetailPage";
import projectsData from "../../../../projects_data.json";

export function generateStaticParams() {
  return projectsData.map((p) => ({
    id: p.id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <ProjectDetailPage id={id} />;
}
