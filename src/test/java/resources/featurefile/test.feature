Feature: Search Test
  As a user I can add all data and search the job

  Scenario Outline: User can use different data for search
    Given I am on home page
    When I accept cookies
    And I enter job title "<jobTitle>"
    And I enter location "<location>"
    And I select distance "<distance>"
    And I click on the more search option link
    And I enter minimum salary "<salaryMin>"
    And I enter maximum salary "<salaryMax>"
    And I select salary type "<salaryType>"
    And I select job type "<jobType>"
    And I click on find jobs button
    Then I verify the result "<result>"
    Examples:
      | jobTitle      | location    | distance       | salaryMin | salaryMax | salaryType | jobType   | result                                      |
      | Tester        | Harrow      | up to 5 miles  | 30000     | 500000    | Per annum  | Permanent | Permanent Tester jobs in Harrow on the Hill |
      | Tester        | East london | up to 10 miles | 25000     | 45000     | Per annum  | Permanent | Permanent Tester jobs in East London        |
      | Test Engineer | London      | up to 7 miles  | 45000     | 65000     | Per annum  | Permanent | Permanent Test Engineer jobs in London      |
      | Administrator | West London | up to 10 miles | 20000     | 30000     | Per annum  | Contract  | Contract Administrator jobs in West London  |
      | Electrician   | Wembley     | up to 5 miles  | 100       | 500       | Per day    | Permanent | Permanent Electrician jobs in Wembley       |
      | Accountant    | Oxfordshire | up to 5 miles  | 10        | 20        | Per hour   | Temporary | Temporary Accountant jobs in Oxfordshire    |
