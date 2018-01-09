<!DOCTYPE html>
<html lang="en">
<head>
  <title>alterBIT|Search</title>
  @extends('includes.fonts')
  @include('includes.navbar')
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet/less" type="text/css" href="/css/main.less">
    <script src="/js/less.js" type="text/javascript">
    </script>
</head>
<body>
    <div class="row">
        <div class="col-2"></div>
        <div class="col-10 src-page">
                  <h1>Search results:</h1>
        </div>
    </div>

    @foreach($entities as $entity)
    <div class="row " >
        <div class="col-2"></div>
        <a href="{{route('entity',['id'=> $entity->_id])}}">
            <div class="col-5 search-result">
              <div class="row">
                <div class="col-6 src-img">
                      <img src="{{$entity->imgurl }}">
                  </div>
                <div class="col-6">
                    <h2>{{$entity->name}}</h2>
                    <p>{{substr($entity->description,0,100)}}</p>
                </div>
              </div>
              </div>
          </a>

          <div class="col-2"></div>
          <div class="col-3 search-tags">
                  <h2>TAGS</h2>
                  @foreach($entity->tags as $tags)
                  <a href="" name="tags">{{$tags}}</a>
                  @endforeach
                  <div class="similar">
                  <h3>Similar searches</h3>
                  <ul>
                  <li><a href="">Search Name here.</a></li>
                  <li><a href="">Search Name here.</a></li>
                </ul>
                </div>
          </div>
  </div>
  @endforeach

  <div class="row footer" name="src-foot">
      <div class="col-10 footer" >
          <p>Designed by: <a href="">&nbsp;Aniruddha</a>&nbsp;and<a href="https://github.com/Dixon-Jose">&nbsp;Dixon</a></p>
      </div>
      <div class="col-2 footer">
          <a href="https://github.com/Dixon-Jose/alterBIT" title="github"></a>
      </div>
  </div>
</body>
</html>
