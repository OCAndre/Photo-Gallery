import React from 'react'

function Showpage() {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )

  }


  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className=" border col-sm-4">
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value="Delete Comment" />
          </form>
        </div>
      )
    })
  }

  return (
    <Def>
      <main>
        <br />
        <div className='row'>
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            {rating}
            <br />
            <h2>Description</h2>
            <div className="row">
              <div className="col-sm-6"><a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                Edit
              </a></div>
              <div className="col-sm-6">
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
              </div></div>
          </div></div>
        <hr />
        <h2>Comments</h2>
        <div className='row'>
          {comments}
        </div>
        <hr />
        <h2>Got Your Own Rant or Rave?</h2>
        <form action={`/places/${data.place.id}/comment`} method="POST">
          <label htmlFor="content">Content</label>
          <textarea className="form-control" id="content" name="content" />
          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="author">Author</label>
              <input className="form-control" id="author" name="author" />
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="starts">Star Rating</label>
              <input type="range" step="0.5" min="1" max="5" className="form-control" id="stars" name="stars" />
            </div>
          </div>
          <br />
          <input type="submit" className="btn btn-primary" value="Add Comment" />
        </form>
      </main>
    </Def>
  )
}

export default Showpage

