import json
import os
import logging
import tempfile
import pytest

from fetcher.core import fetch_and_store

def test_fetch_and_store_success():
    url = "https://www.example.com"
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        file_path = tmp.name

    sha, timestamp = fetch_and_store(url, file_path)

    assert sha is not None
    assert timestamp.endswith("Z")
    assert os.path.exists(file_path)

    os.remove(file_path)

def test_fetch_and_store_invalid_url():
    url = "https://invalid.example.com/404"
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        file_path = tmp.name

    sha, error = fetch_and_store(url, file_path)

    assert sha is None
    assert "404" in error or "Failed" in error

    os.remove(file_path)

with open("sources.json", "r") as f:
    data = json.load(f)

os.makedirs("storage", exist_ok=True)

for source in data["sources"]:
    if not source["active"]:
        continue

    url = source["url"]
    file_name = source["id"] + ".bin"
    file_path = os.path.join("storage", file_name)

    sha, result = fetch_and_store(url, file_path)

    if sha:
        source["sha256"] = sha
        source["last_checked"] = result
    else:
        print(f"Error fetching {url}: {result}")

with open("sources.json", "w") as f:
    json.dump(data, f, indent=2)

# Setup logging
logging.basicConfig(
    filename="fetcher.log",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

# Inside your loop:
if sha:
    logging.info(f"Fetched {url} → SHA: {sha}")
else:
    logging.error(f"Failed to fetch {url} → Error: {result}")

MAX_RETRIES = 3

for source in data["sources"]:
    if not source["active"]:
        continue

    url = source["url"]
    file_name = source["id"] + ".bin"
    file_path = os.path.join("storage", file_name)

    for attempt in range(MAX_RETRIES):
        sha, result = fetch_and_store(url, file_path)
        if sha:
            source["sha256"] = sha
            source["last_checked"] = result
            break
        else:
            logging.warning(f"Retry {attempt+1} for {url} → {result}")
    else:
        logging.error(f"All retries failed for {url}")
