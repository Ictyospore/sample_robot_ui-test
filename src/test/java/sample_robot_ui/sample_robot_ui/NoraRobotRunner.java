package sample_robot_ui.sample_robot_ui;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import sample_robot_ui.sample_robot_ui.utils.NoraRobotContext;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import noraui.utils.Context;

@RunWith(Cucumber.class)
@CucumberOptions(monochrome = true, glue = { "noraui.application.steps", "noraui.browser.steps", "sample_robot_ui.sample_robot_ui.application.steps" }, plugin = { "html:target/reports/html", "json:target/reports/json/cucumber.json", "junit:target/reports/junit/cucumber.xml" },
features = { "src/test/resources" })
public class NoraRobotRunner {

    /**
     * BeforeClass Read constants file
     */
    @BeforeClass
    public static void setUpClass() {
        NoraRobotContext.getInstance().initializeEnv("NoraRobot.properties");
        NoraRobotContext.getInstance().initializeRobot(NoraRobotRunner.class);
    }

    /**
     * AfterClass clear Context
     */
    @AfterClass
    public static void tearDownClass() {
        Context.clear();
    }

}
