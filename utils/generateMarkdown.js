// function to generate markdown for README
function generateMarkdown(data) {
  let licenseText = "";
  let licenseBadge = "";
  if(data.license === "MIT"){
    licenseText = "This application is licensed under the MIT License . . .";
    licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  
  return `# ${data.title}
  # 
  ## ${data.description}
  // [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)
###  ${data.usage}
####
${data.license}
MIT
${licenseText}
${licenseBadge}
`;
}

module.exports = generateMarkdown;
