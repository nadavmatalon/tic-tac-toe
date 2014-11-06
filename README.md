#Tic • Tac • Toe

[![Code Climate](https://codeclimate.com/github/nadavmatalon/tic-tac-toe/badges/gpa.svg)](https://codeclimate.com/github/nadavmatalon/tic-tac-toe)

##Table of Contents

* [App Screenshot](#app-screenshot)
* [General Description](#general-description)
* [See it Live on Github](#see-it-live-on-github)
* [How to Run the Game Locally](#how-to-run-the-game-locally)
* [Browsers](#browsers)
* [Testing](#testing)
* [License](#license)


##App Screenshot

<table>
	<tr>
		<td align="center">
			<a href="https://raw.githubusercontent.com/nadavmatalon/tic-tac-toe/master/public/images/tic-tac-toe-screenshot.png">
				<img src="/public/images/tic-tac-toe-screenshot.png" width="500" height="400" />
			</a>
		</td>
	</tr>
</table>


##General Description

This web-app was written following the course at 
[Makers Academy](http://www.makersacademy.com/) 
as an exercise in buiding a  
[JavaScript](http://en.wikipedia.org/wiki/JavaScript) web app, 
using [jQuery](http://jquery.com) functionality and 
[TDD](http://en.wikipedia.org/wiki/Test-driven_development) 
methodology (tests were written with 
[Jasmine](http://jasmine.github.io/2.0/introduction.html)). 

It basically does what it says on the tin, namely: implements the game of 
Tic-Tac-Toe. 

To play simply click on one of the 9 squares. The starting turn ('X' or 'O') 
is allocated randomly by the app on the initialization of each new game. When 
a winning sequence is reached or all the squares are full the game is over 
and a new game can be started.


##See it Live on Github
			
A live version of the game can be found (and played!) at:

[Tic-Tac-Toe on Github.io](http://nadavmatalon.github.io/tic-tac-toe/)

(Please see notes about browser compatibility below).


##How to Run the Game Locally

To run the game locally is to clone the repo to a local folder 
and run the following commands in terminal:

```bash
$> cd tic-tac-toe
$> npm install
$> node server
```
And then open Chrome and go to this address:

```
http://localhost:3000/
```


##Browsers

This app has been tested with and supports the following browsers:

* __Google Chrome__ (36.0)

Pleae note that it may not work as intended in other browsers.


##Testing

Tests were written with [Jasmine (2.0.0)](http://jasmine.github.io/2.0/introduction.html).

To run the tests, first clone the repo to a local folder and then: 

For the [Jasmine](http://jasmine.github.io/2.0/introduction.html) back-end tests, 
run these commands in terminal:

```bash
$> cd tic-tac-toe
$> open ./spec/SpecRunner.html
```

For the Mocha front-end tests run these commands in terminal:
(note: make sure the 'node server' isn't running!)

```bash
$> cd tic-tac-toe
$> mocha
```


##License

<p>Released under the <a href="http://www.opensource.org/licenses/MIT">MIT license</a>.</p>



