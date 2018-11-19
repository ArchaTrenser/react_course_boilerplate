import React from 'react';
import { connect } from 'react-redux';
import { setTitleFilter, setDescriptionFilter, sortByTitle, sortByDescription } from '../actions/filters';

export class PostListFilters extends React.Component {
  onTitleChange = (e) => {
    this.props.setTitleFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === 'title') {
      this.props.sortByTitle();
    } else if (e.target.value === 'description') {
      this.props.sortByDescription();
    }
  };
  onDescriptionChange = (e) => {
    this.props.setDescriptionFilter(e.target.value);
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
                className="text_input"
                placeholder='Search Post'
                type="text"
                value={this.props.filters.text}
                onChange={this.onTitleChange || this.onDescriptionChange}
            />
          </div>
          <div className="input-group__item">
            <select
                className="select_input"
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}
            >
               <option value="date">by Title</option>
              <option value="amount">By Description</option>
            </select>
          </div>
      </div>
    </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTitleFilter: (text) => dispatch(setTitleFilter(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters);
