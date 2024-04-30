import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { AppModule } from './app/app.module';

console.log("**************")
console.log(process)
console.log("__DEV__",__DEV__)
if(process.env.MY_API_ENDPOINT)
    console.log("MY_API_ENDPOINT",process.env.MY_API_ENDPOINT) // https://staging-api-host/api/v2
if(process.env.MY_API_SECRET)
    console.log("MY_API_SECRET", process.env.MY_API_SECRET)

console.log("ENVIRONMENT IS")
if(process.env.DEV)
	console.log("dev is ", process.env.DEV)
if(process.env.TEST)
	console.log("test is ", process.env.TEST)
if(process.env.STAGE)
	console.log("stage is ", process.env.STAGE)
if(process.env.PROD)
	console.log("prod is ", process.env.PROD)
console.log("**************")

runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

