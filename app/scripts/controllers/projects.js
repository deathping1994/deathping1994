'use strict';
angular.module('deathping1994githubioApp')
  .controller('ProjectCtrl', function ($scope) {

    $scope.contributions=[
                        {
                          name:"Apache Concerted",
                          url:"https://github.com/apache/incubator-concerted",
                          description:"Concerted is a next generation big data engine aimed at supporting massive in memory reads for OLAP support.The engine is flexible, with no single point of entry and flexibility to use APIs suited for each use case with full scalability.Concerted allows applications to use the native APIs to have the flexibility to store, access, scale data in memory on demand. No auxillary infrastructure is needed.Concerted implements its own locking manager and transaction manager utilizing the object oriented model,thus greatly simplifying the management of processes like commit and abort, depending a lot on the OS's native support.",
                        },
                        {
                        name:"Mozilla Treeherder",
                        url:"https://github.com/mozilla/treeherder",
                        description:"A reporting dashboard & service for managing CI data for commits to Mozilla projects"
                        },
                        {name:"Moz-Games",
                        url:"https://github.com/mozilla/moz-games",
                        description:"Mozilla Games site"}
                        ];
    $scope.projects= [
    {
        name: "Delimedy #LiveBetter",
        url: "https://delimedy.com",
        img: "images/delimedy.png",
        description: "E-Commerce website to orders medicines and get them delivered at your doorstep.I worked on this while I was freelancing.",
        stack: "Django/jQuery/MySql/Redis"
    },
    {
      name: "Concerted Website",
      img: "images/concerted.png",
      url: "http://gauravshukla.xyz/concerted-website",
      code: "https://github.com/apache/incubator-concerted",
      description: "This is a website I designed for Apache-Concerted Project (now dead).This website renders markdown format and can be update via git, no knowledge of webservers needed.",
      stack: "Angular JS"
      },
      {
        name: "MechEye Photography",
        url: "http://mecheyephotography.com/",
        img: "images/mecheye.png",
        description: "A photography portfolio designed to be operated and updated from google drive, no hosting account or expertise needed.",
        stack: "Angular JS/PHP"
      },
      {
        name: "Probase",
        url: "http://probase.gauravshukla.xyz:8080/",
        code: "https://github.com/deathping1994/probase",
        img: "images/probase.png",
        description: "Project management system with realtime search and plagairism checking I developed for my college.",
        stack: "Elastic Search/Mongo/Python-Flask/AngularJs",
        presentation: "https://docs.google.com/presentation/d/1tjkAgJtFk8eTRpIKxPhASYVxD67BpsNPoQwdhhOWG8M/edit?usp=sharing"
      },
      {
        name: "Parallax",
        url: "https://github.com/Bhramastra/parallax",
        code: "https://github.com/Bhramastra/parallax",
        img: "images/parallax.png",
        description: "Python Framework for asynchronous and distributed programming (Buggy and incomplete)",
        stack: "Python",
        presentation: "https://docs.google.com/presentation/d/1KruvuHJXD6IgVdbRB0JnlMNmK5dh6lMlHbPOlapwLhY/edit?usp=sharing"
      },
      {
        name: "Cyberroam Brute",
        url: "https://github.com/deathping1994/Cyberoam-Brute",
        code: "https://github.com/deathping1994/Cyberoam-Brute",
        img: "images/cyberroam.png",
        description: "A python script to carry out brute force attack on JIIT cyberoam portal.(By Far the most used script I ever wrote)",
        stack: "Python"
      }];
  });
