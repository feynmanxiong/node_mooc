const getList = (author, keyword) => {
    //先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createdTime: 1546610491112,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createdTime: 1546615491112,
            author: 'lisi'
        },
    ]
}

const getDetail = (id) => {
    //先返回假数据
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createdTime: 1546610491112,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    //blogData 是一个博客对象，包含title content 属性
    console.log('newBlog blogdata...', blogData)
    return {
        id: 3 //表示新建博客，插入到数据表里面的ID
    }
}

const updataBlog = (id, blogData={}) => {
    //id 就是要更新博客的 id
    //blogData 是一个博客对象，包含title content 属性
    console.log('updataBlog: ...', id, blogData)
    
    return true
}

const delBlog = (id) => {
    //id 就是要删除博客的id
    return true
}


module.exports = {
    getList,
    getDetail,
    newBlog,
    updataBlog,
    delBlog
}