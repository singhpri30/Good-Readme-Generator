function generateMarkdown(data) {
  return `
  # Project Title: ***${data.Title}***
  ## Description: ${data.Description}
  ## <deatils><summary> This project has the following features:</summary>
  
  ## Heading
  1. A numbered
  2. list
     * With some
     * Sub bullets
</details>:  ${data.Contents}

## Installation: ${data.Installation}
## Usage: ${data.Usage}

[![GitHub license](https://img.shields.io/apm/l/npm)](https://github.com/singhpri30/Good-Readme-Generator)
## License: ${data.License}

[![GitHub contributors](https://img.shields.io/github/contributors/singhpri30/Good-Readme-Generator)](https://github.com/singhpri30/Good-Readme-Generator/graphs/contributors/) 

## Contributors: ${data.Contributors}
## Tests: ${data.Tests}
## Questions: ${data.Questions}
  
  `;
}

module.exports = generateMarkdown;
