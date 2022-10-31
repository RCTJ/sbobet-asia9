'use babel';

import SbobetAsia9 from '../lib/sbobet-asia9';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('SbobetAsia9', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('sbobet-asia9');
  });

  describe('when the sbobet-asia9:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.sbobet-asia9')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'sbobet-asia9:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.sbobet-asia9')).toExist();

        let sbobetAsia9Element = workspaceElement.querySelector('.sbobet-asia9');
        expect(sbobetAsia9Element).toExist();

        let sbobetAsia9Panel = atom.workspace.panelForItem(sbobetAsia9Element);
        expect(sbobetAsia9Panel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, 'sbobet-asia9:toggle');
        expect(sbobetAsia9Panel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.sbobet-asia9')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, 'sbobet-asia9:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let sbobetAsia9Element = workspaceElement.querySelector('.sbobet-asia9');
        expect(sbobetAsia9Element).toBeVisible();
        atom.commands.dispatch(workspaceElement, 'sbobet-asia9:toggle');
        expect(sbobetAsia9Element).not.toBeVisible();
      });
    });
  });
});
