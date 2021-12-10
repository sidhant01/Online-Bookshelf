window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });

});

const headings = [];
const sections = [];

$("h2, h3").each(function() {
  headings.push("<" + this.tagName + ">" + $(this).html() + "</" + this.tagName + ">");
});
$("section").each(function() {
  sections.push(this.id);
});

console.log(sections);
console.log(headings);

var bar = "";
var last = 0;

for (var i = 0; i < headings.length; i++) {
  if (last == 0) {
    if (headings[i][2] == '2') {
      bar = bar + "<li><a href='#" + sections[i] + "'>" + headings[i] + "</a></li>";
    }
    else {
      last = 1;
      bar = bar.substring(0, bar.length - 5);
      bar = bar + "<ul><li class=''><a href='#" + sections[i] + "'>" + headings[i] + "</a></li>";
    }
  }
  else {
    if (headings[i][2] == '2') {
      last = 0;
      bar = bar + "</ul> </li> <li><a href='#" + sections[i] + "'>" + headings[i] + "</a></li>";
    }
    else {
      bar = bar + "<li class=''><a href='#" + sections[i] + "'>" + headings[i] + "</a></li>";
    }
  }
}

if (last == 1) {
  bar = bar + "</ul> </li>";
}

bar = "<nav class='section-nav'><ol>" + bar + "</ol></nav>";
console.log(bar);

var ele = document.getElementById('left');
var x = ele.innerHTML;
bar += x;
ele.innerHTML = bar;

console.log(ele)
