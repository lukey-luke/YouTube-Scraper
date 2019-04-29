# YouTube Scraper
- This project basically just served as a reason try out BeautifulSoup and use Flask a little bit.
- It turns out that it is very easy to get a specific element by using BeautifulSoup's find() method.
- If you actually wanted to get this data, [YouTube's API supports it](https://developers.google.com/youtube/v3/docs/channels#statistics.commentCount "YouTube's API supports it")
- Just ran a recurring function to check those for the Youtube rivals and throw that in a chart. EZ PZ

# Running Instructions
- Python 3.6+ is required
- Install pip packages `pip3 install -r requirements.txt`
- I recommend using a [virtual environment](https://www.geeksforgeeks.org/python-virtual-environment/ "virtual environment")
- just run the server from a bash shell `bash run-server.sh` and navigate to localhost:5000 in your browser :)
