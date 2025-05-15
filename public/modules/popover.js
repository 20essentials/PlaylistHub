export class CustomPopover {
  popover = document.querySelector('.popoverCustom');
  container = document.querySelector('.container-of-popovers');

  clonePopover() {
    const clone = this.popover.cloneNode(true);
    this.container.appendChild(clone);
    return clone;
  }

  setColor(color, element = this.popover) {
    element.style.setProperty('--bg-color', color);
  }

  setMessage(message, element = this.popover) {
    element.innerHTML = message;
  }

  showPopoper(element = this.popover) {
    element?.classList.add('show');

    setTimeout(() => {
      element?.classList.remove('show');
      element?.remove();
    }, 3000);
  }

  showPopoverDefault(element = this.popover) {
    element?.classList.add('show');
  }

  showMessage(type, { message }) {
    const colors = {
      success: 'rgb(3, 187, 3)',
      error: 'rgb(206, 1, 1)',
      advice: 'rgb(200, 200, 1)',
      default: 'rgb(100, 100, 100)'
    };

    const pop = this.clonePopover();
    const color = colors[type] || colors.default;

    this.setColor(color, pop);
    this.setMessage(message, pop);
    if (!type) {
      this.showPopoverDefault(pop);
      return pop;
    }
    this.showPopoper(pop);
  }

  onRemove(element = this.popover) {
    element?.classList.remove('show');
    element?.remove();
  }

  onSuccess(params) {
    this.showMessage('success', params);
  }

  onError(params) {
    this.showMessage('error', params);
  }

  onAdvice(params) {
    this.showMessage('advice', params);
  }
}
