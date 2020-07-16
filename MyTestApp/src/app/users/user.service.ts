import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  postsURL = 'https://jsonplaceholder.typicode.com/posts';

  postAddData = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  updatePostData = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  constructor(private httpClient: HttpClient) {}

  getAllPosts() {
    this.httpClient.get(this.postsURL).subscribe(
      (res) => {
        console.log('Get All posts');
        console.log(res);
      },
      (err) => {},
      () => {}
    );
  }

  getPostById(postId: string) {
    const getPostByIdURL = this.postsURL + '/' + postId;

    this.httpClient.get(getPostByIdURL).subscribe(
      (res) => {
        console.log('Get post by ID : ' + postId);
        console.log(res);

        const updateURL = this.postsURL + '/' + postId;
        this.httpClient.put(updateURL, this.updatePostData).subscribe((res) => {
          console.log('Post Updated...');
          console.log(res);
        });
      },
      (err) => {},
      () => {}
    );
  }

  getPostsForUserId(userId: string) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('userId', userId);

    this.httpClient.get(this.postsURL, { params: httpParams }).subscribe(
      (res) => {
        console.log('Get All posts for User ID');
        console.log(res);
      },
      (err) => {},
      () => {}
    );
  }

  getPostCommentsByPostId(postId: string) {
    const getPostCommentsURL = this.postsURL + '/' + postId + '/comments';

    this.httpClient.get(getPostCommentsURL).subscribe(
      (res) => {
        console.log('Get Post comments for Post ID');
        console.log(res);
      },
      (err) => {},
      () => {}
    );
  }

  AddPost() {
    this.httpClient.post(this.postsURL, this.postAddData).subscribe((res) => {
      console.log('Post added');
      console.log(res);
    });
  }

  updatePost(postId: string) {
    this.getPostById(postId);
  }

  deletePost(postId: string) {
    const deletePostURL = this.postsURL + '/' + postId;

    this.httpClient.delete(deletePostURL).subscribe((res) => console.log(res));
  }
}
