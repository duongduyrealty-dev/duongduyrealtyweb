@echo off
echo ========================================
echo CAI DAT THU VIEN CHO DU AN
echo Installing Libraries for Project
echo ========================================
echo.

REM Kiem tra xem Node.js da duoc cai dat chua
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Node.js chua duoc cai dat tren may nay!
    echo [ERROR] Node.js is not installed on this machine!
    echo.
    echo Vui long tai va cai dat Node.js tu: https://nodejs.org/
    echo Please download and install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

REM Kiem tra xem npm da duoc cai dat chua
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [ERROR] npm chua duoc cai dat tren may nay!
    echo [ERROR] npm is not installed on this machine!
    pause
    exit /b 1
)

echo [INFO] Dang kiem tra phien ban Node.js va npm...
echo [INFO] Checking Node.js and npm versions...
echo.
node --version
npm --version
echo.

echo [INFO] Dang cai dat cac thu vien...
echo [INFO] Installing dependencies...
echo.

npm install --legacy-peer-deps

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================
    echo [SUCCESS] Cai dat thanh cong!
    echo [SUCCESS] Installation completed successfully!
    echo ========================================
    echo.
    echo Ban co the chay du an bang lenh:
    echo You can run the project with:
    echo   npm run dev
    echo.
) else (
    echo.
    echo ========================================
    echo [ERROR] Cai dat that bai!
    echo [ERROR] Installation failed!
    echo ========================================
    echo.
    echo Vui long kiem tra ket noi internet va thu lai.
    echo Please check your internet connection and try again.
    echo.
)

pause

