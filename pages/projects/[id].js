import React from "react";
import { projectsCollectionRef } from "@/utils/firebase";
import { getDoc, getDocs, doc, where } from "firebase/firestore";
import Navbar from "@/components/Navbar/Navbar";

const individualProject = ({ project }) => {
  console.log(
    project.id);
  return (
    <div>
      <Navbar />
      <h2 className="text-4xl text-blue-600">{project.title}</h2>
    </div>
  );
};

export default individualProject;

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const getProject = await getDocs(
    projectsCollectionRef,
    where("id", "==", id)
  );
  const project = getProject?.docs[0].data();
  return {
    props: {
      project: JSON.parse(JSON.stringify(project)),
    },
  };
};

export const getStaticPaths = async () => {
  const getProjects = await getDocs(projectsCollectionRef);
  const projects = getProjects.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};
