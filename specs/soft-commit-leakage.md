# Soft Commit Leakage Calculator

## 1. Product Overview

**Name:** Soft Commit Leakage Calculator  
**Type:** 2-5 minute capital raise conversion calculator  
**Primary Users:** Emerging GPs, syndicators, fund managers, co-sponsors  
**Internal Users:** AEs, TAMs, Customer Success, Partnerships  
**Goal:** Help GPs quantify how much capital they are losing between investor interest, soft commits, signed subscriptions, and funded capital.

## Core Value Proposition

Most GPs think their biggest capital raise problem is lack of investor interest.

In reality, many GPs already have enough interest to raise more capital than they are closing, but they lose investors during the messy middle of the process:

- Interested LPs do not become soft commits
- Soft commits do not complete subscription documents
- Signed investors do not fund quickly
- Follow-up becomes inconsistent
- Funding status is tracked manually

The Soft Commit Leakage Calculator turns these invisible leaks into a simple dollar amount, then shows the GP which part of the investor conversion funnel needs to be fixed first.

## Primary Outcome

Answer the question:

> “How much committed capital am I losing because my raise process is leaking investors?”

---

## 2. Strategic Purpose

This is not a generic ROI calculator.

It is a high-intent diagnostic that should:

1. Convert active fundraisers into demo-ready buyers
2. Show the dollar value of investor process friction
3. Create urgency around fixing the capital raise workflow
4. Route the buyer naturally into CFP Investor Portal, CRM, and Banking
5. Filter out tire kickers who are not actively raising or cannot provide basic funnel numbers

The tool should make the GP think:

> “I do not just need more LPs. I need to stop losing the LPs I already convinced.”

---

## 3. Target Users

## Primary Users

### Active GPs Raising Capital

- Running a current syndication, fund, SPV, or co-sponsor raise
- Has already spoken with LPs
- Has soft commits, verbal interest, or investor follow-up activity

### Repeat Syndicators

- Have completed prior raises
- Know that verbal commitments do not always convert into funded capital
- May be frustrated with manual tracking, spreadsheets, DocuSign, PDFs, or a legacy portal

### GPs Evaluating a Platform Switch

- Already using InvestNext, Agora, Juniper Square, SyndicationPro, AppFolio, or manual workflows
- Feeling pain around investor follow-up, subscriptions, funding status, or capital tracking

## Best-Fit Buyer Signals

Prioritize users who indicate:

- Active raise or close target within 90 days
- Raise size above $2M
- Average LP check size above $25K
- 20+ investor conversations
- Meaningful gap between soft commits and funded capital
- Manual or fragmented subscription and funding process

---

## 4. User Flow

## Step 1: Landing Page

### Headline

**Find out how much capital is leaking from your raise.**

### Subhead

In 3 minutes, calculate where investor interest is failing to convert into signed and funded capital.

### CTA

**Calculate my leakage**

---

## Step 2: Guided Intake

The calculator should be short and numerical. Target **8-10 questions max**.

## Section A: Raise Profile

Purpose: establish the size and seriousness of the raise.

Questions:

1. What are you raising for?
   - Single-asset syndication
   - Fund
   - SPV
   - Fund of funds
   - Co-sponsor / feeder vehicle
   - Other

2. What is your target raise size?
   - <$1M
   - $1M-$5M
   - $5M-$10M
   - $10M-$25M
   - $25M-$50M
   - $50M+

3. What is your average expected LP check size?
   - <$25K
   - $25K-$50K
   - $50K-$100K
   - $100K-$250K
   - $250K+
   - Not sure

4. What stage is your raise in?
   - Planning
   - Actively raising
   - Soft commits collected
   - Subscription docs sent
   - Closing / collecting funds
   - Post-close

---

## Section B: Investor Funnel Inputs

Purpose: quantify where capital is dropping off.

Questions:

5. How many LPs have you contacted or engaged for this raise?

6. How many LPs expressed interest?

7. How many LPs gave a verbal or soft commitment?

8. How many LPs completed subscription documents?

9. How many LPs have funded?

10. What is the total amount funded so far?

Optional if user has better data:

11. What is the total dollar amount of soft commitments?

12. What is the total dollar amount of signed subscriptions?

---

## Section C: Current Process

Purpose: identify likely causes and route to CFP products.

Questions:

13. How do investors currently subscribe?
   - Manual PDF/email
   - DocuSign + file sharing
   - Existing investor portal
   - Not set up yet
   - Other

14. How do you track LP stage and follow-up?
   - Spreadsheet
   - Inbox/manual notes
   - CRM
   - Investor portal
   - Not consistently tracked

15. How do you track signed commitments vs received funds?
   - Spreadsheet
   - Bank records/manual reconciliation
   - Investor portal
   - CRM
   - Not consistently tracked

Note: For MVP, questions 11-15 can be optional or collapsed into a shorter current process section if completion rate is a concern.

---

# 5. Core Calculations

The calculator should produce simple, blunt outputs.

## Required Metrics

### 1. Interest to Soft Commit Conversion

Formula:

```text
Soft Commit Conversion Rate = Soft Commits / Interested LPs
```

### 2. Soft Commit to Signed Conversion

Formula:

```text
Signed Conversion Rate = Completed Subscriptions / Soft Commits
```

### 3. Signed to Funded Conversion

Formula:

```text
Funding Completion Rate = Funded LPs / Completed Subscriptions
```

### 4. Overall Interest to Funded Conversion

Formula:

```text
Overall Conversion Rate = Funded LPs / Interested LPs
```

### 5. Estimated Soft Commit Leakage

If total soft commit dollars are provided:

```text
Soft Commit Leakage = Total Soft Commit Dollars - Funded Dollars
```

If only LP count and average check size are provided:

```text
Estimated Soft Commit Dollars = Soft Commits x Average Check Size
Estimated Soft Commit Leakage = Estimated Soft Commit Dollars - Funded Dollars
```

### 6. Signed but Unfunded Leakage

If signed subscription dollars are provided:

```text
Signed but Unfunded Leakage = Signed Subscription Dollars - Funded Dollars
```

If only LP count and average check size are provided:

```text
Estimated Signed Dollars = Completed Subscriptions x Average Check Size
Signed but Unfunded Leakage = Estimated Signed Dollars - Funded Dollars
```

### 7. Potential Capital Recovered

Conservative estimate:

```text
Potential Capital Recovered = Leakage Amount x Recovery Rate
```

Suggested MVP recovery rate options:

- Conservative: 20%
- Moderate: 35%
- Aggressive: 50%

Default output should use conservative recovery rate to avoid overpromising.

---

# 6. Failure-Mode Classification

The tool should identify the main leakage point and map it to the relevant CFP product.

## 1. Early Interest Leakage

**Detected when:**  
Large drop-off from interested LPs to soft commits.

**Likely failure mode:**  
The deal narrative, targeting, or follow-up strategy is not converting attention into commitment.

**Likely CFP bridge:**

- CRM
- Underwriting
- Investor Portal

**Example output:**

> “Your largest leak is before soft commitment. LPs may be interested, but your process is not creating enough urgency, clarity, or structured follow-up to convert that interest into a commitment.”

---

## 2. Soft Commit Leakage

**Detected when:**  
Large drop-off from soft commits to completed subscription documents.

**Likely failure mode:**  
LPs are verbally interested, but the subscription process creates friction or hesitation.

**Likely CFP bridge:**

- Investor Portal
- CRM

**Example output:**

> “Your largest leak is between verbal commitment and subscription. This is usually where manual documents, unclear next steps, or weak follow-up cause investors to stall.”

---

## 3. Signed but Unfunded Leakage

**Detected when:**  
Large drop-off from completed subscriptions to funded investors.

**Likely failure mode:**  
The final funding step is disconnected from the subscription workflow.

**Likely CFP bridge:**

- Banking
- Investor Portal

**Example output:**

> “Your largest leak is after subscription. Investors are signing, but capital is not moving quickly enough into the account. This usually points to manual funding instructions, weak contribution tracking, or unclear confirmation.”

---

## 4. Pipeline Control Leakage

**Detected when:**  
User has many interested or soft-committed LPs but poor tracking confidence.

**Likely failure mode:**  
The GP does not have a reliable investor pipeline or forecast.

**Likely CFP bridge:**

- CRM

**Example output:**

> “Your raise is vulnerable to pipeline decay. You may be counting soft interest as capital without enough visibility into stage, likelihood, follow-up, and next step.”

---

# 7. Output Report

The output is the product. It should make lost capital visible and emotionally difficult to ignore.

## Required Output Components

### 1. Headline Result

Example:

> **Estimated Soft Commit Leakage: $850,000**
>
> Based on your current funnel, you are losing the most capital between soft commit and completed subscription.

---

### 2. Funnel Breakdown

Show a simple funnel:

- LPs contacted: 180
- Interested LPs: 55
- Soft commits: 28
- Completed subscriptions: 16
- Funded investors: 11

Show conversion rates:

- Interest to soft commit: 51%
- Soft commit to signed: 57%
- Signed to funded: 69%
- Overall interest to funded: 20%

---

### 3. Primary Leakage Point

Example:

> **Primary leak: Soft commit to signed subscription**
>
> LPs are verbally committing, but too many are failing to complete the subscription process. This is one of the most expensive places to lose momentum because the investor has already indicated intent.

---

### 4. Estimated Dollar Impact

Example:

> You have an estimated **$850,000 in soft-commit leakage**.
>
> Recovering even 20% of that leakage would represent approximately **$170,000 in additional funded capital**.

---

### 5. Likely Root Causes

Examples:

1. Subscription process has too many manual steps
2. LP follow-up is not stage-based or automated
3. Signed vs funded status is tracked separately
4. Funding instructions are disconnected from subscription workflow
5. LPs do not receive enough confirmation or momentum after committing

---

### 6. Recommended Fixes

Recommendations should be product-category aligned without sounding like a hard pitch.

Example:

1. **Create one guided investor flow from commitment to funded capital**
   - LPs should not have to bounce between email, PDFs, DocuSign, bank instructions, and manual confirmations.

2. **Track every LP by funnel stage**
   - Interested, soft committed, documents sent, signed, funded, and follow-up due should all be visible in one pipeline.

3. **Connect subscription status to funding status**
   - Avoid treating signed commitments and received capital as separate workflows.

---

### 7. CFP Product Bridge

Example:

> GPs with lower leakage typically connect three systems: investor onboarding, pipeline management, and capital movement. That means the portal, CRM, and funding workflow are not separate processes. They operate as one capital conversion system.

CTA:

> Want to see what this would look like for your raise?

---

# 8. Product Routing Logic

Route users based on their leakage point.

## If largest leak = Interest to Soft Commit

Route to:

- CRM demo
- Underwriting / deal story workflow
- Investor segmentation strategy

CTA:

> See how CFP helps turn investor interest into a managed capital pipeline.

---

## If largest leak = Soft Commit to Signed

Route to:

- Investor Portal demo
- Subscription workflow walkthrough
- E-signature / document flow
- KYC / accreditation workflow

CTA:

> See how CFP helps move LPs from verbal commitment to completed subscription.

---

## If largest leak = Signed to Funded

Route to:

- Banking demo
- Contribution tracking overview
- Capital call workflow
- Funding status dashboard

CTA:

> See how CFP connects signed commitments to trackable capital movement.

---

## If user has weak tracking confidence

Route to:

- CRM demo
- Pipeline template
- Automation workflow

CTA:

> See how CFP helps GPs forecast capital instead of guessing from spreadsheets.

---

# 9. MVP Scope

Do not overbuild this.

## MVP Should Include

- Public landing page
- 8-10 question calculator
- Basic funnel conversion math
- Estimated leakage calculation
- Primary leakage classification
- 3-5 likely root causes
- 3 recommended fixes
- CTA based on leakage point
- Lead capture
- Internal AE alert

## MVP Should Not Include

- Login/account creation
- File uploads
- CRM integrations
- Bank integrations
- AI-generated analysis
- Custom benchmarks
- Full PDF export
- Multi-user collaboration

Those are V2 items.

---

# 10. Lead Capture and Qualification

This calculator should naturally filter for active buyers because casual visitors often will not know their funnel numbers.

## Recommended Form Strategy

Show a partial result instantly, then gate the deeper report.

### Ungated teaser

Show:

- Estimated leakage range
- Largest leakage stage
- One likely root cause

### Gated full report

Require:

- Name
- Email
- Company
- Raise size
- Target close date
- Current platform/tool
- Optional phone number

## Qualification Fields

Capture internally:

- Raise size
- Stage of raise
- Target close date
- Average LP check size
- Current process/tool
- Largest leakage stage
- Estimated leakage amount
- Potential capital recovered

## Lead Priority Logic

### High priority

- Raise size $5M+
- Active raise or closing within 90 days
- Estimated leakage $250K+
- Current process is spreadsheet, manual, DocuSign, or competitor platform
- Largest leak is soft commit to signed or signed to funded

### Medium priority

- Raise size $1M-$5M
- Planning raise within 90+ days
- Leakage exists but not urgent

### Low priority

- No active raise
- No funnel data
- Very small raise
- No target close date

---

# 11. Example Scoring and Leakage Rules

These are directional MVP heuristics.

## Funnel Health Thresholds

### Interest to Soft Commit

- 60%+ = strong
- 40%-59% = moderate
- <40% = weak

### Soft Commit to Signed

- 75%+ = strong
- 50%-74% = moderate
- <50% = weak

### Signed to Funded

- 85%+ = strong
- 65%-84% = moderate
- <65% = weak

### Overall Interest to Funded

- 35%+ = strong
- 20%-34% = moderate
- <20% = weak

Note: These are placeholder benchmarks. They should be replaced as CFP develops actual funnel benchmarks across customers.

## Root Cause Heuristics

### If soft commit to signed is weak and subscription process is manual:

Likely root cause:

> “Manual subscription friction is causing LPs to stall after verbal commitment.”

### If signed to funded is weak and funding is tracked manually:

Likely root cause:

> “Funding completion is disconnected from subscription status.”

### If interest to soft commit is weak and LP tracking is spreadsheet or inbox-based:

Likely root cause:

> “Investor follow-up is not structured enough to convert interest into commitment.”

### If all stages are weak:

Likely root cause:

> “The raise lacks a controlled investor conversion system.”

---

# 12. Technical Scope

## Frontend

- Public landing page
- Multi-step calculator form
- Numerical input fields
- Dropdowns for raise profile and tooling
- Results page with funnel visualization
- CTA module based on leakage point

## Backend

- Calculation service
- Rule-based leakage classification
- Lead capture
- Store responses and results
- AE notification routing
- Admin export or lightweight dashboard

## Data Storage

Capture:

- User/company profile
- Raise profile
- Funnel numbers
- Current tooling/process
- Conversion rates
- Leakage amounts
- Primary leakage point
- Recommended product route
- CTA clicked yes/no
- Demo requested yes/no

---

# 13. Internal AE Workflow

Once a user completes the calculator, AE receives a summary.

## AE Alert Example

**New Soft Commit Leakage Calculator Completed**

- Company: Harbor Ridge Capital
- Raise Size: $12M
- Stage: Soft commits collected
- Target Close: 45 days
- Average Check Size: $75K
- Current Tool: Spreadsheet + DocuSign
- LPs Interested: 60
- Soft Commits: 32
- Completed Subscriptions: 15
- Funded LPs: 9
- Estimated Leakage: $1.7M
- Primary Leak: Soft Commit to Signed
- Suggested AE Angle:
  - Lead with investor onboarding friction
  - Show subscription workflow
  - Show LP stage tracking
  - Show signed vs funded tracking
  - Do not open with fund admin unless they mention post-close complexity

## AE Follow-Up Template

Subject: Your soft commit leakage estimate

Hi [Name],

I looked at your calculator results. The biggest leak is not investor interest - it is the handoff from soft commitment to completed subscription.

That usually means LPs are verbally in, but the process creates too much room for delay: documents, verification, signatures, funding instructions, and follow-up are not moving through one controlled workflow.

For your raise, even recovering a portion of that leakage could be meaningful.

Worth walking through what a cleaner investor flow could look like from soft commit to funded capital.

Best,  
[Name]

---

# 14. Success Metrics

## Product Metrics

- Calculator start rate
- Calculator completion rate
- Drop-off by question
- Full report unlock rate
- Demo request rate
- CTA click rate
- Share/save rate

## Sales Metrics

- Demo conversion rate from completed calculators
- Opportunity creation rate
- Close rate vs normal inbound
- Average ACV by leakage stage
- Sales cycle length vs normal inbound
- Product attach rate for Investor Portal, CRM, and Banking

## Quality Metrics

- % of calculator leads with active raise
- % of leads with target close date under 90 days
- % of leads with estimated leakage above threshold
- AE-rated lead quality
- % of demos where prospect references calculator result

---

# 15. V2 Enhancements

Only after MVP proves conversion.

## V1.5

- PDF report export
- Email report delivery
- Calendar booking embedded in results
- Saved result link
- Funnel visualization improvements
- Basic benchmark snippets

## V2

- Dynamic benchmarks by raise size and deal type
- Integration with CFP CRM for existing users
- Import funnel data from spreadsheets
- Recovery scenario modeling
- Personalized AE talk tracks
- Anonymous aggregate leakage benchmark report

## V3

- Real CFP customer benchmarks
- Cohort-level conversion analysis
- AI-assisted funnel diagnosis
- Predictive close probability
- Capital raise command center preview
- Product-led onboarding into CFP sandbox

---

# 16. Risks and Guardrails

## Risk 1: Numbers feel made up

Mitigation:

- Be transparent about assumptions
- Show formulas
- Let users edit inputs
- Use ranges when confidence is low

## Risk 2: Tool feels too basic

Mitigation:

- Pair simple math with sharp diagnosis
- Show stage-specific root causes
- Tie leakage to process failures, not just percentages

## Risk 3: Low-quality leads

Mitigation:

- Require raise stage, close timeline, and current process before full report
- Prioritize active raises internally
- Do not route low-intent users directly to AE unless score warrants it

## Risk 4: Overpromising capital recovery

Mitigation:

- Use conservative recovery assumptions
- Say “potential recovered capital,” not guaranteed recovered capital
- Position as directional diagnostic

## Risk 5: Funnel numbers are estimates

Mitigation:

- Allow users to mark numbers as estimated
- Show confidence level in output
- Encourage exact data in follow-up consultation

---

# 17. Sample Final Result

## Soft Commit Leakage Calculator Result

**Estimated Soft Commit Leakage: $1,275,000**

Your raise is losing the most capital between **soft commitment and completed subscription**.

## Funnel Breakdown

- LPs contacted: 150
- Interested LPs: 52
- Soft commits: 31
- Completed subscriptions: 14
- Funded investors: 10
- Average expected check size: $75,000

## Conversion Rates

- Interest to soft commit: 60%
- Soft commit to signed: 45%
- Signed to funded: 71%
- Overall interest to funded: 19%

## Primary Diagnosis

Your largest leak is after investors verbally commit but before they complete subscription documents.

This is one of the most expensive places to lose momentum because these LPs have already shown intent. The likely issue is not demand. It is process friction.

## Likely Capital Killers

1. Manual subscription workflow
2. Follow-up not tied to LP stage
3. Signed vs funded status not tracked in one system

## Potential Capital Recovered

Recovering even 20% of your estimated leakage could represent approximately **$255,000 in additional funded capital**.

## Recommended Fixes

1. Move LPs through one guided flow from soft commit to subscription
2. Track every investor by stage, status, and next step
3. Connect signed subscription status to funded capital tracking

## Next Step

See how CFP would structure this raise from soft commitment to funded capital.

---

# 18. Summary

The Soft Commit Leakage Calculator is a fast, high-intent tool that helps GPs quantify where investor interest is failing to convert into funded capital.

It is designed to:

- Attract active fundraisers
- Quantify capital leakage in dollars
- Reveal whether the main issue is pipeline, subscription, or funding friction
- Route prospects to Investor Portal, CRM, and Banking
- Filter out tire kickers with weak or nonexistent funnel data

The strategic goal is simple:

> Make the GP realize they may already have enough investor interest. The real problem is that their raise process is leaking capital before it funds.
