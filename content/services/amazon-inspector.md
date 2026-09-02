---
title: "Amazon Inspector"
slug: amazon-inspector
category: Identity & Security
priority: High
order: 1
---

# AWS SAA Notes

## 1. Purpose

Amazon Inspector is an automated vulnerability management service that continuously scans AWS workloads for software vulnerabilities and unintended network exposure.

It helps identify security vulnerabilities in:

Amazon EC2 instances
Container images in Amazon ECR
AWS Lambda functions

Exam Keyword: Automated vulnerability scanning

2. What Amazon Inspector Does

Inspector looks for vulnerabilities such as:

Known software vulnerabilities
Vulnerable packages
Unpatched software
Network exposure
Common software weaknesses

It generates findings that can be prioritized based on severity.

Simple Flow
AWS Workloads
     │
     ▼
Amazon Inspector
     │
     ├── EC2
     ├── ECR Container Images
     └── Lambda
     │
     ▼
Security Findings
     │
     ▼
Remediation
3. Amazon Inspector for EC2

Inspector continuously scans EC2 instances for:

Software vulnerabilities
Package vulnerabilities
Network reachability issues
Example
EC2 Instance
     │
     ├── Old OpenSSL
     ├── Unpatched OS Package
     └── Port Accessible from Internet
              │
              ▼
       Amazon Inspector
              │
              ▼
         Finding

Exam Tip: Inspector is useful when the question asks you to identify vulnerable software or packages on EC2.

4. Amazon Inspector for ECR

Inspector can scan container images stored in Amazon ECR for known vulnerabilities.

Example:

Docker Image
     │
     ▼
Amazon ECR
     │
     ▼
Amazon Inspector
     │
     ▼
Vulnerable Package Found

This helps detect vulnerabilities before deploying containers.

Exam Keyword: Container image vulnerability scanning → Amazon Inspector.

5. Amazon Inspector for Lambda

Inspector can identify vulnerabilities in AWS Lambda functions and their associated dependencies.

Example:

Lambda Function
      │
      ▼
Dependencies
      │
      ▼
Amazon Inspector
      │
      ▼
Vulnerability Finding

This is useful when a Lambda function uses a vulnerable third-party package.

6. Continuous Scanning

A major advantage of Inspector is that it provides continuous automated scanning.

You don't have to manually run a vulnerability scan every time.

New Software Installed
        │
        ▼
Inspector Detects Change
        │
        ▼
Scan
        │
        ▼
New Finding

Exam Tip: Continuous vulnerability assessment → Amazon Inspector.

7. Findings

Inspector produces security findings containing information such as:

Vulnerability
Severity
Affected resource
CVE information
Remediation information

Findings can be integrated with other AWS security services.

For example:

Amazon Inspector
       │
       ▼
Security Finding
       │
       ├── Amazon EventBridge
       │
       └── AWS Security Hub
8. Common Vulnerability Terms
CVE

CVE = Common Vulnerabilities and Exposures

A CVE identifies a publicly known security vulnerability.

Example:

Package
   │
   ▼
Known CVE
   │
   ▼
Amazon Inspector
   │
   ▼
Finding
CVSS

CVSS = Common Vulnerability Scoring System

It is used to represent the severity of vulnerabilities.

Higher score generally means a more severe vulnerability.

Exam Tip: Inspector uses vulnerability information such as CVEs and severity scores to generate findings.

9. Network Reachability

Inspector can identify whether EC2 instances have network paths that expose them to unintended access.

For example:

Internet
    │
    ▼
Security Group
    │
    ▼
EC2
    │
    ▼
Vulnerable Application

Inspector can help identify the network exposure so the organization can remediate it.

10. When to Use Amazon Inspector

Use Inspector when you need:

Automated vulnerability assessment
Continuous vulnerability scanning
EC2 vulnerability detection
Container image vulnerability scanning
Lambda dependency vulnerability detection
Identification of network exposure
CVE-based security findings
11. When NOT to Use
Requirement	Better Service
Detect vulnerabilities in EC2/ECR/Lambda	Amazon Inspector
Detect suspicious activity or compromised resources	Amazon GuardDuty
Investigate relationships between security findings	Amazon Detective
Centralize security findings	AWS Security Hub
Protect web applications from malicious HTTP requests	AWS WAF
DDoS protection	AWS Shield
Discover sensitive data in S3	Amazon Macie

Important Exam Distinction:

Inspector = Vulnerabilities
GuardDuty = Threat Detection
Detective = Investigation
Security Hub = Centralized Security Findings

12. High-Yield Exam Scenarios
Scenario 1

A company wants to continuously scan EC2 instances for software vulnerabilities.

Answer:
Amazon Inspector

Scenario 2

A company wants to scan container images in Amazon ECR for known vulnerabilities.

Answer:
Amazon Inspector

Scenario 3

A company wants to identify vulnerable third-party dependencies used by Lambda functions.

Answer:
Amazon Inspector

Scenario 4

A company wants to detect whether an EC2 instance has unintended network exposure.

Answer:
Amazon Inspector

Scenario 5

A company wants to determine whether an EC2 instance has been compromised by suspicious activity.

Answer:
Amazon GuardDuty

EC2	Scans for software/package vulnerabilities
ECR	Scans container images
Lambda	Finds dependency vulnerabilities
CVE	Identifies known vulnerabilities
Findings	Security vulnerabilities discovered
GuardDuty	Threat detection
Detective	Security investigation
Security Hub	Centralized security findings
Macie	Sensitive data discovery
WAF	Web application protection
Shield	DDoS protection

## 7. Comparison with Similar Services

Understanding Inspector vs GuardDuty vs Detective vs Security Hub vs Macie is extremely important for the SAA-C03 exam.

Amazon Inspector vs Amazon GuardDuty
Amazon Inspector	Amazon GuardDuty
Vulnerability management	Threat detection
Finds software/package vulnerabilities	Detects suspicious activity
Scans EC2, ECR, Lambda	Analyzes AWS activity and logs
Identifies CVEs	Identifies potential attacks/compromise
Proactive security	Detective security
Example

"EC2 has an outdated vulnerable package."

→ Amazon Inspector

"EC2 is communicating with a known malicious IP."

→ Amazon GuardDuty

Exam Shortcut:
Inspector = Vulnerability
GuardDuty = Threat

14. Amazon Inspector vs Amazon Detective
Amazon Inspector	Amazon Detective
Finds vulnerabilities	Investigates security events
Proactive	Investigative
Identifies weaknesses	Determines what happened
Generates vulnerability findings	Analyzes relationships and activity
Example

A company discovers suspicious activity on an EC2 instance and wants to understand:

What happened?
Which resources were affected?
How are the events connected?

→ Amazon Detective

15. Amazon Inspector vs AWS Security Hub
Amazon Inspector	AWS Security Hub
Performs vulnerability scanning	Centralizes security findings
Produces findings	Aggregates findings
Focuses on vulnerabilities	Provides centralized security view
One security service	Integrates multiple security services

Example:

Inspector ───────┐
GuardDuty ───────┤
Macie ───────────┼──► Security Hub
IAM Access Analyzer ┤
Other Sources ───┘

Exam Trap: Security Hub does not replace Inspector. Inspector discovers vulnerabilities; Security Hub can centralize the resulting findings.

16. Amazon Inspector vs Amazon Macie
Amazon Inspector	Amazon Macie
Finds software vulnerabilities	Discovers sensitive data
EC2, ECR, Lambda	Amazon S3
CVEs and vulnerable packages	PII and other sensitive data
Vulnerability management	Data security
Example

"Find vulnerable packages in EC2."

→ Inspector

"Find personally identifiable information in S3."

→ Macie

17. Exam Decision Guide ⭐
If the Question Says...	Choose
Find software vulnerabilities	Amazon Inspector
Scan EC2 for vulnerable packages	Amazon Inspector
Scan ECR container images	Amazon Inspector
Find Lambda dependency vulnerabilities	Amazon Inspector
Detect suspicious activity	Amazon GuardDuty
Detect compromised resources	Amazon GuardDuty
Investigate a security incident	Amazon Detective
Centralize security findings	AWS Security Hub
Find sensitive data in S3	Amazon Macie
Protect web applications	AWS WAF
Protect against DDoS	AWS Shield

## 8. Real World Example

Scenario

A company has hundreds of EC2 instances and container images in Amazon ECR.

The security team wants to:

Continuously identify software vulnerabilities.
Detect vulnerable packages.
Scan container images.
Receive findings when new vulnerabilities are discovered.
Solution

Use Amazon Inspector.

             Amazon Inspector
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
     EC2           ECR         Lambda
       │            │            │
 Vulnerable     Vulnerable    Vulnerable
 Packages       Packages      Dependencies
       │            │            │
       └────────────┼────────────┘
                    ▼
                 Findings

The security team can then send findings to services such as AWS Security Hub or respond using Amazon EventBridge.

## 9. Pricing Basics

Amazon Inspector pricing is based on the resources and scanning activities being performed.

The important SAA-C03 concept is not the exact price, but understanding when Inspector is appropriate.

Exam Tip: Don't choose a service based on price unless the question explicitly provides a cost requirement. First identify the security requirement.

## 10. SAA-C03 Exam Tips

Remember these points:

Amazon Inspector
Automated vulnerability management.
Continuously scans supported workloads.
Supports EC2.
Supports ECR container images.
Supports Lambda functions/dependencies.
Identifies known software vulnerabilities.
Uses vulnerability information such as CVEs.
Produces security findings.
Very Important

Inspector answers:

"What vulnerabilities exist in my workloads?"

It does not primarily answer:

"Is someone currently attacking my account?"

That is where GuardDuty comes in.

## 11. Common Exam Traps

Trap 1: Inspector vs GuardDuty

Inspector

→ Finds vulnerabilities.

GuardDuty

→ Detects threats and suspicious activity.

Trap 2: Inspector vs Detective

Inspector

→ "Is this resource vulnerable?"

Detective

→ "What happened, and how are these security events related?"

Trap 3: Inspector vs Security Hub

Inspector

→ Performs vulnerability scanning.

Security Hub

→ Aggregates and prioritizes security findings from multiple AWS services and third-party products.

Trap 4: Inspector vs Macie

Inspector

→ Finds software vulnerabilities.

Macie

→ Finds sensitive data in Amazon S3.

14. Memory Tip

Think:

Amazon Inspector = "Inspect my workloads for vulnerabilities."

Remember:

EC2 → Vulnerability scanning
ECR → Container image scanning
Lambda → Dependency vulnerability detection
CVE → Known vulnerability
CVSS → Vulnerability severity
Continuous scanning → Inspector
One-Line Exam Shortcut

"Find vulnerabilities in my AWS workloads" → Amazon Inspector.

AWS SAA-C03 Notes – Part 14: Amazon Inspector (Part 2)
Trap 1 — Inspector vs GuardDuty
Question:

An organization wants to identify vulnerable software installed on EC2 instances.

Answer:

✅ Amazon Inspector

Not GuardDuty.

Trap 2 — Inspector vs GuardDuty
Question:

An organization wants to detect suspicious API calls and potentially compromised EC2 instances.

Answer:

✅ Amazon GuardDuty

Not Inspector.

Trap 3 — Inspector vs Detective
Question:

A security team wants to investigate the root cause and relationships associated with a security incident.

Answer:

✅ Amazon Detective

Trap 4 — Inspector vs Security Hub
Question:

A company wants one centralized dashboard containing findings from GuardDuty, Inspector, and Macie.

Answer:

✅ AWS Security Hub

Trap 5 — Inspector vs Macie
Question:

A company wants to discover sensitive customer information stored in Amazon S3.

Answer:

✅ Amazon Macie

Trap 6 — Inspector vs WAF
Question:

A company wants to protect a web application against SQL injection and cross-site scripting.

Answer:

✅ AWS WAF

Inspector identifies vulnerabilities; it doesn't act as a web application firewall.

## 12. Frequently Asked Exam Scenarios

Scenario 1

A company wants continuous vulnerability scanning of EC2 instances.

Answer:

Amazon Inspector

Scenario 2

A company wants to scan container images stored in ECR before deployment.

Answer:

Amazon Inspector

Scenario 3

A company wants to identify vulnerable Lambda dependencies.

Answer:

Amazon Inspector

Scenario 4

A company notices suspicious activity and wants to determine whether an EC2 instance has been compromised.

Answer:

Amazon GuardDuty

Scenario 5

A security team wants to investigate relationships between suspicious activities, users, and resources.

Answer:

Amazon Detective

Scenario 6

A security team wants to aggregate findings from multiple AWS security services.

Answer:

AWS Security Hub

Scenario 7

A company wants to identify sensitive customer data stored in S3.

Answer:

Amazon Macie

## 13. Summary

Topic	Key Point

## Revision Checklist

- [ ] Before moving on, make sure you can answer:

- [ ] What is Amazon Inspector?
- [ ] What resources can Inspector scan?
- [ ] What is a CVE?
- [ ] How is Inspector different from GuardDuty?
- [ ] How is Inspector different from Detective?
- [ ] How is Inspector different from Security Hub?
- [ ] How is Inspector different from Macie?
- [ ] Can Inspector scan ECR container images?
- [ ] Can Inspector identify Lambda dependency vulnerabilities?
- [ ] What does continuous vulnerability scanning mean?
- [ ] 25. Memory Tip 🧠

- [ ] Think of the AWS security services as a security team:

- [ ] Inspector
- [ ] ↓
- [ ] "Find my vulnerabilities."

- [ ] GuardDuty
- [ ] ↓
- [ ] "Detect suspicious activity."

- [ ] Detective
- [ ] ↓
- [ ] "Investigate what happened."

- [ ] Security Hub
- [ ] ↓
- [ ] "Put all my security findings together."

- [ ] Macie
- [ ] ↓
- [ ] "Find sensitive data."

- [ ] WAF
- [ ] ↓
- [ ] "Block malicious web requests."

- [ ] Shield
- [ ] ↓
- [ ] "Protect against DDoS."
- [ ] One-Line Exam Shortcut

- [ ] Vulnerability → Inspector
- [ ] Threat → GuardDuty
- [ ] Investigation → Detective
- [ ] Centralized findings → Security Hub
- [ ] Sensitive S3 data → Macie
- [ ] Web attacks → WAF
- [ ] DDoS → Shield
