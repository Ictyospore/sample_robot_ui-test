$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("steps/ci/LoginLogout.feature");
formatter.feature({
  "line": 2,
  "name": "LoginLogout (Scenario that 1st sample.)",
  "description": "",
  "id": "loginlogout-(scenario-that-1st-sample.)",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginLogout"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "\"Scenario that 1st sample.\"",
  "description": "",
  "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I check that user \u0027\u003cuser\u003e\u0027 is not empty.",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I check that password \u0027\u003cpassword\u003e\u0027 is not empty.",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "\u0027MYAPPLICATIONID_HOME\u0027 is opened.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "The MYAPPLICATIONID home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log in to MYAPPLICATIONID as \u0027\u003cuser\u003e\u0027 \u0027\u003cpassword\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The MYAPPLICATIONID portal is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I log out of MYAPPLICATIONID",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The MYAPPLICATIONID logout page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I go back to \u0027MYAPPLICATIONID_HOME\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\";",
  "rows": [
    {
      "comments": [
        {
          "line": 21,
          "value": "#DATA"
        }
      ],
      "cells": [
        "id",
        "user",
        "password"
      ],
      "line": 22,
      "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\";;1"
    },
    {
      "cells": [
        "1",
        "sopra3",
        "afpa"
      ],
      "line": 23,
      "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\";;2"
    },
    {
      "cells": [
        "2",
        "user",
        "user"
      ],
      "line": 24,
      "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\";;3"
    },
    {
      "cells": [
        "3",
        "user",
        "user"
      ],
      "line": 25,
      "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\";;4"
    },
    {
      "cells": [
        "4",
        "user",
        "user"
      ],
      "line": 26,
      "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\";;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1116688868,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "\"Scenario that 1st sample.\"",
  "description": "",
  "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginLogout"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I check that user \u0027sopra3\u0027 is not empty.",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I check that password \u0027afpa\u0027 is not empty.",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "\u0027MYAPPLICATIONID_HOME\u0027 is opened.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "The MYAPPLICATIONID home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log in to MYAPPLICATIONID as \u0027sopra3\u0027 \u0027afpa\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The MYAPPLICATIONID portal is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I log out of MYAPPLICATIONID",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The MYAPPLICATIONID logout page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I go back to \u0027MYAPPLICATIONID_HOME\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 13
    },
    {
      "val": "sopra3",
      "offset": 19
    }
  ],
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "duration": 233110032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    },
    {
      "val": "afpa",
      "offset": 23
    }
  ],
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "duration": 1014562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MYAPPLICATIONID_HOME",
      "offset": 1
    }
  ],
  "location": "BrowserSteps.openUrlIfDifferent(String,GherkinStepCondition\u003e)"
});
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 7880787000,
  "error_message": "java.lang.AssertionError: Échec : Ouverture MYAPPLICATIONID. [unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 21 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027ITEM-S65884\u0027, ip: \u002710.55.31.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1), userDataDir\u003dd:\\Profiles\\hmaury\\AppData\\Local\\Temp\\scoped_dir18264_21843}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d70.0.3538.102, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003daccept}]\nSession ID: 516ee89e8301d064c8d20bd83fbaadd5]\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat noraui.exception.Result$Failure.fail(Result.java:178)\r\n\tat noraui.cucumber.interceptor.StepInterceptor.invoke(StepInterceptor.java:66)\r\n\tat noraui.cucumber.interceptor.ConditionedInterceptor.invoke(ConditionedInterceptor.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:48)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n\tat ✽.Given \u0027MYAPPLICATIONID_HOME\u0027 is opened.(steps/ci/LoginLogout.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNameLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sopra3",
      "offset": 32
    },
    {
      "val": "afpa",
      "offset": 41
    }
  ],
  "location": "MyApplicationNameSteps.logInToMyApplicationName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNamePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.logOutOfMyApplicationName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNameLogoutPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MYAPPLICATIONID_HOME",
      "offset": 14
    }
  ],
  "location": "BrowserSteps.goToUrl(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 13931619,
  "status": "passed"
});
formatter.before({
  "duration": 35410710,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "\"Scenario that 1st sample.\"",
  "description": "",
  "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginLogout"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I check that user \u0027user\u0027 is not empty.",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I check that password \u0027user\u0027 is not empty.",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "\u0027MYAPPLICATIONID_HOME\u0027 is opened.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "The MYAPPLICATIONID home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log in to MYAPPLICATIONID as \u0027user\u0027 \u0027user\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The MYAPPLICATIONID portal is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I log out of MYAPPLICATIONID",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The MYAPPLICATIONID logout page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I go back to \u0027MYAPPLICATIONID_HOME\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 13
    },
    {
      "val": "user",
      "offset": 19
    }
  ],
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "duration": 761581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    },
    {
      "val": "user",
      "offset": 23
    }
  ],
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "duration": 606018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MYAPPLICATIONID_HOME",
      "offset": 1
    }
  ],
  "location": "BrowserSteps.openUrlIfDifferent(String,GherkinStepCondition\u003e)"
});
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 7129289513,
  "error_message": "java.lang.AssertionError: Échec : Ouverture MYAPPLICATIONID. [unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 25 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027ITEM-S65884\u0027, ip: \u002710.55.31.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1), userDataDir\u003dd:\\Profiles\\hmaury\\AppData\\Local\\Temp\\scoped_dir23328_31853}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d70.0.3538.102, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003daccept}]\nSession ID: 97ab7004470f5595a99be4db516d1fc1]\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat noraui.exception.Result$Failure.fail(Result.java:178)\r\n\tat noraui.cucumber.interceptor.StepInterceptor.invoke(StepInterceptor.java:66)\r\n\tat noraui.cucumber.interceptor.ConditionedInterceptor.invoke(ConditionedInterceptor.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:48)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n\tat ✽.Given \u0027MYAPPLICATIONID_HOME\u0027 is opened.(steps/ci/LoginLogout.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNameLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 32
    },
    {
      "val": "user",
      "offset": 39
    }
  ],
  "location": "MyApplicationNameSteps.logInToMyApplicationName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNamePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.logOutOfMyApplicationName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNameLogoutPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MYAPPLICATIONID_HOME",
      "offset": 14
    }
  ],
  "location": "BrowserSteps.goToUrl(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 587517,
  "status": "passed"
});
formatter.before({
  "duration": 45688851,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "\"Scenario that 1st sample.\"",
  "description": "",
  "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginLogout"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I check that user \u0027user\u0027 is not empty.",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I check that password \u0027user\u0027 is not empty.",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "\u0027MYAPPLICATIONID_HOME\u0027 is opened.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "The MYAPPLICATIONID home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log in to MYAPPLICATIONID as \u0027user\u0027 \u0027user\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The MYAPPLICATIONID portal is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I log out of MYAPPLICATIONID",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The MYAPPLICATIONID logout page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I go back to \u0027MYAPPLICATIONID_HOME\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 13
    },
    {
      "val": "user",
      "offset": 19
    }
  ],
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "duration": 1142183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    },
    {
      "val": "user",
      "offset": 23
    }
  ],
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "duration": 649440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MYAPPLICATIONID_HOME",
      "offset": 1
    }
  ],
  "location": "BrowserSteps.openUrlIfDifferent(String,GherkinStepCondition\u003e)"
});
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 6920076604,
  "error_message": "java.lang.AssertionError: Échec : Ouverture MYAPPLICATIONID. [unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 25 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027ITEM-S65884\u0027, ip: \u002710.55.31.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1), userDataDir\u003dd:\\Profiles\\hmaury\\AppData\\Local\\Temp\\scoped_dir21772_20082}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d70.0.3538.102, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003daccept}]\nSession ID: 5b43f3ee872ff114cd3b4571717d51b8]\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat noraui.exception.Result$Failure.fail(Result.java:178)\r\n\tat noraui.cucumber.interceptor.StepInterceptor.invoke(StepInterceptor.java:66)\r\n\tat noraui.cucumber.interceptor.ConditionedInterceptor.invoke(ConditionedInterceptor.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:48)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n\tat ✽.Given \u0027MYAPPLICATIONID_HOME\u0027 is opened.(steps/ci/LoginLogout.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNameLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 32
    },
    {
      "val": "user",
      "offset": 39
    }
  ],
  "location": "MyApplicationNameSteps.logInToMyApplicationName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNamePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.logOutOfMyApplicationName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNameLogoutPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MYAPPLICATIONID_HOME",
      "offset": 14
    }
  ],
  "location": "BrowserSteps.goToUrl(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5796251,
  "status": "passed"
});
formatter.before({
  "duration": 32670602,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "\"Scenario that 1st sample.\"",
  "description": "",
  "id": "loginlogout-(scenario-that-1st-sample.);\"scenario-that-1st-sample.\";;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginLogout"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I check that user \u0027user\u0027 is not empty.",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I check that password \u0027user\u0027 is not empty.",
  "matchedColumns": [
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "\u0027MYAPPLICATIONID_HOME\u0027 is opened.",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "The MYAPPLICATIONID home page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log in to MYAPPLICATIONID as \u0027user\u0027 \u0027user\u0027",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The MYAPPLICATIONID portal is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I log out of MYAPPLICATIONID",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The MYAPPLICATIONID logout page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I go back to \u0027MYAPPLICATIONID_HOME\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 13
    },
    {
      "val": "user",
      "offset": 19
    }
  ],
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "duration": 604508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    },
    {
      "val": "user",
      "offset": 23
    }
  ],
  "location": "CommonSteps.checkNotEmpty(String,String,GherkinStepCondition\u003e)"
});
formatter.result({
  "duration": 930738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MYAPPLICATIONID_HOME",
      "offset": 1
    }
  ],
  "location": "BrowserSteps.openUrlIfDifferent(String,GherkinStepCondition\u003e)"
});
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 6981293488,
  "error_message": "java.lang.AssertionError: Échec : Ouverture MYAPPLICATIONID. [unknown error: call function result missing \u0027value\u0027\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 34 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027ITEM-S65884\u0027, ip: \u002710.55.31.125\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_152\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.34.522940 (1a76f96f66e3ca7b8e57d503b4dd3bccfba87af1), userDataDir\u003dd:\\Profiles\\hmaury\\AppData\\Local\\Temp\\scoped_dir14200_2258}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d70.0.3538.102, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003daccept}]\nSession ID: 707be1699ae141ec7b3d5878e1d63329]\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat noraui.exception.Result$Failure.fail(Result.java:178)\r\n\tat noraui.cucumber.interceptor.StepInterceptor.invoke(StepInterceptor.java:66)\r\n\tat noraui.cucumber.interceptor.ConditionedInterceptor.invoke(ConditionedInterceptor.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:48)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunBefores.evaluate(RunBefores.java:26)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\r\n\tat ✽.Given \u0027MYAPPLICATIONID_HOME\u0027 is opened.(steps/ci/LoginLogout.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNameLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 32
    },
    {
      "val": "user",
      "offset": 39
    }
  ],
  "location": "MyApplicationNameSteps.logInToMyApplicationName(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNamePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.logOutOfMyApplicationName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyApplicationNameSteps.checkMyApplicationNameLogoutPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MYAPPLICATIONID_HOME",
      "offset": 14
    }
  ],
  "location": "BrowserSteps.goToUrl(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1140673,
  "status": "passed"
});
});