First thing to do after cloning this project:

Create your own .env file in the root of the project
In the .env-file: add 

PORT=5555

DB_NAME=semester_case

CONNECTION="YOUR DB CONNECTION"

DEBUG=www,app,setup-friend-testdata,friend-routes

#Comment out the line below, or BETTER remove it to get authentication if you have added this to the project
SKIP_AUTHENTICATION=1

#NODE_ENV=production