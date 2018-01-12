import React from 'react';
import SortOptions from '../notebooks/sort_options';
import NoteIndexItem from '../notes/note_index_item';


class TagShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteCount: this.props.noteCount
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ noteCount: newProps.noteCount });
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  render () {
    const { tag } = this.props;
    const { noteCount } = this.props;
    const notes = (this.props.notes[0]) ? this.props.notes : [{id: ''}];
    return(
      <div className={`${this.props.revealShow}`}>

      <div className={`notebook-show tag-show`} >
        <header className='notebook-header tag-header'>
          <h3 className='notebook-title' id='tag-label'>TAG: {tag.label}</h3>
        </header>
        <div className='note-info'>
          <div className='count-options'>
            <p>{`${noteCount} notes`}</p>
            <div className='sort-options' onClick={this.props.updateSortOptions}>
              Options <img src={window.staticImages.downArrow}/>
            <SortOptions reveal={this.props.revealSort}/>
            </div>
          </div>
          <div className='notes-index' id='tag-notes'>
            <ul className='notes-ul notebook-show-notes' >
              {
                notes.map(note => {
                  if(note)
                return <NoteIndexItem
                          key={note.id}
                          note={note} />;
              })}
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default TagShow;
