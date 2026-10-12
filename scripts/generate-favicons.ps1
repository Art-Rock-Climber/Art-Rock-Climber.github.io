# Generates simple PNG favicons (indigo→magenta rounded square + white "X") into public/favicon
# Run: powershell -ExecutionPolicy Bypass -File scripts\generate-favicons.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$outDir = Join-Path $PSScriptRoot '..\public\favicon'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function New-Icon([int]$size, [string]$fileName) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = 'AntiAlias'
  $g.TextRenderingHint = 'AntiAlias'

  $w = $size
  $radius = [int]($w * 0.25)

  # Background: rounded rect with indigo→magenta gradient
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $r1 = New-Object System.Drawing.Rectangle(0, 0, $w, $w)
  $d = $radius * 2
  $path.AddArc(0, 0, $d, $d, 180, 90)
  $path.AddArc($w - $d, 0, $d, $d, 270, 90)
  $path.AddArc($w - $d, $w - $d, $d, $d, 0, 90)
  $path.AddArc(0, $w - $d, $d, $d, 90, 90)
  $path.CloseFigure()

  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    (New-Object System.Drawing.Point(0, 0)),
    (New-Object System.Drawing.Point($w, $w)),
    [System.Drawing.Color]::FromArgb(255, 88, 28, 135),
    [System.Drawing.Color]::FromArgb(255, 217, 70, 239)
  )
  $g.FillPath($brush, $path)

  # White "X" mark
  $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, ([Math]::Max(1, [int]($w * 0.08))))
  $pen.StartCap = 'Round'
  $pen.EndCap = 'Round'
  $m = $w * 0.32
  $g.DrawLine($pen, $m, $m, $w - $m, $w - $m)
  $g.DrawLine($pen, $w - $m, $m, $m, $w - $m)

  $bmp.Save((Join-Path $outDir $fileName), [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
  Write-Host "Created $fileName ($size x $size)"
}

New-Icon 16   'favicon-16x16.png'
New-Icon 32   'favicon-32x32.png'
New-Icon 180  'apple-touch-icon.png'
New-Icon 192  'icon-192x192.png'
New-Icon 512  'icon-512x512.png'

Write-Host "Done. Icons in $outDir"