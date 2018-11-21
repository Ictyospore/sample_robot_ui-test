package sample_robot_ui.sample_robot_ui.utils;

import org.apache.log4j.Logger;

import noraui.application.Application;
import noraui.application.page.Page;
import noraui.utils.Context;

public class NoraRobotContext extends Context {

    /**
     * Specific logger.
     */
    private static final Logger logger = Logger.getLogger(NoraRobotContext.class);

    public static final String MYAPPLICATIONID_KEY = "myApplicationId";
    public static final String MYAPPLICATIONID_HOME = "MYAPPLICATIONID_HOME";
    public static final String MYAPPLICATIONID_APP = "myApplicationId.app";

    public static final String GO_TO_MYAPPLICATIONID_HOME = "GO_TO_MYAPPLICATIONID_HOME";
    public static final String CLOSE_WINDOW_AND_SWITCH_TO_MYAPPLICATIONID_HOME = "CLOSE_WINDOW_AND_SWITCH_TO_MYAPPLICATIONID_HOME";
    public static final String CLOSE_ALL_WINDOWS_AND_SWITCH_TO_MYAPPLICATIONID_HOME = "CLOSE_ALL_WINDOWS_AND_SWITCH_TO_MYAPPLICATIONID_HOME";

    private String myApplicationIdHome; // MYAPPLICATIONID home url

    /**
     * Constructor is useless because all attributes are static
     */
    private NoraRobotContext() {
        super();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public synchronized void initializeRobot(Class clazz) {
        super.initializeRobot(clazz);
        logger.info("NoraRobotContext > initializeRobot()");

        // Urls configuration
        myApplicationIdHome = setProperty(MYAPPLICATIONID_KEY, applicationProperties);

        // Selectors configuration
        initApplicationDom(clazz.getClassLoader(), selectorsVersion, MYAPPLICATIONID_KEY);
 
        
        exceptionCallbacks.put(GO_TO_MYAPPLICATIONID_HOME, STEPS_BROWSER_STEPS_CLASS_QUALIFIED_NAME, GO_TO_URL_METHOD_NAME, MYAPPLICATIONID_HOME);
        exceptionCallbacks.put(CLOSE_WINDOW_AND_SWITCH_TO_MYAPPLICATIONID_HOME, STEPS_BROWSER_STEPS_CLASS_QUALIFIED_NAME, "closeWindowAndSwitchTo", MYAPPLICATIONID_KEY, MYAPPLICATIONID_HOME);
        exceptionCallbacks.put(CLOSE_ALL_WINDOWS_AND_SWITCH_TO_MYAPPLICATIONID_HOME, STEPS_BROWSER_STEPS_CLASS_QUALIFIED_NAME, "closeAllWindowsAndSwitchTo", MYAPPLICATIONID_KEY);

        applications.put(MYAPPLICATIONID_KEY, new Application(MYAPPLICATIONID_HOME, myApplicationIdHome));

        Page.setPageMainPackage("sample_robot_ui.sample_robot_ui.application.pages.");
    }
    
    /**
     * Get context singleton.
     *
     * @return context instance
     */
    public static Context getInstance() {
        if (instance == null || !(instance instanceof NoraRobotContext)) {
            instance = new NoraRobotContext();
        }
        return instance;
    }

    public String getMyApplicationIdHome() {
        return myApplicationIdHome;
    }

}
