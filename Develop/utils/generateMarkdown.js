function generateURL(GitHub, ProjectTitle) {
  const title = ProjectTitle.toLowerCase().split(" ").join("-");
  return `https://github.com/${GitHub}/${title}`;

}
//this function will create a  license badge
function createBadge(license, GitHub, ProjectTitle) {
  if (license !== "none") {
    return `[![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)](${generateURL(GitHub, ProjectTitle)})`;
  }
  else {
    return " ";
  }
}

function generateMarkdown(data) {
  return `
  # Project: ***${data.Title}***
  ## Description: ${data.Description}

  <details>
  <summary>This project has the following features</summary>
  ${data.Contents}
  </details> 
 

  ### Installation: ${data.Installation}

  ### Usage: ${data.Usage}

  ${createBadge(data.License, data.GitHub, data.Title)}
  ### License: ${data.License}

  [![GitHub contributors](https://img.shields.io/github/contributors/singhpri30/Good-Readme-Generator)](https://github.com/singhpri30/Good-Readme-Generator/graphs/contributors/) 

  ### Contributors: ${data.Contributors}

  ### Tests: ${data.Tests}

  ### Questions: ${data.Questions}
  
  `;
}

module.exports = generateMarkdown;
