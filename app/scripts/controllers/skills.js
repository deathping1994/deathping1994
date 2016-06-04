'use strict';

/**
 * @ngdoc function
 * @name deathping1994githubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deathping1994githubioApp
 */
angular.module('deathping1994githubioApp')
  .controller('SkillsCtrl', function ($scope) {
    var langData = {
    labels: ['Python/Django/Flask', 'JS/NodeJS/AngularJS', 'C++/C',"ElasticSearch","MongoDB/SQL","Redis/RabbitMQ","HTML/Bootstrap"],
    datasets: [
        {
            label: 'Level of Competence',
            backgroundColor: "rgba(255,99,132,0.2)",
            fillColor: "#b1d4e3",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [90, 85, 84, 60, 90,65,90]
        }
    ]};
    var jobsData = {
    labels: ["FrontEnd", "Backend", "Web Designing/UI", "Server Administration", "Q/A & Testing"],
    datasets: [
        {
            label: "Locaholic",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            fillColor : "rgba(153, 255, 102,0.5)",
			strokeColor : "rgba(153, 255, 102,1)",
            data: [75, 50, 15, 30, 56]
        },
        {
            label: "Delhi Nerds",
            fillColor : "rgba(102, 153, 255,0.5)",
			strokeColor : "rgba(102, 153, 255,1)",
            data: [28, 68, 20, 29, 26]
        },
        {
            label: "ShopClues",
            fillColor : "rgba(255, 255, 128,0.5)",
			strokeColor : "rgba(255, 255, 128,1)",
            data: [30, 100, 20, 100, 90]
        }
    ]
};	var personalData = {
        datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
        }]
    };
    
    $scope.init = function(){
	var context = document.getElementById('lang').getContext('2d');
	var langChart = new Chart(context).Bar(langData);
	var jobs = document.getElementById('jobs').getContext('2d');
	var jobsChart = new Chart(jobs).Radar(jobsData);
	var personal = document.getElementById('personal').getContext('2d');
	document.getElementById('jobs-legend').innerHTML = jobsChart.generateLegend();
	var personalChart = new Chart(personal).Line(personalData,{
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    });
	
	  }
  });
