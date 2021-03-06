package sample_robot_ui.sample_robot_ui.indus;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import sample_robot_ui.sample_robot_ui.utils.NoraRobotContext;

import noraui.indus.MavenRunCounter;
import noraui.utils.Context;

public class Counter {

    public static void main(String[] args) {
        List<String> manager = new ArrayList<>();

        List<String> scenarioBlacklist = new ArrayList<>();
        scenarioBlacklist.add("yourFirstScenario");

        List<String> versionControlSystemsBlacklist = new ArrayList<>();
        versionControlSystemsBlacklist.add(".svn");

        NoraRobotContext.getInstance().initializeEnv("NoraRobot.properties");

        MavenRunCounter mavenRunCounter = new MavenRunCounter();
        List<MavenRunCounter.Counter> counters = mavenRunCounter.count(versionControlSystemsBlacklist, scenarioBlacklist, manager, new File(Context.getResourcesPath() + "/steps"));
        mavenRunCounter.print(counters, args[0]);
    }

}
