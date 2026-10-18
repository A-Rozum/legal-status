# legal-status

Legal Status UAB website homepage redesign mockup – static pages.
Built on Plyń (A-Rozum/plyn): system.yaml, elements.yaml. Built on Prastora: follow its jadro invariants (root font-size per regime, no clamp, lengths in rem).
Every change keeps `python .system/tools/plyn_validate.py . --formats .system/formats` passing.

All HTML pages in this design preview keep `<meta name="robots" content="noindex">` in the head. Keep preview copies excluded from indexing when preparing the production version.
