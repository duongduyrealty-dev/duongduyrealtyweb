#!/bin/bash

echo "========================================"
echo "CAI DAT THU VIEN CHO DU AN"
echo "Installing Libraries for Project"
echo "========================================"
echo ""

# Kiem tra xem Node.js da duoc cai dat chua
if ! command -v node &> /dev/null
then
    echo "[ERROR] Node.js chua duoc cai dat tren may nay!"
    echo "[ERROR] Node.js is not installed on this machine!"
    echo ""
    echo "Vui long tai va cai dat Node.js tu: https://nodejs.org/"
    echo "Please download and install Node.js from: https://nodejs.org/"
    exit 1
fi

# Kiem tra xem npm da duoc cai dat chua
if ! command -v npm &> /dev/null
then
    echo "[ERROR] npm chua duoc cai dat tren may nay!"
    echo "[ERROR] npm is not installed on this machine!"
    exit 1
fi

echo "[INFO] Dang kiem tra phien ban Node.js va npm..."
echo "[INFO] Checking Node.js and npm versions..."
echo ""
node --version
npm --version
echo ""

echo "[INFO] Dang cai dat cac thu vien..."
echo "[INFO] Installing dependencies..."
echo ""

npm install --legacy-peer-deps

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "[SUCCESS] Cai dat thanh cong!"
    echo "[SUCCESS] Installation completed successfully!"
    echo "========================================"
    echo ""
    echo "Ban co the chay du an bang lenh:"
    echo "You can run the project with:"
    echo "  npm run dev"
    echo ""
else
    echo ""
    echo "========================================"
    echo "[ERROR] Cai dat that bai!"
    echo "[ERROR] Installation failed!"
    echo "========================================"
    echo ""
    echo "Vui long kiem tra ket noi internet va thu lai."
    echo "Please check your internet connection and try again."
    echo ""
    exit 1
fi

