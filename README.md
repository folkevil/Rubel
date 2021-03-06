**Under Development**

[![CircleCI](https://circleci.com/gh/bmf-san/Rubel.svg?style=svg)](https://circleci.com/gh/bmf-san/Rubel)

# Rubel

A Simple CMS worked by Laravel, React, and Bulma.

- [github - bmf-san/Rubel](https://github.com/bmf-san/Rubel)

## Description

Rubel is the cms working with Laravel and React.

**_DEMO_** Coming soon...

## Features

- Easy to use
- Developer friendly
- Beatiful UI

## Requirements

- PHP7
- npm
- Node.js

## Get Started

### Installation

Latest `git clone git@github.com:bmf-san/Rubel.git rubel`

Specified version `git clone -branch 1.0.0 git@github.com:bmf-san/Rubel.git rubel`

### Setting for backend-app

```console
cd path/to/backend-app

composer install
npm install
npm run build

cp .env.example .env
```

Please change these environment variables as necessary.

```console
/* Setting for Rubel */
ADMIN_INFO_NAME=admin
ADMIN_INFO_EMAIL=admin@admin.com
ADMIN_INFO_PASSWORD=admin

DOMAIN=rubel
ADMIN_DOMAIN=admin.rubel
API_DOMAIN=api.rubel
```

### Setting for frontend-app

```console
cd path/to/frontend-app

npm install
npm run build
```

### Provisioning

```console
cd Rubel

vagrant init

cd Rubel/ansible/group_vars/vagrant.yml.sample
cp vagrant.yml.sample vagrant.yml

cd Rubel/ansible
cp host.sample host

vagrant provision
```

If you have no vagrant box in your host machine, you need to prepare a vagrant box before `vagrant init`.

An Ansible playbook has been in a directory. Please customize it as necessary.

### Setting a database

```console
vagrant ssh
mysql -uroot -p   # password has been written in path/to/ansible/group_vars/vagrant.yml
create database rubel;
exit;

cd path/to/backend-app

php artisan migration
php artisan db:seed
```

Now you can start Rubel!

## Anything Else

- [Wiki - API Documentation](https://github.com/bmf-san/laravel-react-blog-boilerplate/wiki/API-Documentation)

## Contributing

We welcome your isuue or pull request from everyone. Please check [these steps](https://github.com/bmf-san/Rubel/issues) to contribute.

## License

This project is licensed under the terms of the MIT license.

## Author

bmf - A Web Developer in Japan.

- [@bmf-san](https://twitter.com/bmf_san)
- [bmf-tech](http://bmf-tech.com/)
