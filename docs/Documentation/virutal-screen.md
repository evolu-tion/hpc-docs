---
title: Virtual terminal with tmux
sidebar_position: 19
toc_min_heading_level: 2
toc_max_heading_level: 5
---


**tmux** is a terminal multiplexer that allows you to create and manage multiple virtual terminal sessions. It is especially useful for maintaining long-running processes and managing multiple tasks in a single terminal window. Here’s a quick guide to using tmux:

## Common tmux Commands

- **Start a new tmux session**:  
  Create a new tmux session with a specific name.  
  ```bash
  tmux new -s "session_name"
  ```  
  Replace `"session_name"` with a descriptive name for your session.

- **Detach from the current tmux session**:  
  Leave the session running in the background.  
  Press `Ctrl+B`, then `D`.

- **List all tmux sessions**:  
  View all active tmux sessions.  
  ```bash
  tmux ls
  ```

- **Reattach to a tmux session**:  
  Rejoin a specific tmux session by its name.  
  ```bash
  tmux attach -t "session_name"
  ```

- **Kill a tmux session**:  
  Terminate a specific tmux session when it's no longer needed.  
  ```bash
  tmux kill-session -t "session_name"
  ```

## Managing tmux Windows and Panes
tmux allows you to split your terminal into multiple windows and panes for multitasking:  

- **Create a new window**:  
  Press `Ctrl+B`, then `C`.

- **Switch between windows**:  
  Press `Ctrl+B`, then the window number (e.g., `0`, `1`, `2`).

- **Rename current window**:  
  Press `Ctrl+B` then `,` and rename your current windows name.

- **Split the current pane horizontally**:  
  Press `Ctrl+B`, then `"`.  

- **Split the current pane vertically**:  
  Press `Ctrl+B`, then `%`.

- **Navigate between panes**:  
  Press `Ctrl+B`, then an arrow key.

- **Resize panes**:  
  Press `Ctrl+B`, then hold an arrow key to adjust the size.

## Tips for tmux Usage
- Use descriptive session names to easily identify them later.
- If your session gets disconnected (e.g., due to network interruptions), you can reattach and pick up where you left off without losing progress.
- Combine tmux with `ssh` for managing remote processes effectively.

For more details and advanced features, refer to the [tmux documentation](https://github.com/tmux/tmux/wiki).
