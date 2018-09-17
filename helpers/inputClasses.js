import camelCase from 'camelcase';

export class Input {
  constructor(shortLabel, label, pattern = '') {
    this.id = camelCase(shortLabel);
    this.shortLabel = shortLabel;
    this.label = label;
    this.pattern = pattern;
    this.complete = false;
  }
}

export class NumInput extends Input {
  constructor(text, label, pattern, step = 0, value = 0.00, min = 1, max = null) {
    super(text, label, pattern);
    this.value = value;
    this.type = 'number';
    this.step = step;
    this.min = min;
    this.max = max;
    this.valid = false;
  }
}

export class SelectInput extends Input {
  constructor(text, label, options) {
    super(text, label);
    this.value = options[0].value;
    this.type = 'select';
    this.options = options;
    this.valid = true;
  }
}
