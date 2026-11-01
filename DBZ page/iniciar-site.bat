@echo off
chcp 65001 >nul
echo ========================================================
echo   DB UNIVERSE - SERVIDOR LOCAL + ORACULO Z (NEMOTRON)
echo ========================================================
echo.
echo Iniciando servidor em http://localhost:8000 ...
start "" http://localhost:8000
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
