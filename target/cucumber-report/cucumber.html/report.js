$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Search Test",
  "description": "As a user I can add all data and search the job",
  "id": "search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User can use different data for search",
  "description": "",
  "id": "search-test;user-can-use-different-data-for-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-test;user-can-use-different-data-for-search;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 18,
      "id": "search-test;user-can-use-different-data-for-search;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 19,
      "id": "search-test;user-can-use-different-data-for-search;;2"
    },
    {
      "cells": [
        "Tester",
        "East london",
        "up to 10 miles",
        "25000",
        "45000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in East London"
      ],
      "line": 20,
      "id": "search-test;user-can-use-different-data-for-search;;3"
    },
    {
      "cells": [
        "Test Engineer",
        "London",
        "up to 7 miles",
        "45000",
        "65000",
        "Per annum",
        "Permanent",
        "Permanent Test Engineer jobs in London"
      ],
      "line": 21,
      "id": "search-test;user-can-use-different-data-for-search;;4"
    },
    {
      "cells": [
        "Administrator",
        "West London",
        "up to 10 miles",
        "20000",
        "30000",
        "Per annum",
        "Contract",
        "Contract Administrator jobs in West London"
      ],
      "line": 22,
      "id": "search-test;user-can-use-different-data-for-search;;5"
    },
    {
      "cells": [
        "Electrician",
        "Wembley",
        "up to 5 miles",
        "100",
        "500",
        "Per day",
        "Permanent",
        "Permanent Electrician jobs in Wembley"
      ],
      "line": 23,
      "id": "search-test;user-can-use-different-data-for-search;;6"
    },
    {
      "cells": [
        "Accountant",
        "Oxfordshire",
        "up to 5 miles",
        "10",
        "20",
        "Per hour",
        "Temporary",
        "Temporary Accountant jobs in Oxfordshire"
      ],
      "line": 24,
      "id": "search-test;user-can-use-different-data-for-search;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6175968600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User can use different data for search",
  "description": "",
  "id": "search-test;user-can-use-different-data-for-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 166211500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 5205862900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2135524500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 85788700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 171756600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 231256200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 288388000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 111951300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 77733600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 153480900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 131863100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 61800,
  "status": "passed"
});
formatter.after({
  "duration": 972906800,
  "status": "passed"
});
formatter.before({
  "duration": 3087089300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User can use different data for search",
  "description": "",
  "id": "search-test;user-can-use-different-data-for-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"East london\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"45000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Permanent Tester jobs in East London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 45100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 5139044000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2099289500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "East london",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 91062800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 112024900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 276494100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 303904600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 89742600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 88342300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 111467400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 133611700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in East London",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 74600,
  "status": "passed"
});
formatter.after({
  "duration": 901237900,
  "status": "passed"
});
formatter.before({
  "duration": 3639608700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User can use different data for search",
  "description": "",
  "id": "search-test;user-can-use-different-data-for-search;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Test Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 7 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"45000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"65000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Permanent Test Engineer jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 33700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 5134380000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Engineer",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2123604100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 84237200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 7 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 102247900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 107596400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 270608300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "65000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 84772600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 76788000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 152962000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 126088000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Test Engineer jobs in London",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 60900,
  "status": "passed"
});
formatter.after({
  "duration": 894206300,
  "status": "passed"
});
formatter.before({
  "duration": 3768884400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User can use different data for search",
  "description": "",
  "id": "search-test;user-can-use-different-data-for-search;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Administrator\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"West London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"20000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"30000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Contract Administrator jobs in West London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 5105944600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2108225300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "West London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 93429900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 96176200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 126321900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 235327800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 93212300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 79368600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 153058600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 154202800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Administrator jobs in West London",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 77400,
  "status": "passed"
});
formatter.after({
  "duration": 996069200,
  "status": "passed"
});
formatter.before({
  "duration": 3117622200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User can use different data for search",
  "description": "",
  "id": "search-test;user-can-use-different-data-for-search;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Electrician\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Wembley\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"100\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per day\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Permanent Electrician jobs in Wembley\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 5122782900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electrician",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2119262500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wembley",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 79799200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 101460400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 102596800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 310794900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 80936700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 103885900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 93737700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 123599700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Electrician jobs in Wembley",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 69000,
  "status": "passed"
});
formatter.after({
  "duration": 964879900,
  "status": "passed"
});
formatter.before({
  "duration": 3799550100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User can use different data for search",
  "description": "",
  "id": "search-test;user-can-use-different-data-for-search;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Accountant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Oxfordshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter minimum salary \"10\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter maximum salary \"20\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per hour\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Temporary\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I verify the result \"Temporary Accountant jobs in Oxfordshire\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 46400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 5131254500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2120692800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxfordshire",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 84642900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 107768000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnTheMoreSearchOptionLink()"
});
formatter.result({
  "duration": 107103100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMinimumSalary(String)"
});
formatter.result({
  "duration": 270455600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 99799800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per hour",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 123800600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 144912200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 124810700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Temporary Accountant jobs in Oxfordshire",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 89800,
  "status": "passed"
});
formatter.after({
  "duration": 937957800,
  "status": "passed"
});
});