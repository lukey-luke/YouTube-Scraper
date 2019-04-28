import requests
from bs4 import BeautifulSoup

SUBSCRIBERS_HTML_CLASS = 'yt-subscription-button-subscriber-count-branded-horizontal'

def clean_sub_count_string(sub_count_str):
    """remove commas and spaces, return a int for number of subscribers"""
    sub_count_str = sub_count_str.replace(',', '')
    sub_count_str = sub_count_str.replace(' ', '')
    return int(sub_count_str.strip())


def get_youtube_user_sub_count(username):
    channel_url = f'https://www.youtube.com/user/{username}'
    resp = requests.get(channel_url)
    html_content = resp.content
    soup = BeautifulSoup(html_content, 'html.parser')
    try:
        sub_count = soup.find("span", {"class": SUBSCRIBERS_HTML_CLASS}).get_text()
    except AttributeError:
        print('Looks like can no longer match this CSS class, HTML format has changed!')
    else:
        return clean_sub_count_string(sub_count)


print('check out Day[9]')
day9_sub_count = get_youtube_user_sub_count('day9tv')
print(f'got {day9_sub_count}')

