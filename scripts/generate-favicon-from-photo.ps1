# Generates full favicon set from public/favicon/my_photo/resume_photo.png
# Run: powershell -ExecutionPolicy Bypass -File scripts\generate-favicon-from-photo.ps1

Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

$srcPath = "public/favicon/my_photo/resume_photo.png"
$outDir  = "public/favicon"

if (-not (Test-Path $srcPath)) {
    Write-Error "Source not found: $srcPath"
    exit 1
}

$src = [System.Drawing.Image]::FromFile($srcPath)
Write-Host "Source: $($src.Width)x$($src.Height)"

function SavePng($bmp, $path) {
    $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    Write-Host "  Saved: $path ($($bmp.Width)x$($bmp.Height))"
}

function ResizeAndSave($src, $size, $filename) {
    $bmp = New-Object System.Drawing.Bitmap($size, $size)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.DrawImage($src, 0, 0, $size, $size)
    $g.Dispose()
    SavePng $bmp (Join-Path $outDir $filename)
    $bmp.Dispose()
}

# --- PNG sizes for web manifest / PWA --------------------------------
$targets = @(
    @{ size = 16;  name = "favicon-16x16.png" },
    @{ size = 32;  name = "favicon-32x32.png" },
    @{ size = 48;  name = "favicon-48x48.png" },
    @{ size = 180; name = "apple-touch-icon.png" },
    @{ size = 192; name = "icon-192x192.png" },
    @{ size = 512; name = "icon-512x512.png" }
)

foreach ($t in $targets) {
    ResizeAndSave $src $t.size $t.name
}

$src.Dispose()

Write-Host ("Done. Files in " + $outDir + ":")
Get-ChildItem $outDir -Filter *.png | Select-Object Name, Length, LastWriteTime | Format-Table -AutoSize