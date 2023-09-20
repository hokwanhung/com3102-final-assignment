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
    - [Program Structure](#program-structure)
    - [Quick Start](#quick-start)
      - [MongoDB: Common errors and methods to handle](#mongodb-common-errors-and-methods-to-handle)
      - [MongoDB: Setups and Configurations](#mongodb-setups-and-configurations)
      - [MongoDB: Regular Starting](#mongodb-regular-starting)
    - [Demo (Without styles)](#demo-without-styles)
  - [License](#license)
  - [Credits](#credits)
  - [FAQ (Frequently Asked Questions)](#faq-frequently-asked-questions)
    - [1. What is the difference between `GET` and `POST` method?](#1-what-is-the-difference-between-get-and-post-method)
    - [2. What is the difference between `Endpoints` and `URLs`?](#2-what-is-the-difference-between-endpoints-and-urls)
    - [3. What is the difference between `RESTful APIs` and `"Regular" Web APIs`?](#3-what-is-the-difference-between-restful-apis-and-regular-web-apis)
    - [4. What is `mongoose` and `Object Data Modeling(ODM)` Library?](#4-what-is-mongoose-and-object-data-modelingodm-library)
    - [5. What is `serialization` and `deserialization`?](#5-what-is-serialization-and-deserialization)
    - [6. What is the meaning of `routes` and `resources` in web development?](#6-what-is-the-meaning-of-routes-and-resources-in-web-development)
    - [7. What are `synchronous` and `asynchronous` executions?](#7-what-are-synchronous-and-asynchronous-executions)
    - [8. What are `routers` and `Express` library?](#8-what-are-routers-and-express-library)
    - [9. What is `nodejs.Process`?](#9-what-is-nodejsprocess)
    - [10. What is `SESSION_SECRET`?](#10-what-is-session_secret)

## Installation

The program is re-initiated after two years, showing the original completed website for a Student Portal System.

IDE(Integrated Development Environment): `Visual Studio Code` for whole web development.

![Alt text](/markdown_images/vsc.png)

Other tools: 

`Node.js` (version: `18.17.1 LTS`) for server-side development.

![Alt text](/markdown_images/nodejs.png)

`MongoDB` (version: `7.0.1`) for `NoSQL` database hosting.

![Alt text](/markdown_images/mongodb.png)

`Mongosh` (version: `1.10.6`) for accessing and manipulating the `MongoDB`.

![Alt text](/markdown_images/mongosh.png)

## Usage

### Program Structure

```
COM3102-final-assignment
 ┣ models (Definitions of any structure or constraints related to MongoDB collections)
 ┃ ┣ course.js
 ┃ ┣ guest.js
 ┃ ┗ student.js
 ┣ passport (Configurations for passport.js as middleware)
 ┃ ┣ authenticated.js
 ┃ ┣ passport-config.js
 ┃ ┗ unauthenticated.js
 ┣ routes (Routes and endpoints specified)
 ┃ ┣ course.js
 ┃ ┣ guestRegister.js
 ┃ ┣ index.js
 ┃ ┣ login.js
 ┃ ┣ logout.js
 ┃ ┣ search.js
 ┃ ┗ studentRegister.js
 ┣ views (Views that the user sees)
 ┃ ┣ course
 ┃ ┃ ┣ create.ejs
 ┃ ┃ ┗ _form_fields.ejs
 ┃ ┣ layouts
 ┃ ┃ ┣ layout.ejs
 ┃ ┃ ┗ stuLayout.ejs
 ┃ ┣ partials
 ┃ ┃ ┣ footer.ejs
 ┃ ┃ ┣ header.ejs
 ┃ ┃ ┣ metaHead.ejs
 ┃ ┃ ┗ stuHeader.ejs
 ┃ ┣ 404.ejs
 ┃ ┣ guestRegister.ejs
 ┃ ┣ index.ejs
 ┃ ┣ login.ejs
 ┃ ┣ search.ejs
 ┃ ┗ studentRegister.ejs
 ┣ .env.development (Self-defined and confidential, and thus is not commited to Github)
 ┣ .gitignore
 ┣ index.js (Starting point for the whole project)
 ┣ package-lock.json
 ┣ package.json
 ┗ README.md
```

### Quick Start

To run the code, it is important to have both `node.js` and `MongoDB` available.

For `node.js`, navigate to where the main folder `com3102-final-assignment` are, and use any command-line interpreter applications, e.g., `cmd`, to initiate the below commands:

- `npm install`: To install the required packages listed in `package.json`. A folder containing the required packages, named `node_modules` and a `JSON` file named `package-lock.json` will be created.
  - `npm update`: To update the required packages and `package-lock.json`to its latest version.
- `npm start`: According to the script written in `packcage.json`, it will initiate the `node index.js` and host the entire project on `127.0.0.1` or `localhost`.

![Alt text](/markdown_images/successful-host.png)

For `MongoDB`, after the installation of `MongoDB`, the `MongoDB Compass` can be used to optimize the setup of the `MongoDB`. However, some common errors might have to be settled first before using `MongoDB`.

#### MongoDB: Common errors and methods to handle

First, for Windows users, it is noticeably that there is a fairly high chance that executing `mongo` or `mongod` will result in the below error:

```
mongo is not recognized as an internal or external command, operable program or batch file.
```

It is therefore important to add Mongo's `bin` folder to the `Path` environment variable. More information can be viewed by following this `stackoverflow` question: [.mongo' is not recognized as an internal or external command, operable program or batch file](https://stackoverflow.com/questions/51224959/mongo-is-not-recognized-as-an-internal-or-external-command-operable-program-o)

Second, the default path to `MongoDB` is set to `C:\\data\\db`, which is likely not be created or provided beforehand. As a result, a flow of initiation codes would likely to be seen, with `errors` and `shutdowns` expected. The essential line of error code will be shown as follows:

```
{"t":{"$date":"2023-09-20T00:22:40.011+08:00"},"s":"E",  "c":"CONTROL",  "id":20557,   "ctx":"initandlisten","msg":"DBException in initAndListen, terminating","attr":{"error":"NonExistentPath: Data directory C:\\data\\db\\ not found. Create the missing directory or specify another path using (1) the --dbpath command line option, or (2) by adding the 'storage.dbPath' option in the configuration file."}}
```

Among the three provided methods, the simpliest method would be to create the respective folders of `data` and sub-folder `db` under `C:`. The second method of `--dbpath` is temporary and the permission needs to be granted to the destinated folder. The third method will be illustrated below with `security.authorization`.

#### MongoDB: Setups and Configurations

By using `MongoDB Compass`(with `mongosh` enabled), the setup process will be much easier to new developers.

![Alt text](/markdown_images/mongodb-compass.png)

Use the default `localhost:27017` to connect into the database. The three default databases `admin`, `config` and `local` will be created automatically.

Create a new database `com3102` with collection `courses` inside. The left side will be shown as follows:

![Alt text](/markdown_images/mongodb-compass-databases.png)

Open the `_MONGOSH`(`mongosh`) below and input the following queries independently:

```
use admin

db.createUser(
  {
    user: "root",
    pwd: "root",
    roles: [ "root" ]
  }
) // create a "root" user that can perform super controls after access control is enabled.

db.createUser(
  {
    user: "student",
    pwd: "student",
    roles: [
      { role: "readWrite", db: "com3102"}
    ]
  }
) // create a "student" user for accessing this particular "com3102" database

db.auth("student", "student") // check if the "student" account is created
```

After that, stop the `MongoDB` server by accessing  `Services` interface. Then, open the `mongod.cfg` inside the `bin` folder. Replace `#security:` with the below code:

```
security:
  authorization: "enabled"
```

Afterwards, the access control should be enabled and the above user constraints are effective. More information can be seen in this `Youtube` video: [How To Enable Access Control In MongoDB | Code Debugger](https://www.youtube.com/watch?v=wWHVXLj2ICI&ab_channel=CodeDebuggerbyDhananjay)

#### MongoDB: Regular Starting

Confirm that the `MongoDB Server (MongoDB)` is running in `Services` for Windows users.

Then connect to `MongoDB` with the connection string `mongodb://student:student@127.0.0.1:27017/?authMechanism=DEFAULT`. The connection can be easily established through `Visual Studio Code`'s extension - `MongoDB for VS Code`: 

![Alt text](/markdown_images/vsc-extension.png)

For the `.env` file that are crucial to `index.js`, the below information is needed:

```
NODE_ENV=development # Optional

DATABASE_URL=mongodb://student:student@127.0.0.1:27017/?authMechanism=DEFAULT

SESSION_SECRET=com3102 # Should be generated in real-time, but as for development purposes (self-defined).
```

After the `MongoDB` connection is successfully established, open any command-line interpreter applications, e.g., `cmd`, and input the following command: `npm start`. The following message will be shown if all starts are successful.

![Alt text](/markdown_images/successful-run.png)

### Demo (Without styles)

![Alt text](/markdown_images/login.png)

## License

N/A

## Credits

N/A

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

P.S. Similar to `calling a method` in `Java`.

### 3. What is the difference between `RESTful APIs` and `"Regular" Web APIs`?

`RESTful APIs` are `APIs` that specifically follow the `REST(Representational State Transfer) Principles`. Below are some of the most important information:

- Standard `HTTP` methods for `CRUD` actions on resources:
  - `Create` from `POST`
  - `Read` from `GET`
  - `Update` from `PUT`
  - `Delete` from `DELETE`
- Benefits: 
  - Simple yet standardized approach for communication.
  - Scalable and stateless(independent and self-contained requests).
  - High performance from caching supports.
- Common Structure:

  ```
  Requests: 
  HEADER (API key/authentication)
  OPERATION (HTTP methods e.g., above four methods)
  ENDPOINT (e.g. http://localhost:3000/API/resources)
  PARAMETERS/BODY

  Responses: (In e.g., JSON/XML format)
  ```

`"Regular Web APIs"` refers to any web-based `APIs` that allow communication and interaction between software components or systems over the Internet, in which various protocals excluding `REST principles` can be used, e.g., `SOAP`, `GraphQL` and others.

### 4. What is `mongoose` and `Object Data Modeling(ODM)` Library?

Start with the latter, `Object Data Modeling(ODM)` library is a software component or framework that acts as an intermediary layer  between an object-oriented programming language (such as `JavaScript`) and a `NoSQL` database. Developers can thus use `objects` and `classes` to represent and manipulate data. Below are some important functions:

- Mapping: Provide special mechanism to map objects to database documents and vice versa.
- Validation: Provide data validation and schema enforcement.
- Querying: Provide query building capabilities using object-oriented syntax.

Examples: `mongoose` for `JavaScript/Node.js`, `PyMongo` for `Python` and `Morphia` for `Java`.

P.S. `JavaScript` itself manipulates a model of `Document Object Model(DOM)`, in which `DOM` is the hierarchical tree-like structure of web documents that represents `elements`, `attributes`, or `text content` within the document.

### 5. What is `serialization` and `deserialization`?

`Serialization` is the process of converting complex data structures, such as `objects` or user data, into a format that can be easily stored or transmitted. In terms of user authentication and sessions, it refers to converting a user's data(usually an identifer, such as an `ID`) into a format that can be stored in a session (usually stored as a `cookie` on the client-side or in a server-side session store). 

`Deserialization` is the reverse process of converting previously serialized data back into its original form or data structure.

### 6. What is the meaning of `routes` and `resources` in web development?

`Routes` refer to specific `URLs` or paths within a web application that are associated with particular functionality or content. It defines the structure and navigation of a web application. Examples in a blog application includes "/home", "/blog", "/contact", and "/login".

P.S. `Endpoints` are related to `routes`, but they serve different purposes in web development. The former one are specific `URLs` associated with data access and manipulation in web `APIs`.

`Resources` refer to the content and data that make up a web application, which are requested and delivered over the web in response to user actions or requests.

Both `routes` and `resources` might be protected and require authentication to access.

### 7. What are `synchronous` and `asynchronous` executions?

In `synchronous` code execution, tasks are executed one after another, in a sequential and blocking manner. Each task must be complete before the next one begins, even if it takes a long time. 

On the other hand, tasks in `asynchronous` code execution are initiated and continue without waiting for the previous task to complete. Below are some key features of `asynchronous` code execution:

- Non-blocking: Tasks can be initiated and continue running running without waiting for the completion of previous tasks.
- Parallelism: Multiple tasks can run concurrently, making better use of system resources.
- Callback Mechanism: Often `callbacks` or `promises` are used to handle the results of tasks when complete.

Note: An `async` function with `await` keyword are still vastly different from `synchronous` functions. While an `await` opertaion is waiting for a `promise` to be resolved, other code can continue executing.

### 8. What are `routers` and `Express` library?

`Routers` is the instances of the `express.Router` class, which allow modularization and organization of routes and route handlers into seperate files or modules. It can be thoguht of as mini `Express` applications that have own routes, middleware, and route handlers, and can be mount at different paths within the main application.

`Express` library is the minimal and flexible web application framework for `Node.js`, which is widely used for creating web servers and handling `HTTP` requests and responses. Below are the key elements of `Express`:

- Middleware: Use middleware functions to process incoming `HTTP` requests and responses.
- Routing: Allow defining `routes`` for different `HTTP` methods. `Routes` are used to map specific `URL` patterns to corresponding route handlers, which process requests to those `URLs`.
- Request and Response objects: Provide request(`req`) and response(`res`) objects that encapsulate information about the `HTTP` request and allow sending responses back to clients.

P.S. `Node.js` is an open-source, server-side runtime environment that allow running `JavaScript` code on the server and provide a non-blocking, event-driven architecture. It includes a vast variety of popular industry-used libraries, including `Express.js`, `Socket.io`, `Mongoose`, `Passport.js`, etc.

### 9. What is `nodejs.Process`?

In `Node.js`, `process` is a global object that provides information and control over the current `Node.js` process, which represents the runtime environment and allows interactions with various aspects, including:

- `process.env`: An objedct containing the environment variables of the current process.
- `process.argv`: An array containing the command-line arguments passed to the `Node.js` process.
  - The first element(`process.argv[0]`) is the path to the `Node.js` executable.
  - The second element(`process.argv[1]`) is the path to the `JavaScript` file being executed.
  - Subsequent elements are the argumetns passed to the script.
- `process.cwd()`: A function that returns the current working directory of the `Node.js` process.

### 10. What is `SESSION_SECRET`?

`SESSION_SECRET` is a secret key defined at server-side to sign session cookies. It is used in the following ways:

- Signing cookies: When a user's session is created or updated, a session cookie is sent to the user's browser.
  - It contains information about the user's session, but it is also signed using the session secret.
- Verifying cookies: When a user make a subsequent request to the server, the server receives the session cookie from the client.
  - The server then verify the signature on the cookie and check if it is valid, which means the cookie has not been tampered with.