/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'hangman-letter',
  'Integration: HangmanLetterComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#hangman-letter}}
      //     template content
      //   {{/hangman-letter}}
      // `);

      this.render(hbs`{{hangman-letter}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
