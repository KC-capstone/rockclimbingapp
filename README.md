Some notes:

- Remember to <code>git push</code> and <code>git pull </code>whenever necessary.

- django-kcproject-starter instructions are in file "previousREADME.md"

- After initial pull from repo, go into main rockclimbingapp directory and do <code>pipenv shell</code>, <code>pipenv install --skip-lock --dev</code>

- Django files modified to work with React: settings/base.py, apps/core/views.py, apps/core/urls.py

- to load server: <code>python manage.py runserver</code>; to exit server: ctrl + c; to exit shell: <code>exit</code>

- To see React app while running server, go to url `localhost:8000/app/`

- If we end up using React router, check guide for adding React to Django project section in previousREADME.md --- something about 404? Seems a bit confusing right now.

- Speaking of routing, I'm not quite sure how to make these two different style of routing work together but I imagine we'll have primarily the single page app and then a login/sign up page. I'' try to understand this soon as we go on but if you have an idea let me know.

- Some tips from the end of that section: 
* To keep on using CRA's (React's) test server during development so you get
  live-reloading, running both Django and node simultaneously. To do this,
  you'll have to configure CRA's proxy setting, by editing
  `frontend/package.json` to include `"proxy": "http://localhost:8000/",` 
* After changes to your front-end, be sure to run `npm run build` to regenerate
  the compiled version of your JS.
* When deploying to production, make sure that the `build/` directory gets
  included in Git (remove it from .gitignore in the root directory and the
  `frontend/` directory if it happens to be in either)

8/6 Notes:

Connected to Heroku app as 'arete-climbing-app'
- To access SQL DB from CLI: <code>heroku pg:psql</code>
- To run migrations on remote DB: <code>heroku run python manage.py migrate</code>
Began psuedocode for models and modelForms

Also did we do something to settings.py file?

