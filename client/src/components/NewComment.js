function NewComment() {
  return (
    <>
<form>
<div class="input-group">
  <div className="input-group-prepend">
    <span class="input-group-text" id="">Enter your first and last name</span>
  </div>
  <input type="text" class="form-control"/>
  <input type="text" class="form-control"/>
</div>
  
<div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">Enter your comment</span>
  </div>
  <textarea type="text" class="form-control" aria-label="With textarea"></textarea>
</div>
<button type="submit" className="btn btn-outline-lightgreen px-4 btn-sm px-5 py-2">Submit</button>
</form>
    </>
  );
}
export default NewComment;
