---
title: "Amazon Aurora"
slug: amazon-aurora
category: Databases
priority: High
order: 1
---

# AWS SAA Notes

## 1. Purpose

**Amazon Aurora** is a **fully managed, cloud-native relational database** built by AWS that is **compatible with MySQL and PostgreSQL**.

It is designed to provide:

* Higher performance than standard MySQL and PostgreSQL
* High availability
* Automatic fault tolerance
* Faster failover
* Better scalability
* Lower operational overhead

Aurora combines the performance of commercial databases with the simplicity and cost-effectiveness of open-source databases.

> **Exam Keyword:** High-Performance Managed Relational Database

---

## 2. How It Works

Unlike traditional Amazon RDS databases that use a single EBS volume, Aurora separates **compute** and **storage**.

Aurora automatically stores **six copies of your data across three Availability Zones**, providing built-in durability and high availability.

### Aurora Architecture


```text
Application
      │
SQL Queries
      │
Aurora Instance
      │
Distributed Aurora Storage
(6 Copies Across 3 AZs)
```

Because storage is shared, failover is much faster than traditional RDS.

---

### Aurora Storage


Aurora storage is automatically:

* Distributed across **3 Availability Zones**
* Replicated with **6 copies**
* Self-healing
* Auto-scaling

Storage automatically grows from **10 GB** up to **128 TiB**.

> **Exam Tip:** Aurora storage automatically grows as data increases. No manual storage provisioning is required.

---

### Compatible Database Engines


Aurora supports:

* Aurora MySQL
* Aurora PostgreSQL

Applications using MySQL or PostgreSQL usually require minimal code changes when migrating.

---

## 3. Architecture

Typical Aurora architecture:

```text
Application
      │
Cluster Endpoint
      │
Primary Aurora Instance
      │
Shared Storage
(6 Copies / 3 AZs)
```

---

### Aurora Cluster


An Aurora cluster consists of:

* **1 Writer Instance (Primary)**
* Up to **15 Aurora Replicas**
* Shared distributed storage

```text
                Cluster Endpoint
                      │
               Writer Instance
                      │
      ┌───────────────┼───────────────┐
Replica 1        Replica 2       Replica 3
        │             │              │
        └──── Shared Aurora Storage ────┘
```

---

### Aurora Replicas


Aurora Replicas:

* Share the same distributed storage
* Have lower replication lag than RDS Read Replicas
* Support automatic failover
* Improve read performance

> **Exam Tip:** Aurora Replicas are **faster** than standard RDS Read Replicas because they share the same storage volume.

---


### Use Aurora for Mission-Critical Applications


Aurora is ideal for:

* Financial systems
* E-commerce
* SaaS applications
* Enterprise applications

where performance and availability are critical.

---

### Use Multiple Aurora Replicas


Benefits:

* Read scaling
* High availability
* Faster failover
* Automatic promotion during failures

---

### Use Cluster Endpoints


Aurora provides multiple endpoints:

### Cluster Endpoint


```text
Application
      │
Cluster Endpoint
      │
Current Writer
```

Used for:

* Read/Write traffic

---

### Reader Endpoint


```text
Application
      │
Reader Endpoint
      │
Aurora Replicas
```

Used for:

* Read-only queries
* Automatic load balancing across replicas

> **Exam Tip:** Use the **Reader Endpoint** for read scaling.

---

### Enable Automated Backups


Aurora automatically performs:

* Continuous backups
* Point-in-Time Recovery (PITR)
* Automated snapshots

No manual backup scheduling is required.

---

### Encrypt the Database


Aurora supports:

* AWS KMS encryption
* Encryption at rest
* SSL/TLS encryption in transit

---

## 4. Key Features

### High Performance


According to AWS benchmarks:

* Up to **5× faster than standard MySQL**
* Up to **3× faster than standard PostgreSQL**

---

### Distributed Storage


Storage is:

* Shared
* Distributed
* Fault tolerant
* Self-healing

---

### High Availability


Aurora automatically survives:

* Storage failures
* AZ failures
* Instance failures

using its distributed architecture.

---

### Automatic Failover


If the writer instance fails:

* Aurora automatically promotes a replica.
* Applications reconnect using the same cluster endpoint.

Failover typically completes much faster than standard RDS Multi-AZ deployments.

---

### Read Scaling


Supports up to **15 Aurora Replicas**.

Reader Endpoint automatically balances read traffic across replicas.

---

### Automatic Storage Scaling


Storage automatically increases as needed without downtime, up to **128 TiB**.

---

### When to Use


Use Amazon Aurora when you need:

* High-performance relational databases.
* Enterprise workloads.
* High availability.
* Automatic failover.
* Cloud-native architecture.
* Read scaling.
* MySQL or PostgreSQL compatibility.

Typical workloads:

* Banking
* ERP
* SaaS platforms
* Online retail
* Large production applications

---

### When NOT to Use


| Requirement                                  | Better AWS Service |
| -------------------------------------------- | ------------------ |
| Standard relational database with lower cost | Amazon RDS         |
| NoSQL key-value database                     | Amazon DynamoDB    |
| Data warehouse                               | Amazon Redshift    |
| Document database                            | Amazon DocumentDB  |
| In-memory caching                            | Amazon ElastiCache |

> **Exam Tip:** If the scenario emphasizes **maximum performance**, **fast failover**, **cloud-native architecture**, or **minimal downtime**, Aurora is usually the best answer over standard Amazon RDS.

---

**Next:** Part 2 covers:

## 7. Comparison with Similar Services

* Exam Decision Guide

Understanding the differences between Amazon Aurora and other AWS database services is one of the **most frequently tested topics** in the SAA-C03 exam.

---

### Amazon Aurora vs Amazon RDS


| Amazon Aurora                                   | Amazon RDS                                                          |
| ----------------------------------------------- | ------------------------------------------------------------------- |
| AWS-built cloud-native relational database      | Managed relational database service                                 |
| Compatible with MySQL and PostgreSQL            | Supports MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Aurora |
| Distributed storage across **3 AZs (6 copies)** | Uses Amazon EBS storage                                             |
| Automatic storage scaling up to **128 TiB**     | Storage must be provisioned (can later be increased)                |
| Faster failover                                 | Slower failover compared to Aurora                                  |
| Supports up to **15 Aurora Replicas**           | Supports Read Replicas depending on engine                          |
| Higher performance                              | Standard performance                                                |
| Higher cost                                     | Lower cost                                                          |

### When to Choose


* **Need a managed SQL database with lower cost** → Amazon RDS
* **Need maximum performance, high availability, and fast failover** → Amazon Aurora

> **Exam Tip:** Aurora is often the correct answer when the question emphasizes **performance**, **availability**, or **cloud-native database architecture**.

---

### Amazon Aurora vs Amazon DynamoDB


| Amazon Aurora                    | Amazon DynamoDB                                         |
| -------------------------------- | ------------------------------------------------------- |
| Relational SQL database          | NoSQL key-value/document database                       |
| Fixed schema                     | Flexible schema                                         |
| Supports joins and SQL queries   | No joins                                                |
| ACID transactions                | Supports transactions but optimized for NoSQL workloads |
| Best for relational applications | Best for massive scale and low latency                  |

### When to Choose


* **Need SQL or relational data** → Amazon Aurora
* **Need serverless NoSQL with millisecond latency** → Amazon DynamoDB

---

### Amazon Aurora vs Amazon Redshift


| Amazon Aurora                           | Amazon Redshift                               |
| --------------------------------------- | --------------------------------------------- |
| Online Transaction Processing (OLTP)    | Online Analytical Processing (OLAP)           |
| Production application database         | Data warehouse                                |
| Frequent inserts, updates, transactions | Large-scale analytical queries                |
| Supports business applications          | Supports Business Intelligence (BI) reporting |

### When to Choose


* **Application database** → Amazon Aurora
* **Analytics and reporting** → Amazon Redshift

---

### Amazon Aurora vs Self-Managed MySQL/PostgreSQL on EC2


| Amazon Aurora                             | Self-Managed Database on EC2 |
| ----------------------------------------- | ---------------------------- |
| AWS manages backups, patching, monitoring | Customer manages everything  |
| Automatic failover                        | Manual failover              |
| Automatic backups                         | Manual backups               |
| Built-in High Availability                | Must build HA yourself       |
| Minimal operational effort                | High operational effort      |

### When to Choose


* **Want AWS to manage the database** → Amazon Aurora
* **Need complete OS/database customization** → Database on Amazon EC2

---

### Exam Decision Guide


| If the Question Says...                 | Choose                 |
| --------------------------------------- | ---------------------- |
| Highest MySQL/PostgreSQL performance    | Amazon Aurora          |
| Cloud-native relational database        | Amazon Aurora          |
| Fast automatic failover                 | Amazon Aurora          |
| Distributed storage across multiple AZs | Amazon Aurora          |
| Standard managed relational database    | Amazon RDS             |
| Massive NoSQL workload                  | Amazon DynamoDB        |
| Data warehouse                          | Amazon Redshift        |
| Full OS/database control                | Database on Amazon EC2 |

> **Exam Tip:** Keywords like **high-performance**, **enterprise**, **cloud-native**, **minimal downtime**, and **MySQL/PostgreSQL compatibility** usually indicate **Amazon Aurora**.

---

## 8. Real World Example

### Scenario


A global e-commerce company runs a MySQL application.

Requirements:

* High transaction throughput.
* Automatic failover.
* Read scaling.
* Minimal downtime.
* Automatic storage growth.

### Solution


1. Deploy an **Amazon Aurora MySQL** cluster.
2. Use one **Writer Instance**.
3. Create multiple **Aurora Replicas**.
4. Direct write traffic to the **Cluster Endpoint**.
5. Direct read traffic to the **Reader Endpoint**.
6. Enable automated backups and encryption using AWS KMS.

### Benefits


* Very high performance.
* Automatic failover.
* Read scaling.
* Minimal operational effort.
* Highly durable distributed storage.

---

## 9. Pricing Basics

Amazon Aurora pricing depends on:

* DB instance class.
* Storage consumed (automatically grows).
* I/O operations (for Aurora Standard; I/O-Optimized pricing has different characteristics).
* Backup storage beyond the free allocation.
* Data transfer.
* Aurora Replicas.

Cost optimization:

* Right-size DB instances.
* Use Aurora Serverless for variable or unpredictable workloads.
* Delete unused snapshots.
* Purchase Reserved Instances for long-running workloads.

> **Exam Tip:** Aurora generally costs **more than standard Amazon RDS**, but provides significantly better performance and availability.

---

## 10. SAA-C03 Exam Tips

* Aurora is compatible with **MySQL** and **PostgreSQL**.
* Stores **6 copies** of data across **3 Availability Zones**.
* Automatically scales storage up to **128 TiB**.
* Supports up to **15 Aurora Replicas**.
* Uses **Cluster Endpoint** for writes.
* Uses **Reader Endpoint** for read scaling.
* Faster failover than standard RDS.
* Encryption uses **AWS KMS**.
* Supports automated backups and Point-in-Time Recovery (PITR).

---

## 11. Common Exam Traps

### Trap 1: Confusing Aurora with Standard RDS


Amazon Aurora:

* Cloud-native architecture.
* Shared distributed storage.
* Faster failover.
* Higher performance.

Amazon RDS:

* Traditional managed database.
* EBS-based storage.
* Lower cost.

---

### Trap 2: Confusing Aurora Replicas with RDS Read Replicas


Aurora Replicas:

* Share the same storage.
* Lower replication lag.
* Faster failover.
* Can be promoted automatically during failover.

RDS Read Replicas:

* Separate storage.
* Asynchronous replication.
* Primarily used for read scaling.

---

### Trap 3: Thinking Aurora Supports Oracle or SQL Server


Aurora supports only:

* Aurora MySQL
* Aurora PostgreSQL

If Oracle or SQL Server is required, use **Amazon RDS**.

---

### Trap 4: Confusing Cluster Endpoint and Reader Endpoint


**Cluster Endpoint**

* Read/Write traffic.
* Always points to the current writer.

**Reader Endpoint**

* Read-only traffic.
* Load balances across Aurora Replicas.

---

### Trap 5: Assuming Storage Must Be Manually Increased


Aurora storage grows automatically.

No manual resizing is required.

---

### Trap 6: Assuming Aurora Is Always the Best Choice


Aurora provides excellent performance but costs more.

If requirements only mention a **managed relational database** without demanding higher performance or advanced availability, **Amazon RDS** may be the better and more cost-effective choice.

---

## 12. Frequently Asked Exam Scenarios

### Scenario 1


A company needs a MySQL-compatible database with minimal downtime and automatic failover.

**Answer:**

Amazon Aurora MySQL.

---

### Scenario 2


A company wants a PostgreSQL-compatible database with higher performance than standard PostgreSQL.

**Answer:**

Amazon Aurora PostgreSQL.

---

### Scenario 3


An application needs to distribute read traffic across multiple replicas.

**Answer:**

Use the **Aurora Reader Endpoint**.

---

### Scenario 4


A database must automatically survive an Availability Zone failure.

**Answer:**

Amazon Aurora.

---

### Scenario 5


A company needs a relational database but has a tight budget and does not require Aurora's advanced performance.

**Answer:**

Amazon RDS.

---

## 13. Summary

| Topic               | Key Point                                                  |
| ------------------- | ---------------------------------------------------------- |
| Purpose             | High-performance cloud-native relational database          |
| Compatible Engines  | MySQL and PostgreSQL                                       |
| Storage             | 6 copies across 3 AZs                                      |
| High Availability   | Built-in with automatic failover                           |
| Read Scaling        | Up to 15 Aurora Replicas                                   |
| Endpoints           | Cluster Endpoint (read/write), Reader Endpoint (read-only) |
| Encryption          | AWS KMS                                                    |
| Most Tested Concept | Aurora vs RDS                                              |
| Common Trap         | Confusing Aurora Replicas with RDS Read Replicas           |

---

## Revision Checklist

- [ ] Memory Tip


### AWS SAA-C03 Notes – Part 9: Amazon Aurora (Part 2)


- [ ] 


- [ ] Before moving on, make sure you can answer:

- [ ] What is Amazon Aurora?
- [ ] Which database engines are supported?
- [ ] How is Aurora different from Amazon RDS?
- [ ] How many copies of data does Aurora maintain?
- [ ] What is the purpose of the Cluster Endpoint?
- [ ] What is the purpose of the Reader Endpoint?
- [ ] How many Aurora Replicas are supported?
- [ ] Why is Aurora considered highly available?

- [ ] 

### Memory Tip


- [ ] Think of Amazon Aurora as answering this question:

- [ ] > **"How can I run a highly available, cloud-native relational database with maximum performance and minimal operational effort?"**

- [ ] Remember these associations:

- [ ] **Aurora** → High-performance relational database.
- [ ] **6 Copies / 3 AZs** → Built-in durability.
- [ ] **Cluster Endpoint** → Read/Write traffic.
- [ ] **Reader Endpoint** → Read scaling.
- [ ] **15 Aurora Replicas** → High scalability.
- [ ] **AWS KMS** → Encryption.
- [ ] **Amazon RDS** → Standard managed relational database.
- [ ] **DynamoDB** → NoSQL alternative.

### Quick Decision Cheat Sheet


- [ ] **Highest MySQL/PostgreSQL performance?** → Amazon Aurora
- [ ] **Managed SQL database at lower cost?** → Amazon RDS
- [ ] **Need automatic storage scaling?** → Amazon Aurora
- [ ] **Need fast automatic failover?** → Amazon Aurora
- [ ] **Need NoSQL?** → Amazon DynamoDB
- [ ] **Need analytics/data warehouse?** → Amazon Redshift
- [ ] **Need Oracle or SQL Server?** → Amazon RDS
