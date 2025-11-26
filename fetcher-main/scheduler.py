import schedule
import time
from fetcher.core import run_fetcher

def setup_daily_schedule():
    schedule.every().day.at("03:00").do(run_fetcher)
    print("Daily schedule enabled. Running at 03:00 every day.")
    while True:
        schedule.run_pending()
        time.sleep(60)
