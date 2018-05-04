/**
 * @class Note
 * @description a simple note class to test linting
 */
class Note {
  /**
   * @constructor
   * @param {String} noteTitle
   */
  constructor(noteTitle) {
    this.title = noteTitle;
  }

  /**
   * method returns the title of the note object
   *
   * @return {String} title
   */
  getTitle() {
    return this.title;
  }
}

export default Note;
