---
title: "AWS Firewall Manager"
slug: aws-firewall-manager
category: Identity & Security
priority: Medium
order: 1
---

# AWS SAA Notes

## 1. Purpose

**AWS Firewall Manager** is a **security management service** that allows you to **centrally configure, deploy, and manage firewall and security policies across multiple AWS accounts and resources**.

It helps organizations consistently enforce security rules across an AWS Organization without manually configuring each account.

AWS Firewall Manager works together with **AWS Organizations**, making it ideal for large enterprises with multiple AWS accounts.

> **Exam Keyword:** Centralized Security Policy Management

---

## 2. How It Works

Firewall Manager uses **AWS Organizations** to automatically apply security policies to AWS resources across member accounts.

### Firewall Manager Workflow


```text
AWS Organizations
        │
Firewall Manager
        │
Security Policies
        │
────────────────────────────
│            │             │
Account A   Account B   Account C
│            │             │
AWS WAF   AWS Shield   Security Groups
```

When a new AWS account joins the organization, Firewall Manager can automatically apply the configured policies.

> **Exam Tip:** Firewall Manager **does not replace AWS WAF or AWS Shield**. It centrally manages them.

---

### Prerequisites


Before using Firewall Manager, you need:

* AWS Organizations
* All Features enabled in AWS Organizations
* A designated Firewall Manager administrator account
* AWS Config enabled in the accounts where resources are evaluated (required for many policy types)

---

## 3. Architecture

Typical architecture:

```text
Management Account
        │
Firewall Manager
        │
─────────────────────────────
│             │             │
Account 1    Account 2    Account 3
│             │             │
ALB          CloudFront     API Gateway
│             │             │
AWS WAF Policies Applied
```

---

### Centralized Policy Management


Instead of configuring each account individually:

```text
Administrator
      │
Firewall Manager
      │
Single Security Policy
      │
Applied Across Organization
```

This reduces configuration errors and ensures consistent security.

---


### Use with AWS Organizations


Firewall Manager is designed for environments with:

* Multiple AWS accounts
* Centralized governance
* Enterprise security teams

It is **not typically used for a single standalone AWS account**.

---

### Automatically Protect New Resources


When a new resource is created, Firewall Manager can automatically apply the appropriate security policy.

Example:

```text
New ALB Created
       │
Firewall Manager Detects
       │
AWS WAF Policy Applied
```

No manual intervention is required.

---

### Centralize AWS WAF Rules


Instead of creating WAF rules separately for each account:

```text
Firewall Manager
      │
Common WAF Rules
      │
All ALBs
All CloudFront Distributions
All API Gateways
```

---

### Manage Security Groups


Firewall Manager can manage Security Group policies by:

* Auditing Security Groups
* Identifying overly permissive rules
* Automatically remediating non-compliant Security Groups (depending on policy configuration)

---

## 4. Key Features

### Centralized Management


Manage security policies across:

* Multiple AWS accounts
* Multiple AWS Regions
* Multiple supported AWS resource types

---

### AWS WAF Integration


Firewall Manager can deploy:

* Web ACLs
* Managed Rule Groups
* Custom Rule Groups

Across supported resources such as:

* Application Load Balancers
* Amazon CloudFront
* Amazon API Gateway
* AWS App Runner (supported resource types may evolve)

---

### AWS Shield Advanced Integration


Firewall Manager can centrally manage:

* AWS Shield Advanced protections
* Automatic protection for new eligible resources
* Consistent DDoS protection policies

> **Exam Tip:** Firewall Manager works with **Shield Advanced**, not Shield Standard.

---

### Security Group Policies


Supports:

* Security Group auditing
* Security Group cleanup
* Automatic policy enforcement
* Detection of unused or overly permissive Security Groups

---

### Automatic Compliance


Continuously checks resources.

If resources become non-compliant:

* Alerts administrators.
* Can automatically remediate based on policy settings.

---

### When to Use


Use AWS Firewall Manager when you need:

* Centralized security management.
* Organization-wide AWS WAF deployment.
* Organization-wide Shield Advanced management.
* Central Security Group governance.
* Automatic security policy enforcement.

Typical environments:

* Enterprises
* Multi-account organizations
* Financial institutions
* Government organizations
* Large SaaS providers

---

### When NOT to Use


| Requirement                                                | Better AWS Service   |
| ---------------------------------------------------------- | -------------------- |
| Protect a single web application from SQL Injection or XSS | AWS WAF              |
| DDoS protection for AWS resources                          | AWS Shield           |
| Network-level filtering inside a VPC                       | AWS Network Firewall |
| Identity and access control                                | AWS IAM              |

> **Exam Tip:** Firewall Manager **manages security services centrally**; it is **not itself a firewall**.

---

**Next:** Part 2 covers:

## 7. Comparison with Similar Services

* Exam Decision Guide

Understanding the differences between **AWS Firewall Manager**, **AWS WAF**, **AWS Shield**, **AWS Network Firewall**, and **AWS Security Groups** is a **commonly tested topic** in the SAA-C03 exam.

---

### AWS Firewall Manager vs AWS WAF


| AWS Firewall Manager                          | AWS WAF                              |
| --------------------------------------------- | ------------------------------------ |
| Centralized management service                | Web Application Firewall             |
| Deploys WAF policies across multiple accounts | Protects individual web applications |
| Requires AWS Organizations                    | Can be used independently            |
| Manages Web ACL deployment                    | Filters HTTP/HTTPS requests          |

### When to Choose


* **Need centralized WAF management across AWS accounts** → AWS Firewall Manager
* **Need to protect a single application from SQL Injection or XSS** → AWS WAF

> **Exam Tip:** **Firewall Manager manages WAF policies—it does not inspect web requests itself.**

---

### AWS Firewall Manager vs AWS Shield


| AWS Firewall Manager                                | AWS Shield                                                          |
| --------------------------------------------------- | ------------------------------------------------------------------- |
| Central management of security policies             | DDoS protection service                                             |
| Can manage Shield Advanced across AWS Organizations | Detects and mitigates DDoS attacks                                  |
| Requires AWS Organizations                          | Shield Standard is enabled automatically for supported AWS services |

### When to Choose


* **Need organization-wide DDoS policy management** → AWS Firewall Manager
* **Need DDoS protection** → AWS Shield

---

### AWS Firewall Manager vs AWS Network Firewall


| AWS Firewall Manager              | AWS Network Firewall            |
| --------------------------------- | ------------------------------- |
| Central management service        | Managed network firewall        |
| Deploys policies                  | Filters VPC network traffic     |
| Works across AWS accounts         | Operates inside individual VPCs |
| Manages Network Firewall policies | Performs packet inspection      |

### When to Choose


* **Need centralized management across accounts** → AWS Firewall Manager
* **Need network-level traffic inspection** → AWS Network Firewall

---

### AWS Firewall Manager vs Security Groups


| AWS Firewall Manager                        | Security Groups                                  |
| ------------------------------------------- | ------------------------------------------------ |
| Central policy management                   | Instance-level virtual firewall                  |
| Audits and enforces Security Group policies | Controls inbound and outbound traffic            |
| Works across AWS Organizations              | Applied directly to ENIs (such as EC2 instances) |

### When to Choose


* **Need centralized governance** → AWS Firewall Manager
* **Need firewall rules for an EC2 instance** → Security Groups

---

### Exam Decision Guide


| If the Question Says...                         | Choose               |
| ----------------------------------------------- | -------------------- |
| Central security management across AWS accounts | AWS Firewall Manager |
| Organization-wide WAF policies                  | AWS Firewall Manager |
| Centralized Shield Advanced management          | AWS Firewall Manager |
| Protect against SQL Injection and XSS           | AWS WAF              |
| Protect against DDoS attacks                    | AWS Shield           |
| Inspect VPC network traffic                     | AWS Network Firewall |
| Control EC2 inbound/outbound traffic            | Security Groups      |

> **Exam Tip:** Keywords such as **AWS Organizations**, **multiple AWS accounts**, **centrally enforce**, or **organization-wide security policies** almost always indicate **AWS Firewall Manager**.

---

## 8. Real World Example

### Scenario


A company has 150 AWS accounts managed through AWS Organizations.

Requirements:

* Every Application Load Balancer must use the same AWS WAF rules.
* Every CloudFront distribution must have Shield Advanced enabled.
* Prevent overly permissive Security Groups.
* Automatically apply security policies to newly created accounts.

### Solution


1. Enable AWS Organizations (All Features).
2. Configure a Firewall Manager administrator account.
3. Enable AWS Config.
4. Create Firewall Manager policies for:

   * AWS WAF
   * AWS Shield Advanced
   * Security Groups
5. Firewall Manager automatically applies the policies to existing and new accounts.

### Benefits


* Centralized security management.
* Consistent security policies.
* Automatic compliance.
* Reduced administrative effort.

---

## 9. Pricing Basics

AWS Firewall Manager pricing includes:

* Charges per Firewall Manager policy.
* Charges for the underlying services it manages.

For example:

* AWS WAF charges still apply.
* AWS Shield Advanced subscription charges still apply.
* AWS Network Firewall charges still apply.

Cost optimization:

* Use Firewall Manager only when centralized management is required.
* Consolidate policies where possible.
* Remove unused policies.

> **Exam Tip:** Firewall Manager is a **management service**. You also pay for the AWS security services (such as WAF or Shield Advanced) that it manages.

---

## 10. SAA-C03 Exam Tips

* Requires **AWS Organizations** with **All Features** enabled.
* Supports centralized management of:

  * AWS WAF
  * AWS Shield Advanced
  * AWS Network Firewall
  * Security Group policies
  * Amazon Route 53 Resolver DNS Firewall policies
* Automatically applies policies to new AWS accounts and supported new resources.
* AWS Config is required for many policy types.
* Firewall Manager **does not inspect traffic**; it manages the services that do.

---

## 11. Common Exam Traps

### Trap 1: Confusing Firewall Manager with AWS WAF


**AWS Firewall Manager**

* Central management service.
* Deploys WAF policies.

**AWS WAF**

* Blocks malicious HTTP/HTTPS requests.
* Protects web applications.

---

### Trap 2: Confusing Firewall Manager with AWS Shield


Firewall Manager:

* Centralized policy management.

Shield:

* DDoS protection.

Firewall Manager **can manage Shield Advanced**, but it does not provide DDoS protection itself.

---

### Trap 3: Forgetting AWS Organizations


Firewall Manager requires:

* AWS Organizations
* All Features enabled

Without AWS Organizations, Firewall Manager cannot manage multiple accounts.

---

### Trap 4: Forgetting AWS Config


Many Firewall Manager policy types require AWS Config to evaluate compliance.

---

### Trap 5: Thinking Firewall Manager Is a Firewall


Firewall Manager:

* Does **not** inspect packets.
* Does **not** block requests.

It manages:

* AWS WAF
* AWS Shield Advanced
* AWS Network Firewall
* Security Group policies

---

### Trap 6: Using Firewall Manager for a Single Account


If the question involves protecting **one** application or **one** AWS account:

Choose:

* AWS WAF
* AWS Shield
* Security Groups
* AWS Network Firewall

Firewall Manager is primarily designed for **multi-account organizations**.

---

## 12. Frequently Asked Exam Scenarios

### Scenario 1


A company wants every AWS account in its organization to automatically receive the same AWS WAF rules.

**Answer:**

AWS Firewall Manager.

---

### Scenario 2


A company wants to centrally manage Shield Advanced across hundreds of AWS accounts.

**Answer:**

AWS Firewall Manager.

---

### Scenario 3


A company needs to block SQL Injection attacks against an Application Load Balancer.

**Answer:**

AWS WAF.

---

### Scenario 4


A company wants to inspect all network traffic entering and leaving a VPC.

**Answer:**

AWS Network Firewall.

---

### Scenario 5


A company wants to identify Security Groups that allow unrestricted SSH (0.0.0.0/0 on port 22) across all accounts.

**Answer:**

AWS Firewall Manager Security Group policies.

---

## 13. Summary

| Topic               | Key Point                                                                                           |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| Purpose             | Centralized security policy management                                                              |
| Scope               | Multiple AWS accounts using AWS Organizations                                                       |
| Integrations        | AWS WAF, AWS Shield Advanced, AWS Network Firewall, Security Groups, Route 53 Resolver DNS Firewall |
| Requirement         | AWS Organizations + AWS Config (for many policy types)                                              |
| Automation          | Automatically protects new accounts and resources                                                   |
| Most Tested Concept | Firewall Manager vs AWS WAF                                                                         |
| Common Trap         | Thinking Firewall Manager is itself a firewall                                                      |

---

## Revision Checklist

- [ ] Memory Tip

### AWS SAA-C03 Notes – Part 13: AWS Firewall Manager (Part 2)


- [ ] 


- [ ] Before moving on, make sure you can answer:

- [ ] What is AWS Firewall Manager?
- [ ] How is Firewall Manager different from AWS WAF?
- [ ] How is Firewall Manager different from AWS Shield?
- [ ] Why is AWS Organizations required?
- [ ] Why is AWS Config required?
- [ ] Which AWS services can Firewall Manager centrally manage?
- [ ] When should you choose Firewall Manager instead of WAF?
- [ ] Why is Firewall Manager ideal for enterprises?

- [ ] 

### Memory Tip


- [ ] Think of AWS Firewall Manager as answering this question:

- [ ] > **"How can I centrally enforce security policies across all AWS accounts in my organization?"**

- [ ] Remember these associations:

- [ ] **AWS Firewall Manager** → Central policy management.
- [ ] **AWS Organizations** → Required.
- [ ] **AWS Config** → Required for many policy types.
- [ ] **AWS WAF** → Web application protection.
- [ ] **AWS Shield Advanced** → DDoS protection.
- [ ] **AWS Network Firewall** → VPC network inspection.
- [ ] **Security Groups** → Instance-level firewall rules.
- [ ] **Automatic enforcement** → New accounts and supported resources inherit policies.

### Quick Decision Cheat Sheet


- [ ] **Need centralized security across AWS accounts?** → AWS Firewall Manager
- [ ] **Need to block SQL Injection/XSS?** → AWS WAF
- [ ] **Need DDoS protection?** → AWS Shield
- [ ] **Need VPC packet inspection?** → AWS Network Firewall
- [ ] **Need EC2 firewall rules?** → Security Groups
- [ ] **Need organization-wide WAF or Shield Advanced policies?** → AWS Firewall Manager
