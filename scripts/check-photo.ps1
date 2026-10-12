Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('public/favicon/my_photo/resume_photo.png')
Write-Host "$($img.Width)x$($img.Height)"
$img.Dispose()