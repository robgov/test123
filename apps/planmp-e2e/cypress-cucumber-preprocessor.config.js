const path = require("path")

	const stepDefinitionsPath = path.resolve(process.cwd(), "./src/integration")
	const outputFolder = path.resolve(process.cwd(), "../../dist/cypress/apps/planmp-e2e/cucumber-json")


	module.exports = {
  	 
  	nonGlobalStepDefinitions: true,
  	stepDefinitions: stepDefinitionsPath,
 	 cucumberJson: {
  	  generate: true,
  	  outputFolder: outputFolder,
   	 filePrefix: "",
   	 fileSuffix: ".cucumber",
  		},
	}