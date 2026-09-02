---
title: "Amazon ECS"
slug: amazon-ecs
category: Medium Priority
priority: High
order: 1
---

# AWS SAA Notes

## 1. Purpose

**Amazon Elastic Container Service (Amazon ECS)** is a **fully managed container orchestration service** that allows you to **deploy, manage, scale, and monitor Docker containers** on AWS.

ECS removes the complexity of managing container orchestration infrastructure while integrating seamlessly with other AWS services.

You can run ECS using:

* **Amazon EC2** (you manage the EC2 instances)
* **AWS Fargate** (serverless; AWS manages the infrastructure)

> **Exam Keyword:** Managed Container Orchestration

---

## 2. How It Works

You package your application into a **Docker container**, store the image in a registry such as **Amazon ECR**, create an ECS task definition, and run it as a task or service.

### ECS Deployment Flow


```text
Developer
     │
Build Docker Image
     │
Amazon ECR
     │
Task Definition
     │
Amazon ECS
     │
EC2 or AWS Fargate
     │
Running Containers
```

> **Exam Tip:** ECS orchestrates containers; **Amazon ECR stores container images**.

---

### ECS Components


### Cluster


A **cluster** is a logical grouping of compute resources where containers run.

A cluster can use:

* EC2 instances
* AWS Fargate
* Both (mixed capacity)

---

### Task Definition


A **Task Definition** is a blueprint describing how containers should run.

It specifies:

* Docker image

- CPU and memory
- Networking
- Environment variables
- IAM role
- Ports
- Logging

> **Exam Tip:** A Task Definition is similar to a VM template, but for containers.

---

### Task


A **Task** is a running instance of a Task Definition.

Example:

```text
Task Definition
       │
Launch
       │
Running Task
```

---

### Service


An ECS **Service** ensures that a specified number of task instances are always running.

If a task fails:

* ECS automatically replaces it.

Supports:

* Auto Scaling
* Load Balancers
* Rolling deployments

---

## 3. Architecture

Typical ECS architecture:

```text
Users
   │
Application Load Balancer
   │
Amazon ECS Service
   │
Running Tasks
   │
EC2 or AWS Fargate
```

---

### ECS with Amazon ECR


```text
Docker Images
      │
Amazon ECR
      │
Amazon ECS
      │
Launch Tasks
```

---

### ECS with Fargate


```text
Application
      │
Amazon ECS
      │
AWS Fargate
      │
Running Containers
```

No EC2 instances are managed by the customer.

---

### ECS with EC2 Launch Type


```text
Amazon ECS
      │
EC2 Cluster
      │
Docker Containers
```

You are responsible for:

* EC2 instances
* OS patching
* Capacity management

---


### Choose Fargate for Serverless Containers


Use AWS Fargate when you want:

* No server management
* Automatic scaling
* Simpler operations
* Pay only for CPU and memory used

---

### Choose EC2 Launch Type When


You need:

* GPU instances
* Specialized instance types
* Full host control
* Custom AMIs
* Lower cost for predictable workloads

---

### Use Application Load Balancer


Typical production architecture:

```text
Internet
     │
Application Load Balancer
     │
Amazon ECS Service
     │
Tasks
```

Benefits:

* High Availability
* Health checks
* Load balancing
* Blue/Green deployments (with additional services)

---

### Store Images in Amazon ECR


Best practice:

```text
Docker Build
      │
Amazon ECR
      │
Amazon ECS
```

ECR integrates directly with ECS for secure image pulls.

---

### Enable Auto Scaling


ECS Services can automatically scale based on:

* CPU utilization
* Memory utilization
* Custom CloudWatch metrics

---

## 4. Key Features

### Fully Managed Orchestration


AWS manages:

* Scheduling
* Placement
* Health monitoring
* Service discovery
* Scaling

---

### Two Launch Types


### EC2 Launch Type


Customer manages:

* EC2 instances
* Capacity
* Patching

---

### AWS Fargate Launch Type


AWS manages:

* Infrastructure
* EC2 instances
* Capacity provisioning

You manage only the containers.

---

### Service Auto Recovery


If a task stops unexpectedly:

ECS automatically launches a replacement to maintain the desired count.

---

### Integration with AWS Services


Integrates with:

* Amazon ECR
* Elastic Load Balancing (ALB/NLB)
* AWS Cloud Map
* Amazon CloudWatch
* AWS IAM
* AWS Auto Scaling
* AWS Secrets Manager
* AWS Systems Manager Parameter Store

---

### IAM Integration


Each task can use an **IAM Task Role**.

This allows containers to securely access AWS services without embedding credentials.

> **Exam Tip:** Use **IAM Task Roles**, not hardcoded AWS access keys inside containers.

---

### When to Use


Use Amazon ECS when you need:

* Containerized applications.
* Docker orchestration.
* AWS-native container management.
* Microservices.
* API services.
* Batch processing.
* Background workers.
* Event-driven applications.

Typical workloads:

* REST APIs
* Web applications
* Microservices
* Backend services
* Worker processes

---

### When NOT to Use


| Requirement                          | Better AWS Service    |
| ------------------------------------ | --------------------- |
| Kubernetes ecosystem and portability | Amazon EKS            |
| Simple event-driven function         | AWS Lambda            |
| Traditional VM workloads             | Amazon EC2            |
| Platform-as-a-Service for web apps   | AWS Elastic Beanstalk |

> **Exam Tip:** If the question specifically mentions **Docker containers on AWS** without requiring Kubernetes, **Amazon ECS** is usually the correct answer.

---

**Next:** Part 2 covers:

## 7. Comparison with Similar Services

* Exam Decision Guide

Understanding the differences between Amazon ECS and other compute services is a **high-frequency topic** in the SAA-C03 exam.

---

### Amazon ECS vs Amazon EKS


| Amazon ECS                                 | Amazon EKS                                      |
| ------------------------------------------ | ----------------------------------------------- |
| AWS-native container orchestration service | Managed Kubernetes service                      |
| Simpler to learn and manage                | Uses standard Kubernetes APIs                   |
| No Kubernetes knowledge required           | Requires Kubernetes knowledge                   |
| Deep AWS integration                       | Portable across cloud providers and on-premises |
| Supports EC2 and Fargate                   | Supports EC2 and Fargate                        |

### When to Choose


* **Need simple AWS-native container orchestration** → Amazon ECS
* **Need Kubernetes compatibility or portability** → Amazon EKS

> **Exam Tip:** If the question specifically mentions **Kubernetes**, **pods**, or **kubectl**, choose **Amazon EKS**.

---

### Amazon ECS vs AWS Fargate


| Amazon ECS                       | AWS Fargate                              |
| -------------------------------- | ---------------------------------------- |
| Container orchestration service  | Serverless compute engine for containers |
| Schedules and manages containers | Runs containers without managing servers |
| Uses EC2 or Fargate as compute   | Works with ECS and EKS                   |

### Relationship


Amazon ECS **uses** AWS Fargate.

```text
Amazon ECS
      │
      ├── EC2 Launch Type
      │
      └── AWS Fargate Launch Type
```

> **Exam Tip:** ECS is the **orchestrator**. Fargate is the **compute engine**.

---

### Amazon ECS vs AWS Lambda


| Amazon ECS                              | AWS Lambda                                                                   |
| --------------------------------------- | ---------------------------------------------------------------------------- |
| Runs containers                         | Runs functions                                                               |
| Long-running applications               | Short-lived event-driven execution                                           |
| Full control over container environment | No server or container management                                            |
| Supports any Docker container           | Limited to Lambda runtime and deployment package/container image constraints |

### When to Choose


* **Need containerized applications** → Amazon ECS
* **Need event-driven serverless functions** → AWS Lambda

---

### Amazon ECS vs AWS Elastic Beanstalk


| Amazon ECS                | AWS Elastic Beanstalk                  |
| ------------------------- | -------------------------------------- |
| Container orchestration   | Platform as a Service (PaaS)           |
| Manages Docker containers | Deploys complete web applications      |
| Ideal for microservices   | Ideal for traditional web applications |

### When to Choose


* **Containerized microservices** → Amazon ECS
* **Quick web application deployment** → AWS Elastic Beanstalk

---

### Amazon ECS vs Amazon EC2


| Amazon ECS                        | Amazon EC2                       |
| --------------------------------- | -------------------------------- |
| Manages containers                | Manages virtual machines         |
| Built-in orchestration            | Manual deployment and management |
| Automatic scheduling and recovery | User manages everything          |

### When to Choose


* **Docker containers** → Amazon ECS
* **Traditional VM-based applications** → Amazon EC2

---

### Exam Decision Guide


| If the Question Says...                | Choose                |
| -------------------------------------- | --------------------- |
| Run Docker containers on AWS           | Amazon ECS            |
| Kubernetes workloads                   | Amazon EKS            |
| No server management for containers    | AWS Fargate           |
| Event-driven functions                 | AWS Lambda            |
| Traditional web application deployment | AWS Elastic Beanstalk |
| Virtual machines                       | Amazon EC2            |
| Store container images                 | Amazon ECR            |

> **Exam Tip:** Keywords like **Docker**, **container**, **task**, **service**, or **ECS cluster** usually indicate **Amazon ECS**.

---

## 8. Real World Example

### Scenario


A company wants to migrate a monolithic application to microservices.

Requirements:

* Deploy Docker containers.
* Automatically replace failed containers.
* Scale during traffic spikes.
* Minimize infrastructure management.

### Solution


1. Build Docker images.
2. Push images to **Amazon ECR**.
3. Create an **ECS Task Definition**.
4. Deploy an **ECS Service** using the **Fargate launch type**.
5. Place an **Application Load Balancer (ALB)** in front of the service.
6. Configure **Service Auto Scaling** based on CPU utilization.
7. Use **IAM Task Roles** for secure access to AWS services.

### Benefits


* No server management.
* Automatic recovery of failed containers.
* Easy scaling.
* Secure integration with AWS services.

---

## 9. Pricing Basics

### ECS


There is **no additional charge** for using Amazon ECS itself.

You pay for the underlying compute resources.

### EC2 Launch Type


Pay for:

* EC2 instances
* EBS volumes
* Data transfer
* Load Balancers

### AWS Fargate Launch Type


Pay only for:

* vCPU allocated
* Memory allocated
* Storage (where applicable)
* Duration the containers run

Cost optimization:

* Use **Fargate** for unpredictable workloads.
* Use **EC2 Launch Type** for steady, long-running workloads where Reserved Instances or Savings Plans can reduce costs.
* Use Auto Scaling to avoid over-provisioning.

> **Exam Tip:** ECS is free; you pay for the compute (EC2 or Fargate).

---

## 10. SAA-C03 Exam Tips

* ECS is AWS's native container orchestration service.
* ECS supports **EC2** and **Fargate** launch types.
* Store container images in **Amazon ECR**.
* A **Task Definition** is the blueprint for running containers.
* A **Task** is a running instance of a Task Definition.
* A **Service** maintains the desired number of running tasks.
* Use **IAM Task Roles** instead of embedding AWS credentials.
* Use **Application Load Balancer** for distributing traffic across ECS tasks.

---

## 11. Common Exam Traps

### Trap 1: Confusing ECS with Fargate


**Amazon ECS**

* Container orchestration service.

**AWS Fargate**

* Serverless compute engine.

Remember:

**ECS manages containers. Fargate runs containers.**

---

### Trap 2: Confusing ECS with EKS


ECS:

* AWS-native.
* Easier to manage.
* No Kubernetes.

EKS:

* Kubernetes.
* Pods.
* kubectl.
* Kubernetes ecosystem.

---

### Trap 3: Confusing Tasks and Services


**Task**

* One running copy of a Task Definition.

**Service**

* Maintains the desired number of running tasks.
* Replaces failed tasks automatically.
* Supports Auto Scaling and Load Balancers.

---

### Trap 4: Hardcoding AWS Credentials


Never store AWS access keys inside containers.

Use:

* **IAM Task Roles**

This is one of AWS's recommended security best practices.

---

### Trap 5: Confusing Amazon ECR with Amazon ECS


Amazon ECR:

* Stores Docker images.

Amazon ECS:

* Runs Docker containers.

Think:

**ECR = Registry**

**ECS = Orchestrator**

---

### Trap 6: Choosing EC2 When Fargate Fits Better


If the requirement says:

* No server management
* Serverless containers
* Minimize operational overhead

Choose:

**AWS Fargate**

---

## 12. Frequently Asked Exam Scenarios

### Scenario 1


A company wants to run Docker containers without managing EC2 instances.

**Answer:**

Amazon ECS with **AWS Fargate**.

---

### Scenario 2


An application must automatically replace failed containers.

**Answer:**

Use an **ECS Service**.

---

### Scenario 3


A company wants to securely provide AWS credentials to containers.

**Answer:**

Use **IAM Task Roles**.

---

### Scenario 4


A company needs Kubernetes APIs and portability across cloud providers.

**Answer:**

Amazon EKS.

---

### Scenario 5


A development team wants a fully managed registry for Docker images.

**Answer:**

Amazon ECR.

---

## 13. Summary

| Topic               | Key Point                         |
| ------------------- | --------------------------------- |
| Purpose             | Container orchestration           |
| Compute Options     | EC2 or AWS Fargate                |
| Registry            | Amazon ECR                        |
| Blueprint           | Task Definition                   |
| Running Instance    | Task                              |
| Availability        | Service maintains desired tasks   |
| Security            | IAM Task Roles                    |
| Most Tested Concept | ECS vs EKS vs Fargate             |
| Common Trap         | Confusing ECS with Fargate or ECR |

---

## Revision Checklist

- [ ] Memory Tip
### AWS SAA-C03 Notes – Part 10: Amazon ECS (Part 2)


- [ ] 


- [ ] Before moving on, make sure you can answer:

- [ ] What is Amazon ECS?
- [ ] What is the difference between ECS and EKS?
- [ ] What is the difference between ECS and Fargate?
- [ ] What is a Task Definition?
- [ ] What is an ECS Service?
- [ ] Where are Docker images stored?
- [ ] Why should IAM Task Roles be used?
- [ ] When should you choose EC2 Launch Type over Fargate?

- [ ] 

### Memory Tip


- [ ] Think of Amazon ECS as answering this question:

- [ ] > **"How can I easily deploy, manage, and scale Docker containers on AWS?"**

- [ ] Remember these associations:

- [ ] **Amazon ECS** → Container orchestration.
- [ ] **Amazon ECR** → Container image registry.
- [ ] **AWS Fargate** → Serverless compute for containers.
- [ ] **EC2 Launch Type** → You manage the servers.
- [ ] **Task Definition** → Blueprint.
- [ ] **Task** → Running container.
- [ ] **Service** → Maintains desired number of tasks.
- [ ] **IAM Task Roles** → Secure AWS access from containers.

### Quick Decision Cheat Sheet


- [ ] **Run Docker containers?** → Amazon ECS
- [ ] **Need Kubernetes?** → Amazon EKS
- [ ] **No server management?** → AWS Fargate
- [ ] **Store Docker images?** → Amazon ECR
- [ ] **Event-driven code?** → AWS Lambda
- [ ] **Traditional VM workloads?** → Amazon EC2
- [ ] **Platform-as-a-Service for web apps?** → AWS Elastic Beanstalk
