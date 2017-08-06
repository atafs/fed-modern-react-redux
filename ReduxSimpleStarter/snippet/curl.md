## API call to create a new post
```curl
curl -v 'https://reduxblog.herokuapp.com/api/posts?key=AmericoGuidaAndHugoTomasLondon' \
-H "Content-Type: application/json" \
-X POST -d '
{
  "title": "New Post3",
  "categories": "Guida and Hugo Tomas",
  "content": "Adorable, Lovely and More!!"
}'
```
