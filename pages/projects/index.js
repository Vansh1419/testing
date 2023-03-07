import Navbar from "@/components/Navbar/Navbar";
import { projectsCollectionRef } from "@/utils/firebase";
import { getDocs } from "firebase/firestore";
import React from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const allProjectPage = ({ projects }) => {
  const router = useRouter();
  console.log(projects);
  return (
    <div>
      <Navbar />
      <div>
        <h1>All Projects</h1>
        {projects.map((project) => (
          <div key={project.id} className="my-5">
            <h2 className="text-blue-400">{project.title}</h2>
            <p>{project.description}</p>
            <Button variant="outlined" onClick={() => router.push(`/projects/${project.id}`)}>
              View Project
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default allProjectPage;

export const getServerSideProps = async () => {
  const getProjects = await getDocs(projectsCollectionRef);
  const projects = getProjects.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return {
    props: {
      projects: JSON.parse(JSON.stringify(projects)),
    },
  };
};
