#!/bin/bash

set -e

OUTPUT_FILE="BookStore-Frontend.zip"

echo "开始打包到 ${OUTPUT_FILE}"

zip -rq "${OUTPUT_FILE}" . \
    -x "node_modules/*" \
    -x ".git/*" \
    -x "pack.sh" \
    -x "data.md" \
    -x "${OUTPUT_FILE}"

# --- 脚本结束 ---
echo "打包完成"