import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';

@Component({
  selector: 'ht-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private userService: UserService) {}

  posts: any[];

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

  ngOnInit(): void {
    this.getAllPosts();
    // this.getPostsForUserId('1');
    // this.getPostCommentsByPostId('1');
    // this.AddPost();
    // this.updatePost('1');
    // this.deletePost('1');
  }

  getAllPosts() {
    this.userService.getAllPosts();
  }

  getPostById(postId: string) {
    this.userService.getPostById(postId);
  }

  getPostsForUserId(userId: string) {
    this.userService.getPostsForUserId(userId);
  }

  getPostCommentsByPostId(postId: string) {
    this.userService.getPostCommentsByPostId(postId);
  }

  AddPost() {
    this.userService.AddPost();
  }

  updatePost(postId: string) {
    this.getPostById(postId);
  }

  deletePost(postId: string) {
    this.userService.deletePost(postId);
  }
}
