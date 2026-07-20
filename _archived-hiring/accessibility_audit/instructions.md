# Instructions for Accessibility Audit
Hello! Glad you have made it this far into the process for the Accessibility Solutions position.

Estimated time to complete: Less than 1 hour. 

## The Assignment
Pick any New York State website (or any government website) and perform an accessibility audit of just the homepage with the intent of generating a conformance report. Use any standard methods or formats you would like including using automated tools to guide you in the right direction (WAVE, aXeCore, pa11y, etc). Since automated testing can only evaluate ~30% of WCAG issues, you'll need to do manual testing. Ensure that you test using a screen reader of your choice - or multiple (we use VoiceOver and NVDA because both are free). 

The main purpose of this exercise is to go beyond citing failures of WCAG or other criteria: It is to have a discussion about what failed, why it is a blocker for assistive technology use, and what remediations can be taken to fix issues (either via code, technology changes, or content editing and quality control).

Keep at the forefront our real, disabled users and how they interact with websites and digital content. Sometimes our job is to educate developers, architects, content editors, and non-technical people about barriers to access and the experience of disabled users with technology. 

## Guidelines
- This does not need to be exahustive. No points lost for missing issues and there are no "gotcha!" moments here. 
- There are no extra points for picking ny.gov or governor.ny.gov, but be aware that we manage the accessibility engineering of both those websites. 
- Do your best to critique, evaluate, and demonstrate your ability to perform an accessibility audit using WCAG 2.2 AA as your guideline. 
- Make sure to include code-level suggestions for conformant accessible code patterns for failures where the underlying technology - and not the content - is at fault.
- Indicate which screen readers, OS's, and devices you tested on.

## What to submit in your pull request
- A well-formatted and creative solution that will serve as your basis for a conformance report. 
- This can be a simple html document with content in it for your report. Or markdown, or a static generated website, or something entirely different. 
- Try to avoid PDFs and word documents, unless very helpful or necessary. 
- What you submit will be the basis of our evaluation and will serve as what you will present and lead a discussion on for your final interview.
