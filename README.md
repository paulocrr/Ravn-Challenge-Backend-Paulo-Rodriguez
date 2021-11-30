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
    <li><a href="#rest-api">REST API</a></li>
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

<p align="right">(<a href="#top">back to top</a>)</p>


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

If any of this api recieve a bad request or return and empty response you will get the corresponding HTTP status code with the following response:

```json
{
    "status": <error-code>,
    "message": "<Error Message>"
}
```

## Get authors order by birthdate

### Request

`GET /api/authors/by/birth?count=2`

if dont specify the count parameter it will return the first 10 authors

### Response

 

```json
{
    "status": 200,
    "message": "OK",
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

## Get the total sales of an author by their name

### Request

`GET /api/total/revenue?name=Lorelai Gilmore`

### Response



```json
{
    "status": 200,
    "message": "OK",
    "body": [
        {
            "name": "Lorelai Gilmore",
            "price": "46189.00"
        }
    ]
}
```

## Get the top n performing authors ranked by sales revenue

### Request

`GET /api/revenue/author/top?count=2`

if dont specify the count parameter it will return the top 10 authors

### Response




```json
{
    "status": 200,
    "message": "OK",
    "body": [
        {
            "name": "Miss Marcus Block",
            "revenue": "196866.00"
        },
        {
            "name": "Herbert Mante DDS",
            "revenue": "169474.00"
        }
    ]
}
```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
# Contact

Paulo Rodriguez - [(Twitter) @paulo_crr](https://twitter.com/paulo_crr) - paulo_crr@hotmail.com

Project Link: [https://github.com/paulocrr/github-list-commit-web-app](https://github.com/paulocrr/github-list-commit-web-app)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/paulo-cesar-r-01a2b367/