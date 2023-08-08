import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tn-button',
  styleUrl: 'tn-button.css',
  shadow: true,
})
export class TnButton {
  @Prop() label: string
  @Prop() loading: boolean

  render() {
    return <button>
      {this.loading ? <div class='center-dots'>·</div> : this.label}
    </button>;
  }
}
