import React from 'react';
import ReactQuill from 'react-quill';


class QuillNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.state.saveAction = (this.props.note.id) ?
        this.props.updateNote : this.props.createNote;

    this.update = this.update.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSaveAction = this. handleSaveAction.bind(this);
  }


  componentWillReceiveProps(newProps) {
    console.log(newProps);
    this.setState({
      id: newProps.note.id,
      title: newProps.note.title,
      content: newProps.note.content,
      notebook_id: newProps.note.notebook_id
    });
    this.setState((newProps.note.id) ?
        { saveAction: newProps.updateNote } :
        { saveAction: newProps.createNote });
  }

  componentDidMount() {
    console.log(this.state);
    if (this.props.note.id) {
      this.props.fetchNote(this.props.note.id);
    }
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleEditorChange(content, delta, source, editor) {
    this.setState({ content: content });
  }

  handleSaveAction() {
    const note = {
      id: this.state.id,
      title: this.state.title,
      content: this.state.content,
      notebook_id: this.state.notebook_id,
    };
    this.state.saveAction(note);
  }

  render() {
    return (

    <main className='note-new-edit'>
      <form className='note-show'>
        <div className='title-save'>
          <input className='note-title-edit'
            type='text'
            value={this.state.title}
            onChange={this.update('title')}
            placeholder="Title"/>
          <button className="notebook-button save-button"
            onClick={(e) => {
              e.preventDefault();
              this.handleSaveAction();
            }}>
            Save
          </button>
        </div>
      </form>
        <ReactQuill
          value={this.state.content}
          ref={ editor => { this.editor = editor; }}
          onChange={this.handleEditorChange}
          />


    </main>

      );
  }
}


export default QuillNote;
