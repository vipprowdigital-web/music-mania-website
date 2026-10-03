# AGENTS.md — Music Academy Website

## Project Mission

Build a **premium 2026 music academy website** with a distinctive visual identity.

This project is not a generic educational website and must not look AI-generated, template-driven, or assembled from unrelated UI components.

The implementation must preserve the project's central design language:

> **Light-first + luxurious + rhythmic + editorial + musical + animated + contemporary.**

---

## 1. Highest-Priority Design Rules

These rules apply to every page, component, section, and responsive breakpoint.

### MUST

- Maintain a light-first visual direction.
- Use a distinctive music-appropriate typography system.
- Use intentional animation and micro-interactions.
- Create visual rhythm through layout, typography, spacing, imagery, and motion.
- Use editorial composition rather than repetitive card grids.
- Keep the interface premium and restrained.
- Use modern 2026 interaction patterns where they add genuine value.
- Maintain one coherent art direction across the entire website.
- Use whitespace deliberately.
- Make mobile layouts intentionally designed rather than simply stacked desktop layouts.
- Respect `prefers-reduced-motion`.
- Optimize media and animation for performance.
- Keep accessibility intact.

### MUST NOT

- Generate generic AI-looking UI.
- Use default fonts without evaluating their relationship to the music brand.
- Use dark mode as the default unless the project direction is explicitly changed.
- Turn every element into a rounded card.
- Use pill buttons everywhere.
- Add random gradients, glowing blobs, floating circles, or decorative noise.
- Use excessive glassmorphism.
- Build a SaaS dashboard aesthetic.
- Copy a competitor's layout.
- Use meaningless animations.
- Add libraries only because they are fashionable.
- Sacrifice performance for visual effects.
- Introduce visual elements that conflict with the music-academy theme.

---

## 2. Design Skill Requirement

A `ui-ux-design-pro` skill is part of the intended project workflow.

### Before significant UI work

If the `ui-ux-design-pro` skill is available in the current environment:

1. Read/use the skill.
2. Apply its UX and visual-design process.
3. Combine its recommendations with `DESIGN.md`.
4. Treat `DESIGN.md` as the project's brand-specific source of truth.
5. Do not replace the design process with generic AI component generation.

If the skill is unavailable in the current tool environment, continue using `DESIGN.md` as the mandatory design specification rather than inventing a generic alternative.

---

## 3. Source of Truth

The priority order for design decisions is:

1. Explicit user/project requirements
2. `DESIGN.md`
3. Existing brand assets and approved visual references
4. `ui-ux-design-pro` guidance when available
5. Framework/library conventions
6. Generic defaults

Generic framework defaults must never override the project's visual direction.

---

## 4. Before Creating a New Section

Before implementing a major section, determine:

- What is the section's purpose?
- What emotion should it create?
- What is the visual focal point?
- How does it contribute to the musical rhythm of the page?
- How is it visually different from the previous section?
- What interaction or motion is meaningful here?
- How does it behave on mobile?

Do not immediately turn the content into a card grid.

---

## 5. Typography Rules

Typography is a core brand component.

Before choosing fonts:

- Evaluate display and body roles separately.
- Prefer a distinctive display/editorial face paired with a modern readable sans.
- Confirm that the pairing works with the academy's musical identity.
- Avoid defaulting to Inter, Roboto, Arial, or similar generic choices simply because they are convenient.
- Use variable fonts when beneficial.
- Keep typography responsive.

Large typography may be expressive, but readability always wins.

---

## 6. Color Rules

Default to:

- warm light backgrounds,
- refined neutrals,
- dark ink typography,
- one controlled accent family.

Dark sections may be used as deliberate contrast.

Do not introduce:

- random purple/blue AI gradients,
- neon palettes without brand justification,
- excessive gold luxury effects,
- multiple competing accent colors.

Every color should have a role.

---

## 7. Layout Rules

Favor:

- editorial grids,
- asymmetric layouts,
- full-bleed imagery,
- large whitespace,
- controlled overlaps,
- edge alignment,
- variable section density.

Avoid repetitive:

`heading + paragraph + 3 cards`

patterns.

A repeated component is acceptable when repetition itself creates rhythm, but it must be visually intentional.

---

## 8. Animation Rules

Animation is part of the product experience.

Use it for:

- hierarchy,
- continuity,
- feedback,
- storytelling,
- rhythm,
- discovery.

Good candidates:

- entrance reveals,
- image clipping,
- subtle parallax,
- staggered typography,
- hover transitions,
- scroll-linked transformations,
- editorial horizontal movement,
- refined navigation transitions.

Avoid:

- excessive bounce,
- random floating,
- constant pulsing,
- animations competing for attention,
- scroll-jacking,
- long blocking intro animations.

### Reduced motion

Always support:

`@media (prefers-reduced-motion: reduce)`

Animations must degrade gracefully.

---

## 9. Image & Media Rules

Images should feel:

- authentic,
- cinematic,
- editorial,
- performance-focused,
- human,
- premium.

Prefer real-looking scenes of:

- musicians,
- students,
- instructors,
- rehearsals,
- performances,
- instruments,
- workshops.

Do not use generic corporate stock imagery.

Do not place every image inside the same rounded rectangle.

Use cropping and composition as part of the design.

---

## 10. Component Rules

Components must belong to the same design system.

### Buttons

Buttons should have clear hierarchy and premium interaction.

Do not make every button a pill.

### Cards

Cards are a tool, not a requirement.

Use cards when they improve content comprehension.

### Navigation

Navigation should feel editorial and refined.

Do not build a generic SaaS navigation bar.

### Forms

Forms should be spacious, simple, accessible, and visually consistent with the brand.

---

## 11. Responsive Rules

Every major desktop design decision must have an intentional mobile interpretation.

Do not merely:

- stack everything,
- shrink everything,
- remove all animation,
- reduce typography until it becomes ordinary.

Instead redesign compositions where necessary.

Test:

- 320px
- 375px
- 390px
- 430px
- tablet
- desktop
- large desktop

---

## 12. Performance Rules

Animations must be performant.

Prefer:

- `transform`
- `opacity`
- compositor-friendly properties

Avoid unnecessary animation of:

- width,
- height,
- top,
- left,
- expensive filters.

Use optimized images and video.

Lazy-load content that is not immediately visible.

Do not introduce WebGL or heavy visual libraries unless their benefit clearly justifies the cost.

---

## 13. Accessibility Rules

Maintain:

- semantic HTML,
- keyboard navigation,
- focus visibility,
- adequate contrast,
- accessible labels,
- useful alt text,
- reduced-motion support,
- sufficient touch target sizes.

Never use animation as the only way to communicate information.

---

## 14. Code Quality Rules

Keep visual code maintainable.

Prefer:

- reusable design tokens,
- centralized typography definitions,
- consistent spacing variables,
- reusable motion primitives,
- semantic component names,
- clear component boundaries.

Avoid:

- arbitrary one-off styles everywhere,
- duplicated animation logic,
- magic values without purpose,
- giant components containing unrelated page sections.

Do not over-engineer a simple visual interaction.

---

## 15. Design Review Gate

Before calling a page complete, verify:

### Brand
- Does it look like a music academy?
- Does it have a recognizable personality?
- Does it feel premium?

### Anti-AI-slop
- Does it avoid generic AI landing-page patterns?
- Are cards and rounded containers used intentionally?
- Are decorative effects justified?

### Typography
- Is the font pairing distinctive?
- Is hierarchy clear?
- Does the typography create rhythm?

### Motion
- Is there meaningful animation?
- Does it feel smooth?
- Does it respect reduced motion?

### Composition
- Is there enough whitespace?
- Are layouts varied?
- Are overlaps/asymmetries intentional?

### Theme
- Is the light-first direction preserved?
- Are colors controlled?
- Does every visual element belong to the music theme?

### Mobile
- Does mobile look designed rather than merely compressed?

### Performance
- Are media and animations optimized?

If several answers are "no", do not ship the section.

---

## 16. Decision Rule for Ambiguous Design Choices

When choosing between a safe generic solution and a more distinctive solution:

Choose the **distinctive solution** when it:

- remains usable,
- remains accessible,
- fits the music theme,
- supports the content,
- does not materially hurt performance.

When a visual idea is distinctive but decorative-only, remove it.

The goal is not maximal visual complexity.

The goal is **intentional visual character**.

---

## 17. Definition of Done

A page is finished only when:

- It feels like one coherent product.
- Typography has personality.
- The light-first visual direction is intact.
- Layout has editorial rhythm.
- Motion has purpose.
- Imagery has art direction.
- Responsive behavior is intentional.
- Accessibility is preserved.
- Performance is acceptable.
- No section looks like a generic AI-generated template.

### Final rule

**Do not make the website merely "modern." Make it recognizably, intentionally, and consistently a premium music academy experience.**
