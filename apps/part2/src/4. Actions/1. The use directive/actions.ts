export const trapFocus = (node: Element) => {
  const previous = document.activeElement as HTMLElement;

  const focusable = (): HTMLElement[] =>
    Array.from(
      node.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    );

  const handleKeydown = (event: Event) => {
    const _event = event as KeyboardEvent;
    if (_event.key !== 'Tab') {
      return;
    }

    const current = document.activeElement;

    const elements = focusable();
    const first = elements.at(0);
    const last = elements.at(-1);

    if (_event.shiftKey && current === first) {
      last?.focus();
      event.preventDefault();
    }

    if (!_event.shiftKey && current === last) {
      first?.focus();
      event.preventDefault();
    }
  };

  focusable()[0]?.focus();

  // TODO finish writing the action
  node.addEventListener('keydown', handleKeydown);

  return {
    destroy: () => {
      node.removeEventListener('keydown', handleKeydown);
      previous?.focus();
    },
  };
};
