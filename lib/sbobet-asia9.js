'use babel';

import SbobetAsia9View from './sbobet-asia9-view';
import { CompositeDisposable } from 'atom';

export default {

  sbobetAsia9View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.sbobetAsia9View = new SbobetAsia9View(state.sbobetAsia9ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.sbobetAsia9View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'sbobet-asia9:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.sbobetAsia9View.destroy();
  },

  serialize() {
    return {
      sbobetAsia9ViewState: this.sbobetAsia9View.serialize()
    };
  },

  toggle() {
    console.log('SbobetAsia9 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
