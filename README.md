<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jmfiola/jest-api-test-typescript-example">
    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--J6qf2Ctw--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/gd97g4kdyk1bpdeyfqst.png" alt="Logo" width="200" height="80">
  </a>

<h3 align="center">Jest Api Test Framework: A TypeScript Example</h3>

  <p align="center">
    This is an example repository which provides the necessary boilerplate code for a reusable and maintainable jest api test framework using TypeScript.
    <br />
    <a href="https://github.com/jmfiola/jest-api-test-typescript-example/issues">Report Bug</a>
    ·
    <a href="https://github.com/jmfiola/jest-api-test-typescript-example/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a basic project with two main ideas:
1. Endpoint functionality should be wrapped by a class which is abstracted as much as possible 🌌

2. Class functionality should be unit tested 🧪

3. Actual API tests will then import those class methods to interact with the live API 🔎


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [TypeScript](https://www.typescriptlang.org/)
* [Node.js](https://nodejs.org/en/about/)
* [Jest](https://jestjs.io/docs/getting-started)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Prerequisites

You will want the latest version of npm installed. For reference, this project was developed with npm version `8.5.1`. 
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jmfiola/jest-api-test-typescript-example.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run tests
   ```sh
   npm run test
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can use this framework as a starting point for whatever API tests you would like to run. This framework allows for the flexibility of running tests which have free range with what headers they use, what routes they call, etc. whilst also providing easy-to-use, reusable, unit tested class methods. This makes the tests a lot more accessible to test writers and framework maintainers!

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Dockerization
- [ ] Reporting Integration
- [ ] Tag-based test collection

See the [open issues](https://github.com/jmfiola/jest-api-test-typescript-example/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/jmfiola/jest-api-test-typescript-example](https://github.com/jmfiola/jest-api-test-typescript-example)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jmfiola/jest-api-test-typescript-example.svg?style=for-the-badge
[contributors-url]: https://github.com/jmfiola/jest-api-test-typescript-example/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jmfiola/jest-api-test-typescript-example.svg?style=for-the-badge
[forks-url]: https://github.com/jmfiola/jest-api-test-typescript-example/network/members
[stars-shield]: https://img.shields.io/github/stars/jmfiola/jest-api-test-typescript-example.svg?style=for-the-badge
[stars-url]: https://github.com/jmfiola/jest-api-test-typescript-example/stargazers
[issues-shield]: https://img.shields.io/github/issues/jmfiola/jest-api-test-typescript-example.svg?style=for-the-badge
[issues-url]: https://github.com/jmfiola/jest-api-test-typescript-example/issues
[license-shield]: https://img.shields.io/github/license/jmfiola/jest-api-test-typescript-example.svg?style=for-the-badge
[license-url]: https://github.com/jmfiola/jest-api-test-typescript-example/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jacob-fiola
[product-screenshot]: images/screenshot.png