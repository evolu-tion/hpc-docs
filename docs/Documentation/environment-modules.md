---
title: Environmental Modules
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 5
---

Bioinformatics software is often pre-installed on high-performance computing (HPC) systems, but these tools might not be readily available in your default environment. Environmental modules provide a way to manage and load specific software versions.

**Basic Module Commands**:

The following table summarizes essential environmental module commands:


| Command | Action |
| --- | --- |
| `module avail` or `ml av` | Lists all available modules |
| `module load <module name>`  or `ml load <module name>` | Loads a specific software module |
| `module list` or `ml` | Lists all currently loaded modules |
| `module swap <old> <new>` | Switches between different versions of the same software |
| `module unload <module>` | Unloads a specific module |
| `module restore` | Restores the default environment (unloads all modules) |
| `module purge` | Unloads all loaded modules |
| `ml spider <module>` | Searches for a specific module |

**Additional Resources:**
HPC User cheat sheets: https://www.nstda.or.th/r/iDb2F
