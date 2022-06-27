import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faker } from '@faker-js/faker';
import { TableButtonAction } from '../../../shared/interfaces/grid/tableButtonAction';
import { Post } from '../../models/Post';
import { PostStateService } from '../../services/state/post-state.service';

@Component({
  selector: 'app-post-entry',
  templateUrl: './post-entry.component.html',
  styleUrls: ['./post-entry.component.scss'],
})
export class PostEntryComponent implements OnInit {
  postForm: UntypedFormGroup = this.fb.group({
    userId: 0,
    id: 0,
    title: ['', Validators.required],
    body: ['', Validators.required],
  });
  post!: Post;

  constructor(
    private _mdr: MatDialogRef<PostEntryComponent>,
    private fb: UntypedFormBuilder,
    private postService: PostStateService,
    @Inject(MAT_DIALOG_DATA) data: TableButtonAction
  ) {
    this.updatePostForm(data.value);
  }

  ngOnInit(): void {}

  updatePostForm(post: Post) {
    if (post)
      this.postForm.patchValue({
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
      });
  }

  onSubmit(form: UntypedFormGroup) {
    if (form.invalid) return;

    const newPost: Post = {
      ...this.post,
      ...form.value,
    };

    if (newPost.id) {
      this.postService.update(newPost);
    } else {
      newPost.id = faker.datatype.number();
      newPost.userId = faker.datatype.number();
      this.postService.create(newPost);
    }

    this.CloseDialog();
  }

  CloseDialog() {
    this._mdr.close(false);
  }
}
