# Creates a basic favicon.ico from favicon-32x32.png (single frame)
# Run: powershell -ExecutionPolicy Bypass -File scripts/create-favicon-ico.ps1

Add-Type -AssemblyName System.Drawing

$srcPath = "public/favicon/favicon-32x32.png"
$dstPath = "public/favicon/favicon.ico"

if (-not (Test-Path $srcPath)) {
    Write-Error "Source not found: $srcPath"
    exit 1
}

$src = [System.Drawing.Image]::FromFile($srcPath)

$pngBytes = [System.IO.File]::ReadAllBytes($srcPath)

# ICONDIR (6 bytes)
$iconDir = New-Object byte[] 6
$iconDir[0] = 0; $iconDir[1] = 0
$iconDir[2] = 1; $iconDir[3] = 0
$iconDir[4] = 1; $iconDir[5] = 0

# ICONDIRENTRY (16 bytes)
$entry = New-Object byte[] 16
$entry[0] = 32; $entry[1] = 32; $entry[2] = 0; $entry[3] = 0
$entry[4] = 1; $entry[5] = 0; $entry[6] = 32; $entry[7] = 0

$size = $pngBytes.Length
$entry[8]  = [byte]($size -band 0xFF)
$entry[9]  = [byte](($size -shr 8) -band 0xFF)
$entry[10] = [byte](($size -shr 16) -band 0xFF)
$entry[11] = [byte](($size -shr 24) -band 0xFF)

$entry[12] = 22; $entry[13] = 0; $entry[14] = 0; $entry[15] = 0

$fs = New-Object System.IO.FileStream($dstPath, [System.IO.FileMode]::Create, [System.IO.FileAccess]::Write)
$fs.Write($iconDir, 0, $iconDir.Length)
$fs.Write($entry, 0, $entry.Length)
$fs.Write($pngBytes, 0, $pngBytes.Length)
$fs.Close()

$src.Dispose()
Write-Host "Created: $dstPath ($size bytes)"