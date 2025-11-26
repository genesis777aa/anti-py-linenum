# cython: language_level=3
import hashlib
import requests
import os
from datetime import datetime

def fetch_and_store(str url, str file_path):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        content = response.content

        with open(file_path, "wb") as f:
            f.write(content)

        sha = hashlib.sha256(content).hexdigest()
        timestamp = datetime.utcnow().isoformat() + "Z"
        return sha, timestamp
    except Exception as e:
        return None, str(e)

