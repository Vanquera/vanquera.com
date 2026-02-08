/*
  Define a new custom HTML element called <character-aside>.
  By convention, custom elements MUST contain a hyphen.
*/
class CharacterAside extends HTMLElement {

  /*
    This runs when the element is added to the page.
    Think of it like "on spawn" or "on load" for this tag.
  */
  connectedCallback() {

    /*
      Read attributes from the HTML.
      If an attribute is missing, default to an empty string.
    */
    const name = this.getAttribute("name") || "Unknown";
    const aliases = this.getAttribute("aliases") || "";
    const relationships = this.getAttribute("relationships") || "";

    /*
      Convert comma-separated strings into arrays.
      Trim whitespace so " A, B " doesn't look sloppy.
    */
    const aliasList = aliases
      ? aliases.split("|").map(a => a.trim())
      : [];

    const relationshipList = relationships
      ? relationships.split("|").map(r => r.trim())
      : [];

    /*
      Build the inner HTML for the component.
      This is where structure and presentation live.
    */
    this.innerHTML = `
      <aside class="character-card">
        <h2 class="name">${name}</h2>

        ${aliasList.length ? `
          <section class="aliases">
            <h3>Aliases</h3>
            <ul>
              ${aliasList.map(a => `<li>${a}</li>`).join("")}
            </ul>
          </section>
        ` : ""}

        ${relationshipList.length ? `
          <section class="relationships">
            <h3>Relationships</h3>
            <ul>
              ${relationshipList.map(r => `<li>${r}</li>`).join("")}
            </ul>
          </section>
        ` : ""}
      </aside>
    `;
  }
}

/*
  Register the element with the browser.
  After this line runs, <character-aside> becomes valid HTML.
*/
customElements.define("character-aside", CharacterAside);

const extraContent = this.innerHTML;
