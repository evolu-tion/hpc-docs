---
title: Virtual Environment with Micromamba
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Setting Up and Running Python in Your Own Environment

This guide provides step-by-step instructions to set up and run Python with your own environment using micromamba. It is designed to be beginner-friendly.

---

## 1. Initializing Micromamba

To start using micromamba, initialize the shell and configure it:

```bash
module load mamba/1.5.8
micromamba shell init -s bash -r ~/micromamba
source ~/.bashrc
```

---

## 2. Configuring Package and Environment Directories

Add central package directories and set up your personal directories for environments and packages:

```bash
micromamba config append envs_dirs /apps/mamba/1.5.8/micromamba/envs
micromamba config append pkgs_dirs /apps/mamba/1.5.8/micromamba/pkgs
micromamba config append pkgs_dirs ~/micromamba/pkgs
```

---

## 3. Viewing Available Environments

To see a list of all the environments available to you:

```bash
micromamba env list
```

---

## 4. Creating a New Conda Environment

To create a new conda environment (e.g., named `myenv`) with the Jupyter package:

```bash
micromamba create -n myenv -c conda-forge jupyter
```

Activate the environment:

```bash
micromamba activate myenv
```

---

## 5. Adding the Environment to Jupyter

To make your new environment available as a kernel in Jupyter Notebook:

```bash
ipython kernel install --name myenv --user
```

---

## 6. Submitting a Jupyter Notebook Job

1. Open the [OnDemand portal](http://raptor.med.cmu.ac.th:9000).
2. Submit a job to launch Jupyter Notebook by press "Interactive Apps" on menubar, then select "Jupyter Notebook"
3. Once Jupyter is running, select your environment kernel (`myenv`) when creating or opening a notebook.

---

## 7. Verifying Your Python Version in Jupyter

Run the following code in a Jupyter Notebook cell to confirm the Python version:

```python
import sys
print(sys.version)
```

You should see the Python version associated with your `myenv` environment.

---

By following these steps, you can set up and run Python in your own custom environment, making it easy to manage dependencies and tools for your projects.

