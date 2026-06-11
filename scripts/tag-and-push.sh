#!/bin/bash
ENV=$1
# เช่น poc, uat, prod

# ตรวจสอบว่ามีการส่ง argument มาหรือไม่
if [ -z "$ENV" ]; then
  echo "❌ Missing environment argument."
  echo "Usage: ./scripts/tag-and-push.sh <env>"
  echo "Example: ./scripts/tag-and-push.sh poc"
  exit 1
fi

# สร้าง tag format เช่น uat-202506121015
TAG="${ENV}-$(date +'%Y%m%d%H%M')"

git tag "$TAG"
git push origin "$TAG"
echo "🚀 Tag pushed: $TAG"

# Dev แค่รัน: ./scripts/tag-and-push.sh uat