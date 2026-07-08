---
title: "Amazon GuardDuty"
slug: amazon-guardduty
category: Identity & Security
priority: High
order: 1
---

# AWS SAA Notes

## 1. Purpose

**Amazon GuardDuty** is a fully managed **threat detection service** that continuously monitors your AWS environment for **malicious activity, suspicious behavior, and potential security threats** using machine learning, anomaly detection, and threat intelligence.

Unlike preventive security services (such as IAM or AWS WAF), GuardDuty **does not block attacks**. Instead, it **detects threats and generates security findings** for investigation and response.

> **Exam Keyword:** Intelligent Threat Detection

---

## 2. How It Works

GuardDuty continuously analyzes multiple AWS data sources for suspicious activities.

When suspicious behavior is detected, GuardDuty generates a **finding**, which can then trigger alerts or automated remediation.

### Threat Detection Flow


```text
AWS Resources
      │
Generate Logs
      │
Amazon GuardDuty
      │
Machine Learning
Threat Intelligence
Anomaly Detection
      │
Security Finding
      │
CloudWatch / EventBridge
      │
Security Team or Automation
```

> **Exam Tip:** GuardDuty **detects threats**; it does **not automatically block them**.

---

### Data Sources Used by GuardDuty


GuardDuty analyzes several AWS log sources without requiring you to deploy agents.

Primary sources include:

* **AWS CloudTrail Management Events**
* **Amazon VPC Flow Logs**
* **DNS Logs**

Additional optional protection plans support services such as:

* Amazon S3 Protection
* Amazon EKS Protection
* Amazon EBS Malware Protection
* Amazon RDS Protection (feature availability may vary)

> **Exam Tip:** CloudTrail, VPC Flow Logs, and DNS Logs are the three classic log sources most frequently tested.

---

### Example Threat Detection


```text
Unknown IP Address
        │
Attempts Console Login
        │
CloudTrail Logs
        │
GuardDuty
        │
Finding:
UnauthorizedAccess:IAMUser
```

Another example:

```text
EC2 Instance
      │
Communicates With
Known Malware Server
      │
VPC Flow Logs
      │
GuardDuty
      │
Finding Generated
```

---

## 3. Architecture

Typical architecture:

```text
CloudTrail
VPC Flow Logs
DNS Logs
      │
      └──────────────┐
                     │
              Amazon GuardDuty
                     │
            Security Findings
                     │
         EventBridge / CloudWatch
                     │
 Lambda / SNS / Security Team
```

GuardDuty integrates with AWS monitoring and automation services to help organizations respond quickly to detected threats.

---

### AWS Services Commonly Integrated


Amazon GuardDuty integrates with:

* AWS CloudTrail
* Amazon VPC
* Amazon S3
* Amazon EventBridge
* Amazon CloudWatch
* AWS Lambda
* Amazon SNS
* AWS Security Hub

> **Exam Tip:** GuardDuty + EventBridge + Lambda is a common architecture for automated incident response.

---


### Enable GuardDuty Across All Accounts


For organizations using **AWS Organizations**, enable GuardDuty centrally for all AWS accounts.

Benefits:

* Centralized monitoring
* Simplified administration
* Organization-wide threat visibility

---

### Use Automated Response


Instead of manually responding to every finding:

```text
GuardDuty Finding
        │
EventBridge Rule
        │
Lambda Function
        │
Quarantine EC2 Instance
```

Automated remediation reduces response time.

---

### Integrate with Security Hub


Security Hub aggregates findings from:

* GuardDuty
* Inspector
* Macie
* IAM Access Analyzer
* Other AWS and partner security tools

This provides a centralized security dashboard.

---

### Monitor Public Resources


GuardDuty is especially valuable for:

* Internet-facing EC2 instances
* Public APIs
* Public S3 buckets
* Production workloads

These resources are more likely to be targeted by attackers.

---

### Use Least Privilege


GuardDuty is a detection service.

Continue using:

* IAM
* IAM Roles
* Security Groups
* NACLs

to minimize attack surfaces.

---

## 4. Key Features

### Continuous Threat Detection


Monitors AWS accounts 24/7 for suspicious activity.

---

### Machine Learning


Detects unusual behavior that may indicate compromised resources.

Examples:

* Unusual API calls
* Credential compromise
* Abnormal network traffic

---

### Threat Intelligence


Uses AWS and third-party threat intelligence feeds to identify communication with:

* Known malicious IP addresses
* Malware domains
* Command-and-control (C2) servers

---

### Security Findings


Each detected threat generates a structured finding.

Example finding categories:

* UnauthorizedAccess
* CryptoCurrency Mining
* Reconnaissance
* Trojan
* Backdoor
* Credential Access

---

### No Agents Required


GuardDuty analyzes AWS logs directly.

No software installation is required on EC2 instances.

---

### Multi-Account Support


Supports centralized administration using AWS Organizations.

---

### When to Use


Use Amazon GuardDuty when you need to:

* Detect compromised AWS accounts.
* Detect unusual API activity.
* Monitor suspicious network traffic.
* Detect compromised EC2 instances.
* Detect cryptocurrency mining.
* Detect communication with known malicious IP addresses.
* Continuously monitor production AWS environments.

---

### When NOT to Use


| Requirement                                       | Better AWS Service |
| ------------------------------------------------- | ------------------ |
| Block SQL Injection or XSS                        | AWS WAF            |
| Protect against DDoS attacks                      | AWS Shield         |
| Assess EC2 instances for software vulnerabilities | Amazon Inspector   |
| Discover sensitive data in Amazon S3              | Amazon Macie       |
| Encrypt data                                      | AWS KMS            |

> **Exam Tip:** GuardDuty **detects threats**. It does **not** replace WAF, Shield, or Inspector.

---

**Next:** Part 2 covers:

## 7. Comparison with Similar Services

* Exam Decision Guide

Understanding the differences between Amazon GuardDuty and other AWS security services is one of the most frequently tested topics in the SAA-C03 exam.

---

### Amazon GuardDuty vs Amazon Inspector


| Amazon GuardDuty                                                               | Amazon Inspector                                                                    |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Detects security threats and suspicious activity                               | Identifies software vulnerabilities and unintended network exposure                 |
| Analyzes CloudTrail, VPC Flow Logs, DNS Logs, and other supported data sources | Scans EC2 instances, ECR container images, and Lambda functions for vulnerabilities |
| Detects compromised accounts and malicious behavior                            | Finds CVEs, missing patches, and security issues                                    |
| Continuous threat detection                                                    | Continuous vulnerability assessment                                                 |

### When to Choose


* **Need to detect compromised AWS accounts or malicious activity?** → Amazon GuardDuty
* **Need to identify software vulnerabilities?** → Amazon Inspector

> **Exam Tip:**
> **GuardDuty = Threat Detection**
> **Inspector = Vulnerability Assessment**

---

### Amazon GuardDuty vs Amazon Macie


| Amazon GuardDuty                         | Amazon Macie                                       |
| ---------------------------------------- | -------------------------------------------------- |
| Detects threats and suspicious behavior  | Discovers and protects sensitive data in Amazon S3 |
| Focuses on account and workload security | Focuses on data security                           |
| Detects compromised resources            | Detects PII and sensitive information              |

### When to Choose


* **Detect suspicious AWS activity?** → Amazon GuardDuty
* **Find sensitive data such as credit card numbers or PII?** → Amazon Macie

---

### Amazon GuardDuty vs AWS Security Hub


| Amazon GuardDuty            | AWS Security Hub                                         |
| --------------------------- | -------------------------------------------------------- |
| Detects threats             | Aggregates security findings                             |
| Generates security findings | Centralizes findings from multiple AWS security services |
| Security monitoring service | Security management dashboard                            |

### When to Choose


* **Need threat detection?** → Amazon GuardDuty
* **Need one dashboard for all security findings?** → AWS Security Hub

> **Exam Tip:** GuardDuty commonly sends findings to Security Hub.

---

### Amazon GuardDuty vs AWS Shield


| Amazon GuardDuty            | AWS Shield                           |
| --------------------------- | ------------------------------------ |
| Detects suspicious activity | Protects against DDoS attacks        |
| Generates findings          | Automatically mitigates DDoS attacks |
| Threat detection            | DDoS protection                      |

### When to Choose


* **Detect compromised EC2 instances or stolen credentials?** → Amazon GuardDuty
* **Protect against SYN Flood or UDP Flood attacks?** → AWS Shield

---

### Amazon GuardDuty vs AWS WAF


| Amazon GuardDuty           | AWS WAF                                            |
| -------------------------- | -------------------------------------------------- |
| Detects malicious behavior | Filters HTTP/HTTPS requests                        |
| Generates findings         | Blocks malicious web requests                      |
| Does not block attacks     | Prevents SQL Injection, XSS, and other web attacks |

### When to Choose


* **Need threat detection?** → Amazon GuardDuty
* **Need to block SQL Injection or XSS?** → AWS WAF

---

### Exam Decision Guide


| If the Question Says...                          | Choose           |
| ------------------------------------------------ | ---------------- |
| Detect compromised AWS accounts                  | Amazon GuardDuty |
| Detect cryptocurrency mining                     | Amazon GuardDuty |
| Detect communication with malicious IP addresses | Amazon GuardDuty |
| Find EC2 software vulnerabilities                | Amazon Inspector |
| Discover sensitive data in Amazon S3             | Amazon Macie     |
| Aggregate security findings                      | AWS Security Hub |
| Protect against DDoS attacks                     | AWS Shield       |
| Block SQL Injection or XSS                       | AWS WAF          |

> **Exam Tip:** If the question contains **threat detection**, **malicious activity**, **anomaly detection**, **compromised credentials**, or **cryptocurrency mining**, the answer is usually **Amazon GuardDuty**.

---

## 8. Real World Example

### Scenario


A company runs a web application on Amazon EC2 behind an Application Load Balancer.

Requirements:

* Detect compromised EC2 instances.
* Detect stolen IAM credentials.
* Automatically isolate compromised instances.
* Provide centralized security monitoring.

### Solution


1. Enable Amazon GuardDuty.
2. Create an Amazon EventBridge rule for GuardDuty findings.
3. Trigger an AWS Lambda function to quarantine compromised EC2 instances by modifying Security Groups.
4. Send findings to AWS Security Hub for centralized visibility.
5. Notify the security team using Amazon SNS.

### Benefits


* Continuous threat detection.
* Automated incident response.
* Faster remediation.
* Centralized security management.

---

## 9. Pricing Basics

Amazon GuardDuty pricing is generally based on:

* Volume of CloudTrail Management Events analyzed.
* Volume of VPC Flow Logs analyzed.
* Volume of DNS Logs analyzed.
* Additional optional protection plans (such as S3 Protection or Malware Protection) when enabled.

Cost optimization:

* Enable GuardDuty only in required Regions.
* Use AWS Organizations for centralized administration.
* Enable optional protection features only where needed.

> **Exam Tip:** GuardDuty is **not** a free service. Charges are based on analyzed data sources and enabled protection features.

---

## 10. SAA-C03 Exam Tips

* GuardDuty is a **threat detection** service.
* Uses **machine learning**, **anomaly detection**, and **threat intelligence**.
* No agents are required.
* Continuously analyzes CloudTrail, VPC Flow Logs, and DNS Logs.
* Integrates with EventBridge, Lambda, SNS, and Security Hub.
* Does **not** automatically block threats.
* Generates **security findings** for investigation or automated response.

---

## 11. Common Exam Traps

### Trap 1: Confusing GuardDuty with Inspector


Amazon GuardDuty:

* Detects attacks.
* Detects compromised credentials.
* Detects suspicious activity.

Amazon Inspector:

* Finds CVEs.
* Detects missing patches.
* Performs vulnerability assessments.

---

### Trap 2: Thinking GuardDuty Blocks Attacks


❌ Wrong:

GuardDuty automatically blocks malicious traffic.

✅ Correct:

GuardDuty **detects** threats and creates findings.

Blocking requires services like:

* AWS WAF
* AWS Shield
* Security Groups
* AWS Network Firewall

---

### Trap 3: Confusing GuardDuty with Macie


Amazon GuardDuty:

* Threat detection.

Amazon Macie:

* Sensitive data discovery in Amazon S3.

---

### Trap 4: Assuming EC2 Agents Are Required


Unlike many security products:

GuardDuty requires **no agents** on EC2 instances.

It analyzes AWS logs directly.

---

### Trap 5: Forgetting EventBridge Automation


A common exam architecture:

```text
GuardDuty Finding
        │
EventBridge
        │
Lambda
        │
Automatic Remediation
```

Expect scenario-based questions around automated responses.

---

### Trap 6: Confusing Security Hub with GuardDuty


GuardDuty:

* Detects threats.

Security Hub:

* Collects findings from GuardDuty, Inspector, Macie, IAM Access Analyzer, and other security services.

---

## 12. Frequently Asked Exam Scenarios

### Scenario 1


A company wants to detect compromised IAM credentials used from an unusual geographic location.

**Answer:**

Amazon GuardDuty.

---

### Scenario 2


A company needs to identify EC2 instances with known software vulnerabilities.

**Answer:**

Amazon Inspector.

---

### Scenario 3


An organization wants to discover credit card numbers stored in Amazon S3 buckets.

**Answer:**

Amazon Macie.

---

### Scenario 4


A company wants a centralized dashboard showing findings from GuardDuty, Inspector, and Macie.

**Answer:**

AWS Security Hub.

---

### Scenario 5


A security team wants GuardDuty findings to automatically isolate compromised EC2 instances.

**Answer:**

Use Amazon EventBridge to trigger an AWS Lambda function for automated remediation.

---

## 13. Summary

| Topic               | Key Point                                                                 |
| ------------------- | ------------------------------------------------------------------------- |
| Purpose             | Threat detection                                                          |
| Detects             | Suspicious activity, compromised accounts, malware, cryptocurrency mining |
| Data Sources        | CloudTrail, VPC Flow Logs, DNS Logs                                       |
| Uses                | Machine learning, anomaly detection, threat intelligence                  |
| Integrations        | EventBridge, Lambda, SNS, Security Hub                                    |
| Most Tested Concept | GuardDuty vs Inspector vs Macie                                           |
| Common Trap         | Thinking GuardDuty blocks attacks                                         |

---

## Revision Checklist

- [ ] Memory Tip


### AWS SAA-C03 Notes – Part 7: Amazon GuardDuty (Part 2)


- [ ] 


- [ ] Before moving on, make sure you can answer:

- [ ] What is Amazon GuardDuty used for?
- [ ] Which AWS log sources does GuardDuty analyze?
- [ ] How is GuardDuty different from Amazon Inspector?
- [ ] How is GuardDuty different from Amazon Macie?
- [ ] Does GuardDuty block attacks?
- [ ] How can GuardDuty findings trigger automated remediation?
- [ ] Why is Security Hub commonly used with GuardDuty?

- [ ] 

### Memory Tip


- [ ] Think of Amazon GuardDuty as answering this question:

- [ ] > **"How do I continuously detect suspicious activity and potential security threats in my AWS environment?"**

- [ ] Remember these associations:

- [ ] **GuardDuty** → Threat detection.
- [ ] **CloudTrail + VPC Flow Logs + DNS Logs** → Primary data sources.
- [ ] **Machine Learning** → Detects anomalies.
- [ ] **EventBridge + Lambda** → Automated remediation.
- [ ] **Security Hub** → Centralized findings.
- [ ] **Inspector** → Vulnerability assessment.
- [ ] **Macie** → Sensitive data discovery.

### Quick Decision Cheat Sheet


- [ ] **Compromised IAM credentials?** → Amazon GuardDuty
- [ ] **Cryptocurrency mining detection?** → Amazon GuardDuty
- [ ] **Find software vulnerabilities?** → Amazon Inspector
- [ ] **Find PII in S3?** → Amazon Macie
- [ ] **Centralized security dashboard?** → AWS Security Hub
- [ ] **Protect against DDoS?** → AWS Shield
- [ ] **Block SQL Injection?** → AWS WAF
