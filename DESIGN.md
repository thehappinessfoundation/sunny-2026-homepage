---
id: sunny
name: Sunny
country: KR
category: social_impact
homepage: "https://toss.im"
primary_color: "#5a4187"
logo:
  type: favicon
  slug: "https://static.toss.im/icons/png/4x/icon-toss-logo.png"
verified: "2026-05-15"
omd: "0.1"
ds:
  name: TDS
  url: "https://tossmini-docs.toss.im/tds-mobile/"
  type: system
  description: Toss's mobile design system — 40+ components, tokens, and hooks.
tokens:
  source: reconciled
  extracted: "2026-06-08"
  note: "primary = live Sunny Purple purple500 (#5a4187); brand = official Pantone 2175C (#0064ff)"
  colors:
    primary: "#5a4187"
    primary-hover: "#45326b"
    brand: "#0064ff"
    brand-gray: "#202632"
    canvas: "#ffffff"
    foreground: "#191f28"
    grey-700: "#333d4b"
    grey-600: "#4e5968"
    muted: "#8b95a1"
    surface: "#f2f4f6"
    border: "#e5e8eb"
    on-primary: "#ffffff"
    error: "#f04452"
    success: "#03b26c"
    warning: "#fe9800"
  typography:
    family: { sans: "Pretendard", emoji: "Tossface" }
    display-hero: { size: 30, weight: 700, lineHeight: 1.33, use: "Splash screens, hero moments" }
    display-lg:   { size: 26, weight: 700, lineHeight: 1.38, use: "Section headers, social impact metrics" }
    heading-lg:   { size: 22, weight: 700, lineHeight: 1.36, use: "Feature titles, modal headers" }
    heading:      { size: 20, weight: 600, lineHeight: 1.40, use: "Card headings, sub-sections" }
    subtitle:     { size: 16, weight: 600, lineHeight: 1.50, use: "Navigation titles, list headers" }
    body-lg:      { size: 16, weight: 400, lineHeight: 1.50, use: "Descriptions, explanations" }
    body:         { size: 14, weight: 400, lineHeight: 1.57, use: "Standard reading text" }
    body-sm:      { size: 13, weight: 400, lineHeight: 1.54, use: "Secondary information" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 4, md: 8, lg: 16, full: 9999 }
  shadow:
    subtle: "0px 1px 3px rgba(0,0,0,0.06)"
    standard: "0px 2px 8px rgba(0,0,0,0.08)"
    elevated: "0px 4px 12px rgba(0,0,0,0.12)"
  components_harvested: true
  components:
    button-fill-primary: { type: button, bg: "#5a4187", fg: "#ffffff", radius: 16, padding: "0 20px", font: "17/600", use: "Primary CTA on light surfaces, 56px tall" }
    button-fill-dark: { type: button, bg: "#4e5968", fg: "#ffffff", radius: 16, padding: "0 20px", font: "17/600", use: "Strong action where blue too playful" }
    button-fill-danger: { type: button, bg: "#f04452", fg: "#ffffff", radius: 16, padding: "0 20px", font: "17/600", use: "Destructive confirmation" }
    input-box: { type: input, fg: "#333d4b", radius: 14, padding: "14px 16px", font: "17/400", use: "Standard form input, most-used variant" }
    card: { type: card, bg: "#ffffff", radius: 16, use: "White surface with standard shadow" }
---

## 1. Visual Theme & Atmosphere

Sunny reimagines the digital interface by combining a sophisticated, clean structure with playful, engaging elements. The page opens on a clean white canvas (`#ffffff`) with deep charcoal headings (`#191f28`) and a signature **Sunny Purple (`#5a4187`)** that functions as the universal interactive accent. A striking **Sunny Yellow (`#ffd73c`)** is used for point accents, bringing warmth and energy to the design.

A key differentiator is the use of **"Play Dot" Style Graphic Illustrations**. Unlike typical flat or 3D corporate illustrations, Sunny uses hand-drawn, spontaneous-looking vector sketches with a single solid accent color (usually Sunny Yellow or a related warm tone). This creates a unique blend of formal layout and approachable, human-centric art.

**Pretendard** serves as the primary typeface. As a modern, highly legible sans-serif, it provides a seamless and balanced reading experience across both Korean and English, ensuring the UI remains crisp and professional without needing multiple font families.

**Key Characteristics:**
- **Sunny Purple (`#5a4187`)** as the primary interactive color, paired with **Sunny Yellow (`#ffd73c`)** for accents.
- **Pretendard** font for unified, modern typography across all languages.
- **Play Dot Illustrations**: Spontaneous, hand-drawn vector art with simple solid color accents.
- 10-step grey scale (grey50-grey900) with warm undertones for a clean, minimal UI.
- Three-tier token architecture: primitive → semantic → component.
- Minimal shadow system -- trust comes from clarity, not depth.
- **Responsive Breakpoints**: Optimized primarily for PC (max-width container) and Mobile (fluid).

## 2. Color Palette & Roles

### Primary & Point
- **Sunny Purple** (`#5a4187`): `purple500`. Primary interactive color -- CTAs, links, active states, selection highlights. The workhorse of every tappable element.
- **Purple Hover** (`#45326b`): `purple600`. Hover/pressed state for purple500 elements.
- **Sunny Yellow** (`#ffd73c`): `yellow500`. Point accent color for illustrations, special highlights, and energetic visual breaks.
- **Blue Light** (`#f4effa`): `purple50`. Informational backgrounds, subtle blue-tinted surfaces.
- **Pure White** (`#ffffff`): `background`, `layeredBackground`. Page background, card surfaces.
- **Dark Charcoal** (`#191f28`): `grey900`. Primary heading color, strongest text. Warm near-black with subtle blue undertone.

### Brand (Logo/Marketing Only)
- **Brand Blue** (`#0064FF`): Official Toss brand color (Pantone 2175 C). Logo and marketing materials only -- distinct from UI purple500.
- **Brand Gray** (`#202632`): Official secondary brand color (Pantone 433 C). Corporate contexts.

### Semantic
- **Error Red** (`#f04452`): `red500`. Error states, destructive actions, negative project states.
- **Success Green** (`#03b26c`): `green500`. Positive project states, confirmations.
- **Warning Orange** (`#fe9800`): `orange500`. Pending states, attention-needed indicators.
- **Caution Yellow** (`#ffc342`): `yellow500`. Soft warnings, highlight moments.
- **Info Teal** (`#18a5a5`): `teal500`. Informational accent, alternative categorization.
- **Premium Purple** (`#a234c7`): `purple500`. Premium features, special offers.

### Neutral Scale
- **Grey 50** (`#f9fafb`): Lightest gray, `greyBackground` surface.
- **Grey 100** (`#f2f4f6`): Secondary background, card fills, disabled surfaces.
- **Grey 200** (`#e5e8eb`): Default border color, dividers, input backgrounds.
- **Grey 400** (`#b0b8c1`): Placeholder text, disabled icon fills.
- **Grey 500** (`#8b95a1`): Caption text, secondary labels.
- **Grey 600** (`#6b7684`): Body text, descriptions, metadata.
- **Grey 700** (`#4e5968`): Emphasized body text, sub-headings.
- **Grey 800** (`#333d4b`): Strong labels, navigation text.

### Surface & Borders
- **Border Default**: `#e5e8eb` (grey200). Standard card borders, input borders, dividers.
- **Border Strong**: `#d1d6db` (grey300). Emphasized borders, active input outlines.
- **Background Float**: `#ffffff`. `floatBackground`. Floating elements -- tooltips, dropdowns.
- **Overlay Scrim**: `rgba(2,9,19,0.5)` to `rgba(2,9,19,0.91)`. `greyOpacity` scale. Blue-tinted dark overlays.

## 3. Typography Rules

### Font Family
- **Primary**: `"Pretendard", "Tossface", "SF Pro KR", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Basier Square", "Apple SD Gothic Neo", Roboto, "Noto Sans KR", sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`
- **Emoji**: `Tossface` -- Toss's custom emoji font (3500+ emojis, open-source on GitHub)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Pretendard | 30px | 700 | 40px (1.33) | normal | Splash screens, hero moments |
| Display Large | Pretendard | 26px | 700 | 36px (1.38) | normal | Section headers, social impact metrics |
| Heading Large | Pretendard | 22px | 700 | 30px (1.36) | normal | Feature titles, modal headers |
| Heading | Pretendard | 20px | 600 | 28px (1.40) | normal | Card headings, sub-sections |
| Subtitle | Pretendard | 16px | 600 | 24px (1.50) | normal | Navigation titles, list headers |
| Body Large | Pretendard | 16px | 400 | 24px (1.50) | normal | Descriptions, explanations |
| Body | Pretendard | 14px | 400 | 22px (1.57) | normal | Standard reading text |
| Body Small | Pretendard | 13px | 400 | 20px (1.54) | normal | Secondary information |
| Caption | Pretendard | 12px | 400 | 18px (1.50) | normal | Timestamps, fine print |
| Number Display | Pretendard | 30px+ | 700 | tight | normal | Social Impact Metrics / Changemakers |

### Principles
- **Eight weights, three used**: Ships 300-950, but UI uses 400 (body), 600 (emphasis), 700 (headings). Restraint over variety.
- **Dual numeral modes**: Variable-width for display, fixed-width (tabular) for impact data and metrics. Context determines mode.
- **Korean-Latin optical balance**: Korean characters and Latin/numerals are independently weighted so mixed text looks harmonious without manual kerning.
- **Financial symbol optimization**: %, comma separators, ±, currency symbols, and directional arrows given enhanced legibility at small sizes.

## 4. Component Stylings

### Buttons

Toss `<Button>` is a 2-axis component: **variant** × **color** × size. Default size is `xlarge` (the values below); see the size-scale paragraph at the end for `small`/`medium`/`large`. Verified against `tossmini-docs.toss.im/tds-mobile/components/button` (TDS Mobile, public docs).

**Fill / Primary**
- Background: `#5a4187`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Pretendard
- Pressed: dim overlay via `--button-pressed-background-color` + `--button-pressed-opacity`
- Disabled: bg opacity scaled by `--button-disabled-opacity-color`
- Loading: 3-dot indicator replacing label, button width preserved
- Use: Primary CTA on light surfaces (솔루션 합류하기, 미션 시작하기) — 56px tall

**Fill / Dark**
- Background: `#4e5968`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Pretendard
- Use: Strong action where blue would feel too playful (admin/settings CTA)

**Fill / Danger**
- Background: `#f04452`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Pretendard
- Use: Destructive confirmation (솔루션 보류, 합류 취소)

**Fill / Light**
- Background: `#ffffff`
- Text: `#1b64da`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Pretendard
- Use: CTA on dark / colored surfaces (sits on non-white bg to be legible)

**Weak / Primary**
- Background: `rgba(100, 168, 255, 0.15)`
- Text: `#2272eb`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Pretendard
- Use: Secondary action paired with Fill / Primary on the same screen

**Weak / Dark**
- Background: `rgba(2, 32, 71, 0.05)`
- Text: `#4e5968`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Pretendard
- Use: Neutral / cancel-style secondary (취소, 닫기)

**Weak / Danger**
- Background: `rgba(251, 136, 144, 0.15)`
- Text: `#e42939`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Pretendard
- Use: Subtle destructive action (archive instead of delete)

**Weak / Light**
- Background: `rgba(255, 255, 255, 0.15)`
- Text: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 0 20px
- Font: 17px / 600 / Pretendard
- Use: Secondary on dark / colored surfaces

Display modes — `inline` (auto-width), `block` (full-width with line break), `full` (fills parent). Size scale (height · font · radius): `small` 32px · 13px / 600 · 8px; `medium` 38px · 15px / 600 · 10px; `large` 48px · 17px / 600 · 14px; `xlarge` (default) 56px · 17px / 600 · 16px. CSS-var customization: `--button-color`, `--button-background-color`, `--button-pressed-background-color`, `--button-pressed-opacity`, `--button-disabled-opacity-color`, `--button-loader-color`, `--button-loading-background-color`, `--button-gradient-color`.

### Inputs

Toss `<TextField>` has 4 variants: `box` (default), `line`, `big`, `hero`. `hasError` toggles error state. Verified at `tossmini-docs.toss.im/tds-mobile/components/TextField/text-field`.

**Box (default)**
- Background: `rgba(0, 23, 51, 0.02)`
- Text: `#333d4b`
- Border: 1px solid `rgba(2, 32, 71, 0.05)`
- Radius: 14px
- Padding: 14px 16px
- Font: 17px / 400 / Pretendard
- Placeholder: `#b0b8c1`
- Focus: border `#5a4187`
- Use: Standard form input — most-used variant

**Line**
- Background: transparent
- Text: `#333d4b`
- Border: 1px solid `#e5e8eb` (bottom only)
- Radius: 0px
- Padding: 0px 0px 4px
- Font: 17px / 400 / Pretendard
- Use: Underline-style input on dense forms

**Big**
- Background: transparent
- Text: `#333d4b`
- Border: 1px solid `#e5e8eb` (bottom only)
- Radius: 0px
- Padding: 0px 0px 4px
- Font: 22px / 600 / Pretendard
- Use: Highlighted single-line input (changemaker count, name)

**Hero**
- Background: transparent
- Text: `#333d4b`
- Border: 1px solid `#e5e8eb` (bottom only)
- Radius: 0px
- Padding: 0px 0px 4px
- Font: 30px / 600 / Pretendard
- Use: Eye-catching hero input — large metric entry, sign-up moment

**Error**
- Background: `rgba(0, 23, 51, 0.02)` (box variant base)
- Text: `#333d4b`
- Border: 1px solid `#f04452`
- Radius: 14px
- Padding: 14px 16px
- Font: 17px / 400 / Pretendard
- Use: `hasError` state — paired with inline help message in `#f04452`

`SplitTextField` (OTP), `SecureKeypad` (secure PIN with randomised digit positions), and `TextArea` are documented separately under TDS but reuse the same focus ring and base radii.

### Cards

**Standard**
- Background: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 20px
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)`
- Use: 체인지메이커 프로필, 임팩트 현황, 문제 해결 여정(Problem-solving journey) — the workhorse surface

**Featured**
- Background: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 24px
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)`
- Use: Hero/promotional cards on the home tab

**Compact**
- Background: `#ffffff`
- Border: 1px solid `#e5e8eb`
- Radius: 8px
- Padding: 12px
- Shadow: none
- Use: Inline list items where a softer 1px edge replaces shadow

### Badges

Toss `<Badge>` is a 3-axis component: **variant** × **color** × **size**. Variants `fill | weak`. Colors `blue | teal | green | red | yellow | elephant`. Sizes `xsmall | small | medium | large` (each shifts radius/font/padding). Verified at `tossmini-docs.toss.im/tds-mobile/components/badge`.

**Fill / Blue (medium default)**
- Background: `#5a4187`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Pretendard
- Use: Primary status / category emphasis ("NEW", "BEST")

**Fill / Green**
- Background: `#22c55e`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Pretendard
- Use: Success / completion state (크루 합류 완료, 숨은 문제 발굴 완료)

**Fill / Red**
- Background: `#ef4444`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Pretendard
- Use: Negative / blocking state (실패, 차단)

**Fill / Yellow**
- Background: `#eab308`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Pretendard
- Use: Caution / pending (검토 중, 보류)

**Weak / Blue**
- Background: `rgba(100, 168, 255, 0.15)`
- Text: `#2272eb`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Pretendard
- Use: Subtle informational badge

**Weak / Green**
- Background: `rgba(34, 197, 94, 0.15)`
- Text: `#16a34a`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Pretendard
- Use: Subtle success state

**Weak / Red**
- Background: `rgba(239, 68, 68, 0.15)`
- Text: `#dc2626`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Pretendard
- Use: Subtle negative state

**Weak / Elephant**
- Background: `rgba(2, 32, 71, 0.05)`
- Text: `#4e5968`
- Border: none
- Radius: 12px
- Padding: 3px 7px
- Font: 13px / 700 / Pretendard
- Use: Neutral metadata badge

Size scale (height · font · radius · padding): `xsmall` 21px · 10px / 600 · 9px · 3px 7px; `small` 24px · 12px / 700 · 11px · 3px 7px; `medium` 26px · 13px / 700 · 12px · 3px 7px; `large` 29px · 14px / 700 · 13px · 4px 8px. Color also supports `teal` and full mapping for each color name; values above show the most-used 4 fills + 4 weaks at medium size.

### Tabs

**Bottom Tab (Active)**
- Background: `#ffffff`
- Text: `#191f28`
- Border: 1px solid `#e5e8eb` (top border only)
- Active: `#5a4187` (icon and label)
- Disabled: `#b0b8c1` (icon) + `#8b95a1` (label)
- Font: 11px / 500 / Pretendard
- Use: Bottom navigation bar — fixed white background, no shadow

**Segmented**
- Background: `#f2f4f6`
- Text: `#8b95a1`
- Border: none
- Radius: 12px
- Padding: 8px 16px
- Active: `#ffffff` background + `#191f28` text + `0px 2px 4px rgba(0,0,0,0.06)` shadow
- Font: 14px / 600 / Pretendard
- Use: Section switching within a screen (월/주/일 전환)

### Toasts

**Default**
- Background: `#191f28`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0px 4px 12px rgba(0,0,0,0.12)`
- Font: 14px / 500 / Pretendard
- Use: Auto-dismissing transient notification ("복사되었습니다"). Application success is a dedicated screen, never a toast.

### Dialogs

**Centered Modal**
- Background: `#ffffff`
- Text: `#191f28`
- Border: none
- Radius: 16px
- Padding: 24px
- Shadow: `0px 4px 12px rgba(0,0,0,0.12)`
- Use: AlertDialog / ConfirmDialog for confirmation prompts

**Bottom Sheet**
- Background: `#ffffff`
- Text: `#191f28`
- Border: none
- Radius: 16px (top corners only)
- Padding: 24px 20px
- Shadow: `0px -4px 12px rgba(0,0,0,0.08)`
- Use: Bottom-attached overlay for selection, picker, secondary form (managed via `overlay-kit`)

### Toggles

**Default**
- Background: `#5a4187` (on) / `#d1d6db` (off)
- Border: none
- Radius: 9999px
- Thumb: `#ffffff` 18px circle with `0px 1px 2px rgba(0,0,0,0.1)` shadow
- Use: Boolean settings (알림 켜기, 자동 로그인)

---

**Verified:** 2026-05-08 (full-depth, A1 loop)
**Tier 1 sources:** tossmini-docs.toss.im/tds-mobile (TDS Mobile spec docs — Button/TextField/Badge), toss.im (live DOM via playwright — `.p-button` web variants `#5a4187` / 7px radius / 15px / 600, distinct from TDS Mobile geometry; nav links `#4e5968` 8px transparent; App Store/Play CTA `rgba(0,12,30,0.8)` / 7px / 17px·600)
**Tier 2 sources:** getdesign.md/toss — no record. styles.refero.design — no record (?q=Toss returns 0 hits).
**Tier 2b status:** unavailable; Tier 1 (TDS Mobile docs + live web inspect) treated as authoritative per pipeline.
**Surface split:** §4 above documents the **TDS Mobile (app)** system. The marketing web (toss.im) uses a **distinct `.p-button` system** — Primary `#5a4187` / 7px / 15px·600 / 11×16 / 40px height; Secondary Light Blue `#f4effa` bg / `#1b64da` text / 7px (parallel geometry). Both retained as parallel systems.
**Conflicts unresolved:** none. TDS Mobile geometry (16px radius, 17px·600) and web `.p-button` (7px, 15px·600) coexist on different surfaces and were not in conflict.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px
- Horizontal padding: 20px (slightly wider than typical 16px)
- Data grids: tighter 4px internal spacing

### Grid & Container
- Design baseline: 375px mobile width
- Content: full-width with 20px horizontal padding
- No explicit multi-column grid -- single-column, mobile-first
- Activity lists: full-width rows with consistent left-align for metrics

### Whitespace Philosophy
- **Breathing room for content**: Key metrics and project names get extra surrounding space.
- **Progressive density**: Summary screens are spacious; detail/transaction screens are denser. The deeper you go, the more information-dense.
- **Grouped by function**: 문제 정의/솔루션 합류/크루 문의 actions separated by 24px+ gaps; related data within a group uses 8-12px gaps.

### Border Radius Scale
- Compact (4px): Small badges, inline elements
- Standard (8px): Inputs, small buttons, compact cards
- Comfortable (12px): Standard cards, dialog corners
- Large (16px): Featured cards, bottom sheet top corners
- Pill (9999px): Toggle switches, floating chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline elements |
| Subtle (Level 1) | `0px 1px 3px rgba(0,0,0,0.06)` | Slight lift, list item separation |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.08)` | Cards, content panels |
| Elevated (Level 3) | `0px 4px 12px rgba(0,0,0,0.12)` | Dropdowns, popovers, floating buttons |
| Modal (Level 4) | `0px 8px 24px rgba(0,0,0,0.16)` | Bottom sheets, dialogs, modals |

**Shadow Philosophy**: Toss keeps shadows minimal and neutral. In a professional brand, visual noise undermines trust -- elevation is communicated through subtle opacity differences rather than dramatic depth. Pure black with low opacity creates clinical precision matching the professional context. Where Stripe uses brand-colored shadows, Toss uses restraint as its brand statement.

### Blur Effects
- Menu components use backdrop blur for lightweight floating panels
- Navigation bar applies subtle blur on scroll for the sticky header

## 7. Do's and Don'ts

### Do
- Use Sunny Purple (`#5a4187`) for all interactive elements -- links, buttons, toggles, selections.
- Use Sunny Yellow (`#ffd73c`) as a point color for highlights and illustration accents.
- Utilize "Play Dot" style hand-drawn illustrations to bring personality to the clean UI.
- Apply the Pretendard font stack for a unified English/Korean experience.
- Keep border-radius between 8px-16px for most elements.
- Show positive changes in green (`#03b26c`), negative in red (`#f04452`).

### Don't
- Don't confuse Brand Blue (`#0064FF`) with UI Blue (`#5a4187`) -- brand is for marketing/logo only
- Don't use heavy shadows -- rely on background color layering, not depth
- Don't use bold (700) for body text -- reserved for headings and social impact metrics
- Don't mix variable-width and tabular numerals in the same data context
- Don't use warm accent colors (orange, pink) for primary actions -- blue is the sole interactive hue
- Don't use border-radius > 16px except for pills/toggles
- Don't add decorative elements to data displays -- clarity is the aesthetic

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 0px ~ 767px | Single column, fluid width, 20px horizontal padding, bottom sheet nav |
| Tablet | 768px ~ 1023px | Expanded cards, optional side margins (standard iPad portrait is 768px) |
| PC (Desktop) | 1024px+ | Max-width container, multi-column grid (Base PC: 1024px~1199px, Wide PC: 1200px+) |

### Touch Targets
- Buttons: xlarge (~56px), large (~48px), medium (~40px), small (~36px)
- List items: minimum 52px row height for primary actions
- Keypad buttons: large targets (56-64px) for secure input

### Collapsing Strategy
- Desktop web mirrors mobile layout in a centered column
- Bottom sheet → modal dialog on larger screens
- Sticky bottom CTA bar with safe area insets on all devices
- Horizontal scrolling card carousels for product discovery

### Image Behavior
- 함께 변화를 만드는 파트너 (Partners making change together): 24-40px with consistent sizing within context
- Tossface emojis: inline at text size, display size for decorative use
- Charts/graphs: full-width, responsive, maintain aspect ratio

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Sunny Purple (`#5a4187`)
- CTA Hover: Purple 600 (`#45326b`)
- Background: Pure White (`#ffffff`)
- Background Surface: Light Gray (`#f2f4f6`)
- Heading text: Dark Charcoal (`#191f28`)
- Body text: Medium Gray (`#6b7684`)
- Caption text: Gray (`#8b95a1`)
- Placeholder: Soft Gray (`#b0b8c1`)
- Border: Gray 200 (`#e5e8eb`)
- Success/Positive: Green (`#03b26c`)
- Error/Negative: Red (`#f04452`)
- Warning: Orange (`#fe9800`)

### Example Component Prompts
- "Create a project card: white bg, 12px radius, 20px padding. Project label 14px weight 400, #8b95a1. Title 20px weight 700, #191f28. Shadow 0px 2px 8px rgba(0,0,0,0.08)."
- "Build an apply-project button: #5a4187 bg, white text, 16px weight 600, min-height 56px, 12px radius, full-width. Pressed: overlay dim. Loading: 3-dot white animation."
- "Design an activity row: full-width, 16px h-padding, 52px min-height. Left: 32px circle icon + name (14px weight 600, #191f28) + role (13px weight 400, #8b95a1). Right: status (14px weight 600, #03b26c active)."
- "Create an OTP input: 6 boxes, each 48px wide, 56px tall, 8px radius, 1px border #e5e8eb. Active: 2px border #5a4187. Digit: 24px weight 700, centered, #191f28."
- "Design a bottom tab bar: white bg, top border 1px #e5e8eb. 4 tabs evenly spaced. Active: #5a4187 icon + #191f28 label 11px weight 500. Inactive: #b0b8c1 icon + #8b95a1 label. Tab height 56px with safe area."

### Iteration Guide
1. Always use the full Pretendard font stack with Korean fallbacks
2. Primary interactive color is `#5a4187` (purple500) -- never `#0064FF` (brand blue)
3. Metrics: 700 weight, tabular numerals, right-aligned in lists
4. Grey scale has warm undertones: grey900 `#191f28`, grey50 `#f9fafb`
5. Border-radius: 8px inputs, 12px cards, 16px sheets, pill for toggles
6. Shadows are single-layer, pure black opacity, no colored tints
7. Mobile-first: design at 375px, 20px horizontal padding

---

## 10. Voice & Tone

Sunny speaks like an inspiring mentor and a passionate peer: energetic, professional, action-oriented, and jargon-free. We are a brand for university students solving social problems, so the tone should balance youthful enthusiasm with serious commitment. Korean is the primary voice. Emojis are used sparingly for encouragement, but the core message is always clear and text-driven.

| Context | Tone |
|---|---|
| CTAs | Action-oriented, encouraging (`미션 시작하기`, `솔루션 합류하기`, `문제 정의하기`) |
| Success toasts | Energetic and affirming (`크루 합류가 완료되었습니다. 임팩트 창출을 시작해볼까요!`). |
| Error messages | Specific + supportive + actionable. (`입력하신 정보를 다시 한번 확인해 주세요.`) |
| Onboarding screens | Inspiring and community-focused. Highlights "solving problems together." |
| Empty states | Explain the *why* and offer an action. (`아직 해결을 기다리는 숨겨진 문제가 많아요. 새로운 미션을 찾아볼까요?`) |

**Forbidden phrases:** Overly corporate or bureaucratic language (`당사는`, `본 기관은`). We use `Sunny는` or `우리는`.

## 11. Brand Narrative

**Sunny** is a changemaker program and social impact brand where university students come together to solve pressing social problems. We believe in the power of youth, creativity, and collective action. 

Our interface reflects this mission: it must feel accessible and vibrant (using Play Dot illustrations and Sunny Yellow) while maintaining enough structure and clarity to organize complex social projects, schedules, and team communications. We reject the stiff, institutional look of traditional volunteer organizations. Sunny's design is optimistic, modern, and built for collaboration.

## 12. Principles

1. **Space for Ideas.** Project descriptions and team updates need room to breathe. Use generous padding to make reading comfortable.
2. **Clear Call to Action.** Every screen should have a clear next step—whether it's applying for a program, reading a case study, or contacting a team.
3. **Optimism through Color.** Use Sunny Yellow (`#ffd73c`) to draw attention to achievements, deadlines, and key actions.
4. **Professionalism in Structure.** While the tone is youthful, the layout must be rock-solid. Students rely on Sunny for important career and extracurricular records.
5. **Community First.** Design for interaction. Profiles, project teams, and social impact metrics should be prominent.

## 13. Personas

**지윤 (Jiyoon), 21, Seoul.** 2nd-year Sociology major. Passionate about environmental issues but hasn't joined a formal project yet. Browses Sunny on her phone between classes. Needs clear, skimmable project summaries and a very simple "Apply" flow.

**민수 (Minsu), 24, Busan.** 4th-year Business major and project leader for a local education initiative. Uses Sunny primarily on Desktop (PC) to manage his team's schedule, read announcements, and submit activity reports. Values clear data tables and distinct visual hierarchy for administrative tasks.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | Single paragraph explaining *why* the screen is empty, plus one suggested action (e.g., `새로운 프로젝트 둘러보기`). Play Dot illustration of a student looking through a telescope or opening a door. |
| **Loading** | Skeleton blocks matching the layout at `#f2f4f6` (grey100). |
| **Error (inline field)** | `#f04452` (red500) 2px border on the input, error text below in red500 13px. |
| **Success (application submitted)** | Dedicated confirmation screen with a cheerful Play Dot illustration. `#03b26c` (green500) checkmark or Sunny Yellow star. Single button: `홈으로 돌아가기`. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state changes |
| `motion-fast` | 150ms | Hover, focus, small reveals, button press overlay |
| `motion-standard` | 250ms | The default — sheet opens, card expands, tab switches |
| `motion-slow` | 400ms | Emphasized transitions — success screens, illustration animations |

**Easings:**
- Use standard `cubic-bezier(0.4, 0.0, 0.2, 1)` for most UI transitions to keep it snappy.
- Use a slight spring `cubic-bezier(0.34, 1.56, 0.64, 1)` for playful interactions, like clicking an "Apply" button or revealing a Play Dot illustration, to reinforce the energetic brand identity.




---

## Included Components

The following components are part of this design system:

- Button
- Input
- Table
- Card
- Badge
- Tabs
- Dialog


---

## Iconography & SVG Guidelines

### Icon Library

Use a single, consistent icon library throughout the project. Recommended options:

- **Lucide React** (`lucide-react`): Default for shadcn/ui projects. 1,400+ icons, tree-shakeable, consistent 24x24 grid.
- **Radix Icons** (`@radix-ui/react-icons`): 300+ icons, 15x15 grid, minimal and geometric.
- **Heroicons** (`@heroicons/react`): 300+ icons by Tailwind team, outline and solid variants.

Pick ONE library and use it everywhere. Do not mix icon libraries within the same project.

### SVG Usage Rules

- All icons must be inline SVG components (not `<img>` tags) for color and size control.
- Icon size follows the type scale: 16px (inline), 20px (buttons), 24px (standalone).
- Icon color inherits from `currentColor` -- never hard-code fill/stroke colors.
- For custom/brand icons, export as SVG components with `currentColor` fills.
- Stroke width: 1.5px-2px for outline icons. Keep consistent across the project.

### Icon Sizing Scale

| Context | Size | Usage |
|---------|------|-------|
| Inline text | 16px (1rem) | Badges, labels, breadcrumbs |
| Button icon | 18px (1.125rem) | Icon buttons, CTA icons |
| Standalone | 24px (1.5rem) | Navigation, card icons |
| Feature | 32-48px | Hero sections, empty states |

### SVG Optimization

- Run all custom SVGs through SVGO before committing.
- Remove unnecessary attributes: `xmlns`, `xml:space`, editor metadata.
- Use `viewBox` instead of fixed `width`/`height` for scalability.


---

## Document Policies

### No Emojis

This design system must not use emojis in any UI element, component, label, status indicator, or documentation.
Use SVG icons from the chosen icon library instead. Emojis render inconsistently across platforms and break visual coherence.

- Status indicators: use colored dots or icon components, not emoji.
- Section markers: use text prefixes ("DO:" / "DON'T:") or icons, not checkmark/cross emojis.
- Navigation: use icon components, not emoji.

### Format Compliance

This document follows the Google Stitch DESIGN.md 9-section format:
1. Visual Theme & Atmosphere
2. Color Palette & Roles
3. Typography Rules
4. Component Stylings
5. Layout Principles
6. Depth & Elevation
7. Do's and Don'ts
8. Responsive Behavior
9. Agent Prompt Guide

Extended with:
- Iconography & SVG Guidelines
- Document Policies

Total target length: 250-400 lines. Keep sections concise and actionable.
