class NoteItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const id = this.getAttribute("id") || "";
    const title = this.getAttribute("title") || "";
    const body = this.getAttribute("body") || "";
    const date = this.getAttribute("date") || "";
    const archived = this.getAttribute("archived") === "true";

    this.innerHTML = `
            <div class="note">
                <h3>${this.escapeHtml(title)}</h3>
                <p>${this.escapeHtml(body)}</p>
                <p class="date">${new Date(date).toLocaleString()}</p>
                <div class="note-actions">
                    <button class="edit-btn" data-id="${id}">
                        <i class="ph ph-pencil-simple"></i> Edit
                    </button>
                    <button class="delete-btn" data-id="${id}">
                        <i class="ph ph-trash"></i> Delete
                    </button>
                    <button class="archive-btn" data-id="${id}" data-archived="${archived}">
                        <i class="ph ${archived ? "ph-arrow-arc-left" : "ph-archive"}"></i>
                        ${archived ? " Unarchive" : " Archive"}
                    </button>
                </div>
            </div>
        `;

    this.querySelector(".archive-btn").addEventListener("click", async (e) => {
      e.stopPropagation();
      const button = e.currentTarget;
      const id = button.getAttribute("data-id");
      const archived = button.getAttribute("data-archived") === "true";

      const event = new CustomEvent("archiveToggled", {
        detail: {
          id,
          archived: !archived,
        },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
    });
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

customElements.define("note-item", NoteItem);

class NoteForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div class="note-container">
                <h2>New Note</h2>
                <input type="text" id="noteTitle" placeholder="Write title here ...">
                <small id="titleError" class="error-message">Title cannot be empty</small>
                
                <textarea id="noteBody" placeholder="Write your note here ..."></textarea>
                <small id="bodyError" class="error-message">Note content cannot be empty</small>
                <div id="bodyCounter" class="char-counter">0/1000</div>
                
                <button id="addNoteBtn" disabled>Add Note</button>
            </div>
        `;
  }
}

customElements.define("note-form", NoteForm);

class NotesFilter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <div class="header-left">
                <h2>My Notes</h2>
                <nav>
                    <ul>
                        <li class="active" data-filter="all">All</li>
                        <li data-filter="archived">Archived</li>
                        <li data-filter="week">This Week</li>
                        <li data-filter="month">This Month</li>
                    </ul>
                </nav>
            </div>
        `;

    this.querySelectorAll("li").forEach((li) => {
      li.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = li.getAttribute("data-filter");

        // Update active state
        this.querySelectorAll("li").forEach((item) => {
          item.classList.remove("active");
        });
        li.classList.add("active");

        // Dispatch event
        this.dispatchEvent(
          new CustomEvent("filterChanged", {
            detail: { filter },
            bubbles: true,
            composed: true,
          }),
        );
      });
    });
  }
}

customElements.define("notes-filter", NotesFilter);
