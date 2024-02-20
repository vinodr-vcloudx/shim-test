import subprocess
import sys
import os

from datetime import datetime

timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")


# join two strings
msg = " ".join(["Auto commit", timestamp])

repo_directory = os.getcwd()

subprocess.run(["git", "add", "."], cwd=repo_directory)
# commit file
subprocess.run(["git", "commit", "-m", msg], cwd=repo_directory)
# push
subprocess.run(["git", "push"], cwd=repo_directory)
