# MedCMU HPC Documentation

Welcome to the official repository for the **MedCMU HPC Documentation**. This platform provides detailed guides, tutorials, and reference material for users of the **High-Performance Computing (HPC)** infrastructure at the **Faculty of Medicine, Chiang Mai University (MedCMU)**.

This documentation site is built using **Docusaurus**, a modern static website generator optimized for project documentation.

## Overview

MedCMU HPC provides powerful computational resources for medical and health science research. This repository hosts the documentation for setting up and using the HPC system, including details on job scheduling, containerized environments, file management, and more.

Key sections of the documentation include:

- **Getting Started**: Learn how to access the HPC system and register for an account.
- **Software & Tools**: Find details on available software packages, including those for bioinformatics, medical imaging, and deep learning.
- **Job Submission**: Understand how to use SLURM to manage your jobs on the cluster.
- **Containerization**: Guides on using Apptainer containers for consistent and portable environments.
- **Support & Troubleshooting**: Get assistance with common issues and how to contact support.

## Features

- **Easy Navigation**: Docusaurus offers a simple, user-friendly interface for exploring the documentation.
- **Customizable**: The platform can be easily customized to suit the evolving needs of MedCMU HPC.
- **Versioned Documentation**: Keep track of different versions of the documentation and update it as the infrastructure and tools evolve.
- **Searchable Content**: Quickly find information with the built-in search functionality.

## Installation

To contribute or run the MedCMU HPC documentation locally, follow these steps:

### Prerequisites

- Node.js >=16.6.0
- NPM

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/evolu-tion/medcmu-hpc.git
   cd medcmu-hpc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the local development server:
   ```bash
   npm run start
   ```
4. Open your browser and visit `http://localhost:3000` to view the documentation.

### Build the Site

### Build the Site

To build a static version of the site for deployment, run:

```bash
npm run build
```

## Running with Docker

You can also run the documentation locally using Docker Compose. This helps verify the production build in a containerized environment.

1. Build and start the container:

   > **Note:** Use the `--build` flag to ensure any changes are included in the image.

   ```bash
   docker compose up -d --build
   ```

2. Access the site at `http://localhost:8080`.

3. To stop the container:
   ```bash
   docker compose down
   ```

## LLM Context

This project includes an `/llms.txt` file to help Large Language Models (LLMs) understand the documentation structure.

- **URL:** `https://medcmu-hpc.netlify.app/llms.txt` (or `/llms.txt` locally)
- **Usage:** Provide this URL to an LLM to give it context about the available documentation and SOPs.
