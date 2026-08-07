Add-Type -AssemblyName System.Drawing
$img = new-object System.Drawing.Bitmap 'src/assets/StayHome.png'
$pixel = $img.GetPixel(50,50)
Write-Host ($pixel.R.ToString("X2") + $pixel.G.ToString("X2") + $pixel.B.ToString("X2"))
