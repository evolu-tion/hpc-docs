---
title: Data transfer
sidebar_position: 20
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Data transfer
The `rsync` command is a powerful tool for efficiently transferring files between systems. It offers features like synchronization, progress reporting, and error handling.

Here's an basic syntax for using `rsync` to transfer files:
```bash
rsync -rvz [source] [username]@<host destination>
```
Breakdown of the options:

`-r`: Enables recursive transfer, copying directories and their contents.
`-v`: Provides verbose output, showing the progress of the transfer.
`-z`: Compresses data during transfer, improving efficiency.
`[source]`: The path to the file(s) or directory you want to transfer (on the source machine).
`[username]`: Your username on the destination machine (if required).
`@<host destination>`: The hostname or IP address of the destination machine.

**Additional Resources:**
`rsync` documentation: https://linux.die.net/man/1/rsync