@echo off
set ROOT=C:\Users\adiav\.zenflow\worktrees\i-want-to-build-a-website-that-i-07a7
set ATT=%ROOT%\.zenflow-attachments
set IMG=%ROOT%\images

if not exist "%IMG%" (
    md "%IMG%"
)

copy /Y "%ATT%\ae33bafc-1d8d-4ed4-bcd6-6d136a87b530.png" "%IMG%\amy-halftone.png"
copy /Y "%ATT%\edf354b9-4a42-473b-af5e-0af0be7027fa.png" "%IMG%\amy-threshold.png"
copy /Y "%ATT%\522c7204-eaee-421b-bed2-1b49434ac3e8.png" "%IMG%\brian-halftone.png"
copy /Y "%ATT%\5f289cb8-2239-4285-b344-a685cfad030c.png" "%IMG%\brian-threshold.png"
copy /Y "%ATT%\85b2235f-b6a3-4884-8c78-66d7f9d17856.png" "%IMG%\janis-threshold.png"
copy /Y "%ATT%\d2242a1e-b1d1-41db-b8bb-a1f26f40af06.png" "%IMG%\jim-halftone.png"
copy /Y "%ATT%\8b0aa598-7952-47e0-94f8-97193439e924.png" "%IMG%\jimi-halftone.png"
copy /Y "%ATT%\1c67dd60-42a4-47df-b7ad-dfa5100b7563.png" "%IMG%\jimi-threshold.png"
copy /Y "%ATT%\f553f858-abbe-4a90-8a31-08021c6faad3.png" "%IMG%\kurt-halftone.png"
copy /Y "%ATT%\b9043e88-2c7e-46d2-8000-735af0f09d81.png" "%IMG%\kurt-threshold.png"
copy /Y "%ATT%\add4eace-96e6-4d94-8f6b-bdab7e1ceea6.png" "%IMG%\robert-halftone.png"
copy /Y "%ATT%\76726091-aeca-4d4d-8b0a-7238feda0a3c.png" "%IMG%\robert-threshold.png"

echo Done.
dir "%IMG%"
