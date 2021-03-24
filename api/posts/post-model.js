const db = require('../../data/db-config.js')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

function get() {
  //select * "everything" from
  return db("posts")
  // return db("posts").select("contents") selects the contents column
}

function getById(id) {
  // return Promise.resolve('getById wired')
  return db("posts").where("id", id).first()
}

function create(post) {
  // return Promise.resolve('create wired')
  return db("posts").insert(post)
    .then(([id])=>{
      return db("posts").where("id",id).first()
    })
}

function update(id,post) {
  // return Promise.resolve('update wired')
  const postId = id
  return db("posts").where("id",id).update(post)
  .then(() =>{
    return db("posts").where("id",postId).first()
  })
}

function remove(id) {
  // return Promise.resolve('delete wired')
    return db("posts").where("id",id).del(id)
    .then(() =>{
      return db("posts")
    })
}
