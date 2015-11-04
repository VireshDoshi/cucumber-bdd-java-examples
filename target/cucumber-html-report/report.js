$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("doshi/cucumber/test/omdb_api.feature");
formatter.feature({
  "line": 1,
  "name": "IMDB rest api gets",
  "description": "",
  "id": "imdb-rest-api-gets",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I query movie by \"\u003ctitle\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "response should contain \"\u003cgenres\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "No special characters in movie titles",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;no-special-characters-in-movie-titles",
  "rows": [
    {
      "cells": [
        "title",
        "genres"
      ],
      "line": 22,
      "id": "imdb-rest-api-gets;get-many-movies-by-title;no-special-characters-in-movie-titles;1"
    },
    {
      "cells": [
        "Finding Nemo",
        "{\"Genre\": \"Animation, Adventure, Comedy\"}"
      ],
      "line": 23,
      "id": "imdb-rest-api-gets;get-many-movies-by-title;no-special-characters-in-movie-titles;2"
    },
    {
      "cells": [
        "Inception",
        "{\"Genre\": \"Action, Mystery, Sci-Fi\"}"
      ],
      "line": 24,
      "id": "imdb-rest-api-gets;get-many-movies-by-title;no-special-characters-in-movie-titles;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;no-special-characters-in-movie-titles;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I query movie by \"Finding Nemo\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "response should contain \"{\"Genre\": \"Animation, Adventure, Comedy\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Finding Nemo",
      "offset": 18
    }
  ],
  "location": "omdbSteps.i_query_movie_by(String)"
});
formatter.result({
  "duration": 232724082,
  "status": "passed"
});
formatter.match({
  "location": "omdbSteps.i_make_the_rest_call()"
});
formatter.result({
  "duration": 548080993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\": \"Animation, Adventure, Comedy\"}",
      "offset": 25
    }
  ],
  "location": "omdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 7260946,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;no-special-characters-in-movie-titles;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I query movie by \"Inception\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "response should contain \"{\"Genre\": \"Action, Mystery, Sci-Fi\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Inception",
      "offset": 18
    }
  ],
  "location": "omdbSteps.i_query_movie_by(String)"
});
formatter.result({
  "duration": 185343,
  "status": "passed"
});
formatter.match({
  "location": "omdbSteps.i_make_the_rest_call()"
});
formatter.result({
  "duration": 182841970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\": \"Action, Mystery, Sci-Fi\"}",
      "offset": 25
    }
  ],
  "location": "omdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 241791,
  "status": "passed"
});
formatter.examples({
  "line": 26,
  "name": "Special characters in movie titles",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;special-characters-in-movie-titles",
  "rows": [
    {
      "cells": [
        "title",
        "genres"
      ],
      "line": 27,
      "id": "imdb-rest-api-gets;get-many-movies-by-title;special-characters-in-movie-titles;1"
    },
    {
      "cells": [
        "WALL·E",
        "{\"Genre\": \"Animation, Adventure, Family\"}"
      ],
      "line": 28,
      "id": "imdb-rest-api-gets;get-many-movies-by-title;special-characters-in-movie-titles;2"
    },
    {
      "cells": [
        "8½",
        "{\"Genre\": \"Drama\" }"
      ],
      "line": 29,
      "id": "imdb-rest-api-gets;get-many-movies-by-title;special-characters-in-movie-titles;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;special-characters-in-movie-titles;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I query movie by \"WALL·E\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "response should contain \"{\"Genre\": \"Animation, Adventure, Family\"}\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "WALL·E",
      "offset": 18
    }
  ],
  "location": "omdbSteps.i_query_movie_by(String)"
});
formatter.result({
  "duration": 273122,
  "status": "passed"
});
formatter.match({
  "location": "omdbSteps.i_make_the_rest_call()"
});
formatter.result({
  "duration": 177183502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\": \"Animation, Adventure, Family\"}",
      "offset": 25
    }
  ],
  "location": "omdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 330608,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Get many movies by title",
  "description": "",
  "id": "imdb-rest-api-gets;get-many-movies-by-title;special-characters-in-movie-titles;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I query movie by \"8½\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I make the rest call",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "response should contain \"{\"Genre\": \"Drama\" }\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "8½",
      "offset": 18
    }
  ],
  "location": "omdbSteps.i_query_movie_by(String)"
});
formatter.result({
  "duration": 217424,
  "status": "passed"
});
formatter.match({
  "location": "omdbSteps.i_make_the_rest_call()"
});
formatter.result({
  "duration": 155207687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{\"Genre\": \"Drama\" }",
      "offset": 25
    }
  ],
  "location": "omdbSteps.response_should_contain(String)"
});
formatter.result({
  "duration": 267177,
  "status": "passed"
});
});