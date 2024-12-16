//git revert HEAD --no-edit
//revert the latest change, and then commit
//--no-edit, we can skip the commit message edito

//git reset <commithash>
//Even though the commits are no longer showing up in the log, it is not removed from Git. If we know the commit hash, we can reset it.

//git reset <commit>
//Undoes all commits after <commit>, preserving changes locally

//git reset --hard <commit>
//Discards all history and changes back to the specified commit

//git commit --amend -m “<Commit Message>”
//used to modify the most recent commit.
