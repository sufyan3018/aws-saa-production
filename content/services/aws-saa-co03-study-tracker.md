---
title: "AWS SAA-CO03 Study Tracker"
slug: aws-saa-co03-study-tracker
category: Identity & Security
priority: High
order: 1
---

# AWS SAA Notes
# AWS SAA-CO03 Study Tracker 

Based on the official AWS Exam Guide + your 12-13 week / 2 hrs-per-day plan 

#### Domain Weightings (from official exam guide) 

|Domain|Weight|Your focus weeks|
|---|---|---|
|1. Design Secure Architectures|30%|Weeks 1-2, 7|
|2. Design Resilient Architectures|26%|Weeks 3-4|
|3. Design High-Performing Architectures|24%|Weeks 3-6|
|4.DesignCost-OptimizedArchitectures|20%|Week8|



Domain 1 (Security) carries the most weight — don't undercook IAM, KMS, and network security even though it feels "basic." 

#### Weeks 1-2 — Domain 1: Secure Architectures (30%) 

###### Task 1.1 — Secure access to AWS resources 

- J IAM users, groups, roles, policies (identity-based vs resource-based) 

- _) MFA best practices for root + IAM users 

- (J AWS STS, role switching, cross-account access 

- _) AWS IAM Identity Center (federated access) 

- _) Multi-account strategy: AWS Organizations, Control Tower, SCPs 

- _J Shared responsibility model 

###### Task 1.2 — Secure workloads and applications 

- (J VPC security: security groups vs NACLs, route tables, NAT gateways 

- _) Public vs private subnet segmentation 

- _J AWS Shield, AWS WAF (DDoS/SQLi threat vectors) 

- J)Amazon Cognito, GuardDuty, Macie — use cases 

- _) AWS Secrets Manager for app credentials 

- J) VPN / AWS Direct Connect for external connections 

###### Task 1.3 — Data security controls 

- J Encryption at rest (AWS KMS) and in transit (ACM/TLS) 

- _) Key rotation, certificate renewal 

- _) Data backup/replication strategies 

- J Access policies for encryption keys, data classification 

#### Weeks 3—4 — Domain 2: Resilient Architectures (26%) 

###### Task 2.1 — Scalable, loosely coupled architectures 

- J SQS, SNS, EventBridge (pub/sub, decoupling) 

- J API Gateway + REST APIs 

- _) Microservices: stateless vs stateful 

- _J Horizontal vs vertical scaling 

- LJ CDN / edge accelerators (CloudFront) 

- () Load balancing (ALB) concepts 

- _) Multi-tier architecture design 

- ¢ _) Containers: ECS, EKS — when to use 

- J Serverless: Lambda, Fargate 

- _) Storage types: object / file / block 

- _J RDS read replicas — when to use 

- _) Step Functions (workflow orchestration) 

###### Task 2.2 — Highly available / fault-tolerant architectures 

   - LJ Multi-AZ/ multi-Region design 

   - _) DR strategies: backup & restore, pilot light, warm standby, active-active + RPO/RTO 

   - J Failover strategies, immutable infrastructure 

   - J RDS Proxy 

   - (J Service quotas & throttling 

   - _) Storage durability & replication options 

   - LJ AWS X-Ray for visibility 

- Weeks 5-6 — Domain 3: High-Performing Architectures (24%) — Part 1 

###### Task 3.1 — Storage performance/scale 

- _) S3, EFS, EBS — performance characteristics 

* _) Hybrid storage for performance needs 

###### Task 3.2 — Compute performance/elasticity 

- |) EC2 instance families & sizing 

- J Auto Scaling (EC2 ASG, AWS Auto Scaling) 

- _J AWS Batch, EMR, Fargate use cases 

- _) Container orchestration (ECS/EKS) 

- J) Lambda memory/resource sizing 

###### Task 3.3 — Database performance 

- J ElastiCache caching strategies 

- _) Read-heavy vs write-heavy access patterns 

- _) DB capacity planning (IOPS, capacity units) 

- _J Aurora vs DynamoDB vs RDS — when to use which 

- _) Read replicas for performance 

### Week 7 — Domain 3 Part 2 + Domain 1 wrap-up 

###### Task 3.4 — Network performance 

- ¢ _J CloudFront, Global Accelerator 

- _) Subnet tiers, routing, IP addressing design 

- J Direct Connect vs VPN vs PrivateLink 

- _) Load balancer type selection 

###### Task 3.5 — Data ingestion/transformation 

- _) Kinesis (streaming data) 

- _J AWS Glue (transformation), Lake Formation, Athena 

- _) DataSync, Storage Gateway (data transfer) 

- _) Format transformation (e.g., CSV > Parquet) 

###### Domain 1 gap-fill 

- _) Re-review anything shaky from weeks 1-2 (this domain is 30% — worth a second pass) 

### Week 8 — Domain 4: Cost-Optimized Architectures (20%) 

Task 4.1 — Storage cost 

- _) S3 storage classes & lifecycle policies 

- _) EBS volume types (cost vs performance) 

- () Cost tools: Cost Explorer, Budgets, Cost and Usage Report 

###### Task 4.2 — Compute cost 

- _) Purchasing options: On-Demand, Reserved, Spot, Savings Plans 

- ©) Instance right-sizing 

- _) EC2 hibernation, scaling for cost 

###### Task 4.3 — Database cost 

- J DynamoDB vs RDS cost tradeoffs 

- _J Backup/retention policy design for cost 

###### Task 4.4 — Network cost 

- J NAT gateway vs NAT instance cost 

- (J Data transfer cost minimization (VPC endpoints, Region/AZ routing) 

- _) Direct Connect vs VPN cost tradeoffs 

###### Also this week: 

- LJ Read the AWS Well-Architected Framework whitepaper (6 pillars) — ties all 4 domains 

- together 

## Weeks 9-11 — Practice Test Phase 

- (J Full timed practice test (alternate days) 

- |) Log score + weak domains below 

- |) Deep-review every wrong answer (the "why," not just the right choice) 



<!-- Start of picture text -->
Attempt# Date Score Weakest domain<br>1<br>2<br>3<br>4<br>5<br>6<br><!-- End of picture text -->

###### Weeks 12-13 — Final Polish 

- (Consistently scoring 85%+ on practice exams 

- (©) Light review only — no new content 

- () Book exam date 

##### Full In-Scope Service Checklist (quick self-audit) 

Use this as a gut-check near the end — for each service, ask "could | say in one sentence when to use this vs its main alternative?" 

Compute/Containers: EC2, EC2 Auto Scaling, Elastic Beanstalk, Outposts, Batch, ECS, ECR, EKS, Fargate, Lambda 

Storage: S3, S3 Glacier, EBS, EFS, FSx, Storage Gateway, Backup 

Database: RDS, Aurora, Aurora Serverless, DynamoDB, ElastiCache, DocumentDB, Neptune, Keyspaces, Redshift 

Networking: VPC, Route 53, CloudFront, ELB, Global Accelerator, Direct Connect, Site-to-Site VPN, Client VPN, Transit Gateway, PrivateLink 

Security: IAM, IAM Identity Center, KMS, Secrets Manager, ACM, Cognito, GuardDuty, Macie, Shield, WAF, Network Firewall, Security Hub, Detective, CloudHSM, Artifact, Audit Manager, RAM 

App Integration: SQS, SNS, EventBridge, Step Functions, AppSync, Amazon MQ, AppFlow 

Analytics: Athena, Kinesis (+ Data Firehose), EMR, Glue, Lake Formation, OpenSearch, MSK, Redshift, QuickSuite, Data Exchange 

Management/Governance: CloudFormation, CloudWatch, CloudTrail, Config, Systems Manager, Organizations, Control Tower, Trusted Advisor, Well-Architected Tool, Compute Optimizer, Service Catalog, License Manager, Managed Grafana/Prometheus 

Migration: Application Migration Service, DMS, DataSync, Snow Family, Transfer Family 

Cost Management: Budgets, Cost Explorer, Cost and Usage Report, Savings Plans 

Front-end/Serverless extras: AP! Gateway, Amplify, Device Farm 

ML (light conceptual knowledge only): SageMaker Al, Rekognition, Comprehend, Textract, Translate, Transcribe, Polly, Lex, Kendra 

Tip: check the "Out-of-Scope AWS Services" page of the exam guide too — knowing what you 

DON'T need ta stidv saves time 

