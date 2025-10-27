---
title: RStudio with SLURM
sidebar_position: 7
toc_min_heading_level: 2
toc_max_heading_level: 5
---

:::warning RStudio Server on MedCMU-HPC
You can use [**OnDemand Web Portal**](OnDemand) to run RStudio Server, but this guide shows you how to run RStudio Server using Apptainer on the command line. This is useful if you want to customize your RStudio Server environment or if you prefer working in the terminal.
:::

# Running RStudio Server Container on SLURM

This guide explains how to set up and run RStudio Server on the MedCMU-HPC cluster.

---

## Step 1: Create a SLURM Script

You can modify the computing partition, reserved time, number of CPUs, and memory in the header of the SLURM script.

```bash title="rstudio-server.sbatch"
#!/bin/sh
#SBATCH --time=08:00:00
#SBATCH --partition=compute
#SBATCH --signal=USR2
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=2
#SBATCH --mem=10G
#SBATCH --output=/home/%u/rstudio-server.job.%j
# customize --output path as appropriate (to a directory readable only by the user!)

# Create temporary directory to be populated with directories to bind-mount in the container
# where writable file systems are necessary. Adjust path as appropriate for your computing environment.
workdir=$(mktemp -d)

# Set R_LIBS_USER to an existing path specific to rocker/rstudio to avoid conflicts with
# personal libraries from any R installation in the host environment

cat > ${workdir}/rsession.sh <<"END"
#!/bin/sh
export R_LIBS_USER="${HOME}/R/rocker-rstudio/4.4.2:/apps/R/rocker-rstudio/4.4.2"
mkdir -p "${HOME}/R/rocker-rstudio/4.4.2"

## custom Rprofile & Renviron (default is $HOME/.Rprofile and $HOME/.Renviron)
# export R_PROFILE_USER=${HOME}/.Rprofile
# export R_ENVIRON_USER=${HOME}/.Renviron
exec /usr/lib/rstudio-server/bin/rsession "${@}"
END

chmod +x ${workdir}/rsession.sh

export SINGULARITY_BIND="${workdir}/rsession.sh:/etc/rstudio/rsession.sh,/apps"

# Do not suspend idle sessions.
# Alternative to setting session-timeout-minutes=0 in /etc/rstudio/rsession.conf
# https://github.com/rstudio/rstudio/blob/v1.4.1106/src/cpp/server/ServerSessionManager.cpp#L126
export SINGULARITYENV_RSTUDIO_SESSION_TIMEOUT=0

export SINGULARITYENV_USER=$(id -un)
export SINGULARITYENV_PASSWORD=$(openssl rand -base64 15)
# get unused socket per https://unix.stackexchange.com/a/132524
# tiny race condition between the python & singularity commands
readonly PORT=$(python3 -c 'import socket; s=socket.socket(); s.bind(("", 0)); print(s.getsockname()[1]); s.close()')
cat 1>&2 <<END
1. SSH tunnel from your workstation using the following command:

   ssh -N -L 8787:${HOSTNAME}:${PORT} ${SINGULARITYENV_USER}@10.128.1.10

   and point your web browser to http://localhost:8787

2. log in to RStudio Server using the following credentials:

   user: ${SINGULARITYENV_USER}
   password: ${SINGULARITYENV_PASSWORD}

When done using RStudio Server, terminate the job by:

1. Exit the RStudio Session ("power" button in the top right corner of the RStudio window)
2. Issue the following command on the login node:

      scancel -f ${SLURM_JOB_ID}
END

ml apptainer

apptainer exec --cleanenv \
                 --scratch /run,/tmp,/var/lib/rstudio-server \
                 --workdir ${workdir} \
                 /common/sif/rstudio/4.4.2.sif \
    rserver --www-port ${PORT} \
            --auth-none=0 \
            --auth-pam-helper-path=pam-helper \
            --auth-stay-signed-in-days=30 \
            --auth-timeout-minutes=0 \
            --server-user=$(whoami) \
            --rsession-path=/etc/rstudio/rsession.sh
printf 'rserver exited' 1>&2
```

## Step 2: Submit the Job Script Using the `sbatch` Command

```bash
# Submit the rstudio-server job
sbatch rstudio-server.sbatch
```

## Step 3: Check the SLURM Output File for Access Information

After you submit the job, check your job status via `squeue`. If your job is available, you will see `rstudio-server.job.<job_id>` in your home directory. Then, follow the instructions in the output file.

```bash
# Open the log output file
more /home/%u/rstudio-server.job.%j
```

## Step 4: Create an SSH Tunnel from Your PC Terminal

The following command is an example. Please find the correct information in the SLURM log file.

```bash
# Create a tunnel on your desktop terminal
ssh -N -L 8787:<HOSTNAME>:<PORT> <USERNAME>@10.128.1.10
```

## Step 5: Log In to RStudio with Your Web Browser

Access RStudio via your web browser at http://localhost:8787. 

Enter your password from the SLURM log file.

## Step 6: Shut Down the SLURM Job After Use

Use the SLURM `scancel` command to cancel the job.

```bash
scancel -f <job_id>
```

Ref: https://rocker-project.org/use/singularity.html
