#!/bin/bash

set -euo pipefail

directory=$1
if [ -z "$1" ]; then
  echo "Please provide the directory to initialize the backend"
  exit 1
fi

python -V

if [ -d "./$directory/venv" ]; then
  rm -ri ./$directory/venv
fi

python3 -m venv ./$directory/venv
. ./$directory/venv/bin/activate
pip install -r ./$directory/requirements.txt
