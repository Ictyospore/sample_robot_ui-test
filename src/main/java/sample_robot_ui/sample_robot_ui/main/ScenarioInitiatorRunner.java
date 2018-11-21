package sample_robot_ui.sample_robot_ui.main;

import sample_robot_ui.sample_robot_ui.utils.NoraRobotContext;

import noraui.main.ScenarioInitiator;

public class ScenarioInitiatorRunner {

    public static void main(String[] args) {
        NoraRobotContext.getInstance().initializeEnv("NoraRobot.properties");
        new ScenarioInitiator().start(args);
    }

}
