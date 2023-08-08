import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'tn-text-field',
  styleUrl: 'tn-text-field.css',
  shadow: true,
})
export class TnTextfield {
  @Prop() placeholder: string;
  @Prop() value: string;

  @Event() change: EventEmitter<string>;

  private onInputChangeValue(event: Event) {
    this.change.emit((event.target as HTMLInputElement).value);
  }

  render() {
    return (
      <input
        placeholder={this.placeholder}
        value={this.value}
        onInput={this.onInputChangeValue.bind(this)}
      />
    );
  }
}
