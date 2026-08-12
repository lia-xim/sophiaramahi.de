@echo off
rem Startet die lokale Konzeptvorschau von sophiaramahi.de und oeffnet den Browser.
rem Einfach doppelklicken. Zum Beenden das Fenster schliessen oder Strg+C.

title Konzeptvorschau sophiaramahi.de
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 goto nonode

echo.
echo   Konzeptvorschau sophiaramahi.de
echo   ------------------------------------------------
echo   Der Browser oeffnet sich gleich von selbst.
echo   Dieses Fenster muss offen bleiben.
echo.

node "tools\preview-server.mjs" --open

echo.
echo   Der Server wurde beendet.
pause
exit /b 0

:nonode
echo.
echo   Node.js wurde auf diesem Rechner nicht gefunden.
echo   Die Uebersicht wird stattdessen direkt als Datei geoeffnet.
echo.
echo   Hinweis: Ohne Server funktionieren Showreel und die eingebettete
echo   Mobil-Vorschau je nach Browser nur eingeschraenkt.
echo.
start "" "design\concepts\index.html"
pause
exit /b 0
