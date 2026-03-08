# 📝 Project TODO List

This list contains suggested improvements and fixes for the Lukas Personal Web project, as identified during the initial code review.

## 🚀 Critical & High Priority
- [ ] **Dynamic Error Feedback**: Update `ContactSection.tsx` to display specific error messages returned from `sendEmail.ts` instead of a generic "Něco se pokazilo".
- [ ] **Env Var Validation**: Implement a dedicated `src/lib/env.ts` (using Zod or similar) to validate `RESEND_API_KEY`, `SENDER_EMAIL`, and `PERSONAL_EMAIL` on startup.

## 💅 Accessibility & SEO
- [ ] **Semantic Links**: Refactor `Navbar.tsx` to use `<a>` tags for navigation while maintaining smooth scroll behavior. 
    - *Context*: This improves SEO (crawlers see site structure) and accessibility (screen readers) + enables "Copy Link" without losing the premium "smooth jump" for the user.

## 🛠️ Logic & Maintenance
- [ ] **Safer Form Data**: Add type checking/validation for `FormData` values in `sendEmail.ts` before calling `.trim()` to avoid potential null pointer exceptions.
- [ ] **Dynamic Footer Year**: Replace the hardcoded "2026" in `Footer.tsx` with a dynamic `{new Date().getFullYear()}`.

---
*Created by Antigravity Assistant*
