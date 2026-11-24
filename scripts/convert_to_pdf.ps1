$docPath = 'D:\saka-digipro\saka-digipro\Template_Laporan_PKL_Universal.docx'
$pdfPath = 'D:\saka-digipro\saka-digipro\public\Template_Laporan_PKL_Universal.pdf'

try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $doc = $word.Documents.Open($docPath)
    $doc.SaveAs([ref]$pdfPath, [ref]17)
    $doc.Close()
    $word.Quit()
    [System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
    Write-Host "SUCCESS: PDF created"
    Get-Item $pdfPath | Select-Object Name, Length
} catch {
    Write-Host "FAILED: " $_.Exception.Message
}
