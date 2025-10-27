---
title: Jupyterlab with SLURM
sidebar_position: 6
toc_min_heading_level: 2
toc_max_heading_level: 5
---
:::warning Jupyter on MedCMU-HPC
You can use [**OnDemand Web Portal**](OnDemand) to run Jupyter, but this guide shows you how to run Jupyter using SLURM on the command line. This is useful if you want to customize your Jupyter environment or if you prefer working in the terminal.
:::

# Running Jupyter with SLURM

This guide explains how to set up and run Jupyter Notebook on the MedCMU-HPC cluster.

---

## Step 1: Modify `.bashrc`
:::note
This step do only first time
:::
Add the following script to your `.bashrc` file to initialize **mamba**:

```bash
# >>> mamba initialize >>>
# !! Contents within this block are managed by 'mamba init' !!
export MAMBA_EXE='/apps/mamba/1.5.8/bin/micromamba'
export MAMBA_ROOT_PREFIX='/apps/mamba/1.5.8/micromamba'
__mamba_setup="$("$MAMBA_EXE" shell hook --shell bash --root-prefix "$MAMBA_ROOT_PREFIX" 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__mamba_setup"
else
    alias micromamba="$MAMBA_EXE"  # Fallback for activation
fi
unset __mamba_setup
# <<< mamba initialize <<<
```

Run the following command to apply the changes:
```bash
source ~/.bashrc
```

## Step 2: Create a SLURM Script

Create a SLURM script file (e.g., jupyter-runtime.slurm) with the following content:
```bash
#!/bin/bash
#SBATCH --job-name=jupyter              # Job name
#SBATCH --partition=compute             # Specify partition [compute/gpu]
#SBATCH --time=01:00:00                 # Time limit (hh:mm:ss)
#SBATCH --cpus-per-task=1               # Specify number of nodes and processors per task
#SBATCH --ntasks-per-node=4             # Specify tasks per node
#SBATCH -t 1:00:00                      # Specify maximum time limit (hour: minute: second)
#SBATCH --output=output_%j.log          # Standard output file
#SBATCH --error=error_%j.log            # Error output file

module load mamba/1.5.8                 # Load the module that you want to use
eval "$(micromamba shell hook --shell bash)"
micromamba activate jupyter             # Activate your environment

port=$(shuf -i 6000-9999 -n 1)
USER=$(whoami)
node=$(hostname -s)

# jupyter notebookng instructions to the output file
echo -e "
    Jupyter server is running on: $(hostname)
    Job starts at: $(date)
    Copy/Paste the following command into your local terminal
    --------------------------------------------------------------------
    ssh -L $port:$node:$port $USER@10.128.1.10 -i id_rsa
    --------------------------------------------------------------------
    Open a browser on your local machine with the following address
    --------------------------------------------------------------------
    http://localhost:${port}/?token=XXXXXXXX (see your token below)
    --------------------------------------------------------------------
"
# start a cluster instance and launch jupyter server
unset XDG_RUNTIME_DIR
if [ "$SLURM_JOBTMP" != "" ]; then
    export XDG_RUNTIME_DIR=$SLURM_JOBTMP
fi
jupyter lab --no-browser --port $port --notebook-dir=$(pwd) --ip=$node
```

## Step 3: Submit the Job
Submit the SLURM job script using the following command:
```bash
sbatch jupyter-runtime.slurm
```

## Step 4: Access the Jupyter Server

1. Check the SLURM output and error log files for the forwarded port and connection details.
2. Open a terminal on your local machine and execute the SSH port forwarding command provided in the **output log** file. 

    *For example*:
    ```bash
    ssh -L 8816:raptor-m-001:8816 user@10.128.1.10
    ```

3. Open a web browser on your local machine and navigate to the following address:
    ```bash
    http://localhost:8816/?token=XXXXXXXX
    ```

    :::info
    Replace 8816 with your assigned port and XXXXXXXX with the Jupyter token provided in the **error log** file.
    :::

4. You need to **stop your job** when you no longer need the Jupyter server.
