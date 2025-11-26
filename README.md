#  Fetcher TOOL

## Overview: 
Cython-Based Fetcher
* 🦾⚙️🔧 
</>

<!-- ABOUT THE PROJECT -->
## 모 Purpose: 
Fetch content from a list of URLs (from sample JSON), compute SHA-256 hashes, and store the content locally.
 
_________________________
### Requirements:
* 𓏠 Python 3.8+
* 𓏠 Cython
* 𓏠 'requests', 'schedule'
-------------------------
 
 
## 💡 Features:
* ☑ Reads from a JSON config
* ☑ Fetches content from URLs listed in `sources.json`
* ☑ Stores content in `storage/` directory & autom-debug through FPC [https://www.freepascal.org/daily/doc/fpctoc.html] custom library
* ☑ Computes and stores SHA-256 hash for integrity
* ☑ Updates the JSON file with hash and timestamp
* ☑ Logs success and errors + runs semanticErrors debug 
* ☑ Optional daily scheduled run


## 🧱 File Structure:
```
fetcher_tool/
├── fetcher/
│   ├── __init__.py
│   ├── core.pyx        # dApp main logic
│   ├── scheduler.py    # Optional daily run logic
│   └── config.py       # Settings toggle
├── sources.json        # JSON config for data retrieve
└── storage/            # Folder for downloaded content + bug-cache.cc
├── cli.py              # Command-line interface
├── setup.py            # Install script
├── README.md
└── tests/
    └── test_core.py
```

## 🧪 Configuration
To edit sources.json in order to manage your data root, each entry should include:
```
{
  "id": "src-001",
  "title": "Example Source",
  "url": "https://example.com/data",
  "sha256": null,
  "requires_login": false,
  "active": true
}
```

## 💾 Output:
* 𓏠 Downloaded files saved in storage/
* 𓏠 Logs written to fetcher.log
* 𓏠 Updated hashes and timestamps in sources.json


<!-- GETTING STARTED -->
## 🛠 To install:
```bash
git clone https://github.com/genesis777a/fetcher_tool.git
cd fetcher_tool
pip install 
fetcher --daily      # To enable daily run / 03:00 UTC
fetcher              # To run once
```

### 🧰 Development
To recompile Cython:
```
python setup.py build_ext --inplace
```

*
*

             __,---.__
        __,-'         `-.   ༘⋆ 🏷
       /_ /_,'           \&
       _,''               \
      (")            .    |
       ``--|__|--..-'`.__|⠀⠀
More open-source tools [Apache/Hadoop GitBox*]:
* https://git.apache.org/repos/asf
* https://cwiki.apache.org/confluence/display/PIG/PigTools
__________________
$$Genesis24AG$$
###
©GNU v3.0 license
</end>
