# CYPRESS NOTES

* If you want to run all specs files through command from specific folder or direct then just add *.js
* If you want to run your execution with MochaAwesome Reporting then add this in your run command: --reporter mochawesome
* using Scripts, you can simply add commands over package.json and call it using npm just like below:
            "scripts": {
            "cypresswindow": "cypress open",
            }
  and then run command like: npm run cypresswindow



# Cucumber Framework Notes

## CUCUMBER INSTALLTION
* for installation you need to visit the site https://github.com/badeball/cypress-cucumber-preprocessor
* cucumber installing command npm install @badeball/cypress-cucumber-preprocessor
* Once you install that plugin, you need to define that plugin into cypress.config.js file under SetupNodeEvents function.
* SetupNodeEvents function helps all the plugins to load and start functioning.
* Example url to configure config file -> https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples/browserify-cjs
* Change the required configuration code on config file and the package file as per details.
* Need to update also in config file     specPattern: 'cypress/e2e/BDD/*.feature'    under e2e

## Cucumber Framework Notes
* All features related files extension should be .feature
* Now create BDD folder and under BDD folder first create .feature file
* Now BDD Rule is that, jo .feature file ka naam hoga us naam se BDD k under folder banao and us folder me js file banao.
* Jo JS files hoti hen BDD me usko Step Defination files khte hen.
* Execute Command cypress run --spec cypress\e2e\BDD\login.feature --headed --browser electron
* In feature file, you can add multiple scenarios.

## Data Driven, Get Data from Feature File
* for Json data, we can set/add data as per specific scenario under feature file after when or action concept just like below:
        Email | Password |
        sh@ab.com | shobi |
* for json data, you need now use dataTable.rawTable to retrieve data from feature file into JS file code. Below are the example:
* Syntax:    Loginobj.password().type(dataTable.rawTable[Row index][Column index])
                                                        (dataTable.rawTable[0][1])
* If you want to run all feature files together then use * like command: cypress run --spec cypress\e2e\BDD\*.feature --headed --browser electron

## TAG IN BDD ##
* "Tag" in BDD is just like specific environment or suite you want to run and controlling your executions so in all feature file you need to declare tag just like example and use that tag in command: In feature file: use tag before Scenario keyword @Regression or @Smoke then use below command:
cypress run --env tags="@Regression" --headed --browser electron

## CUCUMBER BDD HTML REPORT ##
* For Cucumber Report check this site first for details: https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/json-report.md
* Way of configure BDD Report is: messages -> json files -> html report
* First you need to add Json Report Enable in Pacakge.json just like below:
"cypress-cucumber-preprocessor":
  {
    "json": {
      "enabled": true,
      "output": "cypress/cucumberReports/results.json"
    }
  },
* Second you need to download and install Json Message readable Formater from here: https://github.com/cucumber/json-formatter
* standalone JSON Formatter provides a language agnostic tool to convert cucumber messages into a JSON document.
* Right now, due to antivirus we cannot download and install further Json Formatter plugin but I'm defining the steps below further.
* Above Json formatter se Json cucumber report generate hojagi phr uske bad HTML report k lye further below steps.
* Next to install Multiple-Cucumber-Html-reporter npm package: npm install multiple-cucumber-html-reporter --save-dev
* Right now, with Json enable I cannot go further, for future practice visit https://www.youtube.com/watch?v=5AGXK9cL2fs

##  CYPRESS DASHBOARD FEATURE FOR CLOUD BASE PASSED & FAILED VIDEOS
* First login into your Cypress Dashboard
* Give Project Name and configure the provided steps
* Above steps will stored local project to Cloud area.
* Add provided ProjectID into cypress.config.js local file so all local execution results will store in cloud as well.
* Add --record key which is available on dashboard under local run in command to run execution on cloud as well.
* If user wants to RERUN only failed cases again after first execution then using Retries object, you can set a number to execute failure cases only: on cy.config file, add below object details:
retries:{
  runMode: 1
},

## CICD USING GENKINS
* I cannot setup genkins in system because of security issues so below are the steps for genkins with cypress.
* First need to download WAR jenkins file (Generic Java Package (.WAR)) from here: https://www.jenkins.io/download/
* Above genkins version requires Java version 11 or above
* Open CMD from where the war file downloaded.
* Add this command: java -jar jenkins.war -httpPort=9090 click enter
* open localhost:9090 into browser, give admin name and admin password in genkins dashboard.
* You need to create a new Job, so click to 'New Item' over genkins dashboard.
* Give Project name and for basic select 'freestyle' job option and click OK.
* Now give project path, If using git then give Repo url and if you have local path then click to Advance and tick 'Use Custom workspace' and give project folder path.
* Now, if you want genkins to execute with different 'Scripts' like chrome/electron mode then select 'This Project is parameterized' option => Add Parameter => Choice Paramter => Give name as 'scripts' and add choices.
* So when you click 'build with paramters', you have all your execution choices. 
* Now go to Configure again, Add 'Add build step' and select 'Execute Shell' and add command: npm run "$Script"
* Now click to 'build with paramters', select script choice and click to BUILD. 