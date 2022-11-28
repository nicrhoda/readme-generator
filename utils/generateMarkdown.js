// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'N/A') {
    return ``;
  } else {
    return `![${license}License](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') {
    return `https://www.mit.edu/~amini/LICENSE.md`
  } else if(license === 'GPL') {
    return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`
  } else if(license === 'WTFPL') {
    return `http://www.wtfpl.net/txt/copying/`
  } else if(license === 'MPL_2.0') {
    return `https://www.mozilla.org/en-US/MPL/2.0/`
  } else {
    return ``
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#name)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.email}

  ## Credit
  ${data.name}
  `;
}

module.exports = generateMarkdown;
