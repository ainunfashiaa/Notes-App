class NoteItem extends HTMLElement {
  constructor() {
      super();
  }

  connectedCallback() {
      const id = this.getAttribute('id') || '';
      const title = this.getAttribute('title') || '';
      const body = this.getAttribute('body') || '';
      const date = this.getAttribute('date') || '';
      
      this.innerHTML = `
          <div class="note">
              <h3>${title}</h3>
              <p>${body}</p>
              <p class="date">${new Date(date).toLocaleString()}</p>
              <div class="note-actions">
                  <button class="edit-btn" data-id="${id}">
                      <i class="ph ph-pencil-simple"></i>
                  </button>
                  <button class="delete-btn" data-id="${id}">
                      <i class="ph ph-trash"></i>
                  </button>
              </div>
          </div>
      `;
  }
}

customElements.define('note-item', NoteItem);

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

customElements.define('note-form', NoteForm);

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
                      <li class="active" onclick="filterNotes('all', this)">All</li>
                      <li onclick="filterNotes('archived', this)">Archived</li>
                      <li onclick="filterNotes('week', this)">This Week</li>
                      <li onclick="filterNotes('month', this)">This Month</li>
                  </ul>
              </nav>
          </div>
      `;
  }
}

customElements.define('notes-filter', NotesFilter);