$ErrorActionPreference = "Stop"

$projectRoot = "C:\Users\leobe\Documents\Aplicacao_vibe code_CarlosHenrique\Site_Institucional_SeguraEPI"
$envFile = Join-Path $projectRoot ".env.local"
$logFile = Join-Path $projectRoot "reports\lead-replay.log"

New-Item -ItemType Directory -Force -Path (Split-Path $logFile -Parent) | Out-Null
Set-Location $projectRoot

function Resolve-WebhookUrl {
  if (Test-Path $envFile) {
    $envLine = Get-Content $envFile | Where-Object { $_ -match '^LEAD_WEBHOOK_URL=' } | Select-Object -First 1
    if ($envLine) {
      $value = $envLine.Substring("LEAD_WEBHOOK_URL=".Length).Trim().Trim('"').Trim("'")
      if (![string]::IsNullOrWhiteSpace($value)) {
        return $value
      }
    }
  }

  $userValue = [Environment]::GetEnvironmentVariable("LEAD_WEBHOOK_URL", "User")
  if (![string]::IsNullOrWhiteSpace($userValue)) {
    return $userValue
  }

  $machineValue = [Environment]::GetEnvironmentVariable("LEAD_WEBHOOK_URL", "Machine")
  if (![string]::IsNullOrWhiteSpace($machineValue)) {
    return $machineValue
  }

  return $null
}

$webhook = Resolve-WebhookUrl
if ([string]::IsNullOrWhiteSpace($webhook)) {
  Add-Content -Path $logFile -Value ("[{0}] SKIP replay: LEAD_WEBHOOK_URL nao configurado." -f (Get-Date -Format "s"))
  exit 0
}

$env:LEAD_WEBHOOK_URL = $webhook
npx tsx tools/replay-lead-fallback.ts *>> $logFile
