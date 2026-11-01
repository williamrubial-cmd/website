
$response = Invoke-WebRequest -Uri 'https://www.google.com/search?q=dragon+ball&udm=2' -Headers @{'User-Agent'='Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
$pattern = 'https://encrypted-tbn0\.gstatic\.com/images\?q=tbn:[A-Za-z0-9_-]+'
$matches = [regex]::Matches($response.Content, $pattern)
foreach ($m in $matches) { Write-Output $m.Value }

