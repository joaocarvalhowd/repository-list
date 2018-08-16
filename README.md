# RepositoryList

> code challenge - [DEMO](http://banco-pan.joaocarvalhowd.com.br/)

## Introduction

This project is a code challenge that has been developed with [Angular](https://angular.io/)

The application is integrated with [Github API v3](https://developer.github.com/v3/).

**It basically:**
* Login with GitHub
* Fetch repositories based in the user logged

![Image](https://imgur.com/i9EnOhK.png)

![Image](https://imgur.com/QKbQwjf.png)

## Install
- Clone the project: `git clone git@github.com:joaocarvalhowd/repository-list.git`
- (Optional - Because the callback of Github is configured to [DEMO API](http://banco-pan-auth.joaocarvalhowd.com.br/)) Clone the project of auth: `git clone git@github.com:joaocarvalhowd/repository-list-auth.git`
- Go to project's folder: `cd repository-list`
- Install dependencies: `npm i` or `yarn`

## Usage
To see this project running locally:
- Execute `npm run start` or `yarn start`
- Access [localhost:4200](http://localhost:4200)

## Tests

Some unit test has been created:

- repository-list
- repository-item
- header
- _services/token
- _services/auth

### Execute tests

`npm test` or `yarn test`

