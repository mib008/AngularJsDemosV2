set path=%path%;D:\GitHub\Java\jre1.8.0_60\bin
set compilerPath=D:/GitHub/compiler.jar

if exist .\assets (
    rd /q /s .\assets
)

md .\assets

xcopy .\src .\assets /y /e /EXCLUDE:web_exclude.txt

md .\assets\js

java -jar %compilerPath% --js ./src/js/animationVer2.js --js_output_file ./assets/js/animationVer2.js

pause