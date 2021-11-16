
# Shumba Money Exchange Rate Calculator
  
Shumba Money Exchange Rate Calculator is a React Web App by [Desmond Rgwaringesu][desmondrg]. The project was created as a response to a coding challenge from [Shumba Money Remittance][shumbaMoney]. The challenge involved building a user friendly rate exchange calculator from scratch using either Node.js, React.js or Java. A live demo of the app build by [Desmond Rgwaringesu][desmondrg] is available at : https://shumba.herokuapp.com/
.The Rate Exchange app has the following behaviours and features:  
 - Input validation for the entered amount  
- A conversion button that only gets activated if all form values are valid   
- Reactive / automatic currency conversion upon changes to form data  
- Swapping of selected currencies for rate conversion  
- Autocomplete search inputs for currencies 
- A *scroll to top* button 
- Mobile Responsive Design with the following behaviours and features  
	- A Drawer Nav Menu that slides in from the left  
	- A currency swapping button that rotates on mobile devices to display accurate currency swapping information  
	- Footer copyright and attribution text that is centralised on mobile only

## 1. Installation  
  
These instructions will get a copy of the project up and running on your  
local machine for development and testing purposes. [See deployment][deploy]  for notes on how to deploy the project on a live system such as Heroku.  
  
### 1.1 Prerequisites  
  
The following prerequisites need to be installed on your machine for this to  
work.  
  
 1. [Node][nodejs] version 14.x.x
 2. [Yarn][yarn] version  1.22.x

### 1.2 Clone the Repository  
  
The first step is to clone this repository to a location on your computer. For  
this example, we will assume that your default install location is a folder  
called `exchange-rate-calculator`.  
  
```console  
git clone https://github.com/desmondrg/exchange-rate-calculator.git  
```
 The above command will checkout the source code to the folder  
`exchange-rate-calculator/`. You can change the default location by specifying  
a folder name in the checkout command with:  
  
```console  
git clone https://github.com/desmondrg/exchange-rate-calculator.git custom-folder 
```

### 1.3 Install the required Node Dependencies
  Run node dependency installation via `yarn` using the following command :
  
```console  
yarn install
```
You can also install dependencies using `npm` by running the following command:

```console  
npm install
```
### 1.4 Running The App Locally  

The app can be run locally using the following command:  
  
Run the `jekyll serve` command to test your app.

```console  
yarn run dev:ui
```
## 2. Deployment  
  The project is already configured to build and run on Heroku. You can deploy your version of the project on heroku by
 - Creating a remote repository on github and then pushing your cloned copy of the project to this repository
 - Connecting the remote repositoy to your Heroku account and then configuring automatic deploys
**Note:** Extra steps are necessary inorder to deploy the app on other P.A.A.S providers such as [Google App Engine][googleApp] and [Amazon's Elastic Bean Stalk][elasticBean]
  

[deploy]: ##2-deployment
[nodejs]: https://nodejs.org/en/
[yarn]: https://yarnpkg.com/
[googleApp]: https://cloud.google.com/appengine
[elasticBean]: https://aws.amazon.com/elasticbeanstalk/
[shumbaMoney]: https://www.shumbamoney.com/
[desmondrg]: https://zw.linkedin.com/in/desmond-rgwaringesu-83595798