# Job seek Meet

## Project Overview

## About

**Problem:**  
As a job seeker, the job search process can feel lonely and isolating.

**Solution:**  
Our web app can help job seekers connect with other job seekers so they can co-work on the job search process to feel less lonely, share ideas, and have accountability.

This can function similar to Meetup.com. The idea is to create community for job seekers.
\*Note: I added this to Confluence here: https://tcaa11team1.atlassian.net/l/cp/j8QK2Co2

Live link: is at https://job-seek-meet.onrender.com/

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

## Database Migrations
When making changes to the database schema, we use Alembic for managing migrations. Follow the steps below to create and apply migrations.

### Creating a New Migration
If you modify the database models, you need to generate a migration file to track the changes.
1. Activate the virtual environment (if not already activated):
- macOS/Linux:

    ```source .venv/bin/activate```

- Windows:

    ```.venv\Scripts\activate```

2. Navigate to the project root folder (if not already there):

    ```cd job-seek-meet```

3. Generate a migration script:

    ```alembic revision --autogenerate -m "Describe your migration change here"```

    - This creates a migration script inside ```alembic/versions/```.

4. Review the generated migration file in ```alembic/versions/```. Check for accuracy, especially for table alterations, column changes, and constraints.


5. Apply the migration to the database:
    
    ```alembic upgrade head```

### Applying Migrations from Another Teammate’s Branch

If a teammate has already created a migration and merged it into the branch you're working on, follow these steps to apply the changes:

1. Pull the latest changes from main (or the relevant branch):

    ```git pull origin main```

2. Apply the latest migrations:

    ```alembic upgrade head```

3. Verify that the database reflects the latest schema changes by inspecting tables or running queries.

### Seeding the Database (Optional)
- To populate the users table with test data locally, follow these steps:

1. Connect to the PostgreSQL database:

    ```psql -h dpg-cvdjk03qf0us73fb7350-a.oregon-postgres.render.com -U team1_job_seek_meet_user -d team1_job_seek_meet```

    - Enter the password from Render under the project's Info section when prompted.

2. Run the seeder script:

    ```python app/backend/db/seed.py```
    - Ensure your virtual environment is activated before running this command.

3. Verify the seeded data:
- Inside psql, run:

    ```SELECT * FROM users;```

- Expected output:
```
i id | first_name |          email          |     password      |         created_at         
----+------------+-------------------------+-------------------+----------------------------
  4 | John       | john.doe@example.com    | hashed_password_1 | 2025-03-26 02:02:13.938707
  5 | Jane       | jane.doe@example.com    | hashed_password_2 | 2025-03-26 02:02:13.938707
  6 | Alice      | alice.smith@example.com | hashed_password_3 | 2025-03-26 02:02:13.938707
(3 rows)
```

4. Exit the database session: 
    
    ```\q```


**Troubleshooting:**

- If you encounter issues, check your database connection settings in ```alembic.ini``` or ```alembic/env.py```.

- Run ```alembic current``` to check your current migration state.
    - This will show the latest applied migration. Ensure the migration ID in the output matches the latest migration file in ```alembic/versions/```.

## Deployment on Render

This repo is deployed as a monolithic application in Render.
The following is an outline of how deployment has been configured.

✅ Render Deployment Fields Configuration
1️⃣ Language
➡️ Python (since the backend is FastAPI)

2️⃣ Branch
➡️ main

3️⃣ Region
➡️ Oregon (US West)

4️⃣ Root Directory
➡️ app/backend (since FastAPI is the main entry point)

5️⃣ Build Command
cd ../frontend && npm install && npm run build
pip install -r requirements.txt
(Reasoning: First, we navigate to frontend, install dependencies, and build the React app.
Then, we install FastAPI dependencies from requirements.txt.)

6️⃣ Start Command
uvicorn main:app --host 0.0.0.0 --port 8000
(This starts the FastAPI backend, which also serves the built React frontend.)


✅  Environment Variables That Were Set in Render Dashboard → Environment → Add Env Var:

DATABASE_URL → (PostgreSQL connection string)

SECRET_KEY → (secure secret key generated in VS terminal)


