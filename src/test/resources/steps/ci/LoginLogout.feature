@LoginLogout
Feature: LoginLogout (Scenario that 1st sample.) 

	Scenario Outline:  "Scenario that 1st sample."
	
    Given I check that user '<user>' is not empty.
    Given I check that password '<password>' is not empty.
    
    Given 'MYAPPLICATIONID_HOME' is opened.
    Then The MYAPPLICATIONID home page is displayed
      
    When I log in to MYAPPLICATIONID as '<user>' '<password>'
    Then The MYAPPLICATIONID portal is displayed
      
    When I log out of MYAPPLICATIONID
    Then The MYAPPLICATIONID logout page is displayed

    And I go back to 'MYAPPLICATIONID_HOME'
		
	Examples:
	  #DATA
	  |id|user|password|
    |1|sopra3|afpa|
    |2|user|user|
    |3|user|user|
    |4|user|user|
    #END