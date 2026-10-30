# NEXUS — CONTACT TRANSMISSION
## Communication Architecture & Protocol

> *"Every meaningful system begins with a connection."*

---

### 1. Contact Interface Overview

The Contact Transmission section (`#contact`) establishes an honest, reliable communication bridge between Ankit Singha and visitors, AWS challenge evaluators, and engineering collaborators.

* **Primary Email**: `singhaankit165@gmail.com`
* **GitHub Profile**: `https://github.com/ASingha165`
* **Official NEXUS Repository**: `https://github.com/ASingha165/Nexus`
* **Geographic Datum**: West Bengal, India

---

### 2. Transmission Protocol & Form Delivery Mechanism

Many static portfolios feature deceptive contact forms with mocked `setTimeout()` delays and generic "Message Sent Successfully" banners that silently discard user inquiries.

**NEXUS strictly rejects this anti-pattern.**

#### Genuine Client-Side Dispatch Protocol:
1. When a visitor fills in the Transmission Form (Call-sign/Name, Return Address, Topic, and Message), the interface validates all required fields.
2. Upon submission, `CONTACT_CONFIG.generateMailtoUrl(...)` formats and URL-encodes a complete structured email payload:
   ```text
   Subject: [NEXUS Transmission] <Topic> — from <Name>
   Body:
     Name: <Name>
     Sender Contact: <Email>
     Subject / Topic: <Topic>
     --------------------------------------------------
     Message Payload:
     <Message>
     --------------------------------------------------
     Dispatched via NEXUS Transmission Interface
   ```
3. The browser launches the user's default system email application (Apple Mail, Thunderbird, Outlook, webmail handler) pre-populated with this draft addressed directly to `singhaankit165@gmail.com`.
4. The user is prominently shown a transparency notice explaining this direct dispatch mechanism, preventing confusion and ensuring 100% message delivery.

---

### 3. Quick Action Capabilities

* **Copy Email Button**: One-click clipboard copy of `singhaankit165@gmail.com` with 3-second animated tooltip confirmation (`COPIED!`).
* **Direct Repository Launch**: Opens `https://github.com/ASingha165/Nexus` in a secure `rel="noopener noreferrer"` window.
* **Inquiry Topics**: Pre-configured topical choices including AWS Student Builder Challenge evaluation, AI agent architecture, and hackathon collaboration.

---

### 4. Accessibility & Telemetry

* **Labels**: All form elements are explicitly associated with their `<label>` via matching `id` and `htmlFor`.
* **Focus States**: High-contrast `focus:border-primary` ring indicators conforming to WCAG 2.1 AA standards.
* **No Telemetry Spoofing**: Eliminates fake "live server status" in favor of factual availability indicators.
