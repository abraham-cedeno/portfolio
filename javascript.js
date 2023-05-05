document.addEventListener("DOMContentLoaded", function() {
    const toc = document.getElementById("tabla-de-contenidos");
    const headings = document.querySelectorAll("h1, h2, h3");
    const list = document.createElement("ul");
  
    headings.forEach(heading => {
      const listItem = document.createElement("li");
      const link = document.createElement("a");
      const id = heading.textContent.replace(/\s+/g, "-").toLowerCase();
  
      heading.setAttribute("id", id);
      link.setAttribute("href", "#" + id);
      link.textContent = heading.textContent;
  
      listItem.appendChild(link);
  
      if (heading.tagName === "H2" || heading.tagName === "H3") {
        const parent = list.querySelector("li:last-child > ul") || document.createElement("ul");
        parent.appendChild(listItem);
  
        if (!parent.parentNode) {
          list.lastChild.appendChild(parent);
        }
      } else {
        list.appendChild(listItem);
      }
    });
  
    toc.appendChild(list);
  });
  