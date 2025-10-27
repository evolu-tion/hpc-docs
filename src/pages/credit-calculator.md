---
id: shr-calculator
title: Service Fee
---

import SHrCalculator from '@site/src/components/CreditCal'; 



# HPC Service Fee

Access to High-Performance Computing (HPC) resources typically involves associated fees. These fees are necessary to support the ongoing operation, maintenance, and development of the HPC infrastructure, ensuring its availability and reliability for users.

## Computing Service Rate per Node per Hour
High-performance computing services are provided based on machine hours. The rates are categorized by service type, which includes different computing needs for research. The fees are charged based on the **Service Node Hour (SHr)**, which represents the amount of time a machine is used.


| Partition                     | Unit        | MedCMU Research | CMU Research | External Organization |
|-------------------------------|-------------|-----------------|--------------|-----------------------|
| Compute                       | 1 SHr       | 115 THB         | 200 THB      | 300 THB               |
| GPU                           | 1 SHr       | 115 THB         | 200 THB      | 300 THB               |
| Short                         | 1 SHr       | 115 THB         | 200 THB      | 300 THB               |

- SHr represents the time your machine (node) is used for a specific task. For example, if you are running a high-memory task for one hour on a dedicated machine, that would be one SHr.
  
- SHr is calculated by multiplying the total number of hours a machine is used by the service rate for that specific machine type. For instance:
  - If a compute partition is used for 2 hours, the total SHr would be 2 hours × the applicable rate (115 for MedCMU Research).
  - If a GPU paritition is used for 3 hours, the total SHr would be 3 hours × the applicable rate.
  - If a compute partition is used 2 core for 24 hours, the total SHr would be 24 hours x 2 cores / 94 total cores  x the applicable rate.



### Service Node-Hour (SHr) Convertor
Convert between your budget in Thai Baht (THB) and Service Node-Hours (SHr) for your HPC usage. Select the appropriate service type to see the conversion rates.

<SHrCalculator />

---

## Data Storage on HPC
For storage, we offer rental services for high-capacity data storage on the HPC system. The fees are based on the size of the storage and are calculated either monthly or annually.


| Service                          | Unit       | MedCMU Research | CMU Research | External Organization |
|----------------------------------|------------|-----------------|--------------|-----------------------|
| Data storage rental              | 1 TB/year  | 2,200 THB       | 2,750 THB    | 3,850 THB             |
| Data storage rental              | 1 TB/month | 200 THB         | 250 THB      | 350 THB               |

These rental fees are applied for storing research data on the high-performance system, and users can choose between yearly or monthly rental plans depending on their storage needs.
