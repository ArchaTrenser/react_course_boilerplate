import React from 'react';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.post ? props.post.description : '',
      title: props.post ? props.post.title : '',
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.title) {
      this.setState(() => ({ error: 'Please provide description and title' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title:this.state.title,
        description: this.state.description,
      });
    }
  };
  render() {
    return (
        <form  className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form_error">{this.state.error}</p>}
          <input
            className="text_input"
            type="text"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <input
            className="text_input"
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <div>
              <button className="button">Save Post</button>
          </div>
        </form>
    )
  }
}
