import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getAllRoles() {
  const file = path.join(contentDirectory, "experience.md");

  const fileContents = fs.readFileSync(file, "utf8");

  const matterResult = matter(fileContents);

  return {
    ...matterResult.data,
  };
}