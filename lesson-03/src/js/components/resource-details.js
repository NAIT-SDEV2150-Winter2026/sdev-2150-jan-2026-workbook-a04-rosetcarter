const template = document.createElement('template');
// TODO: Update the template to support dynamic resource details
template.innerHTML = `
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
  <section class="h-100">
    <div class="card h-100">
      <div class="card-header">
        <strong>Details</strong>
      </div>

      <div class="card-body">
        <!--- Resource details go here ---!>
      </div>

      <div class="card-footer d-flex gap-2">
        <button class="btn btn-outline-secondary" type="button">Copy email</button>
        <button class="btn btn-outline-primary" type="button">Open map</button>
      </div>
    </div>
  </section>`;

class ResourceDetails extends HTMLElement {
  // TODO: Create private field for resource data
  #resource = null;
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  // TODO: Implement setter for resource data, remember to render
  set resource(rData) {
    this.#resource = rData;
    this.render();
  }

  get resource() {
    return this.#resource;
  }

  render() {
    // TODO: Render resource details if available
    const element = template.content.cloneNode(true);
    if (this.resource) {
      const htmlCode = ` <h2 class="h5">${this.#resource.title}</h2>
          <p class="text-body-secondary mb-2">${this.#resource.summary}</p>

          <dl class="row mb-0">
            <dt class="col-4">Category</dt>
            <dd class="col-8">${this.#resource.category}</dd>

            <dt class="col-4">Location</dt>
            <dd class="col-8">${this.#resource.location}</dd>

            <dt class="col-4">Hours</dt>
            <dd class="col-8">${this.#resource.hours}</dd>

            <dt class="col-4">Contact</dt>
            <dd class="col-8">${this.#resource.contact}</dd>
          </dl>`;
      const detailCard = element.querySelector('.card-body');
      detailCard.innerHTML = htmlCode;
    }
    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(element);
  }
}

customElements.define('resource-details', ResourceDetails);
