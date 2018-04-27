Using dynamic imports might be to clever for webpack - eg cause of the following requiring
wepback will try to bundle image.png and image.graphml (and fail with second,
when there is no loader for .graphml specified).

```js
    const imgName = 'image.png'
    require('src/a/' + imgName);
```

```
    src  
    |-- a  
    |   |  image.png  
    |   |  image.grahml  
```

Hence this dir for still keeping track of these resources in git.