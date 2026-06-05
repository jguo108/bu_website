import { redirect } from "next/navigation";
import { ProjectsPage } from "@/components/pages/ProjectsPage";

export default function Page() {
  redirect("/");
  return <ProjectsPage />;
}

