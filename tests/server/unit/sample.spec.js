import { expect } from 'chai';
import Note from './sample';

const myNote = new Note('first note');

describe('Note object', () => {
  it('Expects note to be an object', () => {
    expect(myNote).to.be.an('object');
  });

  it('Expects myNote to be an instance of Note', () => {
    expect(myNote).to.be.an.instanceof(Note);
  });

  it('Expects note to have a valid name', () => {
    expect(myNote.getTitle()).to.equal('first note');
  });
});
