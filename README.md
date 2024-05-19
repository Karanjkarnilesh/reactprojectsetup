symfony React Project setup
=====================

//command for create porject
composer create-project symfony/skeleton:"7.0.*" my_project_directory

set database
---------------
composer require symfony/orm-pack
composer require --dev symfony/maker-bundle
php  bin/console doctrine:database:create

composer require twig  //install package
composer require symfony/webpack-encore-bundle //install encore
npm i  

run server
-----------
symfony server:start

react install
--------------------
npm install react react-dom prop-types --save //install react package
-------------
run encore
--------------
npm run watch  //
npx encore dev --watch 
npm install @babel/preset-react@^7.0.0 --save-dev

create Controller
---------------------
symfony console make:controller indexController

base.html.twig
=============================
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>{% block title %}Welcome!{% endblock %}</title>
    </head>
    <body>
        {% block body %}{% endblock %}
         {% block stylesheets %}
            {{ encore_entry_link_tags('app') }}
        {% endblock %}

        {% block javascripts %}
            {{ encore_entry_script_tags('app') }}
        {% endblock %}
    </body>
</html>

set id as root in index.html.twig
---------------------------------------
{% extends 'base.html.twig' %}

{% block title %}Hello IndexController!{% endblock %}

{% block body %}
<div id="root"></div>
{% endblock %}

npm run watch

add go to browser controller route 

app.js
--------------
import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <div>Hello</div>
    )
  }
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDom.creat(<App/>,document.getElementById('root'));

