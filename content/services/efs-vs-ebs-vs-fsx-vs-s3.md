---
title: "EFS vs EBS vs FSx vs S3"
slug: efs-vs-ebs-vs-fsx-vs-s3
category: Identity & Security
priority: High
order: 1
---

# AWS SAA Notes

EFS vs EBS vs FSx vs S3 — AWS SAA-C03
=====================================

This is a **very important storage comparison** for the exam. The easiest way is to first identify the **storage type**.

ServiceTypeMain UseAccess**Amazon EBS**Block storageEC2 disksUsually one EC2 instance at a time**Amazon EFS**File storageShared Linux file systemMany EC2 instances**Amazon FSx**Managed file systemsWindows / high-performance workloadsMany clients depending on FSx type**Amazon S3**Object storageFiles, backups, data lakes, static contentAPI/HTTP

1\. Amazon EBS
==============

### Think: **"Hard disk for EC2"**

Amazon EBS provides **block storage volumes** that attach to EC2 instances.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   EC2   │   └── EBS Volume        ├── OS        ├── Applications        └── Database   `

### Use EBS when:

*   EC2 needs a persistent disk.
    
*   You need an OS/root volume.
    
*   You need low-latency block storage.
    
*   You are running a database on EC2.
    
*   You need to modify individual blocks.
    

### Important exam points

*   **Block storage**
    
*   Designed primarily for EC2
    
*   Persistent beyond EC2 instance stop/start
    
*   Can take **EBS snapshots**
    
*   Snapshots are stored in Amazon S3
    
*   Different volume types exist, such as **gp3, io2, st1, sc1**
    

### Exam keyword

> **"Block storage attached to EC2" → EBS**

2\. Amazon EFS
==============

### Think: **"Shared Linux file system"**

Amazon EFS provides a **managed NFS file system** that can be mounted by multiple EC2 instances simultaneously.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML             `EFS            /   |   \          EC2  EC2  EC2`

All EC2 instances can access the same files.

### Use EFS when:

*   Multiple EC2 instances need shared files.
    
*   Linux workloads need a shared file system.
    
*   Applications need shared storage across Availability Zones.
    
*   You need storage that automatically grows/shrinks.
    

### Important exam points

*   **File storage**
    
*   Uses **NFS**
    
*   Multiple EC2 instances can mount it simultaneously
    
*   Regional service
    
*   Automatically scales storage capacity
    
*   Designed for high availability and durability
    

### Example

A web application has 20 EC2 instances and all instances need access to:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   /shared     ├── images     ├── uploads     └── documents   `

→ **Amazon EFS**

### Exam keyword

> **"Shared file system for multiple Linux EC2 instances" → EFS**

3\. Amazon FSx
==============

### Think: **"Specialized managed file system"**

Amazon FSx provides fully managed file systems designed for specific workloads.

The major FSx types you should know:

### FSx for Windows File Server

Designed for **Windows workloads**.

Supports:

*   SMB
    
*   Windows file systems
    
*   Active Directory integration
    
*   Windows applications
    

### Exam keyword

> **Windows + shared file storage → FSx for Windows File Server**

### FSx for Lustre

Designed for **high-performance computing (HPC)**.

Common workloads:

*   Machine learning
    
*   High-performance computing
    
*   Media processing
    
*   Financial modeling
    
*   Big data processing
    

It provides very high throughput and low latency.

### Exam keyword

> **HPC / high-performance file system → FSx for Lustre**

### FSx for NetApp ONTAP

Provides managed NetApp ONTAP storage.

Useful when you need:

*   Enterprise file storage
    
*   NFS
    
*   SMB
    
*   iSCSI
    
*   Multi-protocol access
    
*   Advanced storage features
    

### Exam keyword

> **NetApp ONTAP features → FSx for NetApp ONTAP**

### FSx for OpenZFS

Provides managed OpenZFS file systems.

Useful for workloads that require:

*   NFS
    
*   High-performance file storage
    
*   OpenZFS compatibility
    

### Exam keyword

> **OpenZFS → FSx for OpenZFS**

4\. Amazon S3
=============

### Think: **"Massive object storage"**

Amazon S3 is **object storage**.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   S3 Bucket   │   ├── image.jpg   ├── video.mp4   ├── backup.zip   ├── data.csv   └── document.pdf   `

### Use S3 when:

*   Storing files/objects.
    
*   Backups.
    
*   Data lakes.
    
*   Static website content.
    
*   Logs.
    
*   Media.
    
*   Archiving.
    
*   Large-scale data storage.
    

### Important exam points

*   **Object storage**
    
*   Stores data in **buckets**
    
*   Extremely scalable
    
*   Accessed through APIs
    
*   Supports storage classes such as:
    
    *   S3 Standard
        
    *   S3 Intelligent-Tiering
        
    *   S3 Standard-IA
        
    *   S3 One Zone-IA
        
    *   S3 Glacier storage classes
        

### Exam keyword

> **"Object storage / bucket / data lake / backup" → S3**

5\. The Most Important Comparison
=================================

RequirementAnswerEC2 operating system disk**EBS**Block storage**EBS**Database running on EC2**EBS**Shared Linux file system**EFS**Multiple EC2 instances need same files**EFS**Windows shared file system**FSx for Windows File Server**HPC / very high-performance file system**FSx for Lustre**NetApp ONTAP**FSx for NetApp ONTAP**OpenZFS**FSx for OpenZFS**Object storage**S3**Data lake**S3**Static website files**S3**Backup/archive**S3**

6\. EBS vs EFS
==============

This is one of the **most common exam comparisons**.

EBSEFSBlock storageFile storagePrimarily for EC2Shared file systemUsually attached to one EC2 instanceMultiple EC2 instances can mount itAvailability Zone scopedRegionalThink hard diskThink shared network file systemLow-latency block I/OShared file access

### Scenario

> 10 EC2 instances need to access the same files simultaneously.

❌ EBS✅ **EFS**

### Scenario

> An EC2 instance needs a boot/root volume.

✅ **EBS**

7\. EFS vs FSx
==============

Both provide **file storage**, so look at the workload.

EFSFSxGeneral-purpose managed file systemSpecialized managed file systemsPrimarily Linux/NFS workloadsWindows, HPC, NetApp, OpenZFSSimple shared file storageSpecialized enterprise workloadsAutomatically scalableDepends on FSx typeGreat for shared Linux application filesGreat for specialized workloads

### Exam shortcut

**Linux shared files → EFS**

**Windows → FSx for Windows**

**HPC → FSx for Lustre**

**NetApp → FSx for ONTAP**

**OpenZFS → FSx for OpenZFS**

8\. EBS vs S3
=============

EBSS3Block storageObject storageAttached to EC2Accessed through APIsOS/database diskFiles, objects, backupsLow-latency disk I/OMassive scalable object storageCannot directly behave like an S3 bucketBucket-based

### Scenario

> Store millions of images for a website.

→ **S3**

### Scenario

> Provide a persistent disk for an EC2 database.

→ **EBS**

9\. EFS vs S3
=============

This is another common trap.

### EFS

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   EC2 ──┐  EC2 ──┼── EFS  EC2 ──┘   `

Shared **file system**.

### S3

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Application       │       ▼   S3 Bucket       │   Objects   `

**Object storage**, not a traditional mounted file system.

> **Exam Trap:** Don't choose S3 just because "many servers need access to the same data." If they need a **shared file system**, EFS/FSx may be the correct answer.

10\. Common Exam Traps ⭐⭐⭐
==========================

### Trap 1 — "Shared Storage"

Don't automatically choose S3.

Ask:

> Does the application need a **file system**?

If yes:

*   Linux → **EFS**
    
*   Windows → **FSx for Windows**
    
*   HPC → **FSx for Lustre**
    

If it just needs objects/files through an API:

→ **S3**

### Trap 2 — "Multiple EC2 Instances"

Multiple EC2 instances accessing the same storage:

→ **EFS**

But don't forget that certain EBS configurations can support multi-attach for specific use cases. For typical SAA questions, **shared general-purpose file storage → EFS**.

### Trap 3 — "Windows"

If the question specifically mentions:

*   SMB
    
*   Windows Server
    
*   Active Directory
    
*   Windows shared folders
    

→ **FSx for Windows File Server**

### Trap 4 — "HPC"

If you see:

*   High-performance computing
    
*   HPC
    
*   Machine learning training
    
*   High throughput
    
*   Parallel processing
    

→ **FSx for Lustre**

### Trap 5 — "Object Storage"

If you see:

*   Bucket
    
*   Object
    
*   Data lake
    
*   Static website
    
*   Backup
    
*   Logs
    
*   Large-scale unstructured data
    

→ **S3**

11\. Exam Decision Tree 🧠
==========================

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   What type of storage do I need?                │        ┌───────┴────────┐        │                │      Block             File        │                │       EBS         ┌─────┴──────────┐                   │                │                General         Specialized                   │                │                  EFS          ┌─────┼─────────┐                               │     │         │                            Windows  HPC    NetApp/ZFS                               │     │         │                             FSx    Lustre    FSx   `

And if the question says **object storage**:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Object Storage        │        ▼       S3   `

12\. Final Memory Trick
=======================

Remember these four words:

> **EBS = Disk****EFS = Shared Linux Files****FSx = Specialized Files****S3 = Objects**

### Ultra-Short SAA Cheat Sheet

KeywordService**Disk**EBS**Block**EBS**EC2 root volume**EBS**Shared Linux files**EFS**NFS**EFS**Windows / SMB**FSx for Windows**HPC**FSx for Lustre**NetApp**FSx for ONTAP**OpenZFS**FSx for OpenZFS**Object / Bucket**S3**Data Lake**S3**Static files**S3**Backup / Archive**S3

**The #1 exam question to ask yourself:****"Is this block, file, or object storage?"**

*   **Block → EBS**
    
*   **File → EFS/FSx**
    
*   **Object → S3**