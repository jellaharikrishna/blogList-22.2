import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blogitem-card">
      <div className="title-date-card">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}
export default BlogItem
