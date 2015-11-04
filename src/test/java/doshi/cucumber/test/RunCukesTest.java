package doshi.cucumber.test;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:",
				 plugin= {"pretty", "html:target/cucumber-html-report","json:cucumber.json"},
				 tags = {"@wip"})
public class RunCukesTest {

}
