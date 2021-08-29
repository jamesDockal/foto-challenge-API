# Getting Started

## 1. Run `npm install`

### Install the nescessary dependecies

<br>

## 2. Run `npm run typeorm migration:run`

### Run the migrations and create a `SQLITE` database on the folder <strong>src/database</strong>

<br>

## 3. Run `npm run start:dev`

### Start the server on the localhost by default on port 8000

<br>

> ## Routes
>
> <br>

> > ### <strong>`/images`</strong>
> >
> > `GET` <strong>/</strong><br>
> > Return all images
> > <br> > > <br> `GET` <strong>/:id</strong><br>
> > Return a image with the given id
> >
> > <br> `POST` <strong>/</strong><br>
> > Save an image on the database and in the `images` folder
> >
> > <br>`DELETE` <strong>/:id</strong><br>
> > Delete an image from the database and from the `images` folder
> > <br>
