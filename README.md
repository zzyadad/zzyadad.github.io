# Zhengyang Zhang - Academic Homepage

A buildless academic website for GitHub Pages. Open `index.html` locally; no Node.js, Jekyll, or installation is required.

## Current design and content

- Dark navigation, independent white module cards with soft layered shadows and clear spacing, and a quiet animated background. News uses a fixed-height area with an always-visible native scrollbar and keyboard scrolling.
- First-person English introduction on the left, portrait on the right, and official university emblem before the institution line. Email, Google Scholar, and GitHub links sit below the introduction.
- English page text throughout. Advisor: Professor Guohua Lv. Research interest: Object Detection. The university link, advisor name, and research phrase are bold blue.
- Standardized paper announcements in News with month-level publication dates, plus the National Scholarship and First-Class Academic Scholarship dated October 2026, as supplied by the owner.
- Main Publications: HPHF-MMDet, MDPF-Net, MDSF-Det, EGMR-YOLO. Equal first authorship counts as main work.
- Collaborative Publications: PRCV 2025, followed by the ICASSP 2025 paper with its owner-confirmed framework image.
- Six papers, six framework figures, source-linked gray publication badges, image enlargement, and mobile navigation.
- Motion stops with the system reduced-motion preference and pauses while the page is hidden.

## Publish to GitHub Pages

The intended repository is `zzyadad/zzyadad.github.io`.

1. Put this directory's contents at the repository root. `index.html` and `assets/` must be directly at the root, without an extra enclosing folder.
2. Open **Settings > Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/(root)**. Save.
4. Wait for the Pages deployment to finish and visit https://zzyadad.github.io/.

Official guide: https://docs.github.com/en/pages/quickstart

## Editing

| Content | Location |
| --- | --- |
| Name, role, university, contact, research interests | `index.html`, `id="about"` |
| News | `index.html`, `id="news"` |
| Education | `index.html`, `id="education"` |
| Publications and groups | `index.html`, `id="publications"` |
| Styles | `assets/site.css` |
| Navigation, enlarged figures, animated background | `assets/site.js` |
| Portrait, university emblem, framework figures | `assets/images/` |
| Classification and impact-factor sources | `sources.json` |

## Content and verification notes

- The role is **Graduate Student**, with graduate education from **2024 to present**. The owner confirmed Professor Guohua Lv as the advisor and M.S. in Computer Technology as the graduate program. No department or earlier education was inferred. The education period, 2024–Present, is italicized, and the official university emblem appears before the education entry. The redundant role/date subtitle was removed from the profile.
- News dates use publication months and are sorted newest first: TCSVT 2026.09, ICME 2026.06 (owner-supplied), ICASSP 2026.05, PRCV 2026.01, and ICASSP 2025.04. The IEEE dates are formal issue/proceedings dates, not first-online or acceptance dates.
- The October scholarship year is interpreted as **2026** from the conversation date.
- Journal/conference type and CCF grades are shown for all six papers. Conferences do not have Journal Impact Factors.
- TCSVT is marked **JIF 10.8 (2025)**, based on the IEEE September 2026 title list. The table states that the 2025 JCR study was released in June 2026.
- CCF: TCSVT, ICME and ICASSP are B; PRCV is C. These grades follow the accessible official category list. No claim is made that a final seventh-edition PDF was inspected.
- No CAS division was inferred from JCR Q1. CCF grades are used for the requested classification badges.
- Equal-contribution marks for HPHF-MMDet and MDPF-Net follow the explicit statements in their manuscripts.
- PRCV is labeled by its conference year, **2025**; Springer lists its online publication date as 13 January 2026.
- The portrait and five framework figures are the exact owner-supplied images. The owner confirmed replacing the PRCV image with Fig. 2 from the authors' public manuscript. Original paper files were left unchanged.
- The university emblem is the unmodified official university image; its intrinsic lettering is retained.

## Sources

- Owner-supplied profile, achievements, portrait, paper information, and figure instructions.
- GitHub: https://github.com/zzyadad
- Scholar: https://scholar.google.com.hk/citations?user=Dr9ZS2wAAAAJ&hl=en
- University visual identity: https://www.qlu.edu.cn/_t2039/bsxt/list.htm
- CCF category list: https://www.ccf.org.cn/Academic_Evaluation/CGAndMT/
- IEEE title list: https://open.ieee.org/wp-content/uploads/IEEE-Title-List-September-2026-CAPES.pdf
- HPHF-MMDet: https://github.com/zzyadad/HPHF-MMDet
- MDSF-Det: https://github.com/zzyadad/MDSF-Det-2025
- ICASSP 2026: https://www.cmsworkshops.com/ICASSP2026/view_paper.php?PaperNum=2598
- ICASSP 2026: https://www.cmsworkshops.com/ICASSP2026/view_paper.php?PaperNum=2601
- ICASSP 2025: https://doi.org/10.1109/ICASSP49660.2025.10888968
- PRCV: https://link.springer.com/chapter/10.1007/978-981-95-5755-4_30
- PRCV manuscript: https://raw.githubusercontent.com/yaobaimiao/UMS-CoSOD/main/paper_id_879.pdf

The design follows the owner's references at https://ruizhao26.github.io/ and https://zhoushen1.github.io/: dark navigation, factual profile, and separate module cards. Personal content and pictures from the reference site were not copied.
The owner confirmed that the previously supplied FPM/CFE/FEM/ALM image is the ICASSP 2025 framework. It was added unchanged and supports the same enlargement interaction as the other figures. This identification is owner-confirmed; the publisher PDF was unavailable for independent comparison.
