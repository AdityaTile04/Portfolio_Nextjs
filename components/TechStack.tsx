import { IconCloud } from "@/components/ui/Stack";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const slugs: string[] = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "mongodb",
];

export default function IconCloudDemo() {
  return (
    <>
      <div className="py-20 pt-20" id="projects">
        <h1 className="heading text-center text-5xl font-bold">
          <span className="text-purple">Technologies </span>
          used by me
        </h1>

        <div className="relative mx-auto flex w-full max-w-2xl items-center justify-center overflow-hidden rounded-lg p-10 sm:p-20">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </>
  );
}
