const _ = require('lodash');

const originalDb = require('../db.json');
const categoryPostsDb = originalDb.models.PostCategory;
const categoryDb = originalDb.models.Category;
const postTagDb = originalDb.models.PostTag;
const tagDb = originalDb.models.Tag;
const rootUrl = 'https://gregjs.com';

const archiveResponse = {
  data: originalDb.models.Post.filter(post => {
    return post.published;
  }).map(post => {
    return {
      _id: post._id,
      title: post.title,
      date: post.date,
      url: `${rootUrl}/${post.category}/${post.date.slice(0, 4)}/${post.slug}`,
      category: getCategoryForPost(post._id),
      tags: getTagsForPost(post._id)
    };
  }).sort((a, b) => {
    return (new Date(b.date)).getTime() - (new Date(a.date)).getTime();
  })
};

function getCategoryForPost(post_id) {
  const categoryId = _.find(categoryPostsDb, { post_id }).category_id;
  return _.find(categoryDb, { _id: categoryId}).name;
}

function getTagsForPost(post_id) {
  const tagIds = _.filter(postTagDb, { post_id }).map(tagObject => tagObject.tag_id);
  return tagIds.map(tagId => _.find(tagDb, { _id: tagId }).name);
}

module.exports = archiveResponse;
