//git branch
//Lists all branches available locally, with an asterisk (*) next to the current branch.

//git branch -r
//Lists all remote branches (branches available on the remote repository).

//git branch -a
//Lists all branches, both local and remote.

//git branch <new-branch>
//Creates a new branch locally.

//git checkout <new-branch> or git switch <branch-name>
//Switches to an existing branch.

//git checkout -b <branch-name>
//create new branch and Switch to an existing branch.

//git branch -m <new-branch-name>
//Renames the current branch.

//git branch -m <old-name> <new-name>
//To rename a specific branch.

//git branch -d <branch-name>
//Deletes the branch safely. 

//git branch -D <branch-name>
//Force delete (if not merged yet).

//git push origin --delete <branch-name>
//delete a remote branch from the remote repository

//git merge <branch-name>
//Combines the specified branch’s history into the current branch. This is usually done in pull requests.