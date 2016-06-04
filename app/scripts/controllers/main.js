'use strict';

/**
 * @ngdoc function
 * @name deathping1994githubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deathping1994githubioApp
 */
angular.module('deathping1994githubioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.testimonials= [{
    	name: "Ishan Srivastava",
    	desc: "Mecheye Photography",
    	quote: "When I first asked Gaurav to make a website for me, I was skeptical of his skills and expected him to take a few weeks to come up with the first draft.\nAfter two days he texted me the website url, it was the first and final draft. I loved it.\nGaurav is truely amazing at what he does!",
    	img: "https://scontent.fbom1-2.fna.fbcdn.net/v/t1.0-9/13226974_1089088527801528_4966241867578043926_n.jpg?oh=2d38b29945af7a0030fa7eb674588cec&oe=57A256CD"
    },
    {
    	name: "Yash Gupta",
    	desc: "Android Developer",
    	quote: "I remeber working with him on Probase, it was our first project together, The way he architectured the webapp was awesome,I've never seen anyone decouple apps so gracefully. He comes up with ingenious solutions, he's crazy about making things scalable but that's a good thing I guess.",
    	img: "../images/yash.png"
    }
    ];
      });
