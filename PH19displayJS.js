
var name;
var text;
var array;
var tag;
var conf;

function showSuggest() {
  handle = document.getElementById("text").value;
}

function match(data) {
  console.log(data);
  tag = data[0].classifications[0].tag_name;
  conf = data[0].classifications[0].confidence;
}

function search(data) {
  console.log(data);
}

$(document).ready(function() {
  document.getElementById("twitterhandle").addEventListener("input", e => {
    name = $("#twitterhandle").val();
  });

  var el = document.getElementById("go");
  if (el) {

    document.getElementById("go").addEventListener("click", () => {
      var message = {
        data: [name]
      };

          $.ajax({
            url:
              "https://api.monkeylearn.com/v3/classifiers/cl_WjhhTXCY/classify/",
            type: "post",
            data: JSON.stringify(message),
            headers: {
              Authorization: "Token 22081ce1415a42f254a975971d73053f51ddbf36",
              "Content-Type": "application/json"
            },
            success: data => {
              match(data);
              console.log(data[0].classifications[0].tag_name)
              console.log(data[0].classifications[0].confidence)

              $('#result').html(data[0].classifications[0].tag_name);
              $('#confidence').html(data[0].classifications[0].confidence);
            }
          });

          // search(data);
        },


    );
  }
});
