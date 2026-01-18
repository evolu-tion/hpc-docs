---
sidebar_position: 1
---

# Standard Operating Procedures (SOP)

This section provides step-by-step procedures for common tasks on the MedCMU-HPC system.

## Document Index

### User SOPs

| Code                                        | Title                | Description                                     |
| ------------------------------------------- | -------------------- | ----------------------------------------------- |
| [SOP-HPC-U001](./User/account-registration) | Account Registration | Registering for a new HPC account               |
| [SOP-HPC-U002](./User/project-registration) | Project Registration | Registering a research project                  |
| [SOP-HPC-U003](./User/request-resources)    | Request Resources    | Requesting software, storage, or special access |
| [SOP-HPC-U004](./User/data-management)      | Data Management      | Managing research data on HPC                   |
| [SOP-HPC-U005](./User/troubleshooting)      | Troubleshooting      | Diagnosing and resolving common issues          |

### Admin SOPs

| Code                                          | Title                 | Description                                       |
| --------------------------------------------- | --------------------- | ------------------------------------------------- |
| [SOP-HPC-A001](./Admin/user-onboarding)       | User Onboarding       | Creating and onboarding new HPC users via FreeIPA |
| [SOP-HPC-A002](./Admin/project-approval)      | Project Approval      | Reviewing and provisioning research projects      |
| [SOP-HPC-A003](./Admin/resource-allocation)   | Resource Allocation   | Managing software, storage, and compute resources |
| [SOP-HPC-A004](./Admin/system-maintenance)    | System Maintenance    | Scheduled and emergency maintenance procedures    |
| [SOP-HPC-A005](./Admin/incident-response)     | Incident Response     | Handling outages and security events              |
| [SOP-HPC-A006](./Admin/software-installation) | Software Installation | Installing software via EasyBuild and Apptainer   |

---

## Who Should Use This Guide?

### For End Users

If you are a researcher or student using the HPC system, refer to the **[User SOPs](/docs/category/user-sops)** for procedures on:

- Account and project registration
- Requesting additional resources
- Managing your data
- Troubleshooting common issues

### For Administrators and Support Staff

If you are part of the HPC support team, refer to the **[Admin SOPs](/docs/category/admin-sops)** for procedures on:

- Processing user applications
- Approving projects and allocating resources
- System maintenance tasks
- Incident response protocols
- Software installation

---

## Document Standards

Each SOP document follows a consistent format with metadata:

| Field              | Description                             |
| ------------------ | --------------------------------------- |
| **Document Code**  | Unique identifier (SOP-HPC-XXXX)        |
| **Category**       | Admin SOP or User SOP                   |
| **Authors**        | Document authors                        |
| **Status**         | Draft, In-review, Approved, or Archived |
| **Effective Date** | When the document became effective      |
| **Last Updated**   | Most recent revision date               |
| **Approved By**    | Authority who approved the document     |

### Document Sections

1. **Purpose** - What the procedure accomplishes
2. **Scope** - Who and what the procedure applies to
3. **Roles & Responsibilities** - Key roles involved
4. **Prerequisites** - What's needed before starting
5. **Process Flow** - Visual workflow diagram
6. **Procedure** - Step-by-step instructions
7. **Expected Outcome** - What success looks like
8. **Related Documents** - Links to related procedures

---

## Quick Reference

### Common User Commands

```bash
# Check storage quota
myquota

# Check compute credit balance
sbalance

# View available software
module avail

# Submit a job
sbatch --account=<ProjectID> script.sh

# Check job status
squeue -u $USER
```

### Support Contact

- **Email**: supporthpc-med@cmu.ac.th
- **Consultation**: [Book a meeting](https://cal.com/nattawet-sri/30min)

---

## Questions or Feedback?

If you have questions about any procedure or suggestions for improvement, please contact the HPC support team at **supporthpc-med@cmu.ac.th**.
