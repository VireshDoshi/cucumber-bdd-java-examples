package doshi.cucumber.test;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.json.JSONException;
import org.json.JSONObject;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONCompareMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import doshi.omdb.helper.JsonReader;

public class omdbSteps {

	final Logger logger = LoggerFactory.getLogger(omdbSteps.class);
	private String omdb_url;
	private JSONObject json_response;
	
	@Given("^I query movie by \"([^\"]*)\"$")
	public void i_query_movie_by(String key) throws UnsupportedEncodingException {
		omdb_url = "http://omdbapi.com/?t=" + URLEncoder.encode(key, "UTF-8");
		logger.info("http query = " + omdb_url);
	}

	@When("^I make the rest call$")
	public void i_make_the_rest_call() throws IOException, JSONException {
		json_response = JsonReader.readJsonFromUrl(omdb_url);
		logger.info("Response = " + json_response.toString());
	}

	@Then("^response should contain:$")
	public void response_should_contain_json(String expected_json_str) throws JSONException {
		logger.info("Comparing reponse with" + expected_json_str);
		JSONObject expected_json = new JSONObject(expected_json_str);
		JSONAssert.assertEquals(expected_json, json_response, JSONCompareMode.LENIENT);
	}
	
	@Then("^response should contain \"(.+)\"")
	public void response_should_contain(String expecgted_json_str) throws JSONException {
		response_should_contain_json(expecgted_json_str);
	}
	
	
}
