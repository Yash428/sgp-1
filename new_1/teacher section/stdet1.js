let d1 = document.createElement('tr');

let parent = document.getElementById("st-dt-body");
for(let i=1;i<4;i++)
{
    d1.id="S230"+i;
    d1.innerHTML=" <tr><td>"+i+"</td><td>Ayush</td><td><a href=\"#studet\" class=\"fill-button\">more</a></td></tr>";
    parent.appendChild(d1);
}
src="stdet1.js"