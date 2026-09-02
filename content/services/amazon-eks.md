---
title: "Amazon EKS"
slug: amazon-eks
category: Medium Priority
priority: High
order: 1
---

# AWS SAA Notes

## 1. Purpose

**Amazon Elastic Kubernetes Service (Amazon EKS)** is a **fully managed Kubernetes service** that allows you to deploy, manage, and scale **containerized applications using Kubernetes**.

AWS manages the Kubernetes control plane, while you run your applications on:

* Amazon EC2
* AWS Fargate
* Hybrid infrastructure (using EKS Anywhere or Hybrid Nodes, where applicable)

EKS provides a standard Kubernetes environment, making it easier to migrate existing Kubernetes workloads to AWS.

> **Exam Keyword:** Managed Kubernetes Service

---

## 2. How It Works

You package your application into Docker containers, store the images in **Amazon ECR**, define Kubernetes resources (such as Deployments and Services), and deploy them to an EKS cluster.

### EKS Deployment Flow


```text id="eks1ab"
Developer
      │
Build Docker Image
      │
Amazon ECR
      │
Kubernetes Deployment
      │
Amazon EKS Cluster
      │
EC2 or AWS Fargate
      │
Running Pods
```

> **Exam Tip:** EKS manages **Kubernetes**, while ECR stores container images.

---

### Kubernetes Components in EKS


### Cluster


An **EKS Cluster** consists of:

* AWS-managed Kubernetes Control Plane
* Worker Nodes (EC2 or Fargate)

---

### Control Plane


AWS manages:

* Kubernetes API Server
* etcd
* Scheduler
* Controller Manager
* High Availability across multiple Availability Zones

You do **not** manage or patch the control plane.

---

### Worker Nodes


Worker nodes run:

* Pods
* Containers

Worker nodes can be:

* Amazon EC2 instances
* AWS Fargate

---

### Pod


A **Pod** is the smallest deployable unit in Kubernetes.

It contains:

* One or more containers
* Shared networking
* Shared storage (if configured)

```text id="eks2cd"
Node
 │
 ├── Pod
 │     ├── Container A
 │     └── Container B
```

> **Exam Tip:** Kubernetes schedules **Pods**, not individual containers.

---

### Deployment


A **Deployment** defines:

* Desired number of Pods
* Rolling updates
* Automatic replacement of failed Pods

---

### Service


A Kubernetes **Service** exposes Pods to:

* Internal clients
* External clients
* Load Balancers

---

## 3. Architecture

Typical EKS architecture:

```text id="eks3ef"
Users
   │
Application Load Balancer
   │
Kubernetes Service
   │
Pods
   │
Worker Nodes
   │
Amazon EKS Control Plane
```

---

### EKS with Amazon ECR


```text id="eks4gh"
Docker Image
      │
Amazon ECR
      │
Amazon EKS
      │
Pods
```

---

### EKS with Fargate


```text id="eks5ij"
Amazon EKS
      │
AWS Fargate
      │
Pods
```

No EC2 worker nodes are required for those workloads.

---

### EKS with EC2 Worker Nodes


```text id="eks6kl"
Amazon EKS
      │
EC2 Worker Nodes
      │
Pods
```

You manage:

* EC2 instances
* Node operating system
* Capacity

AWS manages:

* Kubernetes Control Plane

---


### Choose EKS When Kubernetes Is Required


Use Amazon EKS if you need:

* Kubernetes APIs
* Kubernetes ecosystem
* Existing Kubernetes manifests
* Multi-cloud portability
* Helm charts
* kubectl support

---

### Choose Fargate for Serverless Pods


Benefits:

* No node management
* Automatic infrastructure provisioning
* Pay only for running resources

---

### Use Managed Node Groups


Amazon EKS Managed Node Groups simplify:

* Node provisioning
* Updates
* Scaling
* Replacement of unhealthy nodes

---

### Store Images in Amazon ECR


Best practice:

```text id="eks7mn"
Docker Build
      │
Amazon ECR
      │
Amazon EKS
```

---

### Use Application Load Balancer


Production architecture:

```text id="eks8op"
Internet
      │
Application Load Balancer
      │
Kubernetes Service
      │
Pods
```

Provides:

* Health checks
* Load balancing
* High Availability

---

## 4. Key Features

### Managed Kubernetes


AWS manages:

* Control Plane
* High Availability
* API Server
* etcd
* Upgrades to the control plane (you initiate version upgrades; AWS performs the managed upgrade)

---

### Kubernetes Compatibility


Supports:

* Standard Kubernetes APIs
* kubectl
* Helm
* Kubernetes ecosystem tools

---

### High Availability


The Kubernetes Control Plane runs across multiple Availability Zones.

---

### Automatic Scaling


Supports:

* Kubernetes Cluster Autoscaler
* Horizontal Pod Autoscaler (HPA)
* Managed Node Group scaling
* AWS Fargate scaling

---

### Integration with AWS Services


Integrates with:

* Amazon ECR
* Elastic Load Balancing
* AWS IAM
* Amazon CloudWatch
* Amazon VPC
* AWS Auto Scaling
* AWS Secrets Manager

---

### IAM Integration


Supports **IAM Roles for Service Accounts (IRSA)**.

Applications running in Pods can securely access AWS services without storing AWS credentials.

> **Exam Tip:** Modern best practice is **IAM Roles for Service Accounts (IRSA)** for Pod-level AWS permissions.

---

### When to Use


Use Amazon EKS when you need:

* Kubernetes.
* Container orchestration.
* Multi-cloud portability.
* Existing Kubernetes workloads.
* Enterprise container platforms.
* Helm charts.
* Kubernetes APIs.

Typical workloads:

* Microservices
* APIs
* CI/CD platforms
* Machine Learning platforms
* Enterprise applications

---

### When NOT to Use


| Requirement                               | Better AWS Service    |
| ----------------------------------------- | --------------------- |
| Simple Docker container orchestration     | Amazon ECS            |
| Event-driven functions                    | AWS Lambda            |
| Traditional virtual machines              | Amazon EC2            |
| Simple managed web application deployment | AWS Elastic Beanstalk |

> **Exam Tip:** If the question explicitly mentions **Kubernetes**, **Pods**, **kubectl**, **Helm**, or Kubernetes manifests, the answer is almost always **Amazon EKS**.

---

**Next:** Part 2 covers:

## 7. Comparison with Similar Services

* Exam Decision Guide

Understanding the differences between Amazon EKS and other compute services is one of the **most commonly tested topics** in the SAA-C03 exam.

---

### Amazon EKS vs Amazon ECS


| Amazon EKS                               | Amazon ECS                                 |
| ---------------------------------------- | ------------------------------------------ |
| Managed Kubernetes service               | AWS-native container orchestration service |
| Uses Kubernetes                          | Uses AWS ECS scheduler                     |
| Supports Kubernetes APIs (kubectl, Helm) | No Kubernetes knowledge required           |
| Portable across cloud providers          | Optimized for AWS                          |
| Higher learning curve                    | Easier to learn and manage                 |
| Supports EC2 and AWS Fargate             | Supports EC2 and AWS Fargate               |

### When to Choose


* **Need Kubernetes or multi-cloud portability** → Amazon EKS
* **Need simple AWS-native container orchestration** → Amazon ECS

> **Exam Tip:** If the question mentions **Kubernetes**, **Pods**, **kubectl**, or **Helm**, choose **Amazon EKS**.

---

### Amazon EKS vs AWS Fargate


| Amazon EKS                       | AWS Fargate                            |
| -------------------------------- | -------------------------------------- |
| Container orchestration platform | Serverless compute engine              |
| Manages Kubernetes workloads     | Runs Pods (for EKS) or Tasks (for ECS) |
| Uses EC2 or Fargate              | No infrastructure management           |
| Supports Kubernetes APIs         | Does not provide orchestration         |

### Relationship


AWS Fargate is a compute option for Amazon EKS.

```text id="eks9qr"
Amazon EKS
      │
      ├── EC2 Worker Nodes
      │
      └── AWS Fargate
```

> **Exam Tip:** **EKS manages Kubernetes. Fargate runs the workloads.**

---

### Amazon EKS vs AWS Lambda


| Amazon EKS                      | AWS Lambda                  |
| ------------------------------- | --------------------------- |
| Runs containerized applications | Runs event-driven functions |
| Long-running services           | Short-lived execution       |
| Kubernetes platform             | Serverless functions        |
| Full Kubernetes ecosystem       | No Kubernetes support       |

### When to Choose


* **Need Kubernetes** → Amazon EKS
* **Need event-driven code execution** → AWS Lambda

---

### Amazon EKS vs Amazon EC2


| Amazon EKS           | Amazon EC2                       |
| -------------------- | -------------------------------- |
| Managed Kubernetes   | Virtual machines                 |
| Orchestrates Pods    | You manually deploy applications |
| Automatic scheduling | Manual infrastructure management |

### When to Choose


* **Container orchestration** → Amazon EKS
* **Traditional applications requiring VMs** → Amazon EC2

---

### Amazon EKS vs AWS Elastic Beanstalk


| Amazon EKS              | AWS Elastic Beanstalk                |
| ----------------------- | ------------------------------------ |
| Kubernetes platform     | Platform as a Service (PaaS)         |
| Container orchestration | Simple application deployment        |
| Greater flexibility     | Easier for standard web applications |

### When to Choose


* **Enterprise Kubernetes workloads** → Amazon EKS
* **Quick web application deployment** → AWS Elastic Beanstalk

---

### Exam Decision Guide


| If the Question Says...                       | Choose      |
| --------------------------------------------- | ----------- |
| Kubernetes                                    | Amazon EKS  |
| Pods                                          | Amazon EKS  |
| Helm                                          | Amazon EKS  |
| kubectl                                       | Amazon EKS  |
| Docker containers (AWS-native, no Kubernetes) | Amazon ECS  |
| Serverless containers                         | AWS Fargate |
| Event-driven functions                        | AWS Lambda  |
| Traditional VM                                | Amazon EC2  |
| Store container images                        | Amazon ECR  |

> **Exam Tip:** The presence of **Kubernetes terminology** is usually enough to eliminate ECS and select **Amazon EKS**.

---

## 8. Real World Example

### Scenario


A company already runs Kubernetes on-premises and wants to migrate to AWS with minimal application changes.

Requirements:

* Continue using Kubernetes.
* Use existing YAML manifests.
* Use Helm charts.
* Scale automatically.
* Reduce management overhead.

### Solution


1. Create an Amazon EKS cluster.
2. Store container images in Amazon ECR.
3. Deploy applications using existing Kubernetes manifests.
4. Use Managed Node Groups or AWS Fargate.
5. Expose applications through an Application Load Balancer.
6. Use **IAM Roles for Service Accounts (IRSA)** for secure AWS access.
7. Enable CloudWatch Container Insights for monitoring.

### Benefits


* No Kubernetes control plane management.
* Easy migration.
* High availability.
* Native Kubernetes APIs.
* Deep AWS integration.

---

## 9. Pricing Basics

Amazon EKS pricing includes:

### EKS Cluster Fee


You pay **per EKS cluster** (control plane fee), regardless of whether you use EC2 or Fargate.

### Worker Nodes


If using EC2:

* EC2 instances
* EBS storage
* Data transfer

If using AWS Fargate:

* vCPU
* Memory
* Runtime duration

Additional charges may apply for:

* Elastic Load Balancers
* CloudWatch logs and metrics
* Data transfer

Cost optimization:

* Delete unused clusters.
* Right-size worker nodes.
* Use Managed Node Groups.
* Use Reserved Instances or Savings Plans for long-running EC2 worker nodes.
* Use Fargate for variable workloads.

> **Exam Tip:** Unlike Amazon ECS, **Amazon EKS has a separate control plane charge** in addition to compute costs.

---

## 10. SAA-C03 Exam Tips

* EKS is AWS's managed **Kubernetes** service.
* AWS manages the **control plane**.
* Applications run on **EC2 worker nodes** or **AWS Fargate**.
* Use **Amazon ECR** to store container images.
* Kubernetes schedules **Pods**, not containers.
* Use **Deployments** to manage Pods.
* Use **Services** to expose applications.
* Use **IAM Roles for Service Accounts (IRSA)** for secure AWS access.
* Control plane is highly available across multiple AZs.

---

## 11. Common Exam Traps

### Trap 1: Confusing EKS with ECS


Amazon EKS

* Kubernetes
* Pods
* Deployments
* Helm
* kubectl

Amazon ECS

* Task Definitions
* Tasks
* Services
* AWS-native orchestration

---

### Trap 2: Confusing EKS with Fargate


Amazon EKS

* Kubernetes platform.

AWS Fargate

* Compute engine.

Fargate can run workloads for both ECS and EKS.

---

### Trap 3: Thinking AWS Manages Worker Nodes Automatically


AWS always manages:

* Kubernetes Control Plane

If you use **EC2 worker nodes**, you (or Managed Node Groups) are responsible for node lifecycle tasks such as capacity and version management.

If you use **AWS Fargate**, AWS manages the underlying compute infrastructure.

---

### Trap 4: Hardcoding AWS Credentials


Never store AWS credentials inside Pods.

Use:

* **IAM Roles for Service Accounts (IRSA)**

---

### Trap 5: Confusing Pods and Containers


Container

* Runs the application.

Pod

* Smallest deployable Kubernetes unit.
* Can contain one or more containers.

---

### Trap 6: Confusing ECR with EKS


Amazon ECR

* Stores Docker images.

Amazon EKS

* Runs Kubernetes workloads.

Think:

**ECR = Image Registry**

**EKS = Kubernetes Platform**

---

## 12. Frequently Asked Exam Scenarios

### Scenario 1


A company already uses Kubernetes and wants to migrate to AWS.

**Answer:**

Amazon EKS.

---

### Scenario 2


A company wants to use Helm charts and kubectl.

**Answer:**

Amazon EKS.

---

### Scenario 3


A company wants to run Kubernetes Pods without managing EC2 worker nodes.

**Answer:**

Amazon EKS with **AWS Fargate**.

---

### Scenario 4


A company needs Docker containers but does not require Kubernetes.

**Answer:**

Amazon ECS.

---

### Scenario 5


A company wants to securely grant Pods access to Amazon S3.

**Answer:**

Use **IAM Roles for Service Accounts (IRSA)**.

---

## 13. Summary

| Topic               | Key Point                             |
| ------------------- | ------------------------------------- |
| Purpose             | Managed Kubernetes service            |
| Compute Options     | EC2 Worker Nodes or AWS Fargate       |
| Registry            | Amazon ECR                            |
| Smallest Unit       | Pod                                   |
| Deployment          | Manages Pods                          |
| Networking          | Kubernetes Service + Load Balancer    |
| Security            | IAM Roles for Service Accounts (IRSA) |
| Most Tested Concept | EKS vs ECS                            |
| Common Trap         | Confusing EKS with Fargate or ECS     |

---

## Revision Checklist

- [ ] Memory Tip


### AWS SAA-C03 Notes – Part 11: Amazon EKS (Part 2)


- [ ] 


- [ ] Before moving on, make sure you can answer:

- [ ] What is Amazon EKS?
- [ ] How is EKS different from ECS?
- [ ] How is EKS different from Fargate?
- [ ] What is a Pod?
- [ ] What is a Deployment?
- [ ] What is a Kubernetes Service?
- [ ] Why use IAM Roles for Service Accounts (IRSA)?
- [ ] When should you choose EKS over ECS?

- [ ] 

### Memory Tip


- [ ] Think of Amazon EKS as answering this question:

- [ ] > **"How can I run Kubernetes on AWS without managing the Kubernetes control plane?"**

- [ ] Remember these associations:

- [ ] **Amazon EKS** → Managed Kubernetes.
- [ ] **Pods** → Smallest deployable unit.
- [ ] **Deployments** → Manage Pods.
- [ ] **Services** → Expose applications.
- [ ] **Amazon ECR** → Stores container images.
- [ ] **AWS Fargate** → Serverless compute for Pods.
- [ ] **IRSA** → Secure Pod access to AWS services.
- [ ] **Amazon ECS** → Simpler AWS-native alternative when Kubernetes isn't required.

### Quick Decision Cheat Sheet


- [ ] **Need Kubernetes?** → Amazon EKS
- [ ] **Need Docker containers without Kubernetes?** → Amazon ECS
- [ ] **Need serverless containers/Pods?** → AWS Fargate
- [ ] **Store container images?** → Amazon ECR
- [ ] **Need event-driven code?** → AWS Lambda
- [ ] **Need virtual machines?** → Amazon EC2
- [ ] **Need easy web app deployment?** → AWS Elastic Beanstalk
