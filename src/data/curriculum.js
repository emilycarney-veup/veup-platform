export const curriculum = [
  {
    id: "module-1",
    title: "Module 1: Selling Foundations & The Initial Journey",
    duration: "45 mins",
    sections: [
      {
        id: "m1-1",
        title: "Establishing Stakeholders & VeUP Fundamentals",
        content: "<h3>Where Cloud Innovation Meets Commercial Success.</h3><p>VeUP removes friction that slows down innovation, aligning technical speed with commercial outcomes. From launching GenAI pilots in a week to deploying full DevOps teams on demand, our goal is to accelerate your AWS journey seamlessly.</p><p>Before we dive into the technicalities of the AWS Marketplace, the very first step in our partnership is achieving clear alignment on your internal stakeholders. Success on AWS requires buy-in from multiple departments. Identifying who will champion the project, who will handle the technical implementation, and who will drive sales is critical. Based on our internal analysis of top-performing ISVs, we recommend defining at least three key roles from day one. Without these clearly defined, Marketplace initiatives easily stall across departments when execution friction arises.</p><ul><li><strong>Executive Sponsor:</strong> Typically a VP of Sales or CEO. This individual owns the P&L of the AWS relationship and drives top-down alignment.</li><li><strong>Project Lead:</strong> The operational heartbeat. This is the individual navigating Partner Central daily, submitting ACE opportunities, and tracking metrics.</li><li><strong>Technical Lead:</strong> Your cloud architect who is deeply responsible for executing the Foundational Technical Review (FTR) and ensuring SaaS policies are adhered to.</li></ul><p>The speed at which you progress through the APN tiers is directly correlated to how well these three individuals communicate.</p><div class=\"activity-box\"><h4>Activity: Define Your Stakeholders</h4><p>Take 10 minutes to map out your primary team. Ensure you have explicitly documented the names and contact information for your Executive Sponsor, Project Lead, and Technical Lead, and shared this with your VeUP representative.</p></div>"
      },
      {
        id: "m1-2",
        title: "Preparing for the Marketplace Operations",
        content: "<h3>Mastering the Rules of Engagement</h3><p>Listing your software requires a rigorous understanding of the foundational mechanics. AWS provides extensive operational guidance detailing precisely how to categorize, describe, and architect your product for success. You cannot simply upload code; you must prepare comprehensive presentation materials, articulate a clear value proposition, and establish specific deployment methods.</p><p>The initial phase is heavily dependent on clearing strict legal and financial hurdles. Your business entity must be registered in an AWS-supported jurisdiction, and you must hold an active US bank account to receive disbursements. For international sellers, platforms like Hyperwallet become mandatory components to ensure reliable payment routing.</p><p style=\"margin-bottom: 24px\"><strong>VeUP Sell Diagnostics strongly emphasize that failing to configure tax profiles and W-9 routing correctly is the number one reason listings are stalled during the final approval phase.</strong></p><p>Once your banking is established, you must navigate the nuances of SaaS Policy formatting. Recent shifts in billing telemetry require that you strictly define tenant isolation protocols. You must decide if you are deploying via AMI, Containers, or a fully-metered SaaS delivery model. Each of these architectural choices dictates entirely different pricing vectors on your public listing.</p>"
      },
      {
        id: "m1-3",
        title: "Creating Your Listing & Supported Regions",
        content: "<h3>Executing the Listing Process</h3><p>Creating your listing requires precise orchestration. The very first step is ensuring you form your business entity in a supported jurisdiction. AWS strictly manages which countries are eligible to register as sellers. If your company is headquartered outside of a supported region, you will be blocked from receiving disbursements.</p><p>Once jurisdiction is confirmed, you must officially register as a seller through the AWS Marketplace Management Portal. During this phase, you must definitively select your currency and disbursement methods. Selecting Hyperwallet is standard for managing complex global currency payouts, while domestic entities typically wire directly to US bank accounts.</p><p>After registration, you will build the actual listing page. This requires preparing architectural diagrams, establishing transparent public pricing dimensions, and uploading specific promotional videos. Do not rush this phase—if your metadata or policies violate AWS guidelines, your listing will be repeatedly rejected by the validation team.</p>"
      },
      {
        id: "m1-4",
        title: "Private Offers and CPPOs",
        content: "<h3>Scaling Through Advanced Pricing Models</h3><p>Once your standard public listing is live, your focus should shift immediately to Private Offers. Public, click-to-subscribe pricing is effective for Product-Led Growth, but the vast majority of enterprise software transactions occur through highly negotiated, custom contracts.</p><p>A Private Offer allows you to negotiate custom pricing, specific legal terms (Custom EULAs), and flexible payment schedules. AWS charges a specialized tier fee structure for Private Offers, heavily incentivizing you to bring large, multi-year contracts onto the platform so the end-customer can burn down their Enterprise Discount Program (EDP) commitments.</p><p>As you mature, you will inevitably unlock Channel Partner Private Offers (CPPOs). Under a CPPO framework, you (the ISV) essentially act as a wholesaler. You grant discounted, wholesale pricing to a specialized consulting partner (a System Integrator or Managed Service Provider). That partner then marks up the software and sells it to the end customer via their own customized Private Offer.</p><p>Embracing the CPPO strategy radically scales your distribution footprint. Instead of forcing your Account Executives to hunt for net-new logos indefinitely, you leverage the massive installed base of SI networks who already own the enterprise relationship.</p><div class=\"activity-box\"><h4>Activity: Reseller Margin Strategy</h4><p>Analyze your current direct-to-consumer software pricing. If your software costs $10,000/year, what exact percentage of wholesale discount would you offer to a Channel Partner under a CPPO model? Establish a baseline 15-20% margin framework today and review it with your Finance team.</p></div>"
      }
    ]
  },
  {
    id: "module-2",
    title: "Module 2: Portals, Tiers, and Technical Mastery",
    duration: "65 mins",
    sections: [
      {
        id: "m2-1",
        title: "AWS Stakeholder Management",
        content: "<h3>Navigating the AWS Organization</h3><p>The AWS organization is famously massive and uniquely structured. Before executing any partnership motions via Partner Central, you must master AWS Stakeholder Management. Knowing exactly <em>who</em> a customer or an ISV should reach out to transforms you from an outsider into a strategic operator.</p><p>You must map your internal sales team to the following distinct AWS roles to ensure flawless co-selling:</p><ul><li><strong>Partner Development Manager (PDM):</strong> Your primary strategic advisor. The PDM owns the AWS relationship with VeUP and your ISV, aggressively helping you navigate APN tiers, unlock funding, and align GTM capabilities.</li><li><strong>Partner Success Manager (PSM):</strong> The operational executor. The PSM ensures your technical certifications, Marketplace listings, and FTR workflows are running without friction.</li><li><strong>Account Manager (AM):</strong> The AWS sales representative assigned directly to the end-consumer (your prospect). The AM owns the customer's AWS relationship and their Enterprise Discount Program (EDP) consumption. <em>This is who your Account Executives must align with.</em></li><li><strong>ISV Success Manager (ISM):</strong> Specialized resources that connect highly mature ISVs directly to massive enterprise AM networks.</li></ul><p>As you build Joint Business Plans, explicitly naming which local AMs you are targeting is the only way your PDM can reliably assist you.</p>"
      },
      {
        id: "m2-2",
        title: "Tier Progression & The FTR",
        content: "<h3>Growing in the AWS Partner Network</h3><p>Your journey inside the APN (AWS Partner Network) is defined by tiers: Enrolled, Validated, and Differentiated. To achieve maximum visibility and secure the highest levels of Marketing Development Funds (MDF), you must systematically upgrade your tier.</p><p>The ultimate gateway to becoming a 'Validated Partner' is passing the Foundational Technical Review (FTR). The FTR is a strict audit of your SaaS architecture, entirely measured against the AWS Well-Architected Framework (focusing on Security, Reliability, and Operational Excellence).</p><p>To progress successfully, you absolutely MUST organize your engineering team to run an exhaustive Self-Assessment using the official Excel rubrics prior to submission. If you fail the internal assessment, AWS provides expedited FTR pathways and Solution Creation workshops. VeUP specializes in accelerating this phase, utilizing automated scanning tools to map your infrastructure against the FTR rubric in hours rather than months.</p><div class=\"activity-box\"><h4>Activity: Execute the FTR Self-Assessment</h4><p>Download the FTR Self-Assessment rubric from the Resources tab. Mandate that your Technical Lead completes the Security Pillar row-by-row grading by next Friday, highlighting any immediate red flags regarding data encryption at rest.</p></div>"
      },
      {
        id: "m2-3",
        title: "Certifications and Competencies",
        content: "<h3>Proving Deep Technical Expertise</h3><p>Achieving 'Validated' capabilities via the FTR is simply the baseline. The ultimate goal to command maximum respect on the AWS Marketplace is achieving a specialized Competency (reaching the 'Differentiated' tier).</p><p>Competencies (e.g., Healthcare Competency, Data & Analytics Competency, Security Competency) reflect immense product maturity and proven historical success in specific vertical constraints. Achieving a Competency fundamentally alters the AWS relationship—granting you VIP placement in the AWS Partner Solutions Finder, unlocking massive tiers of marketing funds, and providing direct introductions to specialized AWS sales teams.</p><p>Obtaining a Competency requires rigorous proof. AWS will demand extensive technical whitepapers, architectural diagrams, and multiple verified case studies showing massive scale.</p><p>To prepare your organization for this tier leap, your internal engineering team must actively utilize training guides to continuously upskill. Having engineers pass official AWS Certifications (like the Solutions Architect Professional exam) is a hard prerequisite for most advanced tier progressions.</p>"
      }
    ]
  },
  {
    id: "module-3",
    title: "Module 3: Sales Enablement & GTM Execution",
    duration: "65 mins",
    sections: [
      {
        id: "m3-1",
        title: "The Joint Value Proposition",
        content: "<h3>The Foundation of AWS Alignment</h3><p>A Joint Value Proposition (JVP) represents the core mathematical synergy between your software and the AWS cloud. Without a clearly defined JVP, AWS Account Managers will flatly ignore your deal submissions because they cannot justify why their client needs it.</p><p>Your product cannot just \"fix an accounting problem.\" Your product must \"fix an accounting problem by utilizing scalable Amazon EC2 clusters and Amazon Bedrock, drastically burning down the client's current AWS spend commit.\" By directly linking your features to underlying AWS services, you validate your existence on the Marketplace.</p><p>A phenomenally successful strategy for engineering this narrative is the \"Working Backwards Workshop.\" Modeled after Amazon's internal product development philosophy, this workshop forces you to start with the customer's ultimate pain point and write a mock Press Release describing the outcome before you build any product marketing.</p>"
      },
      {
        id: "m3-2",
        title: "The Better Together Story",
        content: "<h3>Crafting the 'Why Us, Why AWS' Narrative</h3><p>While the Joint Value Proposition maps the technical integration, the Better Together Story is your explicit, outbound sales narrative. It is entirely mandatory for Co-Selling. The Better Together Story answers the fundamental question: <em>How does the end-customer experience an exponential leap in value specifically because our software is hosted on AWS?</em></p><p>The narrative must aggressively hit three pillars:</p><ol><li><strong>Agility:</strong> How the AWS backbone ensures instant deployment without legacy hardware provisioning.</li><li><strong>Security:</strong> How inheriting AWS's shared responsibility model protects the client's data natively.</li><li><strong>Procurement Friction:</strong> How purchasing your software via the AWS Marketplace bypasses 9-to-12 month legacy vendor onboarding timelines.</li></ol><div class=\"activity-box\"><h4>Activity: Develop the Better Together Story</h4><p>Download the \"Creating your Better Together Message\" spreadsheet from the Resources tab. Complete all fields to ensure your sales team knows exactly how to pitch your software exclusively through the lens of AWS benefits.</p></div>"
      },
      {
        id: "m3-3",
        title: "Equipping the Sales Team",
        content: "<h3>Battlecards and Objection Handling</h3><p>Your Account Executives need highly specialized cheat sheets to survive live calls. The most powerful tool in your arsenal is the Battlecard. A comprehensive Battlecard must immediately highlight your Better Together story, identify the exact customer pain point, and map out the competitive landscape.</p><p>Crucially, the Battlecard must provide airtight rebuttals for objections regarding cloud integration or cost. When a customer asks, \"Why wouldn't I just build this using native AWS tools?\", your AE must seamlessly respond with a pre-approved \"Build vs. Buy\" ROI calculation.</p><p>In highly specific verticals—like End User Messaging or Financial Services—these toolkits must become intensely specialized, mapping out exact customer journey flows and regulatory implementation hurdles. Providing your Sales team with Use Case Templates ensures they can pivot conversations dynamically based on the client's industry.</p>"
      },
      {
        id: "m3-4",
        title: "Success Stories: QBRs and Vignettes",
        content: "<h3>Establishing Irrefutable Proof</h3><p>When you secure a significant win on the platform, you must broadcast it effectively. AWS Sellers rely entirely on empirical evidence. Transforming a happy deployment into a compelling Customer Vignette (a 1-slide summary highlighting the Challenge, the Solution, and the AWS-specific Outcomes) guarantees that AWS sales teams confidently understand the value you deliver.</p><p>Furthermore, to maintain long-term relationships post-sale, you must establish rigorous Account Management practices. Conducting deep Quarterly Business Reviews (QBRs) is the ultimate retention tool. During a QBR, you must present the customer with hard data demonstrating how your software running on their AWS footprint has accelerated their business.</p>"
      }
    ]
  },
  {
    id: "module-4",
    title: "Module 4: Mastering Co-Selling & The COSS Framework",
    duration: "75 mins",
    sections: [
      {
        id: "m4-1",
        title: "The C-Suite Messaging Blueprint",
        content: "<h3>Speaking the Right Language</h3><p>When selling into enterprise accounts via the Marketplace, your marketing voice must radically adapt depending on who holds the budget. You cannot use the same pitch for an engineer as you do for a board member. You must master distinct persona targeting based on the official C-Suite Messaging Guidelines:</p><ul><li><strong>The CMO (Chief Marketing Officer):</strong> Cares profoundly about customer acquisition speed, brand differentiation, and hyper-personalization engines. Frame your solution as an engine that accelerates time-to-market.</li><li><strong>The CSO (Chief Sales Officer):</strong> Cares purely about pipeline velocity and win-rate. Frame your tool as a revenue accelerator. Explicitly discuss how purchasing your software via the AWS Marketplace bypasses months of procurement friction and helps them burn down their mandatory AWS EDP commitments.</li><li><strong>The CTO/CTrO (Chief Transformation Officer):</strong> Cares deeply about averting technical debt and mitigating security risks. Highlight your FTR certification, your architectural security, and automated elasticity.</li></ul>"
      },
      {
        id: "m4-2",
        title: "The COSS Framework",
        content: "<h3>Operationalizing the Co-Sell Motion</h3><p>To successfully drive massive pipeline alongside AWS reps, you must adopt the Cloud Operator Sales Strategy (COSS) Framework. As outlined extensively in your resources (<em>How AWS Marketplace Sellers use the COSS Strategy</em>), COSS fundamentally shifts how you generate pipeline. Rather than selling \"at\" AWS, you align your specific sales plays tightly with AWS Account Managers from the very beginning of the quarter.</p><p>Execution begins with building documented Joint Business Plans (JBPs) with your prime AWS counterparts. This plan legally maps out mutual revenue targets, shared marketing events, and agreed-upon KPIs for the year.</p><p>Once the JBP is in place, you execute specific \"Sales Plays\"—targeted, highly choreographed outbound campaigns focused on specific verticals (e.g., targeting mid-market retail companies pushing for digital modernization). You track the success of these plays using meticulous Partner Scorecard management, ensuring you always have hard data to prove you are injecting leads into the AWS ecosystem.</p><div class=\"activity-box\"><h4>Activity: Build a Joint Business Plan</h4><p>Download the Joint Business Plan template. Draft a mock 12-month plan outlining an initiative to capture 5 massive enterprise deals alongside an AWS Account Manager, highlighting specific marketing events you would co-host.</p></div>"
      },
      {
        id: "m4-3",
        title: "Managed Outbound Campaigns & Lead Enrichment",
        content: "<h3>Scaling Pipeline on Your Behalf</h3><p>Recognizing the immense operational lift required to execute a COSS Strategy effectively, VeUP proactively works with customers to develop and execute managed outbound campaigns on their behalf.</p><p>To ensure campaigns convert, VeUP utilizes elite data enrichment platforms, such as <strong>Clay</strong>, to massively enrich standard target lists. By using Clay, we extract highly specific, hyper-personalized data points on your target accounts (such as whether they recently announced a cloud migration in a press release, or if they just hired a new VP of Engineering).</p><p>We then utilize this enriched data to draft wildly personalized, automated outbound sequences that explicitly highlight your Better Together Story and directly target the C-Suite personas. This managed outbound service effectively turns VeUP into an extension of your own SDR team, drastically accelerating meetings booked while mapping seamlessly back into your ACE Pipeline.</p>"
      },
      {
        id: "m4-4",
        title: "The ACE Pipeline Dynamics",
        content: "<h3>Opportunity Submission Mastery</h3><p>The APN Customer Engagements (ACE) platform is the heartbeat of your collaborative deal-making. However, submitting an opportunity blindly into ACE guarantees swift rejection by the AWS validation team.</p><p>Submitting opportunities successfully requires strict adherence to submission cheat sheets and ISV Co-Sell checklists. You MUST ensure three critical elements before hitting submit:</p><ol><li><strong>Customer Consent:</strong> You must explicitly have the customer's legal permission to share their operational data with AWS reps.</li><li><strong>Defined Architecture:</strong> The AWS AM doesn't just want to sell your software; they need to know explicitly what underlying AWS services (Bedrock, EC2, S3) will be activated when your software deploys.</li><li><strong>Clear AWS Value:</strong> Does this deal accelerate a massive cloud migration, or is it simply a small software purchase?</li></ol><p>Opportunities that lack this clarity are flushed from the ACE pipeline immediately. Maintaining pristine pipeline hygiene guarantees that AWS reps trust the leads you send them.</p>"
      }
    ]
  },
  {
    id: "module-5",
    title: "Module 5: Global Passport Program",
    duration: "40 mins",
    sections: [
      {
        id: "m5-1",
        title: "Navigating the Global Passport Program",
        content: "<h3>Expanding Without Borders</h3><p>The VeUP Global Passport Program is a hyper-specialized initiative designed to help mature ISVs expand their software footprint across completely new, international regions with frictionless velocity.</p><p>Historically, scaling a SaaS offering into Europe or the Middle East required immense legal overhead, localized currency restructuring, and dedicated tax consultation. The Global Passport Program dramatically reduces these barriers by leveraging VeUP's expansive AWS footprint and local regulatory expertise.</p><p>Through the program, participating ISVs gain immediate access to localized Go-To-Market strategies, bespoke regional marketing plans, and direct alignment with international AWS Account Managers who are eager to introduce highly-validated US/European tech stacks to their local markets. By leaning heavily on the AWS Marketplace to handle international billing, and VeUP to handle the cultural and strategic GTM bridge, ISVs essentially clone their domestic success globally in a fraction of the time.</p>"
      },
      {
        id: "m5-2",
        title: "Global Market Opportunities",
        content: "<h3>Understanding Global Market Opportunities</h3><p>Expanding globally requires a strong market research framework. You must analyze market size and growth projections by region, competitive landscape analysis and positioning gaps, customer segment analysis, regulatory environments, and local partner ecosystems. When considering AWS regional dynamics, take into account AWS service availability, local partner community strength, cultural preferences, and the AWS event calendar.</p>"
      },
      {
        id: "m5-3",
        title: "Adapting Your Message & Compliance",
        content: "<h3>Localizing Content and Navigating Compliance</h3><p>Successful expansion requires rigorous content localization. This includes language translation, local currency pricing, regional case studies, and compliance alignment. Your brand positioning must also adapt to regional value propositions and cultural sensitivities.</p><p>You must navigate critical global compliance areas: Data Privacy (GDPR, CCPA, PIPEDA, LGPD), Industry-Specific regulations (HIPAA, PCI DSS, SOX), Export Controls, Business Registration, and Professional Services licensing. Leverage AWS compliance frameworks, their shared responsibility model, and compliance automation tools to implement a solid global compliance strategy.</p>"
      },
      {
        id: "m5-4",
        title: "Global Customer Profiles",
        content: "<h3>Understanding Regional Buying Behaviors</h3><p>Understanding regional business drivers, decision-making processes, cultural communication preferences, and budget cycles is essential. Key regional differences include:</p><ul><li><strong>North America:</strong> Fast decision-making, self-service preference, direct sales approach.</li><li><strong>Europe:</strong> Compliance-focused, relationship-driven, longer sales cycles.</li><li><strong>Asia Pacific:</strong> Consensus-building, relationship-first, partner-mediated sales.</li><li><strong>Latin America:</strong> Price-sensitive, local presence valued, channel-partner dependent.</li></ul><p>Adapt your approach by adjusting sales cycle expectations, customizing marketing messages, and developing region-specific pricing and packaging.</p>"
      }
    ]
  },
  {
    id: "module-6",
    title: "Module 6: Comprehensive AWS Funding Programs",
    duration: "65 mins",
    sections: [
      {
        id: "m6-1",
        title: "Navigating the APFP",
        content: "<h3>Accessing Marketing Development Funds</h3><p>The AWS Partner Funding Portal (APFP) is the gateway to unlocking massive financial support. AWS heavily subsidizes partner growth—if you know how to work the system. Mastering the submission and tracking rules is essential.</p><p>The fundamental rule of AWS Funding is: <strong>Claims must always be pre-approved.</strong> You cannot launch a $50,000 marketing campaign and ask AWS for reimbursement retroactively.</p><p>When applying for Marketing Development Funds (MDF), you must provide an explicit, undeniable ROI matrix. AWS wants to see exactly how your webinar or roadshow will generate Marketing Qualified Leads (MQLs) that ultimately push high-value opportunities back into the ACE pipeline.</p><p>Finally, execution requires meticulous record-keeping. Failure to upload the correct Proof of Execution (PoE) documents within the tight AWS deadlines will result in absolute funding forfeiture.</p>"
      },
      {
        id: "m6-2",
        title: "Diverse Funding Programs & PoC Credits",
        content: "<h3>Expanding the Financial Ecosystem</h3><p>Beyond standard marketing funds, AWS provides exceptionally deep programmatic funding to offset the immense risk of enterprise innovation. Ensuring you attach the proper funding mechanism to your deal is a massive closing lever.</p><ul><li><strong>Adoption Accelerator & PoC Funding:</strong> This fund specifically provides AWS credits to your end-customers to offset the compute costs incurred while testing your software during a Proof of Concept. Subsidizing the pilot phase completely eliminates financial friction for hesitant enterprises.</li><li><strong>Migration Acceleration Program (MAP):</strong> For massive enterprise engagements where a client is literally migrating entirely to the cloud simply to use your software, MAP provides substantial financial credits and consulting investments to offset the heavy lifting of the migration transition.</li><li><strong>ISV Accelerate:</strong> A premier co-sell program that provides lucrative direct financial incentives to the internal AWS sales teams when they successfully close an opportunity involving your highly-validated software.</li><li><strong>PLG Ready Workshops & Innovation Sandboxes:</strong> AWS provides explicit funding allocations to help you refine your Product-Led Growth funnels and build sandbox environments to experiment with new cloud integrations safely.</li></ul><div class=\"activity-box\"><h4>Activity: Funding Presentation Integration</h4><p>Re-read your initial First Call Deck. Ensure you contain exactly one slide highlighting how your status as an AWS partner will financially benefit the client through subsidized deployment phases or PoC credits. If you don't have this slide, draft it now using the Adoption Accelerator First Call Deck template.</p></div>"
      },
      {
        id: "m6-3",
        title: "Achieving Differentiated Partner Status",
        content: "<h3>Competencies and Universal Benefits</h3><p>Achieving Differentiated Partner Status involves selecting a competency based on core solution capabilities, market opportunity, and technical expertise. Categories include Industry, Technology, and Solution Competencies. The achievement process requires a gap analysis, developing 2+ public references, technical validation, and an AWS review.</p><p>Once achieved, benefits include priority ranking in AWS Partner Solutions Finder, Marketing Development Funds (MDF) access, and AWS sales team incentive alignment. All partners receive universal benefits like $3,500 annually in AWS Promotional Credits (upon paying the APN fee) and automatic application to eligible AWS services.</p>"
      },
      {
        id: "m6-4",
        title: "Maximizing ISV Accelerate",
        content: "<h3>The ISV Accelerate Program</h3><p>ISV Accelerate is a global co-sell initiative designed to drive new business and accelerate sales cycles through AWS Account Manager incentives. As of January 2025, SaaS Revenue Recognition has expanded to all qualifying ISV Accelerate partners, including eligible startups. Eligibility requires Validated or Differentiated Path status, FTR completion, ACE program eligibility, a general availability listing, and a minimum of 15 qualified ACE opportunities annually along with 5 launched opportunities.</p><p>Key benefits include enhanced visibility, sales cash incentives for AWS AMs, discounted Marketplace fees, dedicated Slack channels, and AI-powered partner recommendations.</p>"
      },
      {
        id: "m6-5",
        title: "Successful Funding & Seller Prime",
        content: "<h3>Funding Strategy and AWS Marketplace Seller Prime</h3><p>When executing your funding strategy, align requests with business objectives, integrate campaigns, and track ROI. Successful funding applications require a clear business case, quantified impact, a demonstration of AWS service utilization, and strong customer validation (reference letters).</p><p>Additionally, <strong>AWS Marketplace Seller Prime</strong> helps ISVs activate Product-Led Growth (PLG) on AWS Marketplace. Benefiting ISVs with self-service products generating 100+ unique visitors per month, Seller Prime offers PLG GTM kits, up to $15k in AWS credits for qualified SaaS listings, and up to $40k in MDF after PLG Ready validation. Driving organic and ISV-led website traffic directly to your AWS Marketplace listing is a critical first step to maximize conversion.</p>"
      }
    ]
  },
  {
    id: "module-7",
    title: "Module 7: Product-Led Growth (PLG) Mechanics",
    duration: "55 mins",
    sections: [
      {
        id: "m7-1",
        title: "Engineering the PLG Motion",
        content: "<h3>Frictionless Customer Acquisition</h3><p>Transforming your SaaS business through Product-Led Growth (PLG) demands a monumental shift in philosophy: your software application must become the primary driver of acquisition, retention, and expansion. On the AWS Marketplace, over 90% of transactions are entirely self-service.</p><p>If your product requires lengthy discovery calls, forceful data-gathering forms, and manual deployment scripts, you will completely fail to capture the massive PLG audience browsing the Marketplace catalogs.</p><p>A mature PLG strategy dictates that you offer robust free trials (usually 7 to 30 days) combined with frictionless onboarding flows. Furthermore, data strongly indicates that transitioning from rigid Tiered pricing to consumption-based 'Pay-As-You-Go' pricing models yields a 3x higher conversion rate. Consumption pricing perfectly aligns the customer's billing with their actual value realization.</p>"
      },
      {
        id: "m7-2",
        title: "Stages of PLG Development",
        content: "<h3>Maturing the Product Motion</h3><p>Transitioning to a PLG model does not happen overnight. The ecosystem fundamentally identifies three stages of PLG Development that ISVs must progress through:</p><ol><li><strong>Stage 1 - Discovery & Trial:</strong> The rudimentary stage where the product can be easily investigated online. The ISV offers generic 14-day free trials, but user conversion still heavily relies on a Sales rep calling the prospect back.</li><li><strong>Stage 2 - Frictionless Onboarding:</strong> The product implements fully self-serve onboarding. Users can connect their AWS environments, ingest initial data sets, and experience a massive \"Aha!\" moment (e.g., seeing a live dashboard) in less than 5 minutes, completely independent of human contact.</li><li><strong>Stage 3 - Viral Expansion:</strong> The absolute apex of PLG. The software inherently incentivizes users to invite other colleagues or deploy the software into broader AWS Organizational Units. Upselling happens natively within the application via automated \"Upgrade to Enterprise\" prompts tied directly back to AWS Marketplace Private Offers.</li></ol>"
      },
      {
        id: "m7-3",
        title: "The PLG Self-Assessment",
        content: "<h3>Auditing Your Funnel</h3><p>Before launching massive Marketplace campaigns, you must rigorously stress-test your existing application. The PLG Self-Assessment is a diagnostic tool designed to brutally expose UX/UI bottlenecks that currently bleed out potential customers.</p><p>The assessment forces you to grade your application on Time-to-Value (TTV), the clarity of your empty states (what the app looks like before data is ingested), and exactly how many manual clicks it takes to establish a working integration with AWS.</p><div class=\"activity-box\"><h4>Activity: Execute the PLG Self-Assessment Preview</h4><p>Sit down with your Head of Product and execute a mock onboarding. From the moment you click 'Subscribe' on your Marketplace listing, how many seconds does it take to see tangible value in your application? If the answer is longer than 5 minutes, your PLG motion is actively failing. Document exactly where the user stalls.</p></div>"
      },
      {
        id: "m7-4",
        title: "Buy with AWS Guidelines",
        content: "<h3>Off-Platform Conversion Tactics</h3><p>The ultimate flex of a mature PLG motion is realizing you don't necessarily have to send your users away to the AWS Marketplace portal to find you. Instead, high-performing ISVs integrate the transaction engine directly onto their own pricing pages.</p><p>By adhering to the strict 'Buy with AWS' guidelines and onboarding protocols, you can embed AWS checkout methodologies directly into your web interface. This ensures that when a user clicks 'Subscribe' on your site, they are seamlessly authenticated through their existing AWS billing console.</p><p>This guarantees an immediate, frictionless checkout experience that automatically executes an EDP burndown for the client without them ever leaving your website. Utilizing Deployed on AWS Promotional Guidance effectively broadcasts these capabilities across your marketing surface area, reinforcing your deep cloud native integration.</p>"
      }
    ]
  },
  {
    id: "module-8",
    title: "Module 8: Telemetry & Dashboards",
    duration: "40 mins",
    sections: [
      {
        id: "m8-1",
        title: "Marketplace Analytics Mastery",
        content: "<h3>Tracking the Seller Reports</h3><p>Success on the Marketplace is only scalable if it is meticulously tracked. The AWS Marketplace Management Portal provides massive data lakes detailing every micro-interaction regarding your performance. However, staring at overwhelming spreadsheets is useless without comprehension.</p><p>You must dive deep into understanding the nuances between Daily Business Reports (which track live billing telemetry and disbursements) versus Customer Subscriber Reports (which map demographics and geographic footprint). Understanding precisely how your Seller Reports update ensures you accurately calculate your monthly recurring revenue (MRR) without factoring in pending disbursements incorrectly.</p><p>You must establish a strict weekly cadence to cross-reference multiple Seller dashboards. For example, you must compare active trial sign-ups against raw MRR conversions. If a joint MDF marketing campaign generated a massive spike in unique page views, but that spike failed to reflect in your Subscriber reports, you have an unpatched conversion leak in your UI/UX interface. Analytics allow you to plug these leaks permanently.</p><div class=\"activity-box\"><h4>Activity: KPI Data Definition</h4><p>Establish the three most important KPIs your team will track over the next 6 months using the Seller Reports. Will you track the velocity of Trial-to-Paid conversions, the average deal size of CPPO transactions, or the churn rate of Pay-As-You-Go clients? Document these KPIs and review them weekly.</p></div>"
      }
    ]
  }
];

export const resources = [
  // Module 1 Core
  { id: 1, title: "Private Offers Reference Guide", type: "Word", size: "17 KB", category: "Marketplace Operations" },
  { id: 2, title: "AWS Marketplace Guide", type: "Word", size: "15 KB", category: "Marketplace Operations" },
  { id: 3, title: "Getting Listed on AWS Marketplace", type: "Word", size: "2.2 MB", category: "Marketplace Operations" },
  { id: 4, title: "Guide to Completing Payment Information", type: "Word", size: "52 KB", category: "Marketplace Operations" },
  { id: 5, title: "Marketplace HyperWallet Setup", type: "PDF", size: "1.1 MB", category: "Marketplace Operations" },
  { id: 6, title: "Marketplace Program Listing Guide", type: "Word", size: "15 KB", category: "Marketplace Operations" },
  { id: 7, title: "Register as Seller in AWS Marketplace", type: "PDF", size: "1.8 MB", category: "Marketplace Operations" },
  { id: 8, title: "Embrace Channel Partner Private Offers", type: "PDF", size: "1.7 MB", category: "Marketplace Operations" },
  { id: 9, title: "AWS Seller FAQ", type: "PDF", size: "874 KB", category: "Marketplace Operations" },
  { id: 10, title: "AWS CPPO Resource", type: "PDF", size: "186 KB", category: "Marketplace Operations" },
  { id: 11, title: "Marketplace Study Guide", type: "Word", size: "8.4 MB", category: "Marketplace Operations" },

  // Module 2 Core
  { id: 12, title: "FTR Exercise", type: "Excel", size: "13 KB", category: "Technical & Review Resources" },
  { id: 13, title: "Partner Central Solution Creation Guide", type: "Word", size: "17 KB", category: "Technical & Review Resources" },
  { id: 14, title: "Partner Case Study Submission Guide", type: "Word", size: "16 KB", category: "Technical & Review Resources" },
  { id: 15, title: "AWS Account and Partner Central Linking", type: "Word", size: "16 KB", category: "Technical & Review Resources" },
  { id: 16, title: "Certifications and Training Guide", type: "Word", size: "19 KB", category: "Technical & Review Resources" },
  { id: 17, title: "Partner Scorecard Management", type: "Word", size: "18 KB", category: "Technical & Review Resources" },
  { id: 18, title: "APN Program Fees and Payment", type: "Word", size: "19 KB", category: "Technical & Review Resources" },
  { id: 19, title: "Service Tiers and Requirements", type: "Word", size: "19 KB", category: "Technical & Review Resources" },
  { id: 20, title: "Partner Paths and Progression Guide", type: "Word", size: "19 KB", category: "Technical & Review Resources" },
  { id: 21, title: "APN Getting Started", type: "Word", size: "17 KB", category: "Technical & Review Resources" },
  { id: 22, title: "Locating AWS Payee Central ID", type: "Word", size: "15 KB", category: "Technical & Review Resources" },
  { id: 23, title: "AWS FTR Scope Overview", type: "Word", size: "14 KB", category: "Technical & Review Resources" },
  { id: 24, title: "AWS Partner Central User Guide", type: "PDF", size: "177 KB", category: "Technical & Review Resources" },
  { id: 25, title: "SaaS Solution Offer Workshop Template", type: "Word", size: "176 KB", category: "Technical & Review Resources" },
  { id: 26, title: "Services Offering Solution Workshop Template", type: "Word", size: "175 KB", category: "Technical & Review Resources" },
  { id: 27, title: "SaaS Builder Toolkit Accelerates Listing", type: "PDF", size: "223 KB", category: "Technical & Review Resources" },
  { id: 28, title: "How-to Scorecard", type: "PDF", size: "20 KB", category: "Technical & Review Resources" },
  { id: 29, title: "Expedited FTR Video Walk through", type: "PDF", size: "88 KB", category: "Technical & Review Resources" },
  { id: 30, title: "Building an Architectural Diagram", type: "PDF", size: "84 KB", category: "Technical & Review Resources" },
  { id: 31, title: "FTR Self-Assessment Breakdown", type: "PDF", size: "149 KB", category: "Technical & Review Resources" },
  { id: 32, title: "Demystifying the AWS Foundational Technical Review", type: "PDF", size: "1.2 MB", category: "Technical & Review Resources" },
  { id: 33, title: "Well-Architected Software Partner Self Assessment", type: "Excel", size: "171 KB", category: "Technical & Review Resources" },
  { id: 34, title: "AWS Partner Hosted Solution FTR Calibration Guide", type: "PDF", size: "475 KB", category: "Technical & Review Resources" },
  { id: 35, title: "AWS Built-in Competency Message Map", type: "PDF", size: "295 KB", category: "Technical & Review Resources" },
  { id: 36, title: "ACE Pipeline Manager User Guide", type: "PDF", size: "6.5 MB", category: "Technical & Review Resources" },
  { id: 37, title: "APN 101 Presentation", type: "PPTX", size: "8.3 MB", category: "Technical & Review Resources" },

  // Module 3 Core
  { id: 81, title: "Creating your Better Together message", type: "Excel", size: "32 KB", category: "GTM Enablement & Strategy" },
  { id: 38, title: "AWS Better Together Story Template", type: "PDF", size: "404 KB", category: "GTM Enablement & Strategy" },
  { id: 39, title: "APN Complete Guide", type: "Word", size: "29 KB", category: "GTM Enablement & Strategy" },
  { id: 40, title: "APN Customer Engagement Guide", type: "PDF", size: "6.5 MB", category: "GTM Enablement & Strategy" },
  { id: 41, title: "AWS Building a Joint Value Proposition Example", type: "PDF", size: "245 KB", category: "GTM Enablement & Strategy" },
  { id: 42, title: "Press Release and FAQ Template", type: "Word", size: "2.7 MB", category: "GTM Enablement & Strategy" },
  { id: 43, title: "QBR Long Template", type: "Word", size: "16 KB", category: "GTM Enablement & Strategy" },
  { id: 44, title: "QBR Deck Structure", type: "Word", size: "2.6 MB", category: "GTM Enablement & Strategy" },
  { id: 45, title: "QBR Template Review", type: "Word", size: "2.7 MB", category: "GTM Enablement & Strategy" },
  { id: 46, title: "Working Backwards Workshop", type: "Word", size: "250 KB", category: "GTM Enablement & Strategy" },
  { id: 47, title: "Use Case Template", type: "Word", size: "31 KB", category: "GTM Enablement & Strategy" },
  { id: 48, title: "Account Management with Partner Led Support", type: "PDF", size: "1.0 MB", category: "GTM Enablement & Strategy" },
  { id: 49, title: "First Call Deck Partner Led Support", type: "PDF", size: "1.7 MB", category: "GTM Enablement & Strategy" },
  { id: 50, title: "Customer Journey Mapping Template", type: "PPTX", size: "46 KB", category: "GTM Enablement & Strategy" },
  { id: 51, title: "AWS Competency Application Readiness Checklist", type: "PDF", size: "214 KB", category: "GTM Enablement & Strategy" },
  { id: 52, title: "Stakeholder Map From ISV Partner to End Customer", type: "PDF", size: "301 KB", category: "GTM Enablement & Strategy" },

  // Module 4 Core
  { id: 53, title: "AWS Co-Sell Overview", type: "PDF", size: "810 KB", category: "Sales Enablement & Execution" },
  { id: 54, title: "ACE Opportunity Submission Guide", type: "Word", size: "20 KB", category: "Sales Enablement & Execution" },
  { id: 55, title: "COSS Framework", type: "PDF", size: "174 KB", category: "Sales Enablement & Execution" },
  { id: 56, title: "How AWS Marketplace Sellers use the COSS Strategy", type: "PDF", size: "231 KB", category: "Sales Enablement & Execution" },
  { id: 57, title: "AWS Marketplace Seller GTM Academy Campaign Plan", type: "Excel", size: "18 KB", category: "Sales Enablement & Execution" },
  { id: 58, title: "Marketplace APN Opportunities Guide", type: "Word", size: "26 KB", category: "Sales Enablement & Execution" },
  { id: 59, title: "Boost your Go-to-market strategy with AWS", type: "PDF", size: "1.1 MB", category: "Sales Enablement & Execution" },
  { id: 60, title: "Sales Plays Matrix", type: "PDF", size: "494 KB", category: "Sales Enablement & Execution" },

  // Module 6 Core
  { id: 61, title: "AWS SaaS Competency Marketplace List & Sell Playbook", type: "PDF", size: "1.6 MB", category: "Funding & APN Investment" },
  { id: 62, title: "ISV Tools Fund Request Submission Guide", type: "PDF", size: "758 KB", category: "Funding & APN Investment" },
  { id: 63, title: "List & Sell Requirements Diagram", type: "Image", size: "550 KB", category: "Funding & APN Investment" },
  { id: 64, title: "PLG Ready Workshop Funding Breakdown", type: "Image", size: "542 KB", category: "Funding & APN Investment" },
  { id: 65, title: "APN Innovation Sandbox Innovation Plan", type: "Word", size: "44 KB", category: "Funding & APN Investment" },
  { id: 66, title: "AWS Partner Funding First Call Deck", type: "PDF", size: "1.1 MB", category: "Funding & APN Investment" },
  { id: 67, title: "Adoption Accelerator Initiative First Call Deck", type: "PPTX", size: "10 MB", category: "Funding & APN Investment" },
  { id: 68, title: "AWS Marketplace List & Sell Program FCD", type: "PPTX", size: "35 MB", category: "Funding & APN Investment" },
  { id: 69, title: "AWS Marketplace List & Sell FAQ", type: "PDF", size: "252 KB", category: "Funding & APN Investment" },
  { id: 70, title: "APN Funding Roadshow Presentation", type: "PDF", size: "13 MB", category: "Funding & APN Investment" },
  { id: 71, title: "Funding and Financial Benefits Overview", type: "Word", size: "20 KB", category: "Funding & APN Investment" },
  { id: 72, title: "ISV Accelerate Program Parameters", type: "Word", size: "11 KB", category: "Funding & APN Investment" },
  { id: 73, title: "AWS Training Partner MDF Review Form", type: "Excel", size: "255 KB", category: "Funding & APN Investment" },
  { id: 74, title: "AWS SaaS Factory Playbook", type: "PDF", size: "1.0 MB", category: "Funding & APN Investment" },
  { id: 75, title: "POC Credit Checklist", type: "PDF", size: "219 KB", category: "Funding & APN Investment" },
  { id: 76, title: "APN Funding Customer Sign-off Template", type: "PDF", size: "157 KB", category: "Funding & APN Investment" },
  { id: 77, title: "Integration Funding Requirements 1", type: "Image", size: "1.0 MB", category: "Funding & APN Investment" },
  { id: 78, title: "Integration Funding Requirements 2", type: "Image", size: "1.0 MB", category: "Funding & APN Investment" },
  { id: 79, title: "Adoption Accelerator Eligibility Matrix", type: "Image", size: "787 KB", category: "Funding & APN Investment" },

  // Module 7 Core
  { id: 80, title: "Deployed on AWS Promotional Guidance", type: "PDF", size: "116 KB", category: "Product-Led Growth (PLG)" }
];
