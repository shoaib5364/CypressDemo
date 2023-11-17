Feature: Test The Login Feature

Through this Feature User should be able to Login into Excel Edge Test Website Login Module

Scenario: Negative CASE: user should not be able to login with Invalid Credentials and Getting an 

Given Visit Excel Edge Test Demo Website

When Click to Sign In Button

When User provide Invalid Email & Password
|Email | Password |
|testuser10@tmailcloud.wq | shobi321 |

Then Click on Login Button & Verify the error

Scenario: Positive CASE: User able to login with valid Credentials

When User provide Valid Email & Password
|Email | Password |
|testuser4@tmailcloud.net | Shoaib123 |

Then Click on Login Button