---
title: Essential Unix/Linux command
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 5
---

This guide provides a foundational overview of essential Unix/Linux commands commonly used in bioinformatics workflows.

## Introduction

**Unix:** A family of operating systems (OS) known for their stability and flexibility.

**Terminal:** A program that allows users to interact with the operating system using text commands. When you open a new terminal, it starts in your home directory, which contains files and directories specific to your user account.

**Symbol `$`**: Represents the Unix command prompt. Do not copy and paste this symbol when following tutorials, as it simply indicates the terminal is waiting for input.

Bioinformatics heavily relies on freely available tools developed for the Unix platform. Most advancements in the field are published with software designed for Unix-based operating systems.

## Basic Commands

### File commands
The following table summarizes essential file commands:

| Command | Description | Example |
|---|---|---|
| `ls` | Lists files and directories | `ls` (lists files in the current directory);<br/>`ls /home/user` (lists files in the user's home directory using an absolute path);<br/>`ls -l` (lists detailed information about files) |
| `pwd` | Displays the current working directory | `pwd` |
| `cd` | Changes the current directory | `cd Desktop` (changes to the Desktop directory);<br/>`cd ..` (goes to the parent directory);<br/>`cd` or `cd ~` (goes to the home directory);<br/>`cd /` (goes to the root directory);<br/>`cd ../..` (goes up two levels in the directory structure) |
| `man` | Displays the manual page for a specific command | `man ls` (shows the manual page for the `ls` command) |
| `mkdir` | Creates a new directory | `mkdir new_directory` (creates a new directory named "new_directory") |
| `rm` | Removes files or directories | `rm xfile.txt` (removes the file "xfile.txt");<br/>`rm -r dir` (removes the directory "dir" and its contents);<br/>`rm *` (removes all files in the current directory - use with caution!);<br/>`rm -r *` (removes all files and directories in the current directory - use with extreme caution!) |
| `touch` | Creates an empty file | `touch new_file.txt` (creates an empty file named "new_file.txt") |
| `mv` | Moves or renames files/directories | `mv file.txt ..` (moves the file "file.txt" to the parent directory);<br/>`mv A.txt B.txt` (renames the file "A.txt" to "B.txt") |
| `cp` | Copies files/directories | `cp A.txt B.txt` (copies the file "A.txt" to "B.txt") |
| `cat` | Displays the contents of a file | `cat A.txt` (shows the contents of the file "A.txt") |
| `head` | Displays the beginning of a file | `head A.txt` (shows the first few lines of "A.txt");<br/>`head A.txt -n 3` (shows only the first 3 lines of "A.txt") |
| `tail` | Displays the end of a file | `tail A.txt` (shows the last few lines of "A.txt");<br/>`tail A.txt -n 3` (shows only the last 3 lines of "A.txt") |
| `ln` | Creates a symbolic link (shortcut) | `ln /home/user/x x` (creates a shortcut named "x" that points to the file "/home/user/x") |


:::info
* Use the **Tab** key to complete command names.
* Use the Up and Down arrow keys to navigate through previously entered commands.
:::

### Process Management Commands
The following table summarizes essential process management commands:

| Command | Description | Example |
|---|---|---|
| `ps` | Displays currently running processes | `ps` (shows all processes) |
| `top` | Provides a dynamic view of running processes | `top` (shows all processes);<br/>`top -u $USER` (shows only processes owned by the current user) |
| `kill pid` | Terminates a specific process identified by its process ID (PID) | `kill 123` (terminates the process with PID 123) |
| `bg` | Lists stopped or background jobs | `bg` |
| `fg` | Brings a background job to the foreground | `fg` (brings the most recent background job to the foreground);<br/>`fg 2` (brings background job number 2 to the foreground) |

### File Permission Commands

The following table summarizes essential file permission commands:

| Command | Description | Example |
|---|---|---|
| `chmod` | Changes file permissions | `chmod 777 file` (grants read, write, and execute permissions for everyone) |

### Compress File Commands

The following table summarizes essential compress file commands:

| Command | Description | Example |
|---|---|---|
| `tar` | Extracts and creates compressed archives | `tar xzvf file.tar.gz` (extracts all files from the compressed archive "file.tar.gz");<br/>`tar czf file.tar.gz folder` (compresses the directory "folder" into a tar archive named "file.tar.gz" and compresses it with Gzip) |
| `gzip` | Compresses and decompresses files with the Gzip format | `gzip -d file.gz` or `gunzip file.gz` (decompresses the Gzip file "file.gz");<br/>`gzip file` (compresses the file "file" into a Gzip file named "file.gz") |

### Searching on Files

The following table summarizes essential commands for searching file contents:

| Command | Description | Example |
|---|---|---|
| `grep` | Searches for a pattern within files | `grep pattern files` (searches for the pattern "pattern" in the files specified);<br/>`grep -r pattern dir` (searches recursively for the pattern "pattern" within the directory "dir");<br/>`grep "^ATG" file.txt` (shows lines in "file.txt" that begin with the start codon "ATG") |

**Tips:**

* `grep -c '[bc]at' file.txt` (counts how many lines in "file.txt" contain the words "cat" or "bat")
* `cat file.txt | tr 'a-z' 'A-Z'` (converts lowercase text in "file.txt" to uppercase using the `tr` command)
* `cat file.txt | sed 's/Chr1/Chromosome 1/' > file2.txt` (changes all occurrences of "Chr1" to "Chromosome 1" in "file.txt" and saves the output to a new file named "file2.txt" using the `sed` command)

**Additional Resources:**

* Unix command-line cheat sheet: https://commons.wikimedia.org/wiki/File:Unix_command_cheatsheet.pdf

