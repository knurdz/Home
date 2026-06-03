---
title: "The Git Panic: How to Scrub Your History with BFG Repo-Cleaner"
date: "2026-04-13"
description: "Accidentally committed secrets to Git? Learn how to rewrite history safely with BFG Repo-Cleaner — faster and simpler than raw git filter-branch."
author: "RKK Vishva Kumar"
authorImage: "/images/blog/rkk-vishva-kumar.jpeg"
order: 1
image: "/images/blog/git-panic-bfg-repo-cleaner.png"
tags:
  - git
  - security
  - devops
sourceUrl: "https://medium.com/linkit-intecs/the-git-panic-how-to-scrub-your-history-with-bfg-repo-cleaner-d593739b6cb9"
readTime: "4 min read"
---

Have you ever committed a secret file — maybe an API key, a password, or a `.env` file — and felt that immediate sinking feeling the moment you realized it?

The common mistake is to simply delete the file and commit again. But here's the problem: Git is designed to remember everything. Even if the file is gone in your latest version, it's still sitting in your history. Anyone who clones your repo or browses your GitHub/GitLab commits can find it with just a few clicks. If that repo is public, your secrets are effectively out in the world.

To fix this, you have to rewrite your history. The best tool for this is the [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/). It's much faster and more user-friendly than the standard, complex Git commands.

## Step 1: The Most Important Rule (Clean Your Current Code First)

Before you even touch BFG, there is one thing you must do: **Make your repository look exactly how you want it to look in the end.** By default, BFG does not touch your latest commit (the `HEAD`). It does this for your safety, so it doesn't accidentally break your current working code.

1. Go into your project and delete the unwanted files or folders.
2. Commit that change (e.g., `git commit -m "Remove sensitive data"`).
3. Now your current "view" of the code is clean. BFG will now go back in time and scrub those files out of every previous commit.

## Step 2: Install Java

BFG is a Java-based tool, so you need the Java Runtime Environment (JRE) to run it.

1. **Check your Java version:** Open your terminal or command prompt and type `java -version`. Ensure you are running Java 11 or higher, which is required by BFG. Java 17 and 21 are the current LTS versions as of this writing.
2. **Download:** If you don't have it, go to the [Official Java Download page](https://www.oracle.com/java/technologies/downloads/) and grab the version for your system (Windows, Mac, or Linux).
3. **Install:** Run the installer like any other app.

## Step 3: Download BFG

1. Go to the [BFG website](https://rtyley.github.io/bfg-repo-cleaner/) and download the `.jar` file.
2. **Tip:** The file will likely have a name like `bfg-1.15.0.jar`. Rename it to just `bfg.jar` to save yourself from typing that long name every time you run a command.

![Screenshot of BFG Repo-Cleaner website home page](/images/blog/bfg-website-screenshot.png)

## Step 4: Cleaning Your Repository

You shouldn't run BFG inside your usual working folder. Instead, we work on a **mirror clone**. This is a special type of clone that includes every single branch and tag in your history. This is required to delete the sensitive information in all the branches if they exist.

```bash
git clone --mirror https://github.com/username/your-repo.git
```

This creates a folder ending in `.git` (e.g., `your-repo.git`). Now, move your `bfg.jar` file into the same directory where that folder is located. Make sure **not** to place the jar file inside the cloned folder. Also run the below commands from the parent folder in your terminal and not inside the cloned folder.

### To Delete a Single File

If you accidentally committed a file called `config.json`, run:

```bash
java -jar bfg.jar --delete-files config.json your-repo.git
```

### To Delete a Folder

If you committed a folder full of secrets or heavy build files (like `node_modules`), use this:

```bash
java -jar bfg.jar --delete-folders node_modules your-repo.git
```

### To Delete Multiple Files or Folders at Once

If you have several different files or folders to wipe, you don't have to run the command five times. You can use curly braces `{}` to list them all at once.

To delete three different files:

```bash
java -jar bfg.jar --delete-files {secrets.py,passwords.txt,api_key.php} your-repo.git
```

To delete multiple folders:

```bash
java -jar bfg.jar --delete-folders {node_modules,venv,target} your-repo.git
```

## Step 5: Emptying the Trash (Garbage Collection)

BFG has now "unlinked" those files from your history, but they are still technically taking up space in the Git database on your machine. You need to force Git to permanently delete them:

```bash
cd your-repo.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
```

## Step 6: Pushing the Clean History

Now that your local copy is scrubbed, you need to update GitHub/GitLab. Because you've rewritten history, a standard push won't work. But since we used a mirror clone, you just need to run:

```bash
git push
```

In case you didn't clone the mirror version and cloned in the usual way, you have to force push:

```bash
git push --force
```

## One Final Warning

Rewriting history is a **destructive** action. If you are working in a team, warn them first. Once you push the clean history, your teammates will need to delete their old local versions and re-clone the repo. If they don't, they might accidentally push the "dirty" history back up to the server.
