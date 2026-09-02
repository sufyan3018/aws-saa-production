---
title: "mfa methods"
slug: mfa-methods
category: Identity & Security
priority: High
order: 1
---

# AWS SAA Notes
AWS recommends **passkeys/security keys over authenticator apps or hardware TOTP tokens primarily because they are phishing-resistant**.

### The key difference

MFA methodHow you authenticatePhishing-resistant?**Passkey / Security key (FIDO2)**Fingerprint, face, PIN, or hardware key✅ **YesAuthenticator app (TOTP)**Enter a 6-digit code❌ No**Hardware TOTP token**Enter a 6-digit code from token❌ No

### Why TOTP is weaker

Suppose an attacker creates a fake AWS login page:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Attacker's fake AWS login          ↓  You enter username + password          ↓  Fake page asks for TOTP code          ↓  You enter 123456          ↓  Attacker immediately uses 123456          ↓  Attacker gets access   `

The TOTP code proves that you have the authenticator/token, but **the code can still be tricked out of you**.

TOTP is therefore **not phishing-resistant**.

### Why passkeys/security keys are better

With a FIDO2 passkey/security key:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   You visit AWS        ↓  AWS requests authentication        ↓  Passkey/security key verifies        ↓  Cryptographic authentication        ↓  Access granted   `

The important part is that the authentication is **cryptographically tied to the legitimate website/domain**.

If you accidentally visit:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   fake-aws-login.com   `

your passkey doesn't simply give the attacker a reusable 6-digit code.

That's why FIDO2/passkeys are considered **phishing-resistant**.

What about the authenticator app?
=================================

An authenticator app is still **very good MFA** and much better than password-only authentication.

For example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Password     +  TOTP code     ↓  AWS   `

Even if an attacker steals your password, they still need the TOTP code.

The problem is that a user can potentially be **socially engineered/phished into providing the code**.

So the security hierarchy is roughly:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Password only       ↓  TOTP MFA       ↓  FIDO2 security key / Passkey       ↓  Strongest phishing resistance   `

What about a Hardware TOTP token?
=================================

A hardware TOTP token protects against some threats because the code isn't stored on your phone.

For example:

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   Hardware token       ↓    483921       ↓     AWS   `

But it has the **same fundamental TOTP weakness**:

> The attacker can ask you for the current code through a phishing page.

So:

**Hardware TOTP ≠ phishing-resistant**

while:

**FIDO2 security key/passkey = phishing-resistant**

⭐ SAA-C03 Exam Point
====================

If the question says:

> **"The company wants the strongest protection against phishing."**

Think:

### ✅ Passkey / FIDO2 security key

Not:

*   ❌ SMS OTP
    
*   ❌ Authenticator app TOTP
    
*   ❌ Hardware TOTP
    

### Memory trick

> **TOTP = "Give me a code."****FIDO2 = "Prove cryptographically that you're authenticating to the real site."**

That's the main reason AWS recommends **passkeys/security keys** over TOTP-based MFA.