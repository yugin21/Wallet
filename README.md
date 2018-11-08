# Wallet app
This repo provides an example app for Android devices called Wallet App, and this app created with react native framework

This application contains the Splash, PIN login and Home/Account transaction display of wallet credit card app.

# Features
- Splash screen
![screenshot_20181108-162427](https://user-images.githubusercontent.com/41464828/48199713-91c16800-e38f-11e8-8d54-2e221a861035.png)

- PIN login screen (PIN: "2120")
![screenshot_20181108-162448](https://user-images.githubusercontent.com/41464828/48199752-aa318280-e38f-11e8-9e8c-b4db3c3ace1a.png)
![screenshot_20181108-162456](https://user-images.githubusercontent.com/41464828/48199817-de0ca800-e38f-11e8-821a-720ef9d49ab7.png)

- Home screen (include: Account card, Contact card and Transaction card)
![screenshot_20181108-162512](https://user-images.githubusercontent.com/41464828/48199874-0bf1ec80-e390-11e8-9fe2-8aa22c6cbd48.png)

# Fork the repository
**Fork** [Wallet app](https://github.com/yugin21/Wallet/fork) repo

# Clone the repository
Once you have forked the repo, you can make a clone

## Command line git
1. Clone the [Wallet app](https://github.com/yugin21/Wallet)
2. `cd` into the `Wallet app` folder
3. Make your changes and create a [pull request](https://help.github.com/articles/creating-a-pull-request/)

# Configuring a remote for a Fork
If you make changes in the fork and would like to [sync ](https://help.github.com/articles/syncing-a-fork/) those changes with the upstream repository, you must first [configure the remote](https://help.github.com/articles/configuring-a-remote-for-a-fork/). This will be required when you have created local branches and would like to make a [pull request](https://help.github.com/articles/creating-a-pull-request/) to your upstream branch.
1. In the Terminal (for Mac users) or command prompt (fow Windows and Linus users) type git remote -v to list the current configured remote repo for your fork.
2. `git remote add upstream` `https://github.com/yugin21/Wallet.git` to specify new remote upstream repository that will be synced with the fork. You can type `git remote -v` to verify the new upstream.

If there are changes made in the Original repository, you can sync the fork to keep it updated with upstream repository.

1. In the terminal, change the current working directory to your local project
2. Type `git fetch upstream` to fetch the commits from the upstream repository
3. `git checkout master` to checkout your fork's local master branch.
4. `git merge upstream/master` to sync your local master branch with upstream/master. **Note**: Your local changes will be retained and your fork's master branch will be in sync with the upstream repository.
