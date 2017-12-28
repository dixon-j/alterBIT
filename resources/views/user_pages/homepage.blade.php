<!DOCTYPE html>
<head>
  <title>alterBIT | The unconventional way of life</title>
  @extends('user_pages.fonts')
  <link rel="stylesheet/less" type="text/css" href="{{ URL::to('css/main.less')}}">
  <!-- <link rel="stylesheet" type="text/css" href="/bootstrap-3.3.7-dist/css/bootstrap.min.css-" -->
  <script src="{{URL::to('js/less.js')}}" type="text/javascript">
  </script>
  <script>
  function getfocus() {
      document.getElementById("search").value="";
      document.getElementById("search").focus();

  }
  </script>
</head>

<body>
<div class="row">
    <div class="col-12 menu-bar">
          <a href="{{URL::to('/')}}">alterBiT<span> | The Unconventional Way of Life</span></a>
    </div>
    <div class="col-12 menu">
        <input type="search" placeholder="Search" id="search">
    </div>
</div>


<div class="row">
  <div class="col-2 element" style="background-color:#fff"></div>
            <div class="col-8 element">
          <h2>Element Name
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  </div>
</div>

<div class="row">
    <div class="col-12 partition">
          <h2>The Alternatives are:</h2>
    </div>
</div>

<div class="row">
    <div class="col-8 alter">
    </div>
</div>

<div class="row footer">
    <div class="col-10 footer" >
        <a href="" title="design">Designed by: Aniruddha and Dixon</a>
    </div>
    <div class="col-2 footer">
        <a href="https://github.com/Dixon-Jose/alterBIT" title="github"></a>
    </div>

</div>
</body>
</html>
