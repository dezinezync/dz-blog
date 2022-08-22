#!/usr/bin/env node

"use strict";

const DIR_PATH = process.argv.filter(e => e.includes("--dir")).pop()?.replace("--dir=", "").trim();
const FILE_EXTENSION = ".md"

if (!DIR_PATH || DIR_PATH.length == 0) {
	console.error("No input directory specified.\nSpecify an input directory using the --dir=/path/to/dir param");
	process.exit(1)
}

const fs = require('fs').promises;

async function isDirectory (path) {
  try {
    return (await fs.lstat(path)).isDirectory();
  }
  catch (e) {
  	// console.error(e);
    return false;
  }
}

const checkDirectory = async (dirPath = "") => {
  if (dirPath.trim().length == 0) {
    console.warn(`empty dir path, ${dirPath}, exiting early.`);
    return;
  }

  let paths = await fs.readdir(dirPath);
  paths = paths.filter(e => !e.includes(".DS_Store"));

  let filePaths = paths.filter(e => e.includes(FILE_EXTENSION));
  // console.debug(dirPath, filePaths);
  // console.debug("------");

  if (filePaths.length > 0) {
    await checkFiles(filePaths.map(e => dirPath + "/" + e));
  }

  // no other paths in the list 
  if (filePaths.length == paths) {
    return;
  }

  let subDirs = [];

  let remainingPaths = paths.filter(e => !filePaths.includes(e));

  for (let subPath of remainingPaths) {
    // console.debug(">>", dirPath, subPath);
    let isDir = await isDirectory(dirPath + "/" + subPath);
    if (isDir) {
      subDirs.push(subPath);
    }
  }

  for (let subDir of subDirs) {
    // console.debug(dirPath, subDir);
    await checkDirectory(dirPath + "/" + subDir);
  }
}

const checkFiles = async (filePaths = []) => {
  for (let filePath of filePaths) {
    await checkFile(filePath);
  }
}

const checkFile = async (filePath = "") => {
  if (filePath.trim().length == 0) {
    console.warn(`Empty file path, ignoring for ${filePath}`);
    return;
  }

  let relativePath = filePath.replace(DIR_PATH, "")

  console.log("checking file at", relativePath);

  const [_, year, month, day, filename] = relativePath.split("/");

  let newFileName = [year, month, day, filename].join("-");

  await fs.rename(filePath, DIR_PATH + "/" + newFileName);
}

const checkFileName = async (filePath = "") => {
  if (filePath.trim().length == 0) {
    console.warn(`Empty file path, ignoring for ${filePath}`);
    return;
  }

  if (!filePath.includes(".md-")) {
    return;
  }

  console.log("Checking file at", filePath);

  let newPath = filePath.replace(/\.md\-{1,}/gim, ".md");
  await fs.rename(filePath, newPath);
}

const checkFileContents = async (filePath = "") => {
  if (filePath.trim().length == 0) {
    console.warn(`Empty file path, ignoring for ${filePath}`);
    return;
  }

  let contents = await fs.readFile(filePath, 'utf8');

  if (contents.includes(`src="uploads`)) {
    const newContents = contents.replace(/src\=\"uploads/gim, `src="/uploads`);
    console.log(`Updating file at ${filePath}`);
    await fs.writeFile(filePath, Buffer.from(newContents, 'utf8'));
  }
}

(async () => {
  await checkDirectory(DIR_PATH);
})();