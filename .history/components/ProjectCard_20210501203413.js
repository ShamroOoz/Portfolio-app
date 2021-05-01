import { useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

export default function ProjectCard({
  showDetail,
  setShowDetail,
  project: {
    name,
    image_path,
    category,
    deployed_url,
    description,
    github_url,
    key_techs,
  },
}) {
  return <div></div>;
}
