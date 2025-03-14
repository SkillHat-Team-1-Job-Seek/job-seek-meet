# Job seek Meet

## Project Overview

## About

**Problem:**  
As a job seeker, the job search process can feel lonely and isolating.

**Solution:**  
Our web app can help job seekers connect with other job seekers so they can co-work on the job search process to feel less lonely, share ideas, and have accountability.

This can function similar to Meetup.com. The idea is to create community for job seekers.
\*Note: I added this to Confluence here: https://tcaa11team1.atlassian.net/l/cp/j8QK2Co2

Live link: is at http://

Doc link: https://

## Installation Instructions

### Prerequisites

# Commit Standards

## Branches

- **main** -> pr this branch for everything `project` related and wait for review.

## Contributions

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/SkillHat-Team-1-Job-Seek/job-seek-meet.git`.
2. Open your terminal & set the origin branch: `git remote add origin https://github.com/SkillHat-Team-1-Job-Seek/job-seek-meet.git`
3. Pull origin `git pull origin main`
4. Create a new branch for the task you were assigned to, eg `TicketNumber/(Feat/Bug/Fix/Chore)/Ticket-title` : `git checkout -b BA-001/Feat/Sign-Up-from`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull origin main`.
8. Push changes to your new branch, run `git push -u origin feat-csv-parser`.
9. Create a pull request to the `main`.
10. Ensure to describe your pull request.
11. > If you've added code that should be tested, add some test examples.

# Merging

Wait for review before merge a pull request on the `main` branch

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)     |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify, backend or test files                                                      |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file`:= `chore` is used because the commit didn't make any changes to the backend or test folders in any way.
- `feat: Added plugin info endpoints`:= `feat` is used here because the feature was non-existent before the commit.
