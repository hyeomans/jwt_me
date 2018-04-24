[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![CircleCI](https://circleci.com/gh/hyeomans/jwt_me/tree/master.svg?style=svg)](https://circleci.com/gh/hyeomans/jwt_me/tree/master)
[![Maintainability](https://api.codeclimate.com/v1/badges/a82b226ba5eff8368e87/maintainability)](https://codeclimate.com/github/hyeomans/jwt_me/maintainability)

# [jwt_me](https://github.com/hyeomans/jwt_me)

jwt_me is a command line interface tool that will generate a JWT token. In this version `user_id` and `email` are required by default. Once the process is finished, the JWT token will be copied to your clipboard!

# Installation

To run `jwt_me` you need to install the latest version of [Node.js](https://nodejs.org/en/)

```
npm install -g jwt_me
```

# Usage

```
> jwt_me
$ Enter key 1
> user_id
$ Enter user_id value
> 11211
$ Enter key 2
> email
$ Enter email value
> sample@sample.com
$ Any additional inputs? (yes/no)
> no
$ The JWT has been copied to your clipboard!
```

# Removal

```
npm uninstall -g jwt_me
```
