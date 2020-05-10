# shorten-url
This is a  microservice to shorten the URL.
So this api performs three task.
1. Get the orignal URL and SAVE in the server and generate the shorten URL.

2. Get All the shorten URL.

3. Decode the URL and send redirct to the oringal url.

The API is hosted in https://drewdoor-shorten-api.herokuapp.com/

## POST REQUEST:-
### URL: https://drewdoor-shorten-api.herokuapp.com/short/new
it takes only one input in body called url.  
example<br/>
{<br/>
  "url":"www.google.com"
<br/>}<br/>

in response it gives.  
{  
      
    "orignalUrl": "https://www.gmail.com/",  
    "shortUrl": "cY6d80yl9",  
     
}

## Get all short url saved in server
### URL : https://drewdoor-shorten-api.herokuapp.com/short
Response:-  
  [  
    {  
  orignalUrl: "https://www.facebook.com/photo?fbid=1691228797682632&set=a.184052111733649",  
  shortUrl: "erRXv3zXB"  
  },  
  {  
  orignalUrl: "https://www.gmail.com/",  
  shortUrl: "cY6d80yl9"  
    }  
  ]  
  
  ## Redirect to the orignal url
  ### URL: https://drewdoor-shorten-api.herokuapp.com/short/{ short-url }  
  Example:  
  https://drewdoor-shorten-api.herokuapp.com/short/cY6d80yl9  
  
  this will redicet to the gmail.  
  
  
