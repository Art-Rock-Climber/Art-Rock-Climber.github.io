# Generates public/assets/og-image.png (1200x630) — social preview card.
# Run from repo root: powershell -ExecutionPolicy Bypass -File scripts\generate-og-image.ps1

Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = 'Stop'

$W = 1200
$H = 630

$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# --- Background: deep navy diagonal gradient --------------------------------
$bgRect = New-Object System.Drawing.Rectangle(0, 0, $W, $H)
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  $bgRect,
  [System.Drawing.Color]::FromArgb(255, 20, 10, 50),    # #140a32 (deep indigo)
  [System.Drawing.Color]::FromArgb(255, 3, 7, 18),      # #030712 (near-black navy)
  45.0
)
$g.FillRectangle($bgBrush, $bgRect)

# --- Indigo + magenta glow circles (duotone vibe) ---------------------------
$glow1 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(60, 59, 7, 100))
$g.FillEllipse($glow1, 760, -160, 620, 620)
$glow2 = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(45, 192, 38, 211))
$g.FillEllipse($glow2, 930, 330, 420, 420)
$glow1.Dispose()
$glow2.Dispose()

# --- Monogram tile ---------------------------------------------------------
$tile = New-Object System.Drawing.Rectangle(80, 88, 124, 124)
$tileBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  $tile,
  [System.Drawing.Color]::FromArgb(255, 88, 28, 135),   # #581c87
  [System.Drawing.Color]::FromArgb(255, 217, 70, 239),  # #d946ef
  30.0
)
$g.FillRectangle($tileBrush, $tile)
$tileBrush.Dispose()

$sf = New-Object System.Drawing.StringFormat
$sf.Alignment = [System.Drawing.StringAlignment]::Center
$sf.LineAlignment = [System.Drawing.StringAlignment]::Center
$monoFont = New-Object System.Drawing.Font('Segoe UI', 52, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Point)
$g.DrawString('BV', $monoFont, [System.Drawing.Brushes]::White, (New-Object System.Drawing.RectangleF(80, 88, 124, 124)), $sf)
$monoFont.Dispose()

# --- Title -----------------------------------------------------------------
$titleFont = New-Object System.Drawing.Font('Segoe UI', 64, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Point)
$g.DrawString('Банников Владислав', $titleFont, [System.Drawing.Brushes]::White, 80, 272)

# --- Accent underline (indigo -> magenta gradient) --------------------------
$barRect = New-Object System.Drawing.Rectangle(82, 376, 260, 10)
$barBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  $barRect,
  [System.Drawing.Color]::FromArgb(255, 88, 28, 135),
  [System.Drawing.Color]::FromArgb(255, 245, 208, 254),
  0.0
)
$g.FillRectangle($barBrush, $barRect)
$barBrush.Dispose()

# --- Subtitle --------------------------------------------------------------
$subFont = New-Object System.Drawing.Font('Segoe UI', 30, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Point)
$subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 245, 208, 254)) # #f5d0fe
$g.DrawString('Портфолио — C# / .NET · SQL · Аналитика данных', $subFont, $subBrush, 80, 414)

# --- URL -------------------------------------------------------------------
$urlFont = New-Object System.Drawing.Font('Segoe UI', 24, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Point)
$urlBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 113, 113, 122)) # #71717a
$g.DrawString('art-rock-climber.github.io', $urlFont, $urlBrush, 80, 548)

$subBrush.Dispose()
$urlBrush.Dispose()
$titleFont.Dispose()
$subFont.Dispose()
$urlFont.Dispose()
$bgBrush.Dispose()

# --- Save ------------------------------------------------------------------
$outDir = Join-Path $PSScriptRoot '..\public\assets'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
$outPath = Join-Path $outDir 'og-image.png'
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
$g.Dispose()

Write-Host "Saved: $outPath ($W x $H)"
