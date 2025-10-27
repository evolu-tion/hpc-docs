---
title: Our HPC Resources
sidebar_position: 4
toc_min_heading_level: 2
toc_max_heading_level: 5
---

# Our HPC Resources
MedCMU-HPC provided one open cluster for resarch staff and graduate student of Faculty of Medicine, namely Raptor.

## Raptor HPC Cluster

  Raptor is the main cluster at MedCMU. It became operational in November 2024 and consists of compute servers from Dell. Raptor has two types of nodes, both powered by AMD CPUs


   ![Raptor Cluster](/img/raptor-overview.png)
   
  ### Cluster Partitions

  The cluster is organized into partitions, which are groups of nodes used for specific purposes. Raptor includes the following partitions:

  | Partition   | Total Cores | Cores per Node | Memory per Node | GPU per Node    | Max Time per Job | Max Cores per User |
  |-------------|-------------|----------------|-----------------|-----------------|------------------|---------------------|
  | **compute** | 384         | 96             | 1,280 GB        | -               | 7 days           | 192                 |
  | **gpu**     | 192         | 96             | 384 GB          | 2 x Nvidia H100 | 7 days           | 192                 |
  | **short**   | 6           | 1              | 4 GB            | -               | 8 hours          | 2                   |

  **Proposing of partition**
    - The "*short*" partition is designed for shorter batch jobs, interactive jobs, array jobs, and jobs that benefit from multiple threads. This comprises all nodes on Raptor. Note that the default memory setting is 4 GB per core.
    - The "*compute*" partition is dedicated to larger multi-node jobs and long-running jobs.
    - The "*gpu*" partition is designed for GPU-intensive jobs.


  ### Hardware Specifications

  | Node Type         | Number of Nodes | CPU per Node            | Memory per Node | Cores per Node | GPU               |
  |-------------------|-----------------|-------------------------|-----------------|----------------|-------------------|
  | Compute Nodes     | 4               | 2 x AMD EPYC 9454 @ 2.75GHz | 1,280 GB       | 96             | -                 |
  | GPU Nodes         | 2               | 2 x AMD EPYC 9454 @ 2.75GHz | 384 GB         | 96             | 2 x Nvidia H100   |

  Each node includes local SSD storage and runs *Rocky Linux 8.10* with version *4.18.0* of the Linux kernel.



  ### Storage and Networking

  Details about the working storage and networking setup are forthcoming.

`