QuickRuitAI - Product Requirements Document
(PRD)
1. Executive Summary
QuickRuitAI is an end-to-end B2B HR-tech platform designed for recruiting and staffing agencies. The platform
automates the first-round hiring process through a sequence of customizable modules: Aptitude, Technical, AI
Video Interview, and Coding Assessments.
The immediate next phase involves introducing Recruiter Rian (an orchestrating conversational AI interviewer),
Dynamic AI Video Interviews, Unified Scorecards, and Third-Party Integrations (ATS and Career Pages) to
create a seamless, deeply interactive, and secure candidate experience.

2. Feature Comparison: Current State vs. Target State
(Milestones)
A. Core Platform & Job Engine

| Feature  | Current State  | Target State / Wants  | Priority  |
| -------- | -------------- | --------------------- | --------- |
Job Configuration  Jobs can be created with  Configuration-driven  Phase 1
| selected assessment modules    | architecture supporting      |     |     |
| ------------------------------ | ---------------------------- | --- | --- |
| (Aptitude, Technical, Coding,  | non-technical roles (Sales,  |     |     |
| AI Video) & duration. and      | Support) with custom         |     |     |
| especially the experience      | workflows.                   |     |     |
level.
Job Publishing  Generates a Magic Link  Direct Career Page Push:  Phase 5
| shareable on LinkedIn, Naukri,  | Publish directly to the  |     |     |
| ------------------------------- | ------------------------ | --- | --- |
| etc.                            | company's career page.   |     |     |
ATS Integration: Sync jobs
and candidate statuses with
external ATS.
B. Candidate Experience & Assessment Modules

| Feature  | Current State  | Target State / Wants  | Priority  |
| -------- | -------------- | --------------------- | --------- |
Question Banks  Basic schemas exist  Comprehensive DB  Phase 1
| (AptitudeQuestionBank. | architecture for topics, skills,  |     |     |
| ---------------------- | --------------------------------- | --- | --- |
difficulty balancing, and
js, etc.), but content is
randomization.
limited.

| Feature  | Current State  | Target State / Wants  | Priority  |
| -------- | -------------- | --------------------- | --------- |
Aptitude & Tech  Static modules generating  Enforced sequential  Phase 2
| Rounds  | simple scores.  | orchestration; candidate  |     |
| ------- | --------------- | ------------------------- | --- |
cannot skip.
AI Video Interview  Static questions based on JD  Dynamic Interviewing:  Phase 3
|     | + Resume. Output is a  | Adapts questions based on     |     |
| --- | ---------------------- | ----------------------------- | --- |
|     | detailed scorecard.    | real-time candidate answers.  |     |
Controlled by interview policy
(difficulty, bounds).
Coding Assessment  Structure for DSA and  Real-time evaluation with AI  Phase 2
|     | Machine coding exists.  | hinting (without revealing  |     |
| --- | ----------------------- | --------------------------- | --- |
solutions).
C. Recruiter Rian (AI Orchestrator)

| Feature  | Current State  | Target State / Wants  | Priority  |
| -------- | -------------- | --------------------- | --------- |
Interview  Standard UI transitions  Recruiter Rian:  Phase 3
| Orchestration  | between rounds.  | Conversational AI layer.  |     |
| -------------- | ---------------- | ------------------------- | --- |
Introduces the interview, sets
expectations, transitions
candidate between modules,
and gives
encouragement/hints.
State Management  Handled loosely on the  Backend Source of Truth:  Phase 2
|     | frontend.  | Backend controls state, Rian  |     |
| --- | ---------- | ----------------------------- | --- |
controls conversation,
Frontend renders active
module.
D. Security & Evaluation

| Feature  | Current State  | Target State / Wants  | Priority  |
| -------- | -------------- | --------------------- | --------- |
Proctoring  Tab-switching, face detection,  Risk-based engine:  Phase 1
|     | environment checks.  | Generates a confidence score  |     |
| --- | -------------------- | ----------------------------- | --- |
instead of binary "cheating"
labels. Screen sharing
integration.
Scorecard &  Detailed for Video AI; basic  Unified Scorecard:  Phase 4
| Ranking  | scores for others. Ranking  | Combines all modules         |     |
| -------- | --------------------------- | ---------------------------- | --- |
|          | exists.                     | (Aptitude, Tech, Coding, AI  |     |
Video, Behavioral, Security
Risk). Explainable evidence.

3. Structural Integration Plan & Architecture
To integrate the new features seamlessly without breaking the existing flow, the system must adopt a strict
separation of concerns:
1. The Interview Engine (State Machine)
● How it integrates: Create a dedicated InterviewSession model in the backend. This will track the
exact module the candidate is currently on, time remaining, and module status.
● Why: If a candidate disconnects, they resume exactly where they left off. The backend is the ultimate
source of truth, preventing the frontend or AI from hallucinating states.
2. Recruiter Rian (Conversational Orchestrator)
● How it integrates: Rian sits between the Interview Engine and the Candidate UI. Rian does not decide
what round is next; the Interview Engine tells Rian, "Transition to Technical." Rian then generates the
contextual dialog: "Great job on the aptitude round, let's move to technical."
● Dynamic Questioning: For the video interview, feed Rian a strict JSON schema blueprint representing
the "Interview Policy". Rian evaluates the candidate's last answer, decides the next topic from the
blueprint, and asks a follow-up.
3. Unified Scorecard & Evaluation Engine
● How it integrates: Instead of evaluating modules in silos, write an EvaluationService. As each
module finishes, its raw data is saved to the InterviewSession. Once the entire interview concludes,
the EvaluationService runs an LLM-assisted aggregation over all raw data (tech scores + behavioral
analysis + proctoring events) to generate the Unified Scorecard.
4. ATS & Career Page Integration
● How it integrates: Introduce a background queue (e.g., BullMQ) and a standard IntegrationAdapter
pattern. When a job is published, an event is emitted. The adapter translates our job schema to the
specific ATS API schema (e.g., Workday, Greenhouse).
4. Architectural Feasibility & Honest Feedback
Based on the 3-month timeline, here is my honest assessment:
1. Feasibility of the 3-Month Vision: Building everything requested in 3 months is highly ambitious and
risky. The core AI interviewer (Recruiter Rian) + Unified Scorecards + Dynamic Video AI is a massive
undertaking on its own.
2. What is genuinely difficult:
a. Dynamic AI Video Interview: Getting an LLM to reliably conduct a technical interview in real-time,
generate audio/video, enforce time constraints, and never hallucinate is extremely difficult. Latency
will be your biggest enemy here.
b. ATS Integrations: ATS APIs (Greenhouse, Workday, Lever) are notoriously complex,
undocumented, or require expensive partner approvals. Building a universal sync in 3 months is a
trap.
3. What should be postponed (Not MVP):
a. Screen Sharing: Screen sharing is very heavy on WebRTC infrastructure. Stick to DOM-based
proctoring (tab switches, copy-paste) and camera feeds for the MVP.

b. ATS/Career Page Integrations: Push this to post-MVP. Focus on making the core QuickRuit
platform an undeniable success via Magic Links first.
c. Machine-level Coding: Stick to DSA first. Real-world environment provisioning
(Docker/sandboxing) for machine rounds takes significant infrastructure work.
4. Backend vs AI Control:
a. The backend MUST control: Timers, state transitions, security event logging, and the final scoring
aggregation.
b. The AI MUST NEVER control: Passing/failing the candidate immediately, time limits, or deciding to
skip a mandatory module.
5. The Ultimate Differentiator:
a. Your core differentiator is Recruiter Rian + The Unified Scorecard. If you can provide a recruiter
with an explainable, deep dive into a candidate's actual capability (with video evidence) rather than
just a "Passed/Failed" flag, agencies will love the platform. Focus 80% of your effort here.