---
title: "Amazon RDS"
slug: amazon-rds
category: Databases
priority: High
order: 1
---

# AWS SAA Notes

## 1. Purpose

**Amazon Relational Database Service (Amazon RDS)** is a fully managed service that makes it easy to **set up, operate, scale, and maintain relational databases** in the AWS Cloud.

RDS automates common database administration tasks such as:

* Hardware provisioning
* Operating system patching
* Database software patching
* Automated backups
* Point-in-Time Recovery (PITR)
* Monitoring
* High Availability
* Read scaling (using Read Replicas)

> **Exam Keyword:** Managed Relational Database Service

---

## 2. How It Works

You choose a database engine, instance type, storage option, and availability configuration.

AWS provisions and manages the database infrastructure while you focus on your application.

### Amazon RDS Workflow


```text
Application
      │
SQL Queries
      │
Amazon RDS
      │
Database Engine
(MySQL, PostgreSQL, etc.)
      │
Storage (EBS)
```

Unlike Amazon EC2 databases, AWS manages the underlying infrastructure.

---

### Supported Database Engines


Amazon RDS supports several relational database engines:

* Amazon Aurora
* MySQL
* PostgreSQL
* MariaDB
* Oracle Database
* Microsoft SQL Server

> **Exam Tip:** Aurora is compatible with MySQL and PostgreSQL but is a separate AWS-managed database engine with higher performance.

---

### Storage Options


Amazon RDS supports:

* General Purpose SSD (gp3/gp2)
* Provisioned IOPS SSD (io1/io2)

Storage can be increased without downtime for most database engines.

---

## 3. Architecture

Typical architecture:

```text
Users
   │
Application
   │
Amazon RDS
   │
Primary DB Instance
   │
Amazon EBS Storage
```

For production workloads:

```text
Application
      │
Application Load Balancer
      │
EC2 / ECS / Lambda
      │
Amazon RDS
```

---

### High Availability (Multi-AZ)


```text
          Primary DB
              │
      Synchronous Replication
              │
        Standby DB
```

Characteristics:

* Automatic failover
* Different Availability Zone
* Standby database is **not readable**
* Improves availability, **not performance**

> **Exam Tip:** Multi-AZ is for **High Availability**, not read scaling.

---

### Read Replicas


```text
          Primary DB
             │
Asynchronous Replication
      ┌──────┴──────┐
Replica 1      Replica 2
```

Characteristics:

* Read-only
* Improves read performance
* Asynchronous replication
* Can be promoted to standalone databases

> **Exam Tip:** Read Replicas are for **scaling reads**, not High Availability.

---


### Use Multi-AZ for Production


Production databases should use:

* Multi-AZ deployment
* Automatic failover
* Higher availability

---

### Use Read Replicas for Read Scaling


Good for:

* Reporting
* Analytics
* Read-heavy applications

Examples:

* News websites
* E-commerce product catalog
* Blogging platforms

---

### Enable Automated Backups


Amazon RDS automatically performs:

* Daily snapshots
* Transaction log backups

Supports:

* Point-in-Time Recovery (PITR)

Retention:

* 0–35 days

---

### Enable Encryption


Encrypt databases using:

* AWS KMS

Encryption covers:

* Database storage
* Automated backups
* Read Replicas
* Snapshots

---

### Deploy in Private Subnets


Best practice:

```text
Internet
    │
Application
    │
Private Subnet
    │
Amazon RDS
```

Avoid placing RDS in public subnets unless absolutely necessary.

---

## 4. Key Features

### Fully Managed


AWS manages:

* OS patching
* Database patching
* Monitoring
* Maintenance
* Hardware replacement

---

### Automated Backups


Supports:

* Daily backups
* Transaction logs
* Point-in-Time Recovery

---

### Multi-AZ


Provides:

* High Availability
* Automatic failover
* Business continuity

---

### Read Replicas


Provides:

* Read scaling
* Improved performance
* Disaster recovery options

Supports multiple Read Replicas depending on the database engine.

---

### Encryption


Supports:

* AWS KMS encryption
* Encryption at rest
* SSL/TLS encryption in transit

---

### Monitoring


Integrates with:

* Amazon CloudWatch
* Enhanced Monitoring
* Performance Insights

---

### When to Use


Use Amazon RDS when you need:

* Relational databases.
* SQL support.
* Transactions (ACID compliance).
* Managed database administration.
* Automated backups.
* High Availability.
* Read scaling.

Typical applications:

* Banking systems
* ERP systems
* E-commerce
* CRM applications
* Business applications

---

### When NOT to Use


| Requirement                            | Better AWS Service |
| -------------------------------------- | ------------------ |
| NoSQL key-value database               | Amazon DynamoDB    |
| Graph database                         | Amazon Neptune     |
| Time-series database                   | Amazon Timestream  |
| Document database (MongoDB-compatible) | Amazon DocumentDB  |
| Data warehouse                         | Amazon Redshift    |
| In-memory caching                      | Amazon ElastiCache |

> **Exam Tip:** If the application requires **SQL** and **relational data**, choose **Amazon RDS**. If it requires **NoSQL**, Amazon **DynamoDB** is usually the correct answer.

---

**Next:** Part 2 covers:

## 7. Comparison with Similar Services

* Exam Decision Guide

Understanding the differences between Amazon RDS and other database services is one of the **highest-weighted topics** in the SAA-C03 exam.

---

### Amazon RDS vs Amazon Aurora


| Amazon RDS                                              | Amazon Aurora                                                                     |
| ------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Managed relational database service                     | AWS-built cloud-native relational database                                        |
| Supports MySQL, PostgreSQL, MariaDB, Oracle, SQL Server | Compatible with MySQL and PostgreSQL                                              |
| Uses EBS storage attached to the DB instance            | Distributed storage across 3 AZs (up to 128 TiB)                                  |
| Good performance                                        | Up to **5× faster than MySQL** and **3× faster than PostgreSQL** (AWS benchmarks) |
| Lower cost                                              | Higher performance with additional features                                       |

### When to Choose


* **Standard relational database** → Amazon RDS
* **High-performance cloud-native relational database** → Amazon Aurora

> **Exam Tip:** If the scenario asks for **maximum performance**, **high availability**, or **minimal failover time**, Aurora is usually the better answer.

---

### Amazon RDS vs Amazon DynamoDB


| Amazon RDS                                                   | Amazon DynamoDB                        |
| ------------------------------------------------------------ | -------------------------------------- |
| Relational (SQL) database                                    | NoSQL key-value/document database      |
| Fixed schema                                                 | Flexible schema                        |
| Supports joins and ACID transactions                         | No joins (limited transaction support) |
| Scale vertically (and read horizontally using Read Replicas) | Automatically scales horizontally      |
| Best for structured data                                     | Best for massive scale and low latency |

### When to Choose


* **Need SQL, joins, or complex queries?** → Amazon RDS
* **Need millisecond latency and serverless NoSQL?** → Amazon DynamoDB

---

### Amazon RDS vs Amazon Redshift


| Amazon RDS                           | Amazon Redshift                          |
| ------------------------------------ | ---------------------------------------- |
| Online Transaction Processing (OLTP) | Online Analytical Processing (OLAP)      |
| Operational database                 | Data warehouse                           |
| Handles frequent inserts/updates     | Optimized for analytics and reporting    |
| Supports business applications       | Supports BI and large analytical queries |

### When to Choose


* **Run an application database** → Amazon RDS
* **Analyze terabytes or petabytes of data** → Amazon Redshift

---

### Amazon RDS vs Amazon DocumentDB


| Amazon RDS              | Amazon DocumentDB                    |
| ----------------------- | ------------------------------------ |
| Relational SQL database | MongoDB-compatible document database |
| Structured tables       | JSON-like documents                  |
| Fixed schema            | Flexible schema                      |

### When to Choose


* **Structured relational data** → Amazon RDS
* **Document-based applications** → Amazon DocumentDB

---

### Amazon RDS vs Self-Managed Database on Amazon EC2


| Amazon RDS                                          | Database on Amazon EC2         |
| --------------------------------------------------- | ------------------------------ |
| AWS manages backups, patching, monitoring, failover | You manage everything          |
| Easy to administer                                  | Full OS and DB control         |
| Limited OS access                                   | Complete administrative access |
| Supports automated backups and Multi-AZ             | Manual setup required          |

### When to Choose


* **Want managed database administration** → Amazon RDS
* **Need complete OS/database customization** → Database on Amazon EC2

> **Exam Tip:** If the requirement is to **minimize operational effort**, Amazon RDS is almost always preferred over a self-managed database on EC2.

---

### Exam Decision Guide


| If the Question Says...                               | Choose                   |
| ----------------------------------------------------- | ------------------------ |
| Managed relational database                           | Amazon RDS               |
| High-performance MySQL/PostgreSQL-compatible database | Amazon Aurora            |
| NoSQL key-value database                              | Amazon DynamoDB          |
| Data warehouse for analytics                          | Amazon Redshift          |
| MongoDB-compatible database                           | Amazon DocumentDB        |
| Full OS/database control                              | Database on Amazon EC2   |
| Automatic backups and patching                        | Amazon RDS               |
| High availability with automatic failover             | Amazon RDS Multi-AZ      |
| Read scaling                                          | Amazon RDS Read Replicas |

> **Exam Tip:** The words **SQL**, **transaction**, **relational**, **joins**, or **ACID** almost always point to **Amazon RDS** or **Amazon Aurora**.

---

## 8. Real World Example

### Scenario


An e-commerce company runs a MySQL database for customer orders.

Requirements:

* Automatic backups.
* High Availability.
* Read scaling during peak shopping events.
* Minimal database administration.

### Solution


1. Deploy Amazon RDS for MySQL.
2. Enable **Multi-AZ** for automatic failover.
3. Create **Read Replicas** for reporting and product searches.
4. Enable automated backups with a 7-day retention period.
5. Encrypt the database using AWS KMS.
6. Monitor performance using Amazon CloudWatch and Performance Insights.

### Benefits


* Managed database administration.
* Automatic failover.
* Improved read performance.
* Simplified backup and recovery.
* Secure encryption.

---

## 9. Pricing Basics

Amazon RDS pricing depends on:

* DB instance class (CPU and memory).
* Storage type and size.
* Provisioned IOPS (if selected).
* Backup storage beyond the free allocation.
* Data transfer.
* Multi-AZ deployments.
* Read Replicas.

Cost optimization:

* Choose the appropriate instance size.
* Use **gp3** storage for many workloads.
* Stop non-production DB instances when not in use (where supported).
* Purchase **Reserved Instances** for long-running production databases.

> **Exam Tip:** **Multi-AZ** increases cost because AWS maintains a standby database in another Availability Zone.

---

## 10. SAA-C03 Exam Tips

* Amazon RDS is a **managed relational database** service.
* Supports **MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Aurora**.
* **Multi-AZ** provides High Availability using **synchronous replication**.
* **Read Replicas** provide read scaling using **asynchronous replication**.
* Automated backups support **Point-in-Time Recovery (PITR)**.
* Encryption uses **AWS KMS**.
* Use private subnets for production databases.
* RDS reduces operational overhead compared to self-managed databases.

---

## 11. Common Exam Traps

### Trap 1: Confusing Multi-AZ with Read Replicas


**Multi-AZ**

* High Availability
* Synchronous replication
* Automatic failover
* Standby **cannot** serve read traffic

**Read Replica**

* Read scaling
* Asynchronous replication
* No automatic failover (unless manually promoted)
* Read-only until promoted

> **Most Common SAA Question**

* **Need High Availability?** → Multi-AZ
* **Need better read performance?** → Read Replica

---

### Trap 2: Choosing DynamoDB for SQL Workloads


Amazon DynamoDB:

* NoSQL
* Key-value
* No joins

Amazon RDS:

* SQL
* Transactions
* Relational data

---

### Trap 3: Thinking RDS Eliminates All Administration


AWS manages:

* Backups
* Patching
* Monitoring
* Hardware
* Failover

You still manage:

* Database schema
* Indexes
* SQL queries
* User permissions
* Performance tuning

---

### Trap 4: Confusing Aurora with Standard RDS


Aurora is **not** just another RDS engine.

Aurora has:

* Distributed storage across 3 AZs.
* Better performance.
* Faster failover.
* Additional high-availability features.

---

### Trap 5: Assuming Read Replicas Improve Write Performance


Read Replicas:

* Improve **read** throughput only.

Writes always go to the **primary database**.

---

### Trap 6: Forgetting Automated Backups


Automated backups enable:

* Point-in-Time Recovery (PITR)
* Recovery to any second within the retention period

Manual snapshots are separate and remain until deleted.

---

## 12. Frequently Asked Exam Scenarios

### Scenario 1


A company requires automatic failover if the primary database becomes unavailable.

**Answer:**

Amazon RDS **Multi-AZ**.

---

### Scenario 2


A reporting application is slowing down the production database due to heavy read traffic.

**Answer:**

Create one or more **Read Replicas**.

---

### Scenario 3


An application requires SQL joins and ACID transactions.

**Answer:**

Amazon RDS (or Amazon Aurora).

---

### Scenario 4


A company needs a fully managed MySQL-compatible database with higher performance and better availability than standard MySQL.

**Answer:**

Amazon Aurora.

---

### Scenario 5


A gaming application requires a NoSQL database capable of handling millions of requests per second with single-digit millisecond latency.

**Answer:**

Amazon DynamoDB.

---

## 13. Summary

| Topic               | Key Point                                              |
| ------------------- | ------------------------------------------------------ |
| Purpose             | Managed relational database                            |
| Engines             | MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Aurora |
| High Availability   | Multi-AZ                                               |
| Read Scaling        | Read Replicas                                          |
| Backups             | Automated backups + PITR                               |
| Encryption          | AWS KMS                                                |
| Most Tested Concept | Multi-AZ vs Read Replicas                              |
| Common Trap         | Using Read Replicas for High Availability              |

---

## Revision Checklist

- [ ] Memory Tip


### AWS SAA-C03 Notes – Part 8: Amazon RDS (Part 2)


- [ ] 


- [ ] Before moving on, make sure you can answer:

- [ ] What is Amazon RDS?
- [ ] Which database engines are supported?
- [ ] What is the difference between Multi-AZ and Read Replicas?
- [ ] How does RDS differ from Aurora?
- [ ] When should you choose DynamoDB instead of RDS?
- [ ] How does Point-in-Time Recovery work?
- [ ] Which AWS service encrypts RDS data?
- [ ] Why is RDS preferred over self-managed databases on EC2?

- [ ] 

### Memory Tip


- [ ] Think of Amazon RDS as answering this question:

- [ ] > **"How can I run a relational SQL database without managing the underlying infrastructure?"**

- [ ] Remember these associations:

- [ ] **Amazon RDS** → Managed relational database.
- [ ] **Multi-AZ** → High Availability + automatic failover.
- [ ] **Read Replicas** → Read scaling.
- [ ] **AWS KMS** → Encryption.
- [ ] **CloudWatch** → Monitoring.
- [ ] **Aurora** → High-performance cloud-native relational database.
- [ ] **DynamoDB** → NoSQL alternative.
- [ ] **Redshift** → Analytics and data warehousing.

### Quick Decision Cheat Sheet


- [ ] **SQL / Relational database?** → Amazon RDS
- [ ] **Maximum MySQL/PostgreSQL performance?** → Amazon Aurora
- [ ] **High Availability?** → Multi-AZ
- [ ] **Improve read performance?** → Read Replicas
- [ ] **NoSQL?** → DynamoDB
- [ ] **Data warehouse?** → Redshift
- [ ] **Need full OS control?** → Database on Amazon EC2
