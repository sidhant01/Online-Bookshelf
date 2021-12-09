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

  // Track all sections that have an `id` applied
  document.querySelectorAll('section[id]').forEach((section) => {
    observer.observe(section);
  });

});

var content = document.getElementById("right");
console.log(content.innerHTML);

const headings = [];

$("h2, h3").each(function() {
 headings.push("<" + this.tagName + ">" + $(this).html() + "</" + this.tagName + ">");
});

last = 0;

for (int i = 0; i < headings.size(); i++) {
  if (last == 0) {
    if (headings[2] == '2') {
      //concatenate h2;
    }
    else {
      //create unordered list
    }
  }
  if (last == )
}
