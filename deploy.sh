#!/usr/bin/env bash
# deploy.sh — Build + deploy di ITMatch su Netlify in un comando.
# Uso:  ./deploy.sh           -> build + deploy in PRODUZIONE (itmatch.netlify.app)
#       ./deploy.sh preview   -> build + deploy di ANTEPRIMA (URL temporaneo, non tocca il sito live)
#
# Il sito è già collegato (cartella .netlify/). Account: Ready4work (slug mandreano).

set -euo pipefail
cd "$(dirname "$0")"

MODE="${1:-prod}"

echo "▶ 1/2  Build del sito (astro build)..."
npm run build

if [ "$MODE" = "preview" ]; then
  echo "▶ 2/2  Deploy di ANTEPRIMA (non tocca la produzione)..."
  npx netlify deploy --dir=dist
else
  echo "▶ 2/2  Deploy in PRODUZIONE (itmatch.netlify.app)..."
  npx netlify deploy --prod --dir=dist
fi

echo "✅ Fatto."
