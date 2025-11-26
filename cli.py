import argparse
from fetcher.core import run_fetcher
from fetcher.scheduler import setup_daily_schedule
from fetcher.config import DAILY_RUN_ENABLED

parser = argparse.ArgumentParser(description="Run the fetcher tool.")
parser.add_argument("--daily", action="store_true", help="Enable daily scheduled run")

args = parser.parse_args()

if args.daily:
    setup_daily_schedule()
else:
    run_fetcher()
