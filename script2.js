// $(document).ready(function(){
//     $('#submit').click(function(){
//         var url = " http://127.0.0.1:1313/api/modules?_module=iris&query=myquery"

// import { myInput } from "./script";

//         $.ajax({
//             url: url,
//             dataType: "json",
//             type:"get",
//             success: function (result){
//                 var table = $("<table>").append("<tr><td>Product</td><td>Item</td>");
//                 for (i = 0 ; i < result.length;i++){
//                     table.append("<tr><td>"+result[i]["a"] + "</td><td>"+result[i]["c"]+ "</td></tr>" );
//                 }
//                 $("#message").html(table)
//             },
//             error: function (error){
//                 alert(error);
//             }
//         });
//     });
// });
// function myFunction() {
// var input = document.getElementById("myText").value;
// console.log(input)
// var i = 0;
// $(document).ready(function () {
//   // API URL
//   var apiURL = "http://127.0.0.1:1313/api/modules?_module=iris&query="+input;
//   console.log(input)
//   // Send GET request to the API
//   $.get(apiURL, function (data) {
//     // Loop through the data to display each search result
//     $.each(data, function (index, item) {
//       // Create a div for each search result
//       // while(item)
//       if (index != "meta") {
//         while (item.results.length > i) {
//           console.log(item.results[0].t);
//           var result = $("<div class='search-result'></div>");
//           result.append(
//             "<h3><a href='" +
//               item.results[i].a +
//               "'>" +
//               item.results[i].t +
//               "</h3>"
//           );
//           result.append("<p>" + item.results[i].d + "</p>");
//           // result.append("<p><a href='" + item.results[i].a+ "'>Learn More</a></p>");
//           ++i;

//       // Append the search result to the search results container
//       $("#search-results").append(result);}}
//     });
//   });
// });
// }

const myInput = localStorage.getItem('Input');
var i = 0;
$(document).ready(function () {
  // API URL
  var apiURL = "http://127.0.0.1:1313/api/modules?_module=iris&query=" + myInput;

  // Send GET request to the API
  $.get(apiURL, function (data) {
    // Loop through the data to display each search result
    $.each(data, function (index, item) {
      // Create a div for each search result
      if (index != "meta") {
        while (item.results.length > i) {
          console.log(item.results[0].t);
          var result = $("<div class='search-result'></div>");
          result.append("<h3><a href='" + item.results[i].a +"'>" + item.results[i].t +"</h3>");
          result.append("<p>" + item.results[i].d + "</p>");

          ++i;

          // Append the search result to the search results container
          $("#search-results").append(result);
        }
      }
    });
  });
});
