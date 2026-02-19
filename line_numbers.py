from pathlib import Path

text = Path('app/retira/page.tsx').read_text('utf-8').splitlines()
ranges = [(1,80),(90,180),(180,260)]

for start,end in ranges:
    for i in range(start-1,end):
        if i < len(text):
