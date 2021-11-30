<div id="top"></div>

<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT TITLE -->
<br />
<div align="center">
  <h3 align="center">Ravn Challenge Backend Paulo Rodriguez</h3>
  <p align="center">
    This project is in both the frontend and the backend of an application to be able to see the commits that are made in this repository.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#usage">Usage</a></li>
      </ul>
    </li>
    <li>
        <a href="#built-with">Built With</a>
        <ul>
            <li><a href="#backend-tecnologies">Backend tecnologies</a></li>
            <li><a href="#database">Database</a></li>
        </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
# About The Project

This is a dokerize web api that provide information about a Book Store database, the Request you can do are explained in de REST API section.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
# Getting Started

These instructions will cover usage information and for the docker container 

## Prerequisities

In order to run this container you'll need docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

In order to use this container run de following steps:

1. Inside que project folder run the command
    ```sh
    docker compose up --build node_app
    ```

    Note: if you dont now how to get the container-identificator use the following command
    ```sh
    docker ps
    ```
    the container image name is "ravn-challenge-backend-paulo-rodriguez_node_app"

2.  To migrate the tables into the database run
    ```sh
    docker exec -it <container-identificator> node /src/app/migrations/database.migrations.js
    ```

3. To run the seeder run:
    ```sh
    docker exec -it <container-identificator> node /src/app/seeders/database.seeder.js
    ```
4. If you can access to the following url http://localhost:8080 using the browser and show the following message:
    ```json
    {"status":200,"body":{"message":"Welcome to my Book Store Api"}}
    ```
    the server api is up correctly.

<!-- BUILT WITH -->
# Built With

## Backend tecnologies

* [Nodejs v14.17.3](https://nodejs.org/en/)
* [Expressjs v4.17.1](https://expressjs.com/)
* [Sequelize v6.12.0-alpha.1](https://sequelize.org/)

## Database

* [PostgreSQL v14.1](https://www.postgresql.org/)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- REST API -->
# REST API

## Get authors order by birthdate

### Request

Ask top the n first authors ordered by their birthdate
`GET /api/authors/by/birth?limit=2`

if dont specify the limit parameter it will return the first 10 authors

### Response

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Access-Control-Allow-Origin: http://localhost:8080
    Vary: Origin
    Content-Type: application/json; charset=utf-8
    Content-Length: 335
    ETag: W/"14f-W8qExrPykDok8tb/woSSe1mrq4Y"
    Date: Tue, 30 Nov 2021 01:50:58 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    ```json
    {
        "status": 200,
        "body": [
            {
                "id": 32,
                "name": "Roxanne Reinger",
                "date_of_birth": "2020-12-25T18:24:31.554Z",
                "createdAt": "2021-11-29T23:47:37.741Z",
                "updatedAt": "2021-11-29T23:47:37.741Z"
            },
            {
                "id": 40,
                "name": "Clyde Wilderman",
                "date_of_birth": "2020-12-27T16:36:36.867Z",
                "createdAt": "2021-11-29T23:47:37.741Z",
                "updatedAt": "2021-11-29T23:47:37.741Z"
            }
        ]
    }
    ```

## 

1. Open a bash in the folder where you cloned the repository
2. Navigate to the server folder
    ```sh
    cd github-list-commit-web-app/server
    ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a .env file and create a variable named GITHUB_ACCESS_TOKEN and copy and paste your github access personal token wich you created earlier , if you have doubts, consult the .env.example file for reference.
   ```
   GITHUB_ACCESS_TOKEN = <ENTER YOUR GITHUB ACCESS PERSONAL TOKEN>
   ```
5. Then start the server using the following command
   ```sh
   nodemon
   ```
6. The server will start in the following direction [http://localhost:3001/](http://localhost:3001/), if you enter to that url and you see the message Hello World in the browser you setup correctly de server enviroment.

7. To test de API functionality enter the following url [http://localhost:3001/api/v1/commits](http://localhost:3001/api/v1/commits), if you see a json response with a status 200 attibute the api is working correctly.

### Client Installation
1. Open a bash in the folder where you cloned the repository
2. Navigate to the client folder
    ```sh
    cd github-list-commit-web-app/client
    ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Then start the react server using the following command
   ```sh
   npm start
   ```
5. The react server will start in the following direction [http://localhost:3000/](http://localhost:3000/), If you can see a UI like the one seen in the screenshot that is in this README then the react server is working correctly. 


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

The client interface shows a table of all the commits made in this repository, per commit shows the following data: the commit identifier, the date and time it was made, the name of the person who made it, the email of the person, the user (if you click on the username this will take you to your profile on github), and a button to see details, if you click on that button it will show you a modal showing the message that that commit had, the identifier complete and date. If you click on the name of the row you can sort the table with respect to that column, the columns that have a function are: Date, Name, Email, User. To have a better visibility, the table is paginated and by clicking on the arrows at the bottom of the table you can navigate between the different pages, you can also control the number of records shown per page.

Also in the search field you can write part of a commit identifier and you will be able to see all the commits that that string contains in its identifier. Finally, if you click on the Clear button, what you wrote in the filter input will be deleted and all the commits will be displayed.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Paulo Rodriguez - [(Twitter) @paulo_crr](https://twitter.com/paulo_crr) - paulo_crr@hotmail.com

Project Link: [https://github.com/paulocrr/github-list-commit-web-app](https://github.com/paulocrr/github-list-commit-web-app)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/paulo-cesar-r-01a2b367/