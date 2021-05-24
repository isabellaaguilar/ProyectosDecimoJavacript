@echo off
rem curriculm por lote
color 05
echo.
echo.Generando Curriculum
md Curriculum

cd curriculum
md "datos personales"
md Estudios
md aficiones
md Amigos
cd "datos personales"
md familia
md "Pasatiempos familiares"
cd..
cd Estudios
md nivel
cd nivel
copy con Español.doc

copy con Ingles.ppt

cd..
cd..
cd aficiones
md pasatiempos
cd pasatiempos
copy con lista.xls

cd..
cd..
cd amigos
md cercanos
md lejanos
cd lejanos
copy con lista.txt

echo.
pause>nul