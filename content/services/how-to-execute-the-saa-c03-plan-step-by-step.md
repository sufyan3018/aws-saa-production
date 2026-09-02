---
title: "How to Execute the SAA-C03 Plan — Step by Step"
slug: how-to-execute-the-saa-c03-plan-step-by-step
category: Identity & Security
priority: High
order: 1
---

# AWS SAA Notes
# How to Execute the SAA-C03 Plan — Step by Step 

This is the "how," not the "what" — use alongside the Study Tracker (which tells you what to cover each week). This tells you exactly what to do in your daily 2-hour block. 

### The Daily 2-Hour Block (Learning Weeks 1-8) 

Don't just "watch videos for 2 hours." Split every session like this: 

Time Activity 0:00Watch Udemy (Maarek) section; at 1.25-1.5x speed 0:45 0:45-1-00 Immediately do the KodeKloud lab for that exact topic; (same day, not later) 1:00-1:20 Write/update your notes (comparison-table; style — see template below) 1:205-question self-quiz from memory (no notes) — write down what you got 1:30 wrong 

Why this order matters: Watching video — doing lab — writing notes in the same session uses three different memory pathways (visual, hands-on, written) on the same concept while it's fresh. Splitting video-watching and labs across different days is the #1 reason people forget material by week 8. 

Don't rewatch the same lecture in both Udemy and KodeKloud. Pick Udemy as primary teaching content. Use KodeKloud purely for its labs/playground — skip its video for topics you already watched in Udemy. 

## Step-by-Step: A Single Topic (example — "S3 Storage Classes") 

1. Watch the Udemy lecture once, no pausing, just absorb the shape of it. 

2. Open the KodeKloud lab (or your own free-tier AWS console if no lab exists) and actually: 

° Create a bucket 

   - ° Upload an object 

   - ° Change its storage class manually 

   - ° Set up a lifecycle rule and watch it apply 

3. Write your note as a comparison, not a transcript. Bad note: "S3 has Standard, IA, Glacier..." Good note: 



<!-- Start of picture text -->
Storage Class Retrievaltime. Use case Minchargeduration<br>Standard ms Frequently accessed none<br>Standard-lA ms InfONt, needs fast 30 days<br>access<br>Glacier Instant ms Archive, instant retrieval 90 days<br>Glacier Flexible mins—hrs Archive, rare retrieval 90 days<br>Glacier Deep ;<br>Archive hrs Long-term compliance 180 days<br><!-- End of picture text -->

This table format is what actually gets tested — the exam gives you a scenario ("data accessed once a quarter, needs retrieval within minutes") and you match it to a row. 

4. Self-quiz: close your notes, write 3 scenario questions from memory ("When would you use X over Y"), answer them, then check against your notes. 

Repeat this exact 4-step loop for every service in the tracker checklist. 

### Weekly Rhythm 

##### Learning weeks (1-8): 

- Mon-Fri: daily 2-hour blocks (topic learning as above) 

- Sat: 1 hour — review the week's notes only (no new content), fix any comparison tables that felt shaky 

- Sun: off, or catch-up buffer if you fell behind 

##### Practice test weeks (9-11): 

- This phase works differently — see below. 

## How to Run the Practice Test Phase (Weeks 9-11) Properly 

Most people waste this phase byjust grinding tests without reviewing well. Do this instead: 

1. Day A (needs ~2 hrs, use a weekend or combine 2 weekday sessions): 

   - ° Take one full 65-question timed test in one sitting, no pausing, no notes 

   - ° Don't review yet — just note your score 

2. Day B (next available day, 1 session): 

   - ° Go through every wrong answer AND every answer you guessed on (even if correct) 

   - ° For each one, write in an error log (template below) — don't just read the explanation and move on, write it in your own words 

   - ° Go back to your week 1-8 notes for that specific service and re-read that section 

3. Day C: 

   - ° Before the next full test, soend 20-30 min re-reading only your error log from the past week 

   - ° Then take the next full test 

##### Error Log Template: 



<!-- Start of picture text -->
Date Question; topic; Why| got it Correct concept (in my own Reviewed.<br>wrong words) again?<br>e.g. . "NAT Confused scales,NAT Gatewayno SSH;=NATAWSInstancemanaged,=<br>Gateway vs NAT [ ]<br>.<br>Instance cost model trafficself-managed,; cheaper for low<br><!-- End of picture text -->

By week 11 you should havea fairly long error log — skim the entire log the night before the exam. This is your single highest-value asset going into test day, more useful than any last-minute video. 

#### Rules to Actually Follow (not just read) 

- Never skip the lab step, even when tempted to "just watch two more videos." Passive videowatching without hands-on practice is the single biggest reason people fail SAA-C03 despite "finishing the course." 

- Never let notes become a copy of the video. If you're writing full sentences describing what a service does, stop — convert it to a comparison table or a "when to use X vs Y" line instead. 

- Don't move to a new topic if your 5-question self-quiz score was below 3/5. Spend 10 

avtra miniitac an that tanic inctaad — it eAmMnNnatiindc latar 

VALICO TIMIIUMLeOS VIET LEIGE tpi Wmiwau 

ue VeVi iwvul M49 IAL. 

- Log every practice-test mistake, even lucky guesses. A correct guess is a knowledge gap wearing a disguise. 

- If a week runs short, don't compress the lab step to save time — compress the notewriting instead. Labs are what actually builds intuition for the scenario questions; notes are just backup. 

#### Quick Daily Checklist (print this or keep it open) 

- _) Watched today's video segment 

- (J Did the matching hands-on lab 

- _) Wrote/updated a comparison-table note 

- _J Did a 5-question self-quiz from memory 

- _) Logged anything | got wrong 

If you can honestly check all 5 boxes at the end of a session, that session counted. If you anlv watched video it mastlyv didn't 

    