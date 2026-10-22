Add-Type -AssemblyName System.Drawing

$imgDir = "$PWD\extracted_images"
$outDir = "$PWD\src\assets\images"
New-Item -ItemType Directory -Force -Path $outDir | Out-Null

function Crop-Image($sourcePath, $outPath, $x, $y, $width, $height) {
    $src = [System.Drawing.Bitmap]::FromFile($sourcePath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $width, $height)
    $dest = New-Object System.Drawing.Bitmap($width, $height)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $src.Dispose()
    
    # Save as JPEG with 92% quality
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.FormatDescription -eq "JPEG" }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]92)
    $dest.Save($outPath, $codec, $encoderParams)
    $dest.Dispose()
    Write-Host "Created: $outPath ($width x $height)"
}

# 1. Page 1 Hero cover photo: x=1282, y=0, w=1718, h=1855
Crop-Image "$imgDir\page_1_Im5.jpg" "$outDir\hero_cover.jpg" 1282 0 1718 1855

# 2. Page 2 Full & splits
Crop-Image "$imgDir\page_1_Im10.jpg" "$outDir\part1_full.jpg" 1282 0 1718 1855
Crop-Image "$imgDir\page_1_Im10.jpg" "$outDir\part1_noodles.jpg" 1282 0 1718 920
Crop-Image "$imgDir\page_1_Im10.jpg" "$outDir\part1_fried_rice.jpg" 1282 936 1718 919

# 3. Page 3 Full & splits
Crop-Image "$imgDir\page_1_Im15.jpg" "$outDir\part2_full.jpg" 1282 0 1718 1855
Crop-Image "$imgDir\page_1_Im15.jpg" "$outDir\part2_lasagna.jpg" 1282 0 1718 920
Crop-Image "$imgDir\page_1_Im15.jpg" "$outDir\part2_penne.jpg" 1282 936 1718 919

# 4. Page 4 After Party
Crop-Image "$imgDir\page_1_Im20.jpg" "$outDir\after_party_platter.jpg" 1282 0 1718 1855

# 5. Page 5 Terms
Crop-Image "$imgDir\page_1_Im25.jpg" "$outDir\terms_full.jpg" 1282 0 1718 1855
Crop-Image "$imgDir\page_1_Im25.jpg" "$outDir\terms_bowls.jpg" 1282 0 1718 920
Crop-Image "$imgDir\page_1_Im25.jpg" "$outDir\terms_macaroni.jpg" 1282 936 1718 919

Write-Host "All assets cropped successfully!"
