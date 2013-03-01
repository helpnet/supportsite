Support Site
============
This is a support website prototype built in Drupal.


Installation
============
*This will not work for anyone unless you have access to our database*

First, set up a Drush alias to production. Check the drush README and example files for syntax.

`git clone` the repo.

We need to get the [7.x-2.x dev branch of the Raphael module](http://drupal.org/project/raphael/git-instructions). Run `git submodule init` and `git submodule update`. (TODO: Figure out a better solution for this, maybe just re-write own module).

To get a copy of the dev database, run `drush sql-sync @supportsite @self`. Enable the Environment Indicator module to make sure you don't forget which environment you are in: `drush en -y environment_indicator `.

The site shoud now be up and running.
