import requests
import pandas as pd

url = "https://www.alphavantage.co/query"
params = {
    'function': 'NEWS_SENTIMENT',
    'tickers': 'AAPL',
    'apikey': 'demo'
}

def truncate_text(text, max_length=50):
    return text[:max_length] + '...' if len(text) > max_length else text

response = requests.get(url, params=params)
data = response.json()

if 'feed' in data:
    titles = []
    summaries = []
    
    for item in data['feed']:
        titles.append(truncate_text(item['title'], 40))
        summaries.append(truncate_text(item['summary'], 60))
    
    df = pd.DataFrame({
        'title': titles,
        'summary': summaries
    })
    
    df.index = range(len(df))
    
    pd.set_option('display.max_rows', None)
    pd.set_option('display.width', None)
    
    print(df)
else:
    print("No feed data found in the response")
