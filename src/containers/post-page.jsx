import React from 'react'
import HeaderPostPage from '../components/post-page-header'
import CategoryForPost from '../components/chose-category-for-post'



class PostPage extends React.Component{
    render(){
        return(
          <div>
              <HeaderPostPage />
              <CategoryForPost />
          </div>
        )
    }

    
}

export default PostPage