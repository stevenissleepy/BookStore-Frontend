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

mv "$OUTPUT_FILE" "/mnt/c/Users/steven/Desktop/$OUTPUT_FILE"

echo "文件已保存为: /mnt/c/Users/steven/Desktop/$OUTPUT_FILE"
