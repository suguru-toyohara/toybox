#!/bin/bash

# when you first time run this script, you need to run `gcloud auth login` to login to your google cloud account
# and then run `gcloud config set project <your-project-id>` to set your project id.
# Before running this script, you need to create google artifact registry and set the docker repository in the cloudbuild.yaml file.

set -euo pipefail

tag="latest"
build_path=./backend/github
project_id=aceoftechnology # replace with your project id


gcloud builds submit $build_path --config=$build_path/cloudbuild.yaml --substitutions=TAG_NAME="$tag"
gcloud run deploy github-activity-api \
  --image asia-northeast1-docker.pkg.dev/$project_id/cloudrun/github-activity-api:$tag \
  --region asia-northeast1
