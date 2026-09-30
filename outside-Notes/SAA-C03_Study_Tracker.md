# AWS SAA-C03 Study Tracker
*Based on the official AWS Exam Guide + your 12–13 week / 2 hrs-per-day plan*

---

## Domain Weightings (from official exam guide)

| Domain | Weight | Your focus weeks |
|---|---|---|
| 1. Design Secure Architectures | 30% | Weeks 1–2, 7 |
| 2. Design Resilient Architectures | 26% | Weeks 3–4 |
| 3. Design High-Performing Architectures | 24% | Weeks 3–6 |
| 4. Design Cost-Optimized Architectures | 20% | Week 8 |

Domain 1 (Security) carries the most weight — don't undercook IAM, KMS, and network security even though it feels "basic."

---

## Weeks 1–2 — Domain 1: Secure Architectures (30%)

**Task 1.1 — Secure access to AWS resources**
- [ ] IAM users, groups, roles, policies (identity-based vs resource-based)
- [ ] MFA best practices for root + IAM users
- [ ] AWS STS, role switching, cross-account access
- [ ] AWS IAM Identity Center (federated access)
- [ ] Multi-account strategy: AWS Organizations, Control Tower, SCPs
- [ ] Shared responsibility model

**Task 1.2 — Secure workloads and applications**
- [ ] VPC security: security groups vs NACLs, route tables, NAT gateways
- [ ] Public vs private subnet segmentation
- [ ] AWS Shield, AWS WAF (DDoS/SQLi threat vectors)
- [ ] Amazon Cognito, GuardDuty, Macie — use cases
- [ ] AWS Secrets Manager for app credentials
- [ ] VPN / AWS Direct Connect for external connections

**Task 1.3 — Data security controls**
- [ ] Encryption at rest (AWS KMS) and in transit (ACM/TLS)
- [ ] Key rotation, certificate renewal
- [ ] Data backup/replication strategies
- [ ] Access policies for encryption keys, data classification

---

## Weeks 3–4 — Domain 2: Resilient Architectures (26%)

**Task 2.1 — Scalable, loosely coupled architectures**
- [ ] SQS, SNS, EventBridge (pub/sub, decoupling)
- [ ] API Gateway + REST APIs
- [ ] Microservices: stateless vs stateful
- [ ] Horizontal vs vertical scaling
- [ ] CDN / edge accelerators (CloudFront)
- [ ] Load balancing (ALB) concepts
- [ ] Multi-tier architecture design
- [ ] Containers: ECS, EKS — when to use
- [ ] Serverless: Lambda, Fargate
- [ ] Storage types: object / file / block
- [ ] RDS read replicas — when to use
- [ ] Step Functions (workflow orchestration)

**Task 2.2 — Highly available / fault-tolerant architectures**
- [ ] Multi-AZ / multi-Region design
- [ ] DR strategies: backup & restore, pilot light, warm standby, active-active + RPO/RTO
- [ ] Failover strategies, immutable infrastructure
- [ ] RDS Proxy
- [ ] Service quotas & throttling
- [ ] Storage durability & replication options
- [ ] AWS X-Ray for visibility

---

## Weeks 5–6 — Domain 3: High-Performing Architectures (24%) — Part 1

**Task 3.1 — Storage performance/scale**
- [ ] S3, EFS, EBS — performance characteristics
- [ ] Hybrid storage for performance needs

**Task 3.2 — Compute performance/elasticity**
- [ ] EC2 instance families & sizing
- [ ] Auto Scaling (EC2 ASG, AWS Auto Scaling)
- [ ] AWS Batch, EMR, Fargate use cases
- [ ] Container orchestration (ECS/EKS)
- [ ] Lambda memory/resource sizing

**Task 3.3 — Database performance**
- [ ] ElastiCache caching strategies
- [ ] Read-heavy vs write-heavy access patterns
- [ ] DB capacity planning (IOPS, capacity units)
- [ ] Aurora vs DynamoDB vs RDS — when to use which
- [ ] Read replicas for performance

---

## Week 7 — Domain 3 Part 2 + Domain 1 wrap-up

**Task 3.4 — Network performance**
- [ ] CloudFront, Global Accelerator
- [ ] Subnet tiers, routing, IP addressing design
- [ ] Direct Connect vs VPN vs PrivateLink
- [ ] Load balancer type selection

**Task 3.5 — Data ingestion/transformation**
- [ ] Kinesis (streaming data)
- [ ] AWS Glue (transformation), Lake Formation, Athena
- [ ] DataSync, Storage Gateway (data transfer)
- [ ] Format transformation (e.g., CSV → Parquet)

**Domain 1 gap-fill**
- [ ] Re-review anything shaky from weeks 1–2 (this domain is 30% — worth a second pass)

---

## Week 8 — Domain 4: Cost-Optimized Architectures (20%)

**Task 4.1 — Storage cost**
- [ ] S3 storage classes & lifecycle policies
- [ ] EBS volume types (cost vs performance)
- [ ] Cost tools: Cost Explorer, Budgets, Cost and Usage Report

**Task 4.2 — Compute cost**
- [ ] Purchasing options: On-Demand, Reserved, Spot, Savings Plans
- [ ] Instance right-sizing
- [ ] EC2 hibernation, scaling for cost

**Task 4.3 — Database cost**
- [ ] DynamoDB vs RDS cost tradeoffs
- [ ] Backup/retention policy design for cost

**Task 4.4 — Network cost**
- [ ] NAT gateway vs NAT instance cost
- [ ] Data transfer cost minimization (VPC endpoints, Region/AZ routing)
- [ ] Direct Connect vs VPN cost tradeoffs

**Also this week:**
- [ ] Read the AWS Well-Architected Framework whitepaper (6 pillars) — ties all 4 domains together

---

## Weeks 9–11 — Practice Test Phase

- [ ] Full timed practice test (alternate days)
- [ ] Log score + weak domains below
- [ ] Deep-review every wrong answer (the "why," not just the right choice)

| Attempt # | Date | Score | Weakest domain |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |

---

## Weeks 12–13 — Final Polish

- [ ] Consistently scoring 85%+ on practice exams
- [ ] Light review only — no new content
- [ ] Book exam date

---

## Full In-Scope Service Checklist (quick self-audit)

Use this as a gut-check near the end — for each service, ask "could I say in one sentence when to use this vs its main alternative?"

**Compute/Containers:** EC2, EC2 Auto Scaling, Elastic Beanstalk, Outposts, Batch, ECS, ECR, EKS, Fargate, Lambda

**Storage:** S3, S3 Glacier, EBS, EFS, FSx, Storage Gateway, Backup

**Database:** RDS, Aurora, Aurora Serverless, DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces, Redshift

**Networking:** VPC, Route 53, CloudFront, ELB, Global Accelerator, Direct Connect, Site-to-Site VPN, Client VPN, Transit Gateway, PrivateLink

**Security:** IAM, IAM Identity Center, KMS, Secrets Manager, ACM, Cognito, GuardDuty, Macie, Shield, WAF, Network Firewall, Security Hub, Detective, CloudHSM, Artifact, Audit Manager, RAM

**App Integration:** SQS, SNS, EventBridge, Step Functions, AppSync, Amazon MQ, AppFlow

**Analytics:** Athena, Kinesis (+ Data Firehose), EMR, Glue, Lake Formation, OpenSearch, MSK, Redshift, QuickSuite, Data Exchange

**Management/Governance:** CloudFormation, CloudWatch, CloudTrail, Config, Systems Manager, Organizations, Control Tower, Trusted Advisor, Well-Architected Tool, Compute Optimizer, Service Catalog, License Manager, Managed Grafana/Prometheus

**Migration:** Application Migration Service, DMS, DataSync, Snow Family, Transfer Family

**Cost Management:** Budgets, Cost Explorer, Cost and Usage Report, Savings Plans

**Front-end/Serverless extras:** API Gateway, Amplify, Device Farm

**ML (light conceptual knowledge only):** SageMaker AI, Rekognition, Comprehend, Textract, Translate, Transcribe, Polly, Lex, Kendra

---

*Tip: check the "Out-of-Scope AWS Services" page of the exam guide too — knowing what you DON'T need to study saves time.*
