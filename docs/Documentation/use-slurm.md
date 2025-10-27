---
title: Use SLURM
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 5
---


# Using SLURM


SLURM (Simple Linux Utility for Resource Management) is the workload scheduler used on MedCMU-HPC. It helps you allocate compute resources and run your programs on the HPC system effectively. This guide introduces SLURM's basic concepts and shows you how to run jobs interactively and as batch scripts. Advanced usage patterns are addressed in additional documentation.

**Key Points**
- *Do not* run programs directly on the login node.
- Use SLURM to manages resource allocation and job execution.
- Jobs can be interactive (`srun`) or non-interactive (`sbatch`).

---

## Basic of HPC Cluster
The cluster consists of compute nodes connected via a high-speed network. Each node includes CPUs (cores), memory, and optionally GPUs. Users log into the login node using `ssh` and request resources on compute nodes via SLURM commands.

**Terminology:**
- **Node**: A physical compute system with its own CPUs, memory, and storage.
- **Core**: A computation unit capable of running a single thread or process.
- **Partition**: A group of nodes with similar capabilities (e.g., GPU-enabled, high-memory).


## Common SLURM Commands

- **Check cluster status**:  
  View available partitions and nodes.  
  ```bash
  sinfo
  ```

- **Submit a job script**:  
  Submit a batch job using a script.  
  ```bash
  sbatch script_name.sbatch
  ```

- **Check the job queue**:  
  Display the list of running and queued jobs.  
  ```bash
  squeue
  ```

- **View job details**:  
  Get detailed information about your jobs.  
  ```bash
  sacct
  ```

- **Cancel a job**:  
  Terminate a specific job using its Job ID.  
  ```bash
  scancel job_id
  ```

- **Run an interactive session**:  
  Start an interactive session for testing or development.  
  ```bash
  srun --pty bash
  ```

## Writing SLURM Job Scripts

A SLURM job script specifies resource requirements and tasks to execute. Below is an example:

### Example Job Script: `first_script.sbatch`
```bash title="cal_score.sbatch"
#!/bin/bash

#SBATCH --job-name=MyJob          # Job name
#SBATCH --partition=short         # Partition name
#SBATCH --time=01:00:00           # Time limit (hh:mm:ss)
#SBATCH --cpus-per-task=4         # Number of CPU cores
#SBATCH --mem=16G                 # Memory allocation
#SBATCH --output=output_%j.log    # Standard output file
#SBATCH --error=error_%j.log      # Error output file

module load python                # Load necessary modules
python my_script.py               # Run your application
```

### Submit the Job
```bash
sbatch example_job.sbatch
```

### Check Job Status
Use the `squeue` command to verify the status of your job.

## Interactive Sessions

- **Run a bash shell interactively**:  
  ```bash
  srun --pty bash
  ```

- **Run Python interactively**:  
  ```bash
  module load python
  srun -p short -t 01:00:00 --mem=1G -c 1 --pty python
  ```

## Common SLURM Options
Below are some frequently used options for `sbatch` and `srun`:

| Option               | Description                             |
|----------------------|-----------------------------------------|
| `--partition/-p`     | Specify the partition to use           |
| `--time/-t`          | Set the job time limit (dd-hh:mm:ss)   |
| `--mem`              | Memory per node                        |
| `--mem-per-cpu`      | Memory per CPU core                    |
| `--cpus-per-task/-c` | Number of CPU cores per task           |
| `--nodes/-N`         | Number of nodes                        |
| `--gpus/-G`          | Number of GPUs                         |
| `--job-name/-J`      | Assign a name to the job               |
| `--output/-o`        | Specify the standard output file       |
| `--error/-e`         | Specify the standard error file        |

## Tips for Using SLURM
- Use descriptive job names for easy identification.
- Always specify appropriate resource requirements to avoid wasting cluster resources.
- Monitor your job progress and logs to debug any issues.
- Combine `srun` with containers (e.g., Apptainer) for portable workflows.

For additional details, refer to the [SLURM documentation](https://slurm.schedmd.com/).
