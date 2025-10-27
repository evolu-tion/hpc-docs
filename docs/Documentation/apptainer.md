---
title: Apptainer Container
sidebar_position: 9
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Using Apptainer Containers

**Apptainer** (formerly Singularity) is a container platform designed for high-performance computing (HPC) environments. It allows users to package applications and their dependencies into portable containers. Below is a guide to using Apptainer, including GPU support and integration with SLURM.

## Collection of SIF Files

The central collection of SIF (Singularity Image Format) files is stored in `/common/sif/`. You can access a variety of pre-built container images for different applications in the following subdirectories:

You can list all available SIF files using:
```bash
ls /common/sif/*/*.sif
```
*Here are some examples of available containers*:
- **AlphaFold 2**: /common/sif/alphafold2/2.0.0.sif
- **AlphaFold 2 Multimer**: /common/sif/alphafold2-multimer/1.0.0.sif
- **AutoDock GPU**: /common/sif/autodock-gpu/2020.06.sif
- **Clara Parabricks**: /common/sif/clara-parabricks/4.3.2.sif, /common/sif/clara-parabricks/4.4.0.sif
- **DiffDock**: /common/sif/diffdock/2.0.0.sif
- **GROMACS**: /common/sif/gromacs/2023.2.sif
- **MOLMIN**: /common/sif/molmin/1.0.0.sif
- **MONAI**: /common/sif/monai/1.4.0.sif
- **TensorFlow**: /common/sif/tensorflow/24.10-tf2-py3.sif


## Common Apptainer Commands

- **Pull an image from Docker Hub**:  
  Download a container image from Docker Hub and save it locally.  
  ```bash
  apptainer pull image_name.sif docker://repository_name:tag
  ```
- **Run a container interactively**:
  Start an interactive session inside the container.
  ```bash
  apptainer shell image_name.sif
  ```
- **Execute a command in a container**:
  Run a specific command within the container.
  ```bash
  apptainer exec image_name.sif command
  ```
- **Run a container with GPU support**:
  Enable GPU acceleration by using the --nv option.
  ```bash
  apptainer exec --nv image_name.sif command
  ```
## Using Apptainer with SLURM
SLURM can be used to manage and schedule container-based jobs in HPC environments. Below are examples of integrating Apptainer containers with SLURM.


### Submitting a Job with Apptainer
To run a containerized application as a SLURM job, use an sbatch script:

Example SLURM Script: run_container.sbatch
```bash
#!/bin/bash

#SBATCH --job-name=apptainer_job      # Job name
#SBATCH --partition=gpu               # Partition with GPU
#SBATCH --gpus=1                      # Request 1 GPU
#SBATCH --time=02:00:00               # Time limit (hh:mm:ss)
#SBATCH --cpus-per-task=4             # Number of CPU cores
#SBATCH --mem=16G                     # Memory allocation
#SBATCH --output=output_%j.log        # Standard output file
#SBATCH --error=error_%j.log          # Error output file

module load apptainer                  # Load Apptainer module

apptainer exec --nv image_name.sif command args
```

### Running a Container Interactively with SLURM
To use a container interactively with SLURM, request an interactive session and specify the GPU partition:

Example Command:
```bash
module load apptainer
srun -p gpu \
  --gpus=1 \
  --time=02:00:00 \
  --mem=16G \
  --cpus-per-task=4 \
  --pty apptainer exec --nv image_name.sif bash
```

## Tips for Using Apptainer
- Image Portability: Once pulled, the `.sif` image file can be moved and used on any system with Apptainer installed.
- GPU Support: Always include the `--nv` flag for GPU-enabled applications to ensure compatibility with CUDA or other GPU libraries.
- Debugging: Use apptainer shell to enter the container and debug any issues interactively.
- SLURM Integration: Use SLURM options (`--gpus`, `--partition`, `--time`) to optimize resource usage for containerized jobs.
