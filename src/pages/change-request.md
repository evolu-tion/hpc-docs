---
title: Change Request for HPC Resources
---

# Change Request for HPC Resources

If you need to request a change in the allocation of HPC resources, you can do so by submitting a change request. This process allows Principal Investigators (PIs) and HPC users to request modifications to their existing project resources.

## How to Submit a Change Request

To initiate a change request for your project, follow the steps below:

1. **Submit Change Request Form:**
   - Fill out the [Change Request Form](http://cmu.to/medcmu-hpc-change-req) to specify the modifications you need for your HPC resources.

2. **Review Process:**
   - Once your request is submitted, the administrator will review the change and assess whether it is feasible to allocate additional resources or modify existing ones.

3. **Approval and Resource Allocation:**
   - If the change request is accepted, the administrator will allocate the required HPC resources and notify you of the outcome.

4. **Notification:**
   - You will be notified whether your request has been accepted or rejected.

### Change Request Flow

```mermaid
sequenceDiagram
    autonumber
    participant PI as Principal Investigator / HPC user
    participant GF as MS Form
    participant Admin as Administrator
    participant HPC as HPC resources

    PI->>GF: Submit change request
    GF->>Admin: Notify for review
    Admin->>HPC: Allocate HPC Resources for project if accepted
    Admin->>PI: Notify result
