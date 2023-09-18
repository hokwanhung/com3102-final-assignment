# com3102-final-assignment

com3102, Computing Technologies in Web Applications, is a course offered by The Hang Seng University of Hong Kong, and taught by Professor Dr. WONG Wai Kit. 

According to the [university website](https://www.hsu.edu.hk/en/academic-programmes/undergraduate/ahcc/academic-structure/?shortname=COM3102&cid=2090), 

`
This module aims to provide students with a thorough understanding of the web technologies in modern web applications. The content covers fundamentals like web scripting languages (e.g., PHP, JavaScript), web data structures (e.g., XML, JSON), and commonly used frameworks (e.g., YUI, Ruby).
`

## Table of Content
- [com3102-final-assignment](#com3102-final-assignment)
  - [Table of Content](#table-of-content)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [FAQ (Frequently Asked Questions)](#faq-frequently-asked-questions)
    - [1. What is the difference between `GET` and `POST` method?](#1-what-is-the-difference-between-get-and-post-method)
    - [2. What is the difference between `Endpoints` and `URLs`?](#2-what-is-the-difference-between-endpoints-and-urls)

## Installation

## Usage

## License

## Credits

## FAQ (Frequently Asked Questions)

### 1. What is the difference between `GET` and `POST` method?

Three main differences:

- Purpose: `GET` requests are primarily used for retrieving data from the server, while `POST` requests are used for submitting data to the server.
- Visibility: `GET` requests' data is visible in the URL, while `POST` requests' data is not visible in the URL.
- Common Usages: `GET` requests are used in cases including fetching web pages, loading images and other assets, and performing searches, while `POST` requests are used in cases including submitting forms on websites, creating new records in a database, and sending data to server endpoints for processing.

P.S. `GET` requests are `idempotent` and no state of the system will be changed if requests are sent multiple times.

### 2. What is the difference between `Endpoints` and `URLs`?

`Endpoints` are entry points to access spefici resources or perform specific actions, e.g. data retrieval, data submission or `CRUD (Create, Read, Update and Delete)` operations, while `URLs` are regular web addresses to access various types of web content, typically in a web browser.

`Endpoints` are an integral part of web `APIs`, and one of the most common type of `API` responses is through `JSON` or `XML` formats.