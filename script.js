let query = document.querySelector('.query');
let submit = document.querySelector('.submit')

submit.onclick = function()
{
    let url = "https://www.qwant.com/?q="+query.value+"&t=web";
    window.open(url);
}
  