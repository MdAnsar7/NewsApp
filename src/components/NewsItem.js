import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
            {source} </span>
          <img
            src={ imageUrl === null? "https://i.ytimg.com/vi/jSG4_swOWP0/hqdefault.jpg": imageUrl }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
            <div className="card-footer my-2">
              <small className="text-muted ">
                By {!author ? "Md Ansar" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
