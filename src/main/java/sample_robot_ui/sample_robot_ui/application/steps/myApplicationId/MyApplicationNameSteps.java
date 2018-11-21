package sample_robot_ui.sample_robot_ui.application.steps.myApplicationId;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import noraui.application.page.Page;
import noraui.application.steps.Step;
import noraui.browser.Auth;
import noraui.exception.FailureException;
import noraui.exception.Result;
import noraui.exception.TechnicalException;
import noraui.utils.Context;
import noraui.utils.Messages;
import noraui.utils.Utilities;
import sample_robot_ui.sample_robot_ui.application.pages.myApplicationId.MyApplicationNamePage;

public class MyApplicationNameSteps extends Step {

    private MyApplicationNamePage myApplicationIdPage;

    public MyApplicationNameSteps() throws TechnicalException {
        super();
        this.myApplicationIdPage = (MyApplicationNamePage) Page.getInstance(MyApplicationNamePage.class);
    }

    @Test
    public void sampleTest() {
        System.setProperty("webdriver.chrome.driver", "C:\\pathto\\my\\chromedriver.exe");

        System.out.print(System.getProperty("webdriver.chrome.driver"));
        WebDriver driver = new ChromeDriver();
        driver.quit();

    }

    /**
     * Check Login page.
     *
     * @throws FailureException
     *             if the scenario encounters a functional error.
     */
    @Then("The MYAPPLICATIONID home page is displayed")
    public void checkMyApplicationNameLoginPage() throws FailureException {
        if (!myApplicationIdPage.checkPage()) {
            new Result.Failure<>(myApplicationIdPage.getApplication(), Messages.FAIL_MESSAGE_UNKNOWN_CREDENTIALS, true, myApplicationIdPage.getCallBack());
        }
    }

    /**
     * Log in to MYAPPLICATIONID without NoraRobot (login and password in Gherkin scenario).
     *
     * @param login
     *            Login to use.
     * @param password
     *            Password to use.
     * @throws FailureException
     *             if the scenario encounters a functional error.
     */
    @When("I log in to MYAPPLICATIONID as '(.*)' '(.*)'")
    public void logInToMyApplicationName(String login, String password) throws FailureException {
        try {
            Utilities.findElement(myApplicationIdPage.accountMenu).click();
            Context.waitUntil(ExpectedConditions.presenceOfElementLocated(noraui.utils.Utilities.getLocator(myApplicationIdPage.signinMenu))).click();

            Context.waitUntil(ExpectedConditions.presenceOfElementLocated(Utilities.getLocator(myApplicationIdPage.signInButton)));
            Utilities.findElement(myApplicationIdPage.login).sendKeys(login);
            Utilities.findElement(myApplicationIdPage.password).sendKeys(password);
            Utilities.findElement(myApplicationIdPage.signInButton).click();
        }
        catch (Exception e) {
            new Result.Failure<>(e, Messages.FAIL_MESSAGE_UNKNOWN_CREDENTIALS, true, myApplicationIdPage.getCallBack());
        }
    }

    /**
     * Check MyApplicationName portal page.
     *
     * @throws FailureException
     *             if the scenario encounters a functional error.
     */
    @Then("The MYAPPLICATIONID portal is displayed")
    public void checkMyApplicationNamePage() throws FailureException {
        try {
            Context.waitUntil(ExpectedConditions.presenceOfElementLocated(noraui.utils.Utilities.getLocator(myApplicationIdPage.signInMessage)));
            if (!myApplicationIdPage.isDisplayed()) {
                logInToMyApplicationNameWithNoraRobot();
            }
            if (!myApplicationIdPage.checkPage()) {
                new Result.Failure<>(myApplicationIdPage.getApplication(), Messages.FAIL_MESSAGE_UNKNOWN_CREDENTIALS, true, myApplicationIdPage.getCallBack());
            }
        }
        catch (Exception e) {
            new Result.Failure<>(myApplicationIdPage.getApplication(), Messages.FAIL_MESSAGE_UNKNOWN_CREDENTIALS, true, myApplicationIdPage.getCallBack());
        }
        Auth.setConnected(true);
    }

    /**
     * Logout of MyApplicationName.
     * 
     * @throws FailureException
     *             if the scenario encounters a functional error.
     * @throws TechnicalException
     *             is thrown if you have a technical error (format, configuration, datas, ...) in
     *             NoraUi.
     */
    @When("I log out of MYAPPLICATIONID")
    public void logOutOfMyApplicationName() throws FailureException, TechnicalException {
        if (Auth.isConnected()) {
            getDriver().switchTo().defaultContent();
            clickOn(myApplicationIdPage.accountMenu);
            Context.waitUntil(ExpectedConditions.presenceOfElementLocated(noraui.utils.Utilities.getLocator(myApplicationIdPage.signoutMenu))).click();
        }
    }

    /**
     * Check Logout page.
     */
    @Then("The MYAPPLICATIONID logout page is displayed")
    public void checkMyApplicationNameLogoutPage() {
        myApplicationIdPage.checkPage();
    }

    /**
     * Log in to MYAPPLICATIONID with NoraRobot (login and password in job parameters).
     *
     * @throws FailureException
     *             if the scenario encounters a functional error.
     */
    private void logInToMyApplicationNameWithNoraRobot() throws FailureException {
        String login = Auth.getLogin();
        String password = Auth.getPassword();
        if (!"".equals(login) && !"".equals(password)) {
            logInToMyApplicationName(login, password);
        }
    }

}
